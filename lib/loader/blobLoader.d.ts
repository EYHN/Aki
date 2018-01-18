import ResourceLoader from './resourceLoader';
import { IBlobResource, IBlobResourceLoader } from '../interface';
export default class BlobLoader extends ResourceLoader<IBlobResource> implements IBlobResourceLoader {
    private loadPromise;
    load(): Promise<IBlobResource>;
    cancel(): void;
    private emitLoad(httpRequest);
}
