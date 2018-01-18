"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const videoLoader_1 = require("./loader/videoLoader");
const blobLoader_1 = require("./loader/blobLoader");
const fileLoader_1 = require("./loader/fileLoader");
const textLoader_1 = require("./loader/textLoader");
const sum_1 = require("./util/sum");
const ProgressEmitter_1 = require("./util/ProgressEmitter");
const imageLoader_1 = require("./loader/imageLoader");
class Aki extends ProgressEmitter_1.ProgressEmitter {
    constructor(resList = []) {
        super();
        this.loaders = resList.map(res => this.createLoader(res));
    }
    load(name) {
        const loader = this.loaders.find(res => res.resource.name === name);
        loader.load();
        return this;
    }
    loadAll() {
        this.loaders.forEach(loader => loader.load());
        return this;
    }
    cancel(name) {
        const loader = this.loaders.find(res => res.resource.name === name);
        loader.cancel();
        return this;
    }
    cancelAll() {
        this.loaders.forEach(loader => loader.cancel());
        return this;
    }
    get(name) {
        return this.loaders.find(loader => loader.resource.name === name).resource;
    }
    getAll() {
        return this.loaders.map(loader => loader.resource);
    }
    pushLoader(res) {
        this.loaders.push(this.createLoader(res));
        return this;
    }
    static fetchOne(type, src, onProgress) {
        const a = new Aki();
        const promise = new Promise((resolve, reject) => {
            a.pushLoader({
                src,
                type,
                onLoad: (r) => resolve(r),
                onError: (e) => reject(e)
            });
            a.onProgress(onProgress);
            a.loadAll();
        });
        promise.cancel = () => a.cancelAll();
        return promise;
    }
    static image(src, onProgress) {
        return Aki.fetchOne('image', src, onProgress);
    }
    static file(src, onProgress) {
        return Aki.fetchOne('file', src, onProgress);
    }
    static text(src, onProgress) {
        return Aki.fetchOne('text', src, onProgress);
    }
    static blob(src, onProgress) {
        return Aki.fetchOne('blob', src, onProgress);
    }
    static video(src, onProgress) {
        return Aki.fetchOne('video', src, onProgress);
    }
    createLoader(res) {
        if (!res)
            return undefined;
        let loader;
        switch (res.type) {
            case 'image':
                loader = new imageLoader_1.default(res);
                break;
            case 'text':
                loader = new textLoader_1.default(res);
                break;
            case 'file':
                loader = new fileLoader_1.default(res);
                break;
            case 'blob':
                loader = new blobLoader_1.default(res);
                break;
            case 'video':
                loader = new videoLoader_1.default(res);
                break;
            default:
                loader = undefined;
                break;
        }
        if (loader)
            loader.onProgress(() => this.updateProgress());
        return loader;
    }
    updateProgress() {
        const sized = this.loaders.filter(loader => typeof loader.resource.size !== 'undefined');
        const sizedAverage = sum_1.default(...sized.map(loader => {
            return loader.resource.size;
        })) / sized.length ||
            100;
        const sizes = this.loaders.map(loader => {
            return loader.resource.size || sizedAverage;
        });
        const TotalSize = sum_1.default(...sizes);
        const percent = sum_1.default(...this.loaders.map((loader, index) => {
            const size = sizes[index];
            return loader.percent * size / TotalSize;
        }));
        this.emitProgress(percent);
    }
}
exports.default = Aki;
if (window) {
    window.Aki = Aki;
}
//# sourceMappingURL=aki.js.map