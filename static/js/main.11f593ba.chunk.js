(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(29)},21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(12),i=n.n(a),c=(n(21),n(2)),u=n(3),l=n(5),s=n(8),f=n(4),h=n(13),p=n(14),d=n(15);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&n.call(y,o)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var m=new window.AudioContext,y=m.createAnalyser();y.fftSize=2048;var g=new Float32Array(2048),w=function(t){var e=o.a.useState(null),n=Object(c.a)(e,2),r=n[0],a=n[1],i=o.a.useState(!1),u=Object(c.a)(i,2),s=u[0],f=u[1],h=o.a.useState(null),w=Object(c.a)(h,2),E=(w[0],w[1]),b=d.YIN({threshold:.3,sampleRate:44100,probabilityThreshold:.4});setInterval(function(){y.getFloatTimeDomainData(g);var e=b(g);if(e){var n=l.a.fromFreq(e);if(2<=l.a.octave(n)&&l.a.octave(n)<=6){r&&x(),console.log("pitch: ".concat(e," ").concat(n)),t.setNotePlayed(n);var r=setInterval(x,500);E(r)}}},1);var x=function(){t.setNotePlayed(""),E(null)},L=function(){var t=Object(p.a)(v().mark(function t(){var e;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:if(e=t.sent,f(!0),console.log("Clicked start recording..."),"suspended"!==m.state){t.next=8;break}return t.next=8,m.resume();case 8:a(m.createMediaStreamSource(e));case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),O=function(){return navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})};o.a.useEffect(function(){null!=r&&r.connect(y)},[r]);return o.a.createElement("div",null,s?o.a.createElement("input",{type:"button",value:"Stop Microphone",onClick:function(){return r.disconnect(y),void f(!1)}}):o.a.createElement("input",{type:"button",value:"Start Microphone",onClick:function(){return L()}}))},E=(n(28),["P1","m2","M2","m3","M3","P4","P5","m6","M6","m7","M7"]),b=function(){for(var t=f.b.shuffle(s.a.chromatic(["E2","E5"],{sharps:!0})),e=[],n=0;n<t.length;n++){for(var r={},o=0;o<E.length;o++)r[E[o]]="P1"===E[o]?l.a.get(Object(u.d)(Object(u.f)(t[n],E[o]))).name:l.a.pitchClass(Object(u.d)(Object(u.f)(t[n],E[o])));e.push(r)}return e}();var x=function(){var t=o.a.useState(0),e=Object(c.a)(t,2),n=e[0],r=e[1],a=o.a.useState(!1),i=Object(c.a)(a,2),u=i[0],s=i[1],f=o.a.useState(!1),p=Object(c.a)(f,2),d=p[0],v=p[1],m=o.a.useState("m3"),y=Object(c.a)(m,2),g=y[0],x=y[1],L=o.a.useState(null),O=Object(c.a)(L,2),j=O[0],S=O[1];function k(t,e){console.log("".concat(t," -> ").concat(e)),x(e)}function N(){s(!1),d&&k(null,E[Math.floor(Math.random()*E.length)]),r(n+1>=b.length?0:n+1)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Note: ",l.a.pitchClass(b[n].P1)," Interval: ",g),o.a.createElement("div",null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Interval Options"),E.map(function(t,e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"intervalOption"},o.a.createElement("input",{name:"intervalSelection",type:"radio",key:t,value:t,checked:t===g,onChange:function(e){return k(e,t)}}),o.a.createElement("label",null,t)))}),o.a.createElement("span",{className:"intervalOption"},o.a.createElement("input",{type:"checkbox",name:"randomIntervalInput",checked:d,onChange:function(){return function(){var t=!d;v(t),t&&N()}()}}),o.a.createElement("label",null,"Random")),o.a.createElement("input",{type:"button",onClick:function(){return N()},value:"Change Note"}))),o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{onFretboardClick:function(t,e,r){return function(t){var e=b[n];l.a.chroma(e[g])===l.a.chroma(t.note.pc)&&(s(!0),setTimeout(function(){N()},700))}(t)},selectedNotes:function(t){var e=b[t],n=[{note:e.P1,color:"blue"}];return u&&n.push({note:e[g],color:"red"}),j&&n.push({note:j,color:"yellow"}),n}(n),selectedNotesOct:!1,displayNoteName:!1,darkMode:!0})),o.a.createElement("div",null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Audio Options"),o.a.createElement(w,{setNotePlayed:S}))))},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})},O=document.getElementById("root");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),O),L()}},[[16,1,2]]]);
//# sourceMappingURL=main.11f593ba.chunk.js.map