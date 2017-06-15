import { IProgressCallBack, IProgressData, IProgressEmitter } from '../interface';
export declare class ProgressEmitter implements IProgressEmitter {
    percent: number;
    private ProgressListenersList;
    onProgress(cb: IProgressCallBack): this;
    getProgress(): IProgressData;
    protected emitProgress(percent?: number): this;
}
