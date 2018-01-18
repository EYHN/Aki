"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resourceLoader_1 = require("./resourceLoader");
class FileLoader extends resourceLoader_1.default {
    load() {
        this.loadPromise = this.ajaxLoad('arraybuffer');
        return this.loadPromise.then(httpRequest => this.emitLoad(httpRequest));
    }
    cancel() {
        if (this.loadPromise) {
            this.loadPromise.cancel();
        }
    }
    emitLoad(httpRequest) {
        const res = httpRequest.response;
        this.resource = Object.assign({}, this.resource, { res, contentType: httpRequest.getResponseHeader('Content-Type') });
        if (this.resource.onLoad)
            this.resource.onLoad(this.resource);
        return this.resource;
    }
}
exports.default = FileLoader;
//# sourceMappingURL=fileLoader.js.map