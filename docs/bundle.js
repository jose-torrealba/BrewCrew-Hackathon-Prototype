!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],f=n[u]||0,l="".concat(u," ").concat(f);n[u]=f+1;var s=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:l,updater:y(p,t),references:1}),r.push(l)}return r}function f(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function y(e,t){var n,r,o;if(t.singleton){var i=b++;n=m||(m=f(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=f(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),f=0;f<n.length;f++){var l=c(n[f]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(1),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(2)(!1)).push([e.i,"body {\n    background: #415488;\n    margin: 0;\n}\n\n.Centered {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: max-content;\n}\n\n#WelcomingLabel {\n    color: white;\n    font-size: 32px;\n}\n\nimg {\n    padding: 10px;\n    border-radius: 15px;\n    outline-color: white;\n    outline-width: 2px;\n}",""]),e.exports=t},function(e,t,n){var r=n(1),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(2)(!1)).push([e.i,"header {\n    background-color: #1b1b1b;\n    width: 100%;\n    height: 88px;\n    position: relative;\n}\n\n/* Icons */\n\n#logo {\n    margin: 5px;\n    height: 100%;\n    display: inline-block;\n}\n\n#menu-dropdown {\n    transform:scale(.75);\n    -webkit-transform:scale(.75);\n    -moz-transform:scale(.75);\n    -ms-transform:scale(.75);\n    -o-transform:scale(.75);\n    border-radius: 0;\n}\n\n.imageContainer {\n    display: inline-block;\n}\n\n/* Buttons */\n\n.buttongroup {\n    position: relative;\n    display: inline-block;\n}\n\nbutton {\n    position: relative;\n    background-color: transparent;\n    color: white;\n    font-size: 24px;\n\n    border: white, 6px, solid;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.buttongroup button:not(:last-of-type) {\n    margin-right: 20px;\n}\n\n#LoginSignupButtons {\n    position: absolute;\n    vertical-align: top;\n    bottom: 17%;\n    right: 10px;\n}",""]),e.exports=t},function(e,t,n){var r=n(1),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(2)(!1)).push([e.i,".slideshow {\n    background-color: #000000e7;\n    position: relative;\n}\n\n.slideshow img {\n    width: 60%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n \n @-webkit-keyframes fade {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n }\n \n @keyframes fade {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n }\n \n .fade {\n    -webkit-animation-name: fade;\n    animation-name: fade;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n }",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),i=(n(4),n(6),n.p+"0462602c41c7f7882be30110e6f3643e.png"),a=n.p+"e6260848c6613be77f894dcd9af94e2e.png";function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,o,c=l(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={},t}return t=s,(n=[{key:"render",value:function(){return r.createElement("header",null,r.createElement("div",{className:"imageContainer"},r.createElement("img",{id:"menu-dropdown",src:a}),r.createElement("img",{id:"logo",src:i})),r.createElement("div",{className:"buttongroup",id:"LoginSignupButtons"},r.createElement("button",null,"Login"),r.createElement("button",null,"Sign Up")))}}])&&u(t.prototype,n),o&&u(t,o),s}(r.Component);n(8);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,o,i=h(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),O(v(t=i.call(this,e)),"changePhotoAfterTime",(function(){var e=(t.state.currentIndex+1)%t.state.images.length;setTimeout(function(){this.setState({currentIndex:e})}.bind(v(t)),1e3*t.state.photoChangeTimeoutSeconds)})),O(v(t),"removeFadeClass",(function(){null!=t.imgRef&&(t.imgRef.className="")})),O(v(t),"setRef",(function(e){null!=e&&(t.imgRef=e,e.className="fade")})),t.imgRef=null;var n=[];if(void 0!==e.image)n[0]=e.image;else if(null!=e.images)for(var r=0;r<e.images.length;r++)n[r]=t.props.images[r];return t.state={images:n,currentIndex:0,photoChangeTimeoutSeconds:null!=t.props.timeBetweenImageChanges?t.props.timeBetweenImageChanges:5,height:t.props.height},t}return t=a,(n=[{key:"render",value:function(){var e=this;return(r.createElement("div",{className:"slideshow"},r.createElement("img",{height:this.state.height,ref:function(t){e.setRef(t)},className:"fade",src:this.state.images[this.state.currentIndex],onLoad:this.changePhotoAfterTime,onAnimationEnd:this.removeFadeClass})))}}])&&b(t.prototype,n),o&&b(t,o),a}(r.Component),j=n.p+"46f95dfef80b2bc915edcc0c0a5d0564.jpeg",x=n.p+"e1a7703f4f13608d5cceabcbdc9e8df5.jpeg",_=n.p+"3b423890aea927fb12cd0c869d400c5f.jpg",R=n.p+"e6c1b25d999c559f10bfcdf80b1de400.jpg";function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,o,i=k(a);function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),n=M(t),o=function(){t.setState({welcomeText:"Peek-a-boo!",showBird:!t.state.showBird})},(r="onLabelClicked")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.state={slideShowImages:[j,x,_,R]},t}return t=a,(n=[{key:"render",value:function(){return r.createElement("div",null,r.createElement(d,null),r.createElement(S,{height:400,images:this.state.slideShowImages,timeBetweenImageChanges:8}))}}])&&P(t.prototype,n),o&&P(t,o),a}(r.Component);o.render(r.createElement(N,null),document.getElementById("WebsiteEntryPoint"))}]);
//# sourceMappingURL=bundle.js.map