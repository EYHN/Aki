import ResourceLoader from './resourceLoader';
import { IFileResource, IFileResourceLoader } from '../interface';

export default class FileLoader extends ResourceLoader<IFileResource> implements IFileResourceLoader {
  public load() {
    return this.ajaxLoad('arraybuffer').then(httpRequest => this.emitLoad(httpRequest));
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
