import ResourceLoader from './resourceLoader';
import { ITextResource, ITextResourceLoader } from '../interface';
export default class TextLoader extends ResourceLoader<ITextResource> implements ITextResourceLoader {
    load(): Promise<ITextResource>;
    private emitLoad(httpRequest);
}
