"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ajax(href, option) {
    const httpRequest = new XMLHttpRequest();
    const finalOption = Object.assign({ method: 'GET' }, option);
    httpRequest.open(finalOption.method, href, true);
    return httpRequest;
}
exports.default = Ajax;
//# sourceMappingURL=ajax.js.map