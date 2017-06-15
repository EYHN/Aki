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
    constructor(resList) {
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
    get(name) {
        return this.loaders.find(loader => loader.resource.name === name).resource;
    }
    getAll() {
        return this.loaders.map(loader => loader.resource);
    }
    image(src, size) {
        return new Promise((resolve, reject) => {
            this.loaders.push(this.createLoader({
                src,
                size,
                type: 'image',
                onLoad: () => resolve(),
                onError: () => reject()
            }));
        });
    }
    file(src, size) {
        return new Promise((resolve, reject) => {
            this.loaders.push(this.createLoader({
                src,
                size,
                type: 'file',
                onLoad: () => resolve(),
                onError: () => reject()
            }));
        });
    }
    text(src, size) {
        return new Promise((resolve, reject) => {
            this.loaders.push(this.createLoader({
                src,
                size,
                type: 'text',
                onLoad: () => resolve(),
                onError: () => reject()
            }));
        });
    }
    blob(src, size) {
        return new Promise((resolve, reject) => {
            this.loaders.push(this.createLoader({
                src,
                size,
                type: 'blob',
                onLoad: () => resolve(),
                onError: () => reject()
            }));
        });
    }
    video(src, size) {
        return new Promise((resolve, reject) => {
            this.loaders.push(this.createLoader({
                src,
                size,
                type: 'video',
                onLoad: () => resolve(),
                onError: () => reject()
            }));
        });
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
        })) / sized.length;
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