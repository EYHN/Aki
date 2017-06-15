"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(...nums) {
    return nums.reduce((p, c) => (typeof c === 'number') ? p + c : p, 0);
}
exports.default = sum;
//# sourceMappingURL=sum.js.map