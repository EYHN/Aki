import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { ITextResource, ITextResourceLoader, CancelablePromise } from '../interface';

export default class TextLoader extends ResourceLoader<ITextResource> implements ITextResourceLoader {
  private loadPromise: CancelablePromise<XMLHttpRequest>;
  public load() {
    this.loadPromise = this.ajaxLoad('text');
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
      res
    };
    if (this.resource.onLoad) this.resource.onLoad(this.resource);
    return this.resource;
  }
}
