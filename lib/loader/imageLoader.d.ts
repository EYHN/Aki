import ResourceLoader from './resourceLoader';
import { IImageResource, IImageResourceLoader } from '../interface';
export default class ImageLoader extends ResourceLoader<IImageResource> implements IImageResourceLoader {
    load(): Promise<IImageResource>;
    private emitLoad(httpRequest);
}
