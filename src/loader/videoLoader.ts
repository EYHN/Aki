import ResourceLoader from './resourceLoader';
import { ProgressEmitter } from '../util/ProgressEmitter';
import Ajax from '../util/ajax';
import { IVideoResource, IVideoResourceLoader, CancelablePromise } from '../interface';

export default class VideoLoader extends ResourceLoader<IVideoResource> implements IVideoResourceLoader {
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
