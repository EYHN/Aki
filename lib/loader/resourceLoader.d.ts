import { ProgressEmitter } from '../util/ProgressEmitter';
import { IResource, IResourceLoader } from '../interface';
export default abstract class ResourceLoader<T extends IResource> extends ProgressEmitter implements IResourceLoader<T> {
    resource: T;
    constructor(resource: T);
    abstract load(): Promise<T>;
    protected ajaxLoad(responseType: XMLHttpRequestResponseType): Promise<XMLHttpRequest>;
}
