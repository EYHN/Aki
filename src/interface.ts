export type IResourceType = 'video' | 'image' | 'text' | 'file' | 'blob';

export interface IResource {
  name?: string;
  src: string;
  type: IResourceType;
  size?: number;
  onLoad?: (e: this) => any;
  onError?: (this: XMLHttpRequest, ev: ErrorEvent) => any;
  onTimeout?: (this: XMLHttpRequest, ev: ProgressEvent) => any;
  timeout?: number;
}

export interface IImageResource extends IResource {
  type: 'image';
  res?: string;
  element?: HTMLImageElement;
}

export interface IBlobResource extends IResource {
  type: 'blob';
  res?: string;
}

export interface IVideoResource extends IResource {
  type: 'video';
  res?: string;
  element?: HTMLVideoElement;
}

export interface ITextResource extends IResource {
  type: 'text';
  res?: string;
}

export interface IFileResource extends IResource {
  type: 'file';
  res?: ArrayBuffer;
  contentType?: string;
}

export interface IProgressData {
  percent: number;
}

export interface IProgressEvent extends IProgressData {
}

export type IProgressCallBack = (event: IProgressEvent) => void;

export interface IProgressEmitter {
  percent: number;
  onProgress(cb: IProgressCallBack): void;
  getProgress(): IProgressData;
}

export interface IResourceLoader<T extends IResource> extends IProgressEmitter {
  resource: T;
  load(): Promise<T>;
}

export interface IImageResourceLoader extends IResourceLoader<IImageResource> {
}

export interface ITextResourceLoader extends IResourceLoader<ITextResource> {
}

export interface IFileResourceLoader extends IResourceLoader<IFileResource> {
}

export interface IBlobResourceLoader extends IResourceLoader<IBlobResource> {
}

export interface IVideoResourceLoader extends IResourceLoader<IVideoResource> {
}
