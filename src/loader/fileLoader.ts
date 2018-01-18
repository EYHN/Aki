import ResourceLoader from './resourceLoader';
import { IFileResource, IFileResourceLoader, CancelablePromise } from '../interface';

export default class FileLoader extends ResourceLoader<IFileResource> implements IFileResourceLoader {
  private loadPromise: CancelablePromise<XMLHttpRequest>;
  public load() {
    this.loadPromise = this.ajaxLoad('arraybuffer');
    return this.loadPromise.then(httpRequest => this.emitLoad(httpRequest));
  }
  public cancel() {
    if (this.loadPromise) {
      this.loadPromise.cancel();
    }
  }
  private emitLoad(httpRequest: XMLHttpRequest) {
    const res = httpRequest.response;
    this.resource = {
      ...this.resource,
      res,
      contentType: httpRequest.getResponseHeader('Content-Type')
    };
    if (this.resource.onLoad) this.resource.onLoad(this.resource);
    return this.resource;
  }
}
