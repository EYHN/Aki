import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IBlobResource, IBlobResourceLoader } from '../interface';

export default class BlobLoader extends ResourceLoader<IBlobResource> implements IBlobResourceLoader {
  public load() {
    return this.ajaxLoad('blob').then(httpRequest => this.emitLoad(httpRequest));
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
