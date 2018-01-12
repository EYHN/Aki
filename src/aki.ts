import VideoLoader from './loader/videoLoader';
import BlobLoader from './loader/blobLoader';
import FileLoader from './loader/fileLoader';
import TextLoader from './loader/textLoader';
import sum from './util/sum';
import { ProgressEmitter } from './util/ProgressEmitter';
import ImageLoader from './loader/imageLoader';
import {
  IBlobResource,
  IFileResource,
  IImageResource,
  IResource,
  IResourceLoader,
  ITextResource,
  IVideoResource,
  IProgressCallBack,
  IResourceType
} from './interface';

export default class Aki extends ProgressEmitter {
  public loaders: Array<IResourceLoader<IResource>>;
  constructor(resList: IResource[] = []) {
    super();
    this.loaders = resList.map(res => this.createLoader(res));
  }
  public load(name: string) {
    const loader = this.loaders.find(res => res.resource.name === name);
    loader.load();
    return this;
  }

  public loadAll() {
    this.loaders.forEach(loader => loader.load());
    return this;
  }

  public get(name: string) {
    return this.loaders.find(loader => loader.resource.name === name).resource;
  }

  public getAll() {
    return this.loaders.map(loader => loader.resource);
  }

  public pushLoader(res: IResource) {
    this.loaders.push(this.createLoader(res));
    return this;
  }

  protected static fetchOne<T extends IResource>(type: IResourceType, src: string, onProgress?: IProgressCallBack) {
    return new Promise<T>((resolve, reject) => {
      const a = new Aki([{
        src,
        type,
        onLoad: (r) => resolve(r as T),
        onError: (e) => reject(e)
      }]);
      a.onProgress(onProgress);
      a.loadAll();
    });
  }

  public static image(src: string, onProgress?: IProgressCallBack) {
    return Aki.fetchOne<IImageResource>('image', src, onProgress);
  }

  public static file(src: string, onProgress?: IProgressCallBack) {
    return Aki.fetchOne<IFileResource>('file', src, onProgress);
  }

  public static text(src: string, onProgress?: IProgressCallBack) {
    return Aki.fetchOne<ITextResource>('text', src, onProgress);
  }

  public static blob(src: string, onProgress?: IProgressCallBack) {
    return Aki.fetchOne<IBlobResource>('blob', src, onProgress);
  }

  public static video(src: string, onProgress?: IProgressCallBack) {
    return Aki.fetchOne<IBlobResource>('video', src, onProgress);
  }

  private createLoader(res: IResource) {
    if (!res) return undefined;
    let loader;
    switch (res.type) {
      case 'image':
        loader = new ImageLoader(res as IImageResource);
        break;
      case 'text':
        loader = new TextLoader(res as ITextResource);
        break;
      case 'file':
        loader = new FileLoader(res as IFileResource);
        break;
      case 'blob':
        loader = new BlobLoader(res as IBlobResource);
        break;
      case 'video':
        loader = new VideoLoader(res as IVideoResource);
        break;
      default:
        loader = undefined;
        break;
    }
    if (loader) loader.onProgress(() => this.updateProgress());
    return loader;
  }

  private updateProgress() {
    const sized = this.loaders.filter(loader => typeof loader.resource.size !== 'undefined');

    const sizedAverage =
      sum(...sized.map(loader => {
        return loader.resource.size;
      })) / sized.length ||
      100;

    const sizes = this.loaders.map(loader => {
      return loader.resource.size || sizedAverage;
    });

    const TotalSize = sum(...sizes);
    const percent = sum(...this.loaders.map((loader, index) => {
      const size = sizes[index];
      return loader.percent * size / TotalSize;
    }));
    this.emitProgress(percent);
  }
}

if (window) {
  (window as any).Aki = Aki;
}
