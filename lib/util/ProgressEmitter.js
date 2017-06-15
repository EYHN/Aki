"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProgressEmitter {
    constructor() {
        this.percent = 0;
        this.ProgressListenersList = [];
    }
    onProgress(cb) {
        this.ProgressListenersList.push(cb);
        return this;
    }
    getProgress() {
        return {
            percent: this.percent
        };
    }
    emitProgress(percent) {
        if (typeof percent !== 'undefined')
            this.percent = percent;
        this.ProgressListenersList.forEach(l => l(this.getProgress()));
        return this;
    }
}
exports.ProgressEmitter = ProgressEmitter;
//# sourceMappingURL=ProgressEmitter.js.map