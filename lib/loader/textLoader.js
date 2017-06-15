"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resourceLoader_1 = require("./resourceLoader");
class TextLoader extends resourceLoader_1.default {
    load() {
        return this.ajaxLoad('text').then(httpRequest => this.emitLoad(httpRequest));
    }
    emitLoad(httpRequest) {
        const res = httpRequest.response;
        this.resource = Object.assign({}, this.resource, { res });
        if (this.resource.onLoad)
            this.resource.onLoad(this.resource);
        return this.resource;
    }
}
exports.default = TextLoader;
//# sourceMappingURL=textLoader.js.map