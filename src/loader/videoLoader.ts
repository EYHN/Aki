import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IVideoResource, IVideoResourceLoader } from '../interface';

export default class VideoLoader extends ResourceLoader<IVideoResource> implements IVideoResourceLoader {
  public load() {
    return this.ajaxLoad('blob').then(httpRequest => this.emitLoad(httpRequest));
  }
  private emitLoad(httpRequest: XMLHttpRequest) {
    const resUrl = window.URL.createObjectURL(httpRequest.response);
    this.resource = {
      ...this.resource,
      res: resUrl,
      get element() {
        const videoElecment = document.createElement('video');
        videoElecment.src = resUrl;
        return videoElecment;
      }
    };
    if (this.resource.onLoad) this.resource.onLoad(this.resource);
    return this.resource;
  }
}
