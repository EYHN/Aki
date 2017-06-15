import ResourceLoader from './resourceLoader';
import { IVideoResource, IVideoResourceLoader } from '../interface';
export default class VideoLoader extends ResourceLoader<IVideoResource> implements IVideoResourceLoader {
    load(): Promise<IVideoResource>;
    private emitLoad(httpRequest);
}
