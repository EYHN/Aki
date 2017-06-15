import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IResource, IResourceLoader } from '../interface';
export default abstract class ResourceLoader<T extends IResource>
  extends ProgressEmitter implements IResourceLoader<T> {
  public resource: T;
  constructor(resource: T) {
    super();
    this.resource = resource;
  }
  public abstract load(): Promise<T>;
  protected ajaxLoad(responseType: XMLHttpRequestResponseType) {
    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const httpRequest = Ajax(this.resource.src);
      httpRequest.responseType = responseType;
      if (typeof this.resource.timeout !== 'undefined') httpRequest.timeout = this.resource.timeout;
      httpRequest.addEventListener('timeout', this.resource.onTimeout);
      httpRequest.addEventListener('progress', (pe) => {
        if (pe.lengthComputable) {
          this.percent = pe.loaded / pe.total;
          this.emitProgress();
        }
      });
      httpRequest.addEventListener('loadend', (pe) => {
        this.percent = 1;
        this.emitProgress();
      });
      httpRequest.addEventListener('error', this.resource.onError);
      httpRequest.addEventListener('readystatechange', (e) => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          resolve(httpRequest);
        }
      });
      httpRequest.send();
    });
  }
}
