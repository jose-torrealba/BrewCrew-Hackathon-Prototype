!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=a(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(p)):c.push({identifier:s,updater:y(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=l(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=u(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var c,a,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(1),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});e.exports=c},function(e,t,n){(t=n(2)(!1)).push([e.i,"body {\n    background: #415488;\n    margin: 0;\n}\n\n.Centered {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: max-content;\n}\n\n#WelcomingLabel {\n    color: white;\n    font-size: 32px;\n}\n\nimg {\n    padding: 10px;\n    border-radius: 15px;\n    outline-color: white;\n    outline-width: 2px;\n}",""]),e.exports=t},function(e,t,n){var r=n(1),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});e.exports=c},function(e,t,n){(t=n(2)(!1)).push([e.i,"header {\n    background-color: #1b1b1b;\n    width: 100%;\n    margin-bottom: 5px;\n    height: 88px;\n    position: relative;\n}\n\n/* Icons */\n\n#logo {\n    margin: 5px;\n    height: 100%;\n    display: inline-block;\n}\n\n#menu-dropdown {\n    -webkit-transform:scale(.75);\n    -moz-transform:scale(.75);\n    scale: .75;\n    border-radius: 0;\n}\n\n.imageContainer {\n    display: inline-block;\n}\n\n/* Buttons */\n\n.buttongroup {\n    position: relative;\n    display: inline-block;\n}\n\nbutton {\n    position: relative;\n    background-color: transparent;\n    color: white;\n    font-size: 24px;\n\n    border: white, 6px, solid;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.buttongroup button:not(:last-of-type) {\n    margin-right: 20px;\n}\n\n#LoginSignupButtons {\n    position: absolute;\n    vertical-align: top;\n    bottom: 17%;\n    right: 10px;\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),i=(n(4),n(6),n.p+"0462602c41c7f7882be30110e6f3643e.png"),c=n.p+"e6260848c6613be77f894dcd9af94e2e.png";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,o,a=s(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this,e)).state={},t}return t=f,(n=[{key:"render",value:function(){return r.createElement("header",null,r.createElement("div",{className:"imageContainer"},r.createElement("img",{id:"menu-dropdown",src:c}),r.createElement("img",{id:"logo",src:i})),r.createElement("div",{className:"buttongroup",id:"LoginSignupButtons"},r.createElement("button",null,"Login"),r.createElement("button",null,"Sign Up")))}}])&&u(t.prototype,n),o&&u(t,o),f}(r.Component);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,o,i=h(c);function c(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=i.call(this,e),n=g(t),o=function(){t.setState({welcomeText:"Peek-a-boo!",showBird:!t.state.showBird})},(r="onLabelClicked")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.state={welcomeText:"Hello",showBird:!1,birdUrl:"https://3.bp.blogspot.com/_73tR7MQIFo8/SxMC59tyoaI/AAAAAAAADNc/UbhAlLJdOW0/s1600/BCChickadee+smalled+12_02_07.jpg"},t}return t=c,(n=[{key:"render",value:function(){return r.createElement("div",null,r.createElement(d,null),r.createElement("label",{id:"WelcomingLabel",className:"Centered",onClick:this.onLabelClicked},this.state.welcomeText),this.state.showBird?r.createElement("img",{className:"Centered",src:this.state.birdUrl}):null)}}])&&m(t.prototype,n),o&&m(t,o),c}(r.Component);o.render(r.createElement(x,null),document.getElementById("WebsiteEntryPoint"))}]);