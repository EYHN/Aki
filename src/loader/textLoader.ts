import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { ITextResource, ITextResourceLoader } from '../interface';

export default class TextLoader extends ResourceLoader<ITextResource> implements ITextResourceLoader {
  public load() {
    return this.ajaxLoad('text').then(httpRequest => this.emitLoad(httpRequest));
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
