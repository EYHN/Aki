import { ProgressEmitter } from '../util/ProgressEmitter';
import { IResource, IResourceLoader, CancelablePromise } from '../interface';
export default abstract class ResourceLoader<T extends IResource> extends ProgressEmitter implements IResourceLoader<T> {
    resource: T;
    constructor(resource: T);
    abstract load(): Promise<T>;
    abstract cancel(): void;
    protected ajaxLoad(responseType: XMLHttpRequestResponseType): CancelablePromise<XMLHttpRequest>;
}
