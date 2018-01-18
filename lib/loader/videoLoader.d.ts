import ResourceLoader from './resourceLoader';
import { IVideoResource, IVideoResourceLoader } from '../interface';
export default class VideoLoader extends ResourceLoader<IVideoResource> implements IVideoResourceLoader {
    private loadPromise;
    load(): Promise<IVideoResource>;
    cancel(): void;
    private emitLoad(httpRequest);
}
