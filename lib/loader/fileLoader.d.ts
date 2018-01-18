import ResourceLoader from './resourceLoader';
import { IFileResource, IFileResourceLoader } from '../interface';
export default class FileLoader extends ResourceLoader<IFileResource> implements IFileResourceLoader {
    private loadPromise;
    load(): Promise<IFileResource>;
    cancel(): void;
    private emitLoad(httpRequest);
}
