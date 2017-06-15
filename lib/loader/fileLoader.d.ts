import ResourceLoader from './resourceLoader';
import { IFileResource, IFileResourceLoader } from '../interface';
export default class FileLoader extends ResourceLoader<IFileResource> implements IFileResourceLoader {
    load(): Promise<IFileResource>;
    private emitLoad(httpRequest);
}
