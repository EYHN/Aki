import { IProgressCallBack, IProgressData, IProgressEmitter } from '../interface';

export class ProgressEmitter implements IProgressEmitter {
  public percent: number = 0;
  private ProgressListenersList: IProgressCallBack[] = [];
  public onProgress(cb: IProgressCallBack) {
    this.ProgressListenersList.push(cb);
    return this;
  }
  public getProgress(): IProgressData {
    return {
      percent: this.percent
    };
  }
  protected emitProgress(percent?: number) {
    if (typeof percent !== 'undefined') this.percent = percent;
    this.ProgressListenersList.forEach(l => l(this.getProgress()));
    return this;
  }
}
