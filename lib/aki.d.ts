import { ProgressEmitter } from './util/ProgressEmitter';
import { IBlobResource, IFileResource, IImageResource, IResource, IResourceLoader, ITextResource, IVideoResource } from './interface';
export default class Aki extends ProgressEmitter {
    loaders: Array<IResourceLoader<IResource>>;
    constructor(resList: IResource[]);
    load(name: string): this;
    loadAll(): this;
    get(name: string): IResource;
    getAll(): IResource[];
    image(src: string, size?: number): Promise<IImageResource>;
    file(src: string, size?: number): Promise<IFileResource>;
    text(src: string, size?: number): Promise<ITextResource>;
    blob(src: string, size?: number): Promise<IBlobResource>;
    video(src: string, size?: number): Promise<IVideoResource>;
    private createLoader(res);
    private updateProgress();
}
