import ResourceLoader from './resourceLoader';
import { IBlobResource, IBlobResourceLoader } from '../interface';
export default class BlobLoader extends ResourceLoader<IBlobResource> implements IBlobResourceLoader {
    load(): Promise<IBlobResource>;
    private emitLoad(httpRequest);
}
