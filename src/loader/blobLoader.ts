import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IBlobResource, IBlobResourceLoader, CancelablePromise } from '../interface';

export default class BlobLoader extends ResourceLoader<IBlobResource> implements IBlobResourceLoader {
  private loadPromise: CancelablePromise<XMLHttpRequest>;
  public load() {
    this.loadPromise = this.ajaxLoad('blob');
    return this.loadPromise.then(httpRequest => this.emitLoad(httpRequest));
  }
  public cancel() {
    if (this.loadPromise) {
      this.loadPromise.cancel();
    }
  }
  private emitLoad(httpRequest: XMLHttpRequest) {
    const resUrl = window.URL.createObjectURL(httpRequest.response);
    this.resource = {
      ...this.resource,
      res: resUrl
    };
    if (this.resource.onLoad) this.resource.onLoad(this.resource);
    return this.resource;
  }
}
