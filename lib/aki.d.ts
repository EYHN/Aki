import { ProgressEmitter } from './util/ProgressEmitter';
import { IBlobResource, IFileResource, IImageResource, IResource, IResourceLoader, ITextResource, IProgressCallBack, IResourceType } from './interface';
export default class Aki extends ProgressEmitter {
    loaders: Array<IResourceLoader<IResource>>;
    constructor(resList?: IResource[]);
    load(name: string): this;
    loadAll(): this;
    get(name: string): IResource;
    getAll(): IResource[];
    pushLoader(res: IResource): this;
    protected static fetchOne<T extends IResource>(type: IResourceType, src: string, onProgress?: IProgressCallBack): Promise<T>;
    static image(src: string, onProgress?: IProgressCallBack): Promise<IImageResource>;
    static file(src: string, onProgress?: IProgressCallBack): Promise<IFileResource>;
    static text(src: string, onProgress?: IProgressCallBack): Promise<ITextResource>;
    static blob(src: string, onProgress?: IProgressCallBack): Promise<IBlobResource>;
    static video(src: string, onProgress?: IProgressCallBack): Promise<IBlobResource>;
    private createLoader(res);
    private updateProgress();
}
