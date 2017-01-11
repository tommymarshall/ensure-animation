var EnsureAnimation=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(15),u=i(c),l=(0,u["default"])({}),f=function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)},h=function(){var t=document.createElement("fakeelement"),e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]},p=h(),d={finishClass:null,until:null,target:null},v=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),this.el=e,this.props=o({},d,n),this.setup(),this.reset(),this.check()}return a(t,[{key:"setup",value:function(){var t=this.props,e=t.finishClass?t.finishClass:this.el.getAttribute("data-ensure-finish-class")?this.el.getAttribute("data-ensure-finish-class"):"ensure-target-finished",n=t.target?t.target:this.el.getAttribute("data-ensure-target")?document.querySelectorAll(this.el.getAttribute("data-ensure-target"))[0]:this.el,i=t.until?t.until:this.el.getAttribute("data-ensure-until")?this.el.getAttribute("data-ensure-until"):".ensure-animation-loaded";this.state={finishClass:e,target:n,until:i}}},{key:"reset",value:function(){this.iterations=1,this.shouldRun=!0,this.isFinished=!1,this.isEmitted=!1,this.el.style.animationIterationCount=1,this.checkReference=this.continueChecking.bind(this),this.el.removeEventListener(p,this.checkReference,!1)}},{key:"restart",value:function(){var t=this.el.classList,e=this.state.target.classList;e.remove(this.state.finishClass);var n=t.toString().split(" ");t.remove.apply(t,r(n)),void this.el.offsetWidth,t.add.apply(t,r(n)),this.el.removeEventListener(p,this.checkReference,!1),this.reset(),this.check()}},{key:"check",value:function(){this.el.addEventListener(p,this.checkReference,!1)}},{key:"finish",value:function(){var t=this;return new Promise(function(e){t.shouldRun=!1,t.isEmitted||(t.isEmitted=!0,l.on("finished",e))})}},{key:"continueChecking",value:function(){return f(this.state.target,this.state.until)&&(this.stop(),l.emit("finished")),this.shouldRun?(this.iterations+=1,void(this.el.style.animationIterationCount=this.iterations)):(this.isFinished=!0,this.state.finishClass&&this.state.target.classList.add(this.state.finishClass),void(this.isFinished&&(this.isFinished=!1,l.emit("finished"))))}},{key:"stop",value:function(){this.shouldRun=!1,this.el.removeEventListener(p,this.checkReference,!1)}}]),t}();t.exports=function y(t,e){s(this,y);for(var n=document.querySelectorAll(t),i=[],r=0;r<n.length;r++)i.push(new v(n[r],e));return i}},function(t,e,n){"use strict";var i,r=n(2),s=n(9),o=n(5),a=n(12);i=t.exports=function(t,e){var n,i,o,c,u;return arguments.length<2||"string"!=typeof t?(c=e,e=t,t=null):c=arguments[2],null==t?(n=o=!0,i=!1):(n=a.call(t,"c"),i=a.call(t,"e"),o=a.call(t,"w")),u={value:e,configurable:n,enumerable:i,writable:o},c?r(s(c),u):u},i.gs=function(t,e,n){var i,c,u,l;return"string"!=typeof t?(u=n,n=e,e=t,t=null):u=arguments[3],null==e?e=void 0:o(e)?null==n?n=void 0:o(n)||(u=n,n=void 0):(u=e,e=n=void 0),null==t?(i=!0,c=!1):(i=a.call(t,"c"),c=a.call(t,"e")),l={get:e,set:n,configurable:i,enumerable:c},u?r(s(u),l):l}},function(t,e,n){"use strict";t.exports=n(3)()?Object.assign:n(4)},function(t,e){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var i=n(6),r=n(11),s=Math.max;t.exports=function(t,e){var n,o,a,c=s(arguments.length,2);for(t=Object(r(t)),a=function(i){try{t[i]=e[i]}catch(r){n||(n=r)}},o=1;o<c;++o)e=arguments[o],i(e).forEach(a);if(void 0!==n)throw n;return t}},function(t,e){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";t.exports=n(7)()?Object.keys:n(8)},function(t,e){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e){"use strict";var n=Object.keys;t.exports=function(t){return n(null==t?t:Object(t))}},function(t,e){"use strict";var n=Array.prototype.forEach,i=Object.create,r=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=i(null);return n.call(arguments,function(t){null!=t&&r(Object(t),e)}),e}},function(t,e){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e){"use strict";t.exports=function(t){if(null==t)throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=n(13)()?String.prototype.contains:n(14)},function(t,e){"use strict";var n="razdwatrzy";t.exports=function(){return"function"==typeof n.contains&&(n.contains("dwa")===!0&&n.contains("foo")===!1)}},function(t,e){"use strict";var n=String.prototype.indexOf;t.exports=function(t){return n.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var i,r,s,o,a,c,u,l=n(1),f=n(10),h=Function.prototype.apply,p=Function.prototype.call,d=Object.create,v=Object.defineProperty,y=Object.defineProperties,b=Object.prototype.hasOwnProperty,g={configurable:!0,enumerable:!1,writable:!0};i=function(t,e){var n;return f(e),b.call(this,"__ee__")?n=this.__ee__:(n=g.value=d(null),v(this,"__ee__",g),g.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},r=function(t,e){var n,r;return f(e),r=this,i.call(this,t,n=function(){s.call(r,t,n),h.call(e,this,arguments)}),n.__eeOnceListener__=e,this},s=function(t,e){var n,i,r,s;if(f(e),!b.call(this,"__ee__"))return this;if(n=this.__ee__,!n[t])return this;if(i=n[t],"object"==typeof i)for(s=0;r=i[s];++s)r!==e&&r.__eeOnceListener__!==e||(2===i.length?n[t]=i[s?0:1]:i.splice(s,1));else i!==e&&i.__eeOnceListener__!==e||delete n[t];return this},o=function(t){var e,n,i,r,s;if(b.call(this,"__ee__")&&(r=this.__ee__[t]))if("object"==typeof r){for(n=arguments.length,s=new Array(n-1),e=1;e<n;++e)s[e-1]=arguments[e];for(r=r.slice(),e=0;i=r[e];++e)h.call(i,this,s)}else switch(arguments.length){case 1:p.call(r,this);break;case 2:p.call(r,this,arguments[1]);break;case 3:p.call(r,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,s=new Array(n-1),e=1;e<n;++e)s[e-1]=arguments[e];h.call(r,this,s)}},a={on:i,once:r,off:s,emit:o},c={on:l(i),once:l(r),off:l(s),emit:l(o)},u=y({},c),t.exports=e=function(t){return null==t?d(u):y(Object(t),c)},e.methods=a}]);
//# sourceMappingURL=index.js.map