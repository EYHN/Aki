import Aki from './aki';
import { IVideoResource } from './interface';

document.addEventListener('ready', () => {
  new Aki([{
      name: 'videoTest',
      src: require('file-loader!./example-static/video.mp4'),
      type: 'video',
      size: 16477,
      onLoad: (res) => {
          const element = (res as IVideoResource).element;
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
          document.body.appendChild((res as IVideoResource).element);
      }
  }]).onProgress(console.log).loadAll();

  Aki.image(require('file-loader!./example-static/image.gif'), console.log).then((res) => {
      document.body.appendChild(res.element);
  });
});
