import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IImageResource, IImageResourceLoader } from '../interface';

export default class ImageLoader extends ResourceLoader<IImageResource> implements IImageResourceLoader {
  public load() {
    return this.ajaxLoad('blob').then(httpRequest => this.emitLoad(httpRequest));
  }
  private emitLoad(httpRequest: XMLHttpRequest) {
    const resUrl = window.URL.createObjectURL(httpRequest.response);
    this.resource = {
      ...this.resource,
      res: resUrl,
      get element() {
        const imgElecment = new Image();
        imgElecment.src = resUrl;
        return imgElecment;
      }
    };
    if (this.resource.onLoad) this.resource.onLoad(this.resource);
    return this.resource;
  }
}
