"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aki_1 = require("./aki");
document.addEventListener('ready', () => {
    new aki_1.default([{
            name: 'videoTest',
            src: require('file-loader!./example-static/video.mp4'),
            type: 'video',
            size: 16477,
            onLoad: (res) => {
                const element = res.element;
                element.play();
                element.loop = true;
                document.body.appendChild(element);
            }
        }, {
            name: 'imageTest',
            src: require('file-loader!./example-static/image.gif'),
            type: 'image',
            size: 2297443,
            onLoad: (res) => {
                document.body.appendChild(res.element);
            }
        }]).onProgress(console.log).loadAll();
    aki_1.default.image(require('file-loader!./example-static/image.gif'), console.log).then((res) => {
        document.body.appendChild(res.element);
    }).catch(console.log);
});
//# sourceMappingURL=example.js.map