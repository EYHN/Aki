import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IResource, IResourceLoader, CancelablePromise } from '../interface';
export default abstract class ResourceLoader<T extends IResource>
  extends ProgressEmitter implements IResourceLoader<T> {
  public resource: T;
  constructor(resource: T) {
    super();
    this.resource = resource;
  }
  public abstract load(): Promise<T>;
  public abstract cancel(): void;
  protected ajaxLoad(responseType: XMLHttpRequestResponseType) {
    const httpRequest = new XMLHttpRequest();
    let aborted = false;
    const promise = new Promise<XMLHttpRequest>((resolve, reject) => {
      httpRequest.open('get', this.resource.src, true);
      httpRequest.responseType = responseType;
      if (typeof this.resource.timeout !== 'undefined') httpRequest.timeout = this.resource.timeout;
      httpRequest.ontimeout = this.resource.onTimeout;
      httpRequest.onprogress = (pe) => {
        if (pe.lengthComputable) {
          this.percent = pe.loaded / pe.total;
          this.emitProgress();
        }
      };
      httpRequest.onreadystatechange = (pe) => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.response &&
            ((httpRequest.status >= 200 && httpRequest.status < 300) ||
            httpRequest.status === 304 ||
            httpRequest.status === 0)) {
            this.percent = 1;
            this.emitProgress();
            resolve(httpRequest);
            return;
          }
          if (httpRequest.status === 0 && this.resource.retry !== false) {
            setTimeout(() => {
              httpRequest.open('get', this.resource.src, true);
              httpRequest.send();
            }, 1000);
            return;
          } else {
            reject(httpRequest);
          }
        }
      };
      httpRequest.send();
    }) as CancelablePromise<XMLHttpRequest>;
    promise.cancel = () => {
      httpRequest.abort();
      httpRequest.onreadystatechange = null;
      httpRequest.onprogress = null;
      httpRequest.ontimeout = null;
      aborted = true;
    };
    return promise;
  }
}
