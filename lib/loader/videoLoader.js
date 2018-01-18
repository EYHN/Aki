"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resourceLoader_1 = require("./resourceLoader");
class VideoLoader extends resourceLoader_1.default {
    load() {
        this.loadPromise = this.ajaxLoad('blob');
        return this.loadPromise.then(httpRequest => this.emitLoad(httpRequest));
    }
    cancel() {
        if (this.loadPromise) {
            this.loadPromise.cancel();
        }
    }
    emitLoad(httpRequest) {
        const resUrl = window.URL.createObjectURL(httpRequest.response);
        this.resource = Object.assign({}, this.resource, { res: resUrl, get element() {
                const videoElecment = document.createElement('video');
                videoElecment.src = resUrl;
                return videoElecment;
            } });
        if (this.resource.onLoad)
            this.resource.onLoad(this.resource);
        return this.resource;
    }
}
exports.default = VideoLoader;
//# sourceMappingURL=videoLoader.js.map