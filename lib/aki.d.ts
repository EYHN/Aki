import { ProgressEmitter } from './util/ProgressEmitter';
import { IBlobResource, IFileResource, IImageResource, IResource, IResourceLoader, ITextResource, IProgressCallBack, IResourceType, CancelablePromise } from './interface';
export default class Aki extends ProgressEmitter {
    loaders: Array<IResourceLoader<IResource>>;
    constructor(resList?: IResource[]);
    load(name: string): this;
    loadAll(): this;
    cancel(name: string): this;
    cancelAll(): this;
    get(name: string): IResource;
    getAll(): IResource[];
    pushLoader(res: IResource): this;
    protected static fetchOne<T extends IResource>(type: IResourceType, src: string, onProgress?: IProgressCallBack): CancelablePromise<T>;
    static image(src: string, onProgress?: IProgressCallBack): CancelablePromise<IImageResource>;
    static file(src: string, onProgress?: IProgressCallBack): CancelablePromise<IFileResource>;
    static text(src: string, onProgress?: IProgressCallBack): CancelablePromise<ITextResource>;
    static blob(src: string, onProgress?: IProgressCallBack): CancelablePromise<IBlobResource>;
    static video(src: string, onProgress?: IProgressCallBack): CancelablePromise<IBlobResource>;
    private createLoader(res);
    private updateProgress();
}
