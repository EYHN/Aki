"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgressEmitter_1 = require("../util/ProgressEmitter");
const ajax_1 = require("../util/ajax");
class ResourceLoader extends ProgressEmitter_1.ProgressEmitter {
    constructor(resource) {
        super();
        this.resource = resource;
    }
    ajaxLoad(responseType) {
        return new Promise((resolve, reject) => {
            const httpRequest = ajax_1.default(this.resource.src);
            httpRequest.responseType = responseType;
            if (typeof this.resource.timeout !== 'undefined')
                httpRequest.timeout = this.resource.timeout;
            httpRequest.addEventListener('timeout', this.resource.onTimeout);
            httpRequest.addEventListener('progress', (pe) => {
                if (pe.lengthComputable) {
                    this.percent = pe.loaded / pe.total;
                    this.emitProgress();
                }
            });
            httpRequest.addEventListener('loadend', (pe) => {
                this.percent = 1;
                this.emitProgress();
            });
            httpRequest.addEventListener('error', this.resource.onError);
            httpRequest.addEventListener('readystatechange', (e) => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    resolve(httpRequest);
                }
            });
            httpRequest.send();
        });
    }
}
exports.default = ResourceLoader;
//# sourceMappingURL=resourceLoader.js.map