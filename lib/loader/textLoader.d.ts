import ResourceLoader from './resourceLoader';
import { ITextResource, ITextResourceLoader } from '../interface';
export default class TextLoader extends ResourceLoader<ITextResource> implements ITextResourceLoader {
    private loadPromise;
    load(): Promise<ITextResource>;
    cancel(): void;
    private emitLoad(httpRequest);
}
