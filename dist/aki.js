!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("aki",[],e):"object"==typeof exports?exports.aki=e():t.aki=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=48)}([function(t,e,r){var n=r(29)("wks"),o=r(19),u=r(1).Symbol,i="function"==typeof u;(t.exports=function(t){return n[t]||(n[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=n},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(12),o=r(37),u=r(24),i=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=u(e,!0),n(r),o)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(69),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},function(t,e,r){t.exports=!r(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(43),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(88),u=n(o),i=r(92),c=n(i),f=r(43),a=n(f);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},function(t,e,r){var n=r(1),o=r(2),u=r(23),i=r(11),c=function(t,e,r){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,h=t&c.W,b=p?o:o[e]||(o[e]={}),_=b.prototype,m=p?n:d?n[e]:(n[e]||{}).prototype;p&&(r=e);for(f in r)(a=!l&&m&&void 0!==m[f])&&f in b||(s=a?m[f]:r[f],b[f]=p&&"function"!=typeof m[f]?r[f]:y&&a?u(s,n):h&&m[f]==s?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?u(Function.call,s):s,v&&((b.virtual||(b.virtual={}))[f]=s,t&c.R&&_&&!_[f]&&i(_,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(3),o=r(15);t.exports=r(6)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(13);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(57),o=r(21);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(47),d=r(96),v=function(t){function e(t){(0,u.default)(this,e);var r=(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resource=t,r}return(0,l.default)(e,t),(0,c.default)(e,[{key:"ajaxLoad",value:function(t){var e=this;return new Promise(function(r,n){var o=d.default(e.resource.src);o.responseType=t,void 0!==e.resource.timeout&&(o.timeout=e.resource.timeout),o.addEventListener("timeout",e.resource.onTimeout),o.addEventListener("progress",function(t){t.lengthComputable&&(e.percent=t.loaded/t.total,e.emitProgress())}),o.addEventListener("loadend",function(t){e.percent=1,e.emitProgress()}),o.addEventListener("error",e.resource.onError),o.addEventListener("readystatechange",function(t){o.readyState===XMLHttpRequest.DONE&&r(o)}),o.send()})}}]),e}(p.ProgressEmitter);e.default=v},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e,r){var n=r(54);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(13);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(12),o=r(56),u=r(30),i=r(28)("IE_PROTO"),c=function(){},f=function(){var t,e=r(38)("iframe"),n=u.length;for(e.style.display="none",r(60).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f.prototype[u[n]];return f()};t.exports=Object.create||function(t,e){var r;return null!==t?(c.prototype=n(t),r=new c,c.prototype=null,r[i]=t):r=f(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(40),o=r(30);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(29)("keys"),o=r(19);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){var n=r(1),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(3).f,o=r(7),u=r(0)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,u)&&n(t,u,{configurable:!0,value:e})}},function(t,e,r){e.f=r(0)},function(t,e,r){var n=r(1),o=r(2),u=r(22),i=r(32),c=r(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:i.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){"use strict";var n=r(53)(!0);r(36)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(22),o=r(10),u=r(39),i=r(11),c=r(7),f=r(16),a=r(55),s=r(31),l=r(61),p=r(0)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,r,y,h,b,_){a(r,e,y);var m,g,O,x=function(t){if(!d&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},j=e+" Iterator",w="values"==h,L=!1,P=t.prototype,S=P[p]||P["@@iterator"]||h&&P[h],M=!d&&S||x(h),k=h?w?x("entries"):M:void 0,E="Array"==e?P.entries||S:S;if(E&&(O=l(E.call(new t)))!==Object.prototype&&O.next&&(s(O,j,!0),n||c(O,p)||i(O,p,v)),w&&S&&"values"!==S.name&&(L=!0,M=function(){return S.call(this)}),n&&!_||!d&&!L&&P[p]||i(P,p,M),f[e]=M,f[j]=v,h)if(m={values:w?M:x("values"),keys:b?M:x("keys"),entries:k},_)for(g in m)g in P||u(P,g,m[g]);else o(o.P+o.F*(d||L),e,m);return m}},function(t,e,r){t.exports=!r(6)&&!r(18)(function(){return 7!=Object.defineProperty(r(38)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(13),o=r(1).document,u=n(o)&&n(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,r){t.exports=r(11)},function(t,e,r){var n=r(7),o=r(14),u=r(58)(!1),i=r(28)("IE_PROTO");t.exports=function(t,e){var r,c=o(t),f=0,a=[];for(r in c)r!=i&&n(c,r)&&a.push(r);for(;e.length>f;)n(c,r=e[f++])&&(~u(a,r)||a.push(r));return a}},function(t,e,r){var n=r(20),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(21);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(72),u=n(o),i=r(78),c=n(i),f="function"==typeof c.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===f(u.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(40),o=r(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(34),o=r(15),u=r(14),i=r(24),c=r(7),f=r(37),a=Object.getOwnPropertyDescriptor;e.f=r(6)?a:function(t,e){if(t=u(t),e=i(e,!0),f)try{return a(t,e)}catch(t){}if(c(t,e))return o(!n.f.call(t,e),t[e])}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i);Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(){(0,u.default)(this,t),this.percent=0,this.ProgressListenersList=[]}return(0,c.default)(t,[{key:"onProgress",value:function(t){return this.ProgressListenersList.push(t),this}},{key:"getProgress",value:function(){return{percent:this.percent}}},{key:"emitProgress",value:function(t){var e=this;return void 0!==t&&(this.percent=t),this.ProgressListenersList.forEach(function(t){return t(e.getProgress())}),this}}]),t}();e.ProgressEmitter=f},function(t,e,r){t.exports=r(49)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(50),u=n(o),i=r(4),c=n(i),f=r(5),a=n(f),s=r(8),l=n(s),p=r(9),d=n(p);Object.defineProperty(e,"__esModule",{value:!0});var v=r(95),y=r(97),h=r(98),b=r(99),_=r(100),m=r(47),g=r(101),O=function(t){function e(t){(0,c.default)(this,e);var r=(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.loaders=t.map(function(t){return r.createLoader(t)}),r}return(0,d.default)(e,t),(0,a.default)(e,[{key:"load",value:function(t){return this.loaders.find(function(e){return e.resource.name===t}).load(),this}},{key:"loadAll",value:function(){return this.loaders.forEach(function(t){return t.load()}),this}},{key:"get",value:function(t){return this.loaders.find(function(e){return e.resource.name===t}).resource}},{key:"getAll",value:function(){return this.loaders.map(function(t){return t.resource})}},{key:"image",value:function(t,e){var r=this;return new Promise(function(n,o){r.loaders.push(r.createLoader({src:t,size:e,type:"image",onLoad:function(){return n()},onError:function(){return o()}}))})}},{key:"file",value:function(t,e){var r=this;return new Promise(function(n,o){r.loaders.push(r.createLoader({src:t,size:e,type:"file",onLoad:function(){return n()},onError:function(){return o()}}))})}},{key:"text",value:function(t,e){var r=this;return new Promise(function(n,o){r.loaders.push(r.createLoader({src:t,size:e,type:"text",onLoad:function(){return n()},onError:function(){return o()}}))})}},{key:"blob",value:function(t,e){var r=this;return new Promise(function(n,o){r.loaders.push(r.createLoader({src:t,size:e,type:"blob",onLoad:function(){return n()},onError:function(){return o()}}))})}},{key:"video",value:function(t,e){var r=this;return new Promise(function(n,o){r.loaders.push(r.createLoader({src:t,size:e,type:"video",onLoad:function(){return n()},onError:function(){return o()}}))})}},{key:"createLoader",value:function(t){var e=this;if(t){var r=void 0;switch(t.type){case"image":r=new g.default(t);break;case"text":r=new b.default(t);break;case"file":r=new h.default(t);break;case"blob":r=new y.default(t);break;case"video":r=new v.default(t);break;default:r=void 0}return r&&r.onProgress(function(){return e.updateProgress()}),r}}},{key:"updateProgress",value:function(){var t=this.loaders.filter(function(t){return void 0!==t.resource.size}),e=_.default.apply(_,(0,u.default)(t.map(function(t){return t.resource.size})))/t.length,r=this.loaders.map(function(t){return t.resource.size||e}),n=_.default.apply(_,(0,u.default)(r)),o=_.default.apply(_,(0,u.default)(this.loaders.map(function(t,e){var o=r[e];return t.percent*o/n})));this.emitProgress(o)}}]),e}(m.ProgressEmitter);e.default=O,window&&(window.Aki=O)},function(t,e,r){"use strict";e.__esModule=!0;var n=r(51),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,o.default)(t)}},function(t,e,r){t.exports={default:r(52),__esModule:!0}},function(t,e,r){r(35),r(62),t.exports=r(2).Array.from},function(t,e,r){var n=r(20),o=r(21);t.exports=function(t){return function(e,r){var u,i,c=String(o(e)),f=n(r),a=c.length;return f<0||f>=a?t?"":void 0:(u=c.charCodeAt(f),u<55296||u>56319||f+1===a||(i=c.charCodeAt(f+1))<56320||i>57343?t?c.charAt(f):u:t?c.slice(f,f+2):i-56320+(u-55296<<10)+65536)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(25),o=r(15),u=r(31),i={};r(11)(i,r(0)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(i,{next:o(1,r)}),u(t,e+" Iterator")}},function(t,e,r){var n=r(3),o=r(12),u=r(26);t.exports=r(6)?Object.defineProperties:function(t,e){o(t);for(var r,i=u(e),c=i.length,f=0;c>f;)n.f(t,r=i[f++],e[r]);return t}},function(t,e,r){var n=r(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(14),o=r(41),u=r(59);t.exports=function(t){return function(e,r,i){var c,f=n(e),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,e,r){var n=r(20),o=Math.max,u=Math.min;t.exports=function(t,e){return t=n(t),t<0?o(t+e,0):u(t,e)}},function(t,e,r){var n=r(1).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(7),o=r(42),u=r(28)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,r){"use strict";var n=r(23),o=r(10),u=r(42),i=r(63),c=r(64),f=r(41),a=r(65),s=r(66);o(o.S+o.F*!r(68)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,l,p=u(t),d="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,h=void 0!==y,b=0,_=s(p);if(h&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==_||d==Array&&c(_))for(e=f(p.length),r=new d(e);e>b;b++)a(r,b,h?y(p[b],b):p[b]);else for(l=_.call(p),r=new d;!(o=l.next()).done;b++)a(r,b,h?i(l,y,[o.value,b],!0):o.value);return r.length=b,r}})},function(t,e,r){var n=r(12);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var u=t.return;throw void 0!==u&&n(u.call(t)),e}}},function(t,e,r){var n=r(16),o=r(0)("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||u[o]===t)}},function(t,e,r){"use strict";var n=r(3),o=r(15);t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}},function(t,e,r){var n=r(67),o=r(0)("iterator"),u=r(16);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||u[n(t)]}},function(t,e,r){var n=r(27),o=r(0)("toStringTag"),u="Arguments"==n(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=i(e=Object(t),o))?r:u?n(e):"Object"==(c=n(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,r){var n=r(0)("iterator"),o=!1;try{var u=[7][n]();u.return=function(){o=!0},Array.from(u,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var u=[7],i=u[n]();i.next=function(){return{done:r=!0}},u[n]=function(){return i},t(u)}catch(t){}return r}},function(t,e,r){t.exports={default:r(70),__esModule:!0}},function(t,e,r){r(71);var n=r(2).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e,r){var n=r(10);n(n.S+n.F*!r(6),"Object",{defineProperty:r(3).f})},function(t,e,r){t.exports={default:r(73),__esModule:!0}},function(t,e,r){r(35),r(74),t.exports=r(32).f("iterator")},function(t,e,r){r(75);for(var n=r(1),o=r(11),u=r(16),i=r(0)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=n[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}},function(t,e,r){"use strict";var n=r(76),o=r(77),u=r(16),i=r(14);t.exports=r(36)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,r):"values"==e?o(0,t[r]):o(0,[r,t[r]])},"values"),u.Arguments=u.Array,n("keys"),n("values"),n("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){t.exports={default:r(79),__esModule:!0}},function(t,e,r){r(80),r(85),r(86),r(87),t.exports=r(2).Symbol},function(t,e,r){"use strict";var n=r(1),o=r(7),u=r(6),i=r(10),c=r(39),f=r(81).KEY,a=r(18),s=r(29),l=r(31),p=r(19),d=r(0),v=r(32),y=r(33),h=r(82),b=r(83),_=r(12),m=r(13),g=r(14),O=r(24),x=r(15),j=r(25),w=r(84),L=r(46),P=r(3),S=r(26),M=L.f,k=P.f,E=w.f,A=n.Symbol,T=n.JSON,F=T&&T.stringify,R=d("_hidden"),N=d("toPrimitive"),C={}.propertyIsEnumerable,I=s("symbol-registry"),z=s("symbols"),D=s("op-symbols"),G=Object.prototype,U="function"==typeof A,H=n.QObject,V=!H||!H.prototype||!H.prototype.findChild,W=u&&a(function(){return 7!=j(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=M(G,e);n&&delete G[e],k(t,e,r),n&&t!==G&&k(G,e,n)}:k,J=function(t){var e=z[t]=j(A.prototype);return e._k=t,e},q=U&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},B=function(t,e,r){return t===G&&B(D,e,r),_(t),e=O(e,!0),_(r),o(z,e)?(r.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),r=j(r,{enumerable:x(0,!1)})):(o(t,R)||k(t,R,x(1,{})),t[R][e]=!0),W(t,e,r)):k(t,e,r)},K=function(t,e){_(t);for(var r,n=h(e=g(e)),o=0,u=n.length;u>o;)B(t,r=n[o++],e[r]);return t},X=function(t,e){return void 0===e?j(t):K(j(t),e)},Y=function(t){var e=C.call(this,t=O(t,!0));return!(this===G&&o(z,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(z,t)||o(this,R)&&this[R][t])||e)},Q=function(t,e){if(t=g(t),e=O(e,!0),t!==G||!o(z,e)||o(D,e)){var r=M(t,e);return!r||!o(z,e)||o(t,R)&&t[R][e]||(r.enumerable=!0),r}},Z=function(t){for(var e,r=E(g(t)),n=[],u=0;r.length>u;)o(z,e=r[u++])||e==R||e==f||n.push(e);return n},$=function(t){for(var e,r=t===G,n=E(r?D:g(t)),u=[],i=0;n.length>i;)!o(z,e=n[i++])||r&&!o(G,e)||u.push(z[e]);return u};U||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===G&&e.call(D,r),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),W(this,t,x(1,r))};return u&&V&&W(G,t,{configurable:!0,set:e}),J(t)},c(A.prototype,"toString",function(){return this._k}),L.f=Q,P.f=B,r(45).f=w.f=Z,r(34).f=Y,r(44).f=$,u&&!r(22)&&c(G,"propertyIsEnumerable",Y,!0),v.f=function(t){return J(d(t))}),i(i.G+i.W+i.F*!U,{Symbol:A});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var rt=S(d.store),nt=0;rt.length>nt;)y(rt[nt++]);i(i.S+i.F*!U,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=A(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),i(i.S+i.F*!U,"Object",{create:X,defineProperty:B,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),T&&i(i.S+i.F*(!U||a(function(){var t=A();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(m(e)||void 0!==t)&&!q(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!q(e))return e}),n[1]=e,F.apply(T,n)}}),A.prototype[N]||r(11)(A.prototype,N,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},function(t,e,r){var n=r(19)("meta"),o=r(13),u=r(7),i=r(3).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(18)(function(){return f(Object.preventExtensions({}))}),s=function(t){i(t,n,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,n)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[n].i},p=function(t,e){if(!u(t,n)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[n].w},d=function(t){return a&&v.NEED&&f(t)&&!u(t,n)&&s(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,r){var n=r(26),o=r(44),u=r(34);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var i,c=r(t),f=u.f,a=0;c.length>a;)f.call(t,i=c[a++])&&e.push(i);return e}},function(t,e,r){var n=r(27);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(14),o=r(45).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?c(t):o(n(t))}},function(t,e){},function(t,e,r){r(33)("asyncIterator")},function(t,e,r){r(33)("observable")},function(t,e,r){t.exports={default:r(89),__esModule:!0}},function(t,e,r){r(90),t.exports=r(2).Object.setPrototypeOf},function(t,e,r){var n=r(10);n(n.S,"Object",{setPrototypeOf:r(91).set})},function(t,e,r){var n=r(13),o=r(12),u=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r(23)(Function.call,r(46).f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return u(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:u}},function(t,e,r){t.exports={default:r(93),__esModule:!0}},function(t,e,r){r(94);var n=r(2).Object;t.exports=function(t,e){return n.create(t,e)}},function(t,e,r){var n=r(10);n(n.S,"Object",{create:r(25)})},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(17),d=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"load",value:function(){var t=this;return this.ajaxLoad("blob").then(function(e){return t.emitLoad(e)})}},{key:"emitLoad",value:function(t){var e=window.URL.createObjectURL(t.response);return this.resource=Object.assign({},this.resource,{res:e,get element(){var t=document.createElement("video");return t.src=e,t}}),this.resource.onLoad&&this.resource.onLoad(this.resource),this.resource}}]),e}(p.default);e.default=d},function(t,e,r){"use strict";function n(t,e){var r=new XMLHttpRequest,n=Object.assign({method:"GET"},e);return r.open(n.method,t,!0),r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(17),d=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"load",value:function(){var t=this;return this.ajaxLoad("blob").then(function(e){return t.emitLoad(e)})}},{key:"emitLoad",value:function(t){var e=window.URL.createObjectURL(t.response);return this.resource=Object.assign({},this.resource,{res:e}),this.resource.onLoad&&this.resource.onLoad(this.resource),this.resource}}]),e}(p.default);e.default=d},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(17),d=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"load",value:function(){var t=this;return this.ajaxLoad("arraybuffer").then(function(e){return t.emitLoad(e)})}},{key:"emitLoad",value:function(t){var e=t.response;return this.resource=Object.assign({},this.resource,{res:e,contentType:t.getResponseHeader("Content-Type")}),this.resource.onLoad&&this.resource.onLoad(this.resource),this.resource}}]),e}(p.default);e.default=d},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(17),d=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"load",value:function(){var t=this;return this.ajaxLoad("text").then(function(e){return t.emitLoad(e)})}},{key:"emitLoad",value:function(t){var e=t.response;return this.resource=Object.assign({},this.resource,{res:e}),this.resource.onLoad&&this.resource.onLoad(this.resource),this.resource}}]),e}(p.default);e.default=d},function(t,e,r){"use strict";function n(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce(function(t,e){return"number"==typeof e?t+e:t},0)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(4),u=n(o),i=r(5),c=n(i),f=r(8),a=n(f),s=r(9),l=n(s);Object.defineProperty(e,"__esModule",{value:!0});var p=r(17),d=function(t){function e(){return(0,u.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"load",value:function(){var t=this;return this.ajaxLoad("blob").then(function(e){return t.emitLoad(e)})}},{key:"emitLoad",value:function(t){var e=window.URL.createObjectURL(t.response);return this.resource=Object.assign({},this.resource,{res:e,get element(){var t=new Image;return t.src=e,t}}),this.resource.onLoad&&this.resource.onLoad(this.resource),this.resource}}]),e}(p.default);e.default=d}])});
//# sourceMappingURL=aki.js.map