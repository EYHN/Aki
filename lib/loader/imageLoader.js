"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resourceLoader_1 = require("./resourceLoader");
class ImageLoader extends resourceLoader_1.default {
    load() {
        return this.ajaxLoad('blob').then(httpRequest => this.emitLoad(httpRequest));
    }
    emitLoad(httpRequest) {
        const resUrl = window.URL.createObjectURL(httpRequest.response);
        this.resource = Object.assign({}, this.resource, { res: resUrl, get element() {
                const imgElecment = new Image();
                imgElecment.src = resUrl;
                return imgElecment;
            } });
        if (this.resource.onLoad)
            this.resource.onLoad(this.resource);
        return this.resource;
    }
}
exports.default = ImageLoader;
//# sourceMappingURL=imageLoader.js.map