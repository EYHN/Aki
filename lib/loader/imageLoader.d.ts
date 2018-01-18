import ResourceLoader from './resourceLoader';
import { IImageResource, IImageResourceLoader } from '../interface';
export default class ImageLoader extends ResourceLoader<IImageResource> implements IImageResourceLoader {
    private loadPromise;
    load(): Promise<IImageResource>;
    cancel(): void;
    private emitLoad(httpRequest);
}
