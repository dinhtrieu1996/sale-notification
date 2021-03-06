(function () {
  var loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    // If the browser is Internet Explorer.
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
      // For any other browser.
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  var initSimesyNotificationLibrary = function (jQuery) {
    !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).liquidjs={})}(this,function(p){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var x=function(){return(x=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function o(t,s,a,u){return new(a=a||Promise)(function(e,r){function n(t){try{o(u.next(t))}catch(t){r(t)}}function i(t){try{o(u.throw(t))}catch(t){r(t)}}function o(t){t.done?e(t.value):function(e){return e instanceof a?e:new a(function(t){t(e)})}(t.value).then(n,i)}o((u=u.apply(t,s||[])).next())})}function q(r,n){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(r,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function O(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function w(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||((n=n||Array.prototype.slice.call(e,0,i))[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))}var s=(e.prototype.valueOf=function(){},e.prototype.liquidMethodMissing=function(t){},e);function e(){}var r=Object.prototype.toString,i=String.prototype.toLowerCase,a=Object.hasOwnProperty;function u(t){return"string"==typeof t}function c(t){return"function"==typeof t}function l(t){return u(t=f(t))?t:d(t)?"":v(t)?t.map(function(t){return l(t)}).join(""):String(t)}function f(t){return t instanceof s?t.valueOf():t}function h(t){return"number"==typeof t}function d(t){return null==t}function v(t){return"[object Array]"===r.call(t)}function g(t,e){for(var r in t=t||{})if(a.call(t,r)&&!1===e(t[r],r,t))break;return t}function y(t){return t[t.length-1]}function b(t){var e=typeof t;return null!==t&&("object"==e||"function"==e)}function T(t,e,r){void 0===r&&(r=1);for(var n=[],i=t;i<e;i+=r)n.push(i);return n}function k(t,e,r){return void 0===r&&(r=" "),R(t,e,r,function(t,e){return e+t})}function R(t,e,r,n){for(var i=e-(t=String(t)).length;0<i--;)t=n(t,r);return t}function S(t){return t}function F(t){return t.replace(/(\w?)([A-Z])/g,function(t,e,r){return(e?e+"_":"")+r.toLowerCase()})}function E(t,e){return null==t&&null==e?0:null==t?1:null==e?-1:(t=i.call(t))<(e=i.call(e))?-1:e<t?1:0}function L(r){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(void 0,w([],m(t.map(f)),!1))}}function P(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}var D=function(t,e,r,n){this.key=t,this.value=e,this.next=r,this.prev=n},M=(_.prototype.write=function(t,e){if(this.cache[t])this.cache[t].value=e;else{var r=new D(t,e,this.head.next,this.head);this.head.next.prev=r,this.head.next=r,this.cache[t]=r,this.size++,this.ensureLimit()}},_.prototype.read=function(t){if(this.cache[t]){var e=this.cache[t].value;return this.remove(t),this.write(t,e),e}},_.prototype.remove=function(t){var e=this.cache[t];e.prev.next=e.next,e.next.prev=e.prev,delete this.cache[t],this.size--},_.prototype.clear=function(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}},_.prototype.ensureLimit=function(){this.size>this.limit&&this.remove(this.tail.prev.key)},_);function _(t,e){void 0===e&&(e=0),this.limit=t,this.size=e,this.cache={},this.head=new D("HEAD",null,null,null),this.tail=new D("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}function N(t,e){var r=document.createElement("base");r.href=t;var n=document.getElementsByTagName("head")[0];n.insertBefore(r,n.firstChild);var i=document.createElement("a");i.href=e;var o=i.href;return n.removeChild(r),o}var j=Object.freeze({__proto__:null,resolve:function(t,e,i){return t.length&&"/"!==y(t)&&(t+="/"),N(t,e).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,function(t,e,r){var n=r.split("/").pop();return/\.\w+$/.test(n)?t:e+r+i})},readFile:function(n){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,new Promise(function(t,e){var r=new XMLHttpRequest;r.onload=function(){200<=r.status&&r.status<300?t(r.responseText):e(new Error(r.statusText))},r.onerror=function(){e(new Error("An error occurred whilst receiving the response."))},r.open("GET",n),r.send()})]})})},readFileSync:function(t){var e=new XMLHttpRequest;if(e.open("GET",t,!1),e.send(),e.status<200||300<=e.status)throw new Error(e.statusText);return e.responseText},exists:function(t){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,!0]})})},existsSync:function(t){return!0},dirname:function(t){return N(t,".")},sep:"/"});function A(t){return t&&c(t.equals)}function I(t,e){return!z(t,e)}function z(t,e){return e.opts.jsTruthy?!t:!1===t||null==t}var V={"==":function(t,e){return A(t)?t.equals(e):A(e)?e.equals(t):t===e},"!=":function(t,e){return A(t)?!t.equals(e):A(e)?!e.equals(t):t!==e},">":function(t,e){return A(t)?t.gt(e):A(e)?e.lt(t):e<t},"<":function(t,e){return A(t)?t.lt(e):A(e)?e.gt(t):t<e},">=":function(t,e){return A(t)?t.geq(e):A(e)?e.leq(t):e<=t},"<=":function(t,e){return A(t)?t.leq(e):A(e)?e.geq(t):t<=e},contains:function(t,e){return!(!t||!c(t.indexOf))&&-1<t.indexOf(e)},and:function(t,e,r){return I(t,r)&&I(e,r)},or:function(t,e,r){return I(t,r)||I(e,r)}},B=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],C=1,H=4,K=16;function U(t){var e,r,n={};try{for(var i=O(Object.entries(t)),o=i.next();!o.done;o=i.next()){for(var s=m(o.value,2),a=s[0],u=s[1],c=n,l=0;l<a.length;l++){var h=a[l];c[h]=c[h]||{},l===a.length-1&&B[a.charCodeAt(l)]&C&&(c[h].needBoundary=!0),c=c[h]}c.handler=u,c.end=!0}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n}B[160]=B[5760]=B[6158]=B[8192]=B[8193]=B[8194]=B[8195]=B[8196]=B[8197]=B[8198]=B[8199]=B[8200]=B[8201]=B[8202]=B[8232]=B[8233]=B[8239]=B[8287]=B[12288]=H;var Q={root:["."],layouts:["."],partials:["."],relativeReference:!0,jekyllInclude:!1,cache:void 0,extname:"",fs:j,dynamicPartials:!0,jsTruthy:!1,trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,ownPropertyOnly:!1,lenientIf:!1,globals:{},keepOutputType:!1,operators:V,operatorsTrie:U(V)};function $(t){var e=[];return v(t)&&(e=t),u(t)&&(e=[t]),e}var W,Y=(t(J,W=Error),J.prototype.update=function(){var t=this.originalError;this.context=function(t){var i=m(t.getPosition(),1)[0],o=t.input.split("\n"),e=Math.max(i-2,1),s=Math.min(i+3,o.length);return T(e,s+1).map(function(t){var e=t===i?">> ":"   ",r=k(String(t),String(s).length),n=o[t-1];return"".concat(e).concat(r,"| ").concat(n)}).join("\n")}(this.token),this.message=function(t,e){e.file&&(t+=", file:".concat(e.file));var r=m(e.getPosition(),2),n=r[0],i=r[1];return t+=", line:".concat(n,", col:").concat(i)}(t.message,this.token),this.stack=this.message+"\n"+this.context+"\n"+this.stack+"\nFrom "+t.stack},J);function J(t,e){var r=W.call(this,t.message)||this;return r.originalError=t,r.token=e,r.context="",r}var G,X=(t(Z,G=Y),Z);function Z(t,e){var r=G.call(this,new Error(t),e)||this;return r.name="TokenizationError",G.prototype.update.call(r),r}var tt,et=(t(rt,tt=Y),rt);function rt(t,e){var r=tt.call(this,t,e)||this;return r.name="ParseError",r.message=t.message,tt.prototype.update.call(r),r}var nt,it=(t(ot,nt=Y),ot.is=function(t){return"RenderError"===t.name},ot);function ot(t,e){var r=nt.call(this,t,e.token)||this;return r.name="RenderError",r.message=t.message,nt.prototype.update.call(r),r}var st,at=(t(ut,st=Y),ut);function ut(t,e){var r=st.call(this,t,e)||this;return r.name="UndefinedVariableError",r.message=t.message,st.prototype.update.call(r),r}var ct,lt=(t(ht,ct=Error),ht);function ht(t){var e=ct.call(this,"undefined variable: ".concat(t))||this;return e.name="InternalUndefinedVariableError",e.variableName=t,e}var pt,ft=(t(dt,pt=Error),dt);function dt(t){var e=pt.call(this,t)||this;return e.name="AssertionError",e.message=t+"",e}var vt,gt,yt=(mt.prototype.getRegister=function(t){return this.registers[t]=this.registers[t]||{}},mt.prototype.setRegister=function(t,e){return this.registers[t]=e},mt.prototype.saveRegister=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.map(function(t){return[t,e.getRegister(t)]})},mt.prototype.restoreRegister=function(t){var i=this;return t.forEach(function(t){var e=m(t,2),r=e[0],n=e[1];return i.setRegister(r,n)})},mt.prototype.getAll=function(){return w([this.globals,this.environments],m(this.scopes),!1).reduce(function(t,e){return x(t,e)},{})},mt.prototype.get=function(t){var e=this.findScope(t[0]);return this.getFromScope(e,t)},mt.prototype.getFromScope=function(t,n){var i=this;return u(n)&&(n=n.split(".")),n.reduce(function(t,e,r){if(d(t=function(t,e,r){if(d(t))return t;if(v(t=function t(e){return e&&c(e.toLiquid)?t(e.toLiquid()):e}(t))&&e<0)return t[t.length+ +e];var n=function(t,e,r){return r&&!Object.hasOwnProperty.call(t,e)?void 0:t[e]}(t,e,r);return void 0===n&&t instanceof s?t.liquidMethodMissing(e):c(n)?n.call(t):"size"===e?function(t){return t.hasOwnProperty("size")||void 0!==t.size?t.size:v(t)||u(t)?t.length:"object"==typeof t?Object.keys(t).length:void 0}(t):"first"===e?function(t){return v(t)?t[0]:t.first}(t):"last"===e?function(t){return v(t)?t[t.length-1]:t.last}(t):n}(t,e,i.opts.ownPropertyOnly))&&i.strictVariables)throw new lt(n.slice(0,r+1).join("."));return t},t)},mt.prototype.push=function(t){return this.scopes.push(t)},mt.prototype.pop=function(){return this.scopes.pop()},mt.prototype.bottom=function(){return this.scopes[0]},mt.prototype.findScope=function(t){for(var e=this.scopes.length-1;0<=e;e--){var r=this.scopes[e];if(t in r)return r}return t in this.environments?this.environments:this.globals},mt);function mt(t,e,r){var n,i;void 0===t&&(t={}),void 0===e&&(e=Q),void 0===r&&(r={}),this.scopes=[{}],this.registers={},this.sync=!!r.sync,this.opts=e,this.globals=null!==(n=r.globals)&&void 0!==n?n:e.globals,this.environments=t,this.strictVariables=null!==(i=r.strictVariables)&&void 0!==i?i:this.opts.strictVariables}function wt(t,e){if(!t){var r="function"==typeof e?e():e||"expect ".concat(t," to be true");throw new ft(r)}}(gt=vt=vt||{}).Partials="partials",gt.Layouts="layouts",gt.Root="root";var bt=(Tt.prototype.lookup=function(e,r,n,i){var o,s,a,u,c,l,h,p,f;return q(this,function(t){switch(t.label){case 0:o=this.options.fs,s=this.options[r],t.label=1;case 1:t.trys.push([1,8,9,10]),a=O(this.candidates(e,s,i,r!==vt.Root)),u=a.next(),t.label=2;case 2:return u.done?[3,7]:(c=u.value,n?(l=o.existsSync(c),[3,5]):[3,3]);case 3:return[4,o.exists(c)];case 4:l=t.sent(),t.label=5;case 5:if(l)return[2,c];t.label=6;case 6:return u=a.next(),[3,2];case 7:return[3,10];case 8:return h=t.sent(),p={error:h},[3,10];case 9:try{u&&!u.done&&(f=a.return)&&f.call(a)}finally{if(p)throw p.error}return[7];case 10:throw this.lookupError(e,s)}})},Tt.prototype.candidates=function(e,r,n,i){var o,s,a,u,c,l,h,p,f,d,v,g,y,m,w,b;return q(this,function(t){switch(t.label){case 0:if(o=this.options,s=o.fs,a=o.extname,!this.shouldLoadRelative(e)||!n)return[3,8];d=s.resolve(this.dirname(n),e,a),t.label=1;case 1:t.trys.push([1,6,7,8]),u=O(r),c=u.next(),t.label=2;case 2:return c.done?[3,5]:(f=c.value,i&&!this.contains(f,d)?[3,4]:[4,d]);case 3:return t.sent(),[3,5];case 4:return c=u.next(),[3,2];case 5:return[3,8];case 6:return l=t.sent(),y={error:l},[3,8];case 7:try{c&&!c.done&&(m=u.return)&&m.call(u)}finally{if(y)throw y.error}return[7];case 8:t.trys.push([8,13,14,15]),h=O(r),p=h.next(),t.label=9;case 9:return p.done?[3,12]:(f=p.value,d=s.resolve(f,e,a),i&&!this.contains(f,d)?[3,11]:[4,d]);case 10:t.sent(),t.label=11;case 11:return p=h.next(),[3,9];case 12:return[3,15];case 13:return v=t.sent(),w={error:v},[3,15];case 14:try{p&&!p.done&&(b=h.return)&&b.call(h)}finally{if(w)throw w.error}return[7];case 15:return void 0===s.fallback?[3,17]:void 0===(g=s.fallback(e))?[3,17]:[4,g];case 16:t.sent(),t.label=17;case 17:return[2]}})},Tt.prototype.dirname=function(t){var e=this.options.fs;return wt(e.dirname,"`fs.dirname` is required for relative reference"),e.dirname(t)},Tt.prototype.lookupError=function(t,e){var r=new Error("ENOENT");return r.message='ENOENT: Failed to lookup "'.concat(t,'" in "').concat(e,'"'),r.code="ENOENT",r},Tt);function Tt(t){if((this.options=t).relativeReference){var e=t.fs.sep;wt(e,"`fs.sep` is required for relative reference");var r=new RegExp(["."+e,".."+e,"./","../"].map(function(t){return function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}(t)}).join("|"));this.shouldLoadRelative=function(t){return r.test(t)}}else this.shouldLoadRelative=function(t){return!1};this.contains=this.options.fs.contains||function(){return!0}}var kt=(xt.prototype.write=function(t){this.buffer+=l(t)},xt);function xt(){this.buffer=""}var qt=function(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")};function Ot(e){var t={then:function(t){return t(e)},catch:function(){return t}};return t}function Rt(r){var n={then:function(t,e){return e?e(r):n},catch:function(t){return t(r)}};return n}function St(n){return function(t){return t&&c(t.then)}(n)?n:function(t){return t&&c(t.next)&&c(t.throw)&&c(t.return)}(n)?function r(t){var e;try{e=n.next(t)}catch(t){return Rt(t)}if(e.done)return Ot(e.value);return St(e.value).then(r,function(t){var e;try{e=n.throw(t)}catch(t){return Rt(t)}return e.done?Ot(e.value):r(e.value)})}():Ot(n)}function Ft(t){return Promise.resolve(St(t))}function Et(t){var e;return St(t).then(function(t){return Ot(e=t)}).catch(function(t){throw t}),e}var Lt=(Pt.prototype.write=function(t){"string"!=typeof(t=f(t))&&""===this.buffer?this.buffer=t:this.buffer=l(this.buffer)+l(t)},Pt);function Pt(){this.buffer=""}var Dt,Mt=(_t.prototype.renderTemplatesToNodeStream=function(t,e){var r=this,n=new qt;return Promise.resolve().then(function(){return St(r.renderTemplates(t,e,n))}).then(function(){return n.end()},function(t){return n.error(t)}),n.stream},_t.prototype.renderTemplates=function(e,r,n){var i,o,s,a,u,c,l,h;return q(this,function(t){switch(t.label){case 0:n=n||(r.opts.keepOutputType?new Lt:new kt),t.label=1;case 1:t.trys.push([1,8,9,10]),i=O(e),o=i.next(),t.label=2;case 2:if(o.done)return[3,7];s=o.value,t.label=3;case 3:return t.trys.push([3,5,,6]),[4,s.render(r,n)];case 4:return(a=t.sent())&&n.write(a),n.break||n.continue?[3,7]:[3,6];case 5:throw u=t.sent(),it.is(u)?u:new it(u,s);case 6:return o=i.next(),[3,2];case 7:return[3,10];case 8:return c=t.sent(),l={error:c},[3,10];case 9:try{o&&!o.done&&(h=i.return)&&h.call(i)}finally{if(l)throw l.error}return[7];case 10:return[2,n.buffer]}})},_t);function _t(){}function Nt(t){return!!(Qt(t)&p.TokenKind.Delimited)}function jt(t){return Qt(t)===p.TokenKind.Operator}function At(t){return Qt(t)===p.TokenKind.HTML}function It(t){return Qt(t)===p.TokenKind.Output}function zt(t){return Qt(t)===p.TokenKind.Tag}function Vt(t){return Qt(t)===p.TokenKind.Quoted}function Bt(t){return Qt(t)===p.TokenKind.Literal}function Ct(t){return Qt(t)===p.TokenKind.Number}function Ht(t){return Qt(t)===p.TokenKind.PropertyAccess}function Kt(t){return Qt(t)===p.TokenKind.Word}function Ut(t){return Qt(t)===p.TokenKind.Range}function Qt(t){return t?t.kind:-1}p.TokenKind=void 0,(Dt=p.TokenKind||(p.TokenKind={}))[Dt.Number=1]="Number",Dt[Dt.Literal=2]="Literal",Dt[Dt.Tag=4]="Tag",Dt[Dt.Output=8]="Output",Dt[Dt.HTML=16]="HTML",Dt[Dt.Filter=32]="Filter",Dt[Dt.Hash=64]="Hash",Dt[Dt.PropertyAccess=128]="PropertyAccess",Dt[Dt.Word=256]="Word",Dt[Dt.Range=512]="Range",Dt[Dt.Quoted=1024]="Quoted",Dt[Dt.Operator=2048]="Operator",Dt[Dt.Delimited=12]="Delimited";var $t=Object.freeze({__proto__:null,isDelimitedToken:Nt,isOperatorToken:jt,isHTMLToken:At,isOutputToken:It,isTagToken:zt,isQuotedToken:Vt,isLiteralToken:Bt,isNumberToken:Ct,isPropertyAccessToken:Ht,isWordToken:Kt,isRangeToken:Ut}),Wt=(Yt.prototype.on=function(t,e){return this.handlers[t]=e,this},Yt.prototype.trigger=function(t,e){var r=this.handlers[t];return!!r&&(r.call(this,e),!0)},Yt.prototype.start=function(){var t;for(this.trigger("start");!this.stopRequested&&(t=this.tokens.shift());)if(!(this.trigger("token",t)||zt(t)&&this.trigger("tag:".concat(t.name),t))){var e=this.parseToken(t,this.tokens);this.trigger("template",e)}return this.stopRequested||this.trigger("end"),this},Yt.prototype.stop=function(){return this.stopRequested=!0,this},Yt);function Yt(t,e){this.handlers={},this.stopRequested=!1,this.tokens=t,this.parseToken=e}function Jt(t){this.token=t}var Gt,Xt=(t(Zt,Gt=s),Zt.prototype.equals=function(t){return d(f(t))},Zt.prototype.gt=function(){return!1},Zt.prototype.geq=function(){return!1},Zt.prototype.lt=function(){return!1},Zt.prototype.leq=function(){return!1},Zt.prototype.valueOf=function(){return null},Zt);function Zt(){return null!==Gt&&Gt.apply(this,arguments)||this}var te,ee=(t(re,te=s),re.prototype.equals=function(t){return!(t instanceof re||(u(t=f(t))||v(t)?0!==t.length:!b(t)||0!==Object.keys(t).length))},re.prototype.gt=function(){return!1},re.prototype.geq=function(){return!1},re.prototype.lt=function(){return!1},re.prototype.leq=function(){return!1},re.prototype.valueOf=function(){return""},re);function re(){return null!==te&&te.apply(this,arguments)||this}var ne,ie=(t(oe,ne=ee),oe.prototype.equals=function(t){return!1===t||!!d(f(t))||(u(t)?/^\s*$/.test(t):ne.prototype.equals.call(this,t))},oe);function oe(){return null!==ne&&ne.apply(this,arguments)||this}var se=new Xt,ae={true:!0,false:!1,nil:se,null:se,empty:new ee,blank:new ie},ue=/[\da-fA-F]/,ce=/[0-7]/,le={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v"};function he(t){var e=t.charCodeAt(0);return 97<=e?e-87:65<=e?e-55:e-48}function pe(t){for(var e="",r=1;r<t.length-1;r++)if("\\"===t[r])if(void 0!==le[t[r+1]])e+=le[t[++r]];else if("u"===t[r+1]){for(var n=0,i=r+2;i<=r+5&&ue.test(t[i]);)n=16*n+he(t[i++]);r=i-1,e+=String.fromCharCode(n)}else if(ce.test(t[r+1])){for(i=r+1,n=0;i<=r+3&&ce.test(t[i]);)n=8*n+he(t[i++]);r=i-1,e+=String.fromCharCode(n)}else e+=t[++r];else e+=t[r];return e}var fe=(de.prototype.evaluate=function(e,r){var n,i,o,s,a,u,c,l,h,p,f,d;return q(this,function(t){switch(t.label){case 0:wt(e,"unable to evaluate: context not defined"),n=[],t.label=1;case 1:t.trys.push([1,9,10,11]),i=O(this.postfix),o=i.next(),t.label=2;case 2:return o.done?[3,8]:jt(s=o.value)?[4,n.pop()]:[3,5];case 3:return a=t.sent(),[4,n.pop()];case 4:return u=t.sent(),c=function(t,e,r,n,i){return(0,t[e.operator])(r,n,i)}(e.opts.operators,s,u,a,e),n.push(c),[3,7];case 5:return h=(l=n).push,[4,ve(s,e,r&&1===this.postfix.length)];case 6:h.apply(l,[t.sent()]),t.label=7;case 7:return o=i.next(),[3,2];case 8:return[3,11];case 9:return p=t.sent(),f={error:p},[3,11];case 10:try{o&&!o.done&&(d=i.return)&&d.call(i)}finally{if(f)throw f.error}return[7];case 11:return[2,n[0]]}})},de);function de(t){this.postfix=w([],m(function(e){var r,n,i,o,s,a,u;return q(this,function(t){switch(t.label){case 0:r=[],t.label=1;case 1:t.trys.push([1,10,11,12]),n=O(e),i=n.next(),t.label=2;case 2:if(i.done)return[3,9];if(!jt(o=i.value))return[3,6];t.label=3;case 3:return r.length&&r[r.length-1].getPrecedence()>o.getPrecedence()?[4,r.pop()]:[3,5];case 4:return t.sent(),[3,3];case 5:return r.push(o),[3,8];case 6:return[4,o];case 7:t.sent(),t.label=8;case 8:return i=n.next(),[3,2];case 9:return[3,12];case 10:return s=t.sent(),a={error:s},[3,12];case 11:try{i&&!i.done&&(u=n.return)&&u.call(n)}finally{if(a)throw a.error}return[7];case 12:return r.length?[4,r.pop()]:[3,14];case 13:return t.sent(),[3,12];case 14:return[2]}})}(t)),!1)}function ve(t,e,r){return void 0===r&&(r=!1),Ht(t)?function(e,r,n){var t=e.props.map(function(t){return ve(t,r,!1)});try{return r.get(w([e.propertyName],m(t),!1))}catch(t){if(n&&"InternalUndefinedVariableError"===t.name)return null;throw new at(t,e)}}(t,e,r):Ut(t)?function(t,e){var r=ve(t.lhs,e),n=ve(t.rhs,e);return T(+r,+n+1)}(t,e):Bt(t)?function(t){return ae[t.literal]}(t):Ct(t)?function(t){var e=t.whole.content+"."+(t.decimal?t.decimal.content:"");return Number(e)}(t):Kt(t)?t.getText():Vt(t)?ge(t):void 0}function ge(t){return pe(t.getText())}var ye=(me.prototype.getText=function(){return this.input.slice(this.begin,this.end)},me.prototype.getPosition=function(){for(var t=m([1,1],2),e=t[0],r=t[1],n=0;n<this.begin;n++)"\n"===this.input[n]?(e++,r=1):r++;return[e,r]},me.prototype.size=function(){return this.end-this.begin},me);function me(t,e,r,n,i){this.kind=t,this.input=e,this.begin=r,this.end=n,this.file=i}var we,be=(t(Te,we=ye),Te);function Te(t,e,r,n,i,o,s,a){var u=we.call(this,t,r,n,i,a)||this;u.trimLeft=!1,u.trimRight=!1,u.content=u.getText();var c="-"===e[0],l="-"===y(e);return u.content=e.slice(c?1:0,l?-1:e.length).trim(),u.trimLeft=c||o,u.trimRight=l||s,u}function ke(t,e){if(t&&At(t))for(var r=e?H:K;B[t.input.charCodeAt(t.end-1-t.trimRight)]&r;)t.trimRight++}function xe(t,e){if(t&&At(t)){for(var r=e?H:K;B[t.input.charCodeAt(t.begin+t.trimLeft)]&r;)t.trimLeft++;"\n"===t.input.charAt(t.begin+t.trimLeft)&&t.trimLeft++}}var qe,Oe=(t(Re,qe=ye),Re);function Re(t,e){var r=qe.call(this,p.TokenKind.Number,t.input,t.begin,e?e.end:t.end,t.file)||this;return r.whole=t,r.decimal=e,r}var Se,Fe=(t(Ee,Se=ye),Ee.prototype.isNumber=function(t){void 0===t&&(t=!1);for(var e=t&&64&B[this.input.charCodeAt(this.begin)]?this.begin+1:this.begin;e<this.end;e++)if(!(32&B[this.input.charCodeAt(e)]))return!1;return!0},Ee);function Ee(t,e,r,n){var i=Se.call(this,p.TokenKind.Word,t,e,r,n)||this;return i.input=t,i.begin=e,i.end=r,i.file=n,i.content=i.getText(),i}var Le,Pe=(t(De,Le=ye),De);function De(t,e,r,n){var i=Le.call(this,p.TokenKind.Literal,t,e,r,n)||this;return i.input=t,i.begin=e,i.end=r,i.file=n,i.literal=i.getText(),i}var Me,_e={"==":1,"!=":1,">":1,"<":1,">=":1,"<=":1,contains:1,and:0,or:0},Ne=(t(je,Me=ye),je.prototype.getPrecedence=function(){var t=this.getText();return t in _e?_e[t]:1},je);function je(t,e,r,n){var i=Me.call(this,p.TokenKind.Operator,t,e,r,n)||this;return i.input=t,i.begin=e,i.end=r,i.file=n,i.operator=i.getText(),i}var Ae,Ie=(t(ze,Ae=ye),ze);function ze(t,e,r){var n=Ae.call(this,p.TokenKind.PropertyAccess,t.input,t.begin,r,t.file)||this;return n.variable=t,n.props=e,n.propertyName=n.variable instanceof Fe?n.variable.getText():pe(n.variable.getText()),n}var Ve,Be=(t(Ce,Ve=ye),Ce);function Ce(t,e,r,n,i,o){var s=Ve.call(this,p.TokenKind.Filter,r,n,i,o)||this;return s.name=t,s.args=e,s}var He,Ke=(t(Ue,He=ye),Ue);function Ue(t,e,r,n,i,o){var s=He.call(this,p.TokenKind.Hash,t,e,r,o)||this;return s.input=t,s.begin=e,s.end=r,s.name=n,s.value=i,s.file=o,s}var Qe,$e=(t(We,Qe=ye),We);function We(t,e,r,n){var i=Qe.call(this,p.TokenKind.Quoted,t,e,r,n)||this;return i.input=t,i.begin=e,i.end=r,i.file=n,i}var Ye,Je=(t(Ge,Ye=ye),Ge.prototype.getContent=function(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)},Ge);function Ge(t,e,r,n){var i=Ye.call(this,p.TokenKind.HTML,t,e,r,n)||this;return i.input=t,i.begin=e,i.end=r,i.file=n,i.trimLeft=0,i.trimRight=0,i}var Xe,Ze=(t(tr,Xe=ye),tr);function tr(t,e,r,n,i,o){var s=Xe.call(this,p.TokenKind.Range,t,e,r,o)||this;return s.input=t,s.begin=e,s.end=r,s.lhs=n,s.rhs=i,s.file=o,s}var er,rr=(t(nr,er=be),nr);function nr(t,e,r,n,i){var o=n.trimOutputLeft,s=n.trimOutputRight,a=n.outputDelimiterLeft,u=n.outputDelimiterRight,c=t.slice(e+a.length,r-u.length);return er.call(this,p.TokenKind.Output,c,t,e,r,o,s,i)||this}var ir,or=(t(sr,ir=be),sr);function sr(t,e,r,n,i){var o=this,s=t.slice(e,r);if(o=ir.call(this,p.TokenKind.Tag,s,t,e,r,!1,!1,i)||this,/\S/.test(s)){var a=new ar(o.content,n.operatorsTrie);if(o.name=a.readIdentifier().getText(),!o.name)throw new X("illegal liquid tag syntax",o);a.skipBlank(),o.args=a.remaining()}else o.name="",o.args="";return o}var ar=(ur.prototype.readExpression=function(){return new fe(this.readExpressionTokens())},ur.prototype.readExpressionTokens=function(){var e,r,n;return q(this,function(t){switch(t.label){case 0:return(e=this.readValue())?[4,e]:[2];case 1:t.sent(),t.label=2;case 2:return this.p<this.N?(r=this.readOperator())&&(n=this.readValue())?[4,r]:[2]:[3,5];case 3:return t.sent(),[4,n];case 4:return t.sent(),[3,2];case 5:return[2]}})},ur.prototype.readOperator=function(){this.skipBlank();var t=function(t,e,r,n){void 0===n&&(n=t.length);for(var i,o=r,s=e;o[t[s]]&&s<n;)(o=o[t[s++]]).end&&(i=o);return i?i.needBoundary&&B[t.charCodeAt(s)]&C?-1:s:-1}(this.input,this.p,this.trie);if(-1!==t)return new Ne(this.input,this.p,this.p=t,this.file)},ur.prototype.readFilters=function(){for(var t=[];;){var e=this.readFilter();if(!e)return t;t.push(e)}},ur.prototype.readFilter=function(){var t=this;if(this.skipBlank(),this.end())return null;wt("|"===this.peek(),function(){return"unexpected token at ".concat(t.snapshot())}),this.p++;var e=this.p,r=this.readIdentifier();if(!r.size())return null;var n=[];if(this.skipBlank(),":"===this.peek())do{++this.p;var i=this.readFilterArg();i&&n.push(i),this.skipBlank(),wt(this.end()||","===this.peek()||"|"===this.peek(),function(){return"unexpected character ".concat(t.snapshot())})}while(","===this.peek());return new Be(r.getText(),n,this.input,e,this.p,this.file)},ur.prototype.readFilterArg=function(){var t=this.readValue();if(t){if(this.skipBlank(),":"!==this.peek())return t;++this.p;var e=this.readValue();return[t.getText(),e]}},ur.prototype.readTopLevelTokens=function(t){void 0===t&&(t=Q);for(var e=[];this.p<this.N;){var r=this.readTopLevelToken(t);e.push(r)}return function(t,e){for(var r=!1,n=0;n<t.length;n++){var i=t[n];Nt(i)&&(!r&&i.trimLeft&&ke(t[n-1],e.greedy),zt(i)&&("raw"===i.name?r=!0:"endraw"===i.name&&(r=!1)),!r&&i.trimRight&&xe(t[n+1],e.greedy))}}(e,t),e},ur.prototype.readTopLevelToken=function(t){var e=t.tagDelimiterLeft,r=t.outputDelimiterLeft;return-1<this.rawBeginAt?this.readEndrawOrRawContent(t):this.match(e)?this.readTagToken(t):this.match(r)?this.readOutputToken(t):this.readHTMLToken([e,r])},ur.prototype.readHTMLToken=function(t){for(var e=this,r=this.p;this.p<this.N&&!t.some(function(t){return e.match(t)});)++this.p;return new Je(this.input,r,this.p,this.file)},ur.prototype.readTagToken=function(t){void 0===t&&(t=Q);var e=this.file,r=this.input,n=this.p;if(-1===this.readToDelimiter(t.tagDelimiterRight))throw this.mkError("tag ".concat(this.snapshot(n)," not closed"),n);var i=new lr(r,n,this.p,t,e);return"raw"===i.name&&(this.rawBeginAt=n),i},ur.prototype.readToDelimiter=function(t){for(;this.p<this.N;)if(8&this.peekType())this.readQuoted();else if(++this.p,this.rmatch(t))return this.p;return-1},ur.prototype.readOutputToken=function(t){void 0===t&&(t=Q);var e=this.file,r=this.input,n=t.outputDelimiterRight,i=this.p;if(-1===this.readToDelimiter(n))throw this.mkError("output ".concat(this.snapshot(i)," not closed"),i);return new rr(r,i,this.p,t,e)},ur.prototype.readEndrawOrRawContent=function(t){for(var e=t.tagDelimiterLeft,r=t.tagDelimiterRight,n=this.p,i=this.readTo(e)-e.length;this.p<this.N;)if("endraw"===this.readIdentifier().getText())for(;this.p<=this.N;){if(this.rmatch(r)){var o=this.p;return n===i?(this.rawBeginAt=-1,new lr(this.input,n,o,t,this.file)):(this.p=i,new Je(this.input,n,i,this.file))}if(this.rmatch(e))break;this.p++}else i=this.readTo(e)-e.length;throw this.mkError("raw ".concat(this.snapshot(this.rawBeginAt)," not closed"),n)},ur.prototype.readLiquidTagTokens=function(t){void 0===t&&(t=Q);for(var e=[];this.p<this.N;){var r=this.readLiquidTagToken(t);r.name&&e.push(r)}return e},ur.prototype.readLiquidTagToken=function(t){var e=this.file,r=this.input,n=this.p,i=this.N;return-1!==this.readToDelimiter("\n")&&(i=this.p),new or(r,n,i,t,e)},ur.prototype.mkError=function(t,e){return new X(t,new Fe(this.input,e,this.N,this.file))},ur.prototype.snapshot=function(t){return void 0===t&&(t=this.p),JSON.stringify(function(t,e){return t.length>e?t.substr(0,e-3)+"...":t}(this.input.slice(t),16))},ur.prototype.readWord=function(){return console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead"),this.readIdentifier()},ur.prototype.readIdentifier=function(){this.skipBlank();for(var t=this.p;this.peekType()&C;)++this.p;return new Fe(this.input,t,this.p,this.file)},ur.prototype.readHashes=function(t){for(var e=[];;){var r=this.readHash(t);if(!r)return e;e.push(r)}},ur.prototype.readHash=function(t){this.skipBlank(),","===this.peek()&&++this.p;var e=this.p,r=this.readIdentifier();if(r.size()){var n;this.skipBlank();var i=t?"=":":";return this.peek()===i&&(++this.p,n=this.readValue()),new Ke(this.input,e,this.p,r,n,this.file)}},ur.prototype.remaining=function(){return this.input.slice(this.p)},ur.prototype.advance=function(t){void 0===t&&(t=1),this.p+=t},ur.prototype.end=function(){return this.p>=this.N},ur.prototype.readTo=function(t){for(;this.p<this.N;)if(++this.p,this.rmatch(t))return this.p;return-1},ur.prototype.readValue=function(){var t=this.readQuoted()||this.readRange();if(t)return t;if("["===this.peek()){if(this.p++,!(i=this.readQuoted()))return;if("]"!==this.peek())return;return this.p++,new Ie(i,[],this.p)}var e=this.readIdentifier();if(e.size()){for(var r=e.isNumber(!0),n=[];;)if("["===this.peek()){r=!1,this.p++;var i=this.readValue()||new Fe(this.input,this.p,this.p,this.file);this.readTo("]"),n.push(i)}else{if("."!==this.peek()||"."===this.peek(1))break;if(this.p++,!(i=this.readIdentifier()).size())break;i.isNumber()||(r=!1),n.push(i)}return!n.length&&ae.hasOwnProperty(e.content)?new Pe(this.input,e.begin,e.end,this.file):r?new Oe(e,n[0]):new Ie(e,n,this.p)}},ur.prototype.readRange=function(){this.skipBlank();var t=this.p;if("("===this.peek()){++this.p;var e=this.readValueOrThrow();this.p+=2;var r=this.readValueOrThrow();return++this.p,new Ze(this.input,t,this.p,e,r,this.file)}},ur.prototype.readValueOrThrow=function(){var t=this,e=this.readValue();return wt(e,function(){return"unexpected token ".concat(t.snapshot(),", value expected")}),e},ur.prototype.readQuoted=function(){this.skipBlank();var t=this.p;if(8&this.peekType()){++this.p;for(var e=!1;this.p<this.N&&(++this.p,this.input[this.p-1]!==this.input[t]||e);)e?e=!1:"\\"===this.input[this.p-1]&&(e=!0);return new $e(this.input,t,this.p,this.file)}},ur.prototype.readFileNameTemplate=function(e){var r,n,i;return q(this,function(t){switch(t.label){case 0:r=e.outputDelimiterLeft,n=[","," ",r],i=new Set(n),t.label=1;case 1:return this.p<this.N&&!i.has(this.peek())?[4,this.match(r)?this.readOutputToken(e):this.readHTMLToken(n)]:[3,3];case 2:return t.sent(),[3,1];case 3:return[2]}})},ur.prototype.match=function(t){for(var e=0;e<t.length;e++)if(t[e]!==this.input[this.p+e])return!1;return!0},ur.prototype.rmatch=function(t){for(var e=0;e<t.length;e++)if(t[t.length-1-e]!==this.input[this.p-1-e])return!1;return!0},ur.prototype.peekType=function(t){return void 0===t&&(t=0),B[this.input.charCodeAt(this.p+t)]},ur.prototype.peek=function(t){return void 0===t&&(t=0),this.input[this.p+t]},ur.prototype.skipBlank=function(){for(;this.peekType()&H;)++this.p},ur);function ur(t,e,r){void 0===r&&(r=""),this.input=t,this.trie=e,this.file=r,this.p=0,this.rawBeginAt=-1,this.N=t.length}var cr,lr=(t(hr,cr=be),hr);function hr(t,e,r,n,i){var o=this,s=n.trimTagLeft,a=n.trimTagRight,u=n.tagDelimiterLeft,c=n.tagDelimiterRight,l=t.slice(e+u.length,r-c.length);o=cr.call(this,p.TokenKind.Tag,l,t,e,r,s,a,i)||this;var h=new ar(o.content,n.operatorsTrie);if(o.name=h.readIdentifier().getText(),!o.name)throw new X("illegal tag syntax",o);return h.skipBlank(),o.args=h.remaining(),o}var pr=(fr.prototype.render=function(e){var r,n,i,o,s,a,u,c,l,h;return q(this,function(t){switch(t.label){case 0:r={},t.label=1;case 1:t.trys.push([1,8,9,10]),n=O(Object.keys(this.hash)),i=n.next(),t.label=2;case 2:return i.done?[3,7]:(o=i.value,s=r,a=o,void 0!==this.hash[o]?[3,3]:(u=!0,[3,5]));case 3:return[4,ve(this.hash[o],e)];case 4:u=t.sent(),t.label=5;case 5:s[a]=u,t.label=6;case 6:return i=n.next(),[3,2];case 7:return[3,10];case 8:return c=t.sent(),l={error:c},[3,10];case 9:try{i&&!i.done&&(h=n.return)&&h.call(n)}finally{if(l)throw l.error}return[7];case 10:return[2,r]}})},fr);function fr(t,e){var r,n;this.hash={};var i=new ar(t,{});try{for(var o=O(i.readHashes(e)),s=o.next();!s.done;s=o.next()){var a=s.value;this.hash[a.name.content]=a.value}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}var dr=(vr.prototype.render=function(t,e){var r,n,i=[];try{for(var o=O(this.args),s=o.next();!s.done;s=o.next()){var a=s.value;v(a)?i.push([a[0],ve(a[1],e)]):i.push(ve(a,e))}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return this.impl.apply({context:e,liquid:this.liquid},w([t],m(i),!1))},vr);function vr(t,e,r,n){this.name=t,this.impl=e||S,this.args=r,this.liquid=n}var gr=(yr.prototype.value=function(e,r){var n,i,o,s,a,u;return q(this,function(t){switch(t.label){case 0:return r=r||e.opts.lenientIf&&0<this.filters.length&&"default"===this.filters[0].name,[4,this.initial.evaluate(e,r)];case 1:n=t.sent(),t.label=2;case 2:t.trys.push([2,7,8,9]),i=O(this.filters),o=i.next(),t.label=3;case 3:return o.done?[3,6]:[4,o.value.render(n,e)];case 4:n=t.sent(),t.label=5;case 5:return o=i.next(),[3,3];case 6:return[3,9];case 7:return s=t.sent(),a={error:s},[3,9];case 8:try{o&&!o.done&&(u=i.return)&&u.call(i)}finally{if(a)throw a.error}return[7];case 9:return[2,n]}})},yr);function yr(t,n){this.filters=[];var e=new ar(t,n.options.operatorsTrie);this.initial=e.readExpression(),this.filters=e.readFilters().map(function(t){var e=t.name,r=t.args;return new dr(e,n.filters.get(e),r,n)})}var mr=(new Date).getTimezoneOffset(),wr=/([zZ]|([+-])(\d{2}):(\d{2}))$/,br=(Tr.prototype.getTime=function(){return this.date.getTime()},Tr.prototype.getMilliseconds=function(){return this.date.getMilliseconds()},Tr.prototype.getSeconds=function(){return this.date.getSeconds()},Tr.prototype.getMinutes=function(){return this.date.getMinutes()},Tr.prototype.getHours=function(){return this.date.getHours()},Tr.prototype.getDay=function(){return this.date.getDay()},Tr.prototype.getDate=function(){return this.date.getDate()},Tr.prototype.getMonth=function(){return this.date.getMonth()},Tr.prototype.getFullYear=function(){return this.date.getFullYear()},Tr.prototype.toLocaleTimeString=function(t){return this.date.toLocaleTimeString(t)},Tr.prototype.toLocaleDateString=function(t){return this.date.toLocaleDateString(t)},Tr.prototype.getTimezoneOffset=function(){return this.timezoneOffset},Tr.createDateFixedToTimezone=function(t){var e=t.match(wr);if(e&&"Z"===e[1])return new Tr(+new Date(t),0);if(e&&e[2]&&e[3]&&e[4]){var r=m(e,5),n=r[2],i=r[3],o=r[4],s=("+"===n?-1:1)*(60*parseInt(i,10)+parseInt(o,10));return new Tr(+new Date(t),s)}return new Date(t)},Tr);function Tr(t,e){if(t instanceof Tr)this.date=t.date,e=t.timezoneOffset;else{var r=6e4*(mr-e),n=new Date(t).getTime()+r;this.date=new Date(n)}this.timezoneOffset=e}var kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},xr={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function qr(t){return l(t).replace(/&|<|>|"|'/g,function(t){return kr[t]})}var Or=L(Math.abs),Rr=L(Math.max),Sr=L(Math.min),Fr=L(Math.ceil),Er=L(function(t,e){return t/e}),Lr=L(Math.floor),Pr=L(function(t,e){return t-e}),Dr=L(function(t,e){return t%e}),Mr=L(function(t,e){return t*e});function _r(e){return v(e)?e:u(e)&&0<e.length?[e]:b(e)?Object.keys(e).map(function(t){return[t,e[t]]}):[]}function Nr(t){return d(t)?[]:v(t)?t:[t]}var jr=L(function(t,e){return Nr(t).join(void 0===e?" ":e)}),Ar=L(function(t){return v(t)?y(t):""}),Ir=L(function(t){return v(t)?t[0]:""}),zr=L(function(t){return w([],m(Nr(t)),!1).reverse()});var Vr=/%([-_0^#:]+)?(\d+)?([EO])?(.)/,Br=["January","February","March","April","May","June","July","August","September","October","November","December"],Cr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Hr=Br.map(Qr),Kr=Cr.map(Qr),Ur={1:"st",2:"nd",3:"rd",default:"th"};function Qr(t){return t.slice(0,3)}function $r(t){for(var e=0,r=0;r<t.getMonth();++r)e+=[31,function(t){var e=t.getFullYear();return!(0!=(3&e)||!(e%100||e%400==0&&e))}(t)?29:28,31,30,31,30,31,31,30,31,30,31][r];return e+t.getDate()}function Wr(t,e){var r=$r(t)+(e-t.getDay()),n=7-new Date(t.getFullYear(),0,1).getDay()+e;return String(Math.floor((r-n)/7)+1)}var Yr={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},Jr={a:" ",A:" ",b:" ",B:" ",c:" ",e:" ",k:" ",l:" ",p:" ",P:" "},Gr={a:function(t){return Kr[t.getDay()]},A:function(t){return Cr[t.getDay()]},b:function(t){return Hr[t.getMonth()]},B:function(t){return Br[t.getMonth()]},c:function(t){return t.toLocaleString()},C:function(t){return function(t){return parseInt(t.getFullYear().toString().substring(0,2),10)}(t)},d:function(t){return t.getDate()},e:function(t){return t.getDate()},H:function(t){return t.getHours()},I:function(t){return String(t.getHours()%12||12)},j:function(t){return $r(t)},k:function(t){return t.getHours()},l:function(t){return String(t.getHours()%12||12)},L:function(t){return t.getMilliseconds()},m:function(t){return t.getMonth()+1},M:function(t){return t.getMinutes()},N:function(t,e){var r=Number(e.width)||9;return function(t,e,r){return void 0===r&&(r=" "),R(t,e,r,function(t,e){return t+e})}(String(t.getMilliseconds()).substr(0,r),r,"0")},p:function(t){return t.getHours()<12?"AM":"PM"},P:function(t){return t.getHours()<12?"am":"pm"},q:function(t){return function(t){var e=t.getDate().toString(),r=parseInt(e.slice(-1));return Ur[r]||Ur.default}(t)},s:function(t){return Math.round(t.getTime()/1e3)},S:function(t){return t.getSeconds()},u:function(t){return t.getDay()||7},U:function(t){return Wr(t,0)},w:function(t){return t.getDay()},W:function(t){return Wr(t,1)},x:function(t){return t.toLocaleDateString()},X:function(t){return t.toLocaleTimeString()},y:function(t){return t.getFullYear().toString().substring(2,4)},Y:function(t){return t.getFullYear()},z:function(t,e){var r=Math.abs(t.getTimezoneOffset()),n=Math.floor(r/60),i=r%60;return(0<t.getTimezoneOffset()?"-":"+")+k(n,2,"0")+(e.flags[":"]?":":"")+k(i,2,"0")},t:function(){return"\t"},n:function(){return"\n"},"%":function(){return"%"}};function Xr(t,e){var r,n,i=m(e,5),o=i[0],s=i[1],a=void 0===s?"":s,u=i[2],c=i[3],l=i[4],h=Gr[l];if(!h)return o;var p={};try{for(var f=O(a),d=f.next();!d.done;d=f.next()){p[d.value]=!0}}catch(t){r={error:t}}finally{try{d&&!d.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}var v=String(h(t,{flags:p,width:u,modifier:c})),g=Jr[l]||"0",y=u||Yr[l]||0;return p["^"]?v=v.toUpperCase():p["#"]&&(v=function(t){return w([],m(t),!1).some(function(t){return"a"<=t&&t<="z"})?t.toUpperCase():t.toLowerCase()}(v)),p._?g=" ":p[0]&&(g="0"),p["-"]&&(y=0),k(v,y,g)}Gr.h=Gr.b;var Zr,tn=Object.freeze({__proto__:null,escape:qr,escapeOnce:function(t){return qr(function(t){return l(t).replace(/&(amp|lt|gt|#34|#39);/g,function(t){return xr[t]})}(l(t)))},newlineToBr:function(t){return l(t).replace(/\n/g,"<br />\n")},stripHtml:function(t){return l(t).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,"")},abs:Or,atLeast:Rr,atMost:Sr,ceil:Fr,dividedBy:Er,floor:Lr,minus:Pr,modulo:Dr,times:Mr,round:function(t,e){void 0===e&&(e=0),t=f(t),e=f(e);var r=Math.pow(10,e);return Math.round(t*r)/r},plus:function(t,e){return t=f(t),e=f(e),Number(t)+Number(e)},urlDecode:function(t){return l(t).split("+").map(decodeURIComponent).join(" ")},urlEncode:function(t){return l(t).split(" ").map(encodeURIComponent).join("+")},join:jr,last:Ar,first:Ir,reverse:zr,sort:function(t,e){var r=this;function n(t){return e?r.context.getFromScope(t,l(e).split(".")):t}return w([],m(Nr(t=f(t))),!1).sort(function(t,e){return(t=n(t))<(e=n(e))?-1:e<t?1:0})},sortNatural:function(t,e){t=f(t);var r=l(e),n=void 0===e?E:function(t,e){return E(t[r],e[r])};return w([],m(Nr(t)),!1).sort(n)},size:function(t){return t&&t.length||0},map:function(t,e){var r=this;return Nr(t=f(t)).map(function(t){return r.context.getFromScope(t,l(e).split("."))})},compact:function(t){return Nr(t=f(t)).filter(function(t){return!d(f(t))})},concat:function(t,e){return void 0===e&&(e=[]),t=f(t),e=Nr(e).map(function(t){return f(t)}),Nr(t).concat(e)},slice:function(t,e,r){return void 0===r&&(r=1),d(t=f(t))?[]:(v(t)||(t=l(t)),e=e<0?t.length+e:e,t.slice(e,e+r))},where:function(t,r,n){var i=this;return Nr(t=f(t)).filter(function(t){var e=i.context.getFromScope(t,l(r).split("."));return void 0===n?I(e,i.context):A(n)?n.equals(e):e===n})},uniq:function(t){t=f(t);var e={};return(t||[]).filter(function(t){return!a.call(e,String(t))&&(e[String(t)]=!0)})},date:function(t,e){var r,n=this.context.opts;return t=f(t),e=l(e),function(t){return(t instanceof Date||t instanceof br)&&!isNaN(t.getTime())}(r="now"===t||"today"===t?new Date:h(t)?new Date(1e3*t):u(t)?/^\d+$/.test(t)?new Date(1e3*+t):n.preserveTimezones?br.createDateFixedToTimezone(t):new Date(t):t)?(n.hasOwnProperty("timezoneOffset")&&(r=new br(r,n.timezoneOffset)),function(t,e){for(var r,n="",i=e;r=Vr.exec(i);)n+=i.slice(0,r.index),i=i.slice(r.index+r[0].length),n+=Xr(t,r);return n+i}(r,e)):t},Default:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return v(t=f(t))||u(t)?t.length?t:e:(!1!==t||!new Map(r).get("allow_false"))&&(z(t,this.context)?e:t)},json:function(t){return JSON.stringify(t)},append:function(t,e){return wt(2===arguments.length,"append expect 2 arguments"),l(t)+l(e)},prepend:function(t,e){return wt(2===arguments.length,"prepend expect 2 arguments"),l(e)+l(t)},lstrip:function(t,e){return e?(e=P(l(e)),l(t).replace(new RegExp("^[".concat(e,"]+"),"g"),"")):l(t).replace(/^\s+/,"")},downcase:function(t){return l(t).toLowerCase()},upcase:function(t){return l(t).toUpperCase()},remove:function(t,e){return l(t).split(String(e)).join("")},removeFirst:function(t,e){return l(t).replace(String(e),"")},rstrip:function(t,e){return e?(e=P(l(e)),l(t).replace(new RegExp("[".concat(e,"]+$"),"g"),"")):l(t).replace(/\s+$/,"")},split:function(t,e){for(var r=l(t).split(String(e));r.length&&""===r[r.length-1];)r.pop();return r},strip:function(t,e){return e?(e=P(l(e)),l(t).replace(new RegExp("^[".concat(e,"]+"),"g"),"").replace(new RegExp("[".concat(e,"]+$"),"g"),"")):l(t).trim()},stripNewlines:function(t){return l(t).replace(/\n/g,"")},capitalize:function(t){return(t=l(t)).charAt(0).toUpperCase()+t.slice(1).toLowerCase()},replace:function(t,e,r){return l(t).split(String(e)).join(r)},replaceFirst:function(t,e,r){return l(t).replace(String(e),r)},truncate:function(t,e,r){return void 0===e&&(e=50),void 0===r&&(r="..."),(t=l(t)).length<=e?t:t.substring(0,e-r.length)+r},truncatewords:function(t,e,r){void 0===e&&(e=15),void 0===r&&(r="...");var n=l(t).split(/\s+/),i=n.slice(0,e).join(" ");return n.length>=e&&(i+=r),i}}),en={parse:function(t){var e=new ar(t.args,this.liquid.options.operatorsTrie);this.key=e.readIdentifier().content,e.skipBlank(),wt("="===e.peek(),function(){return"illegal token ".concat(t.getText())}),e.advance(),this.value=e.remaining()},render:function(e){var r,n;return q(this,function(t){switch(t.label){case 0:return r=e.bottom(),n=this.key,[4,this.liquid._evalValue(this.value,e)];case 1:return r[n]=t.sent(),[2]}})}},rn=(t(nn,Zr=s),nn.prototype.next=function(){this.i++},nn.prototype.index0=function(){return this.i},nn.prototype.index=function(){return this.i+1},nn.prototype.first=function(){return 0===this.i},nn.prototype.last=function(){return this.i===this.length-1},nn.prototype.rindex=function(){return this.length-this.i},nn.prototype.rindex0=function(){return this.length-this.i-1},nn.prototype.valueOf=function(){return JSON.stringify(this)},nn);function nn(t,e,r){var n=Zr.call(this)||this;return n.i=0,n.length=t,n.name="".concat(r,"-").concat(e),n}var on=["offset","limit","reversed"],sn={type:"block",parse:function(t,e){var r,n=this,i=new ar(t.args,this.liquid.options.operatorsTrie),o=i.readIdentifier(),s=i.readIdentifier(),a=i.readValue();wt(o.size()&&"in"===s.content&&a,function(){return"illegal tag: ".concat(t.getText())}),this.variable=o.content,this.collection=a,this.hash=new pr(i.remaining()),this.templates=[],this.elseTemplates=[];var u=this.liquid.parser.parseStream(e).on("start",function(){return r=n.templates}).on("tag:else",function(){return r=n.elseTemplates}).on("tag:endfor",function(){return u.stop()}).on("template",function(t){return r.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))});u.start()},render:function(e,r){var n,i,o,s,a,u,c,l,h,p,f,d,v;return q(this,function(t){switch(t.label){case 0:return n=this.liquid.renderer,o=_r,[4,ve(this.collection,e)];case 1:return(i=o.apply(void 0,[t.sent()])).length?[3,3]:[4,n.renderTemplates(this.elseTemplates,e,r)];case 2:return t.sent(),[2];case 3:return s="continue-"+this.variable+"-"+this.collection.getText(),e.push({continue:e.getRegister(s)}),[4,this.hash.render(e)];case 4:a=t.sent(),e.pop(),u=this.liquid.options.orderedFilterParameters?Object.keys(a).filter(function(t){return on.includes(t)}):on.filter(function(t){return void 0!==a[t]}),i=u.reduce(function(t,e){return"offset"===e?function(t,e){return t.slice(e)}(t,a.offset):"limit"===e?function(t,e){return t.slice(0,e)}(t,a.limit):function(t){return w([],m(t),!1).reverse()}(t)},i),e.setRegister(s,(a.offset||0)+i.length),c={forloop:new rn(i.length,this.collection.getText(),this.variable)},e.push(c),t.label=5;case 5:t.trys.push([5,10,11,12]),l=O(i),h=l.next(),t.label=6;case 6:return h.done?[3,9]:(p=h.value,c[this.variable]=p,[4,n.renderTemplates(this.templates,e,r)]);case 7:if(t.sent(),r.break)return r.break=!1,[3,9];r.continue=!1,c.forloop.next(),t.label=8;case 8:return h=l.next(),[3,6];case 9:return[3,12];case 10:return f=t.sent(),d={error:f},[3,12];case 11:try{h&&!h.done&&(v=l.return)&&v.call(l)}finally{if(d)throw d.error}return[7];case 12:return e.pop(),[2]}})}};var an={parse:function(t,e){var r=this,n=new ar(t.args,this.liquid.options.operatorsTrie);this.variable=function(t){var e=t.readIdentifier().content;if(e)return e;var r=t.readQuoted();if(r)return ge(r)}(n),wt(this.variable,function(){return"".concat(t.args," not valid identifier")}),this.templates=[];var i=this.liquid.parser.parseStream(e);i.on("tag:endcapture",function(){return i.stop()}).on("template",function(t){return r.templates.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}),i.start()},render:function(e){var r;return q(this,function(t){switch(t.label){case 0:return[4,this.liquid.renderer.renderTemplates(this.templates,e)];case 1:return r=t.sent(),e.bottom()[this.variable]=r,[2]}})}};var un,cn,ln={parse:function(t,e){var n=this;this.cond=new gr(t.args,this.liquid),this.cases=[],this.elseTemplates=[];var i=[],r=this.liquid.parser.parseStream(e).on("tag:when",function(t){i=[];for(var e=new ar(t.args,n.liquid.options.operatorsTrie);!e.end();){var r=e.readValue();n.cases.push({val:r,templates:i}),e.readTo(",")}}).on("tag:else",function(){return i=n.elseTemplates}).on("tag:endcase",function(){return r.stop()}).on("template",function(t){return i.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))});r.start()},render:function(e,r){var n,i,o,s,a,u,c,l,h;return q(this,function(t){switch(t.label){case 0:return n=this.liquid.renderer,o=f,[4,this.cond.value(e,e.opts.lenientIf)];case 1:i=o.apply(void 0,[t.sent()]),t.label=2;case 2:t.trys.push([2,7,8,9]),s=O(this.cases),a=s.next(),t.label=3;case 3:return a.done?[3,6]:(u=a.value,ve(u.val,e,e.opts.lenientIf)!==i?[3,5]:[4,n.renderTemplates(u.templates,e,r)]);case 4:return t.sent(),[2];case 5:return a=s.next(),[3,3];case 6:return[3,9];case 7:return c=t.sent(),l={error:c},[3,9];case 8:try{a&&!a.done&&(h=s.return)&&h.call(s)}finally{if(l)throw l.error}return[7];case 9:return[4,n.renderTemplates(this.elseTemplates,e,r)];case 10:return t.sent(),[2]}})}},hn={parse:function(t,e){var r=this.liquid.parser.parseStream(e);r.on("token",function(t){"endcomment"===t.name&&r.stop()}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}),r.start()}};(cn=un=un||{})[cn.OUTPUT=0]="OUTPUT",cn[cn.STORE=1]="STORE";var pn=un,fn={parseFilePath:dn,renderFilePath:gn,parse:function(t){var e=t.args,r=new ar(e,this.liquid.options.operatorsTrie);for(this.file=this.parseFilePath(r,this.liquid),this.currentFile=t.file;!r.end();){r.skipBlank();var n=r.p,i=r.readIdentifier();if(("with"===i.content||"for"===i.content)&&(r.skipBlank(),":"!==r.peek())){var o=r.readValue();if(o){var s=r.p,a=void 0;"as"===r.readIdentifier().content?a=r.readIdentifier():r.p=s,this[i.content]={value:o,alias:a&&a.content},r.skipBlank(),","===r.peek()&&r.advance();continue}}r.p=n;break}this.hash=new pr(r.remaining())},render:function(e,r){var n,i,o,s,a,u,c,l,h,p,f,d,v,g,y,m,w,b,T,k;return q(this,function(t){switch(t.label){case 0:return i=(n=this).liquid,o=n.hash,[4,this.renderFilePath(this.file,e,i)];case 1:return wt(s=t.sent(),function(){return'illegal filename "'.concat(s,'"')}),a=new yt({},e.opts,{sync:e.sync,globals:e.globals,strictVariables:e.strictVariables}),u=a.bottom(),c=x,l=[u],[4,o.render(e)];case 2:if(c.apply(void 0,l.concat([t.sent()])),this.with&&(h=this.with,f=h.value,d=h.alias,u[d||s]=ve(f,e)),!this.for)return[3,12];p=this.for,f=p.value,d=p.alias,v=_r(v=ve(f,e)),u.forloop=new rn(v.length,f.getText(),d),t.label=3;case 3:t.trys.push([3,9,10,11]),g=O(v),y=g.next(),t.label=4;case 4:return y.done?[3,8]:(m=y.value,u[d]=m,[4,i._parsePartialFile(s,a.sync,this.currentFile)]);case 5:return b=t.sent(),[4,i.renderer.renderTemplates(b,a,r)];case 6:t.sent(),u.forloop.next(),t.label=7;case 7:return y=g.next(),[3,4];case 8:return[3,11];case 9:return w=t.sent(),T={error:w},[3,11];case 10:try{y&&!y.done&&(k=g.return)&&k.call(g)}finally{if(T)throw T.error}return[7];case 11:return[3,15];case 12:return[4,i._parsePartialFile(s,a.sync,this.currentFile)];case 13:return b=t.sent(),[4,i.renderer.renderTemplates(b,a,r)];case 14:t.sent(),t.label=15;case 15:return[2]}})}};function dn(t,e){if(e.options.dynamicPartials){var r=t.readValue();if(void 0===r)throw new TypeError('illegal argument "'.concat(t.input,'"'));return"none"===r.getText()?null:Vt(r)?vn(e.parse(ge(r))):r}var n=w([],m(t.readFileNameTemplate(e.options)),!1),i=vn(e.parser.parseTokens(n));return"none"===i?null:i}function vn(t){return 1===t.length&&At(t[0].token)?t[0].token.getContent():t}function gn(t,e,r){return"string"==typeof t?t:Array.isArray(t)?r.renderer.renderTemplates(t,e):ve(t,e)}var yn,mn={parseFilePath:dn,renderFilePath:gn,parse:function(t){var e=t.args,r=new ar(e,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(r,this.liquid),this.currentFile=t.file;var n=r.p;"with"===r.readIdentifier().content?(r.skipBlank(),":"!==r.peek()?this.withVar=r.readValue():r.p=n):r.p=n,this.hash=new pr(r.remaining(),this.liquid.options.jekyllInclude)},render:function(e,r){var n,i,o,s,a,u,c,l,h;return q(this,function(t){switch(t.label){case 0:return i=(n=this).liquid,o=n.hash,s=n.withVar,a=i.renderer,[4,this.renderFilePath(this.file,e,i)];case 1:return wt(u=t.sent(),function(){return'illegal filename "'.concat(u,'"')}),c=e.saveRegister("blocks","blockMode"),e.setRegister("blocks",{}),e.setRegister("blockMode",pn.OUTPUT),[4,o.render(e)];case 2:return l=t.sent(),s&&(l[u]=ve(s,e)),[4,i._parsePartialFile(u,e.sync,this.currentFile)];case 3:return h=t.sent(),e.push(e.opts.jekyllInclude?{include:l}:l),[4,a.renderTemplates(h,e,r)];case 4:return t.sent(),e.pop(),e.restoreRegister(c),[2]}})}},wn={parse:function(t){var e=new ar(t.args,this.liquid.options.operatorsTrie);this.variable=e.readIdentifier().content},render:function(t,e){var r=t.environments;h(r[this.variable])||(r[this.variable]=0),e.write(l(--r[this.variable]))}},bn={parse:function(t){var e=new ar(t.args,this.liquid.options.operatorsTrie),r=e.readValue();for(e.skipBlank(),this.candidates=[],r&&(":"===e.peek()?(this.group=r,e.advance()):this.candidates.push(r));!e.end();){var n=e.readValue();n&&this.candidates.push(n),e.readTo(",")}wt(this.candidates.length,function(){return"empty candidates: ".concat(t.getText())})},render:function(t,e){var r=ve(this.group,t),n="cycle:".concat(r,":")+this.candidates.join(","),i=t.getRegister("cycle"),o=i[n];void 0===o&&(o=i[n]=0);var s=this.candidates[o];o=(o+1)%this.candidates.length,i[n]=o;var a=ve(s,t);e.write(a)}},Tn={parse:function(t,e){var r,n=this;this.branches=[],this.elseTemplates=[],this.liquid.parser.parseStream(e).on("start",function(){return n.branches.push({predicate:new gr(t.args,n.liquid),templates:r=[]})}).on("tag:elsif",function(t){return n.branches.push({predicate:new gr(t.args,n.liquid),templates:r=[]})}).on("tag:else",function(){return r=n.elseTemplates}).on("tag:endif",function(){this.stop()}).on("template",function(t){return r.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}).start()},render:function(e,r){var n,i,o,s,a,u,c,l,h;return q(this,function(t){switch(t.label){case 0:n=this.liquid.renderer,t.label=1;case 1:t.trys.push([1,7,8,9]),i=O(this.branches),o=i.next(),t.label=2;case 2:return o.done?[3,6]:(s=o.value,a=s.predicate,u=s.templates,[4,a.value(e,e.opts.lenientIf)]);case 3:return I(t.sent(),e)?[4,n.renderTemplates(u,e,r)]:[3,5];case 4:return t.sent(),[2];case 5:return o=i.next(),[3,2];case 6:return[3,9];case 7:return c=t.sent(),l={error:c},[3,9];case 8:try{o&&!o.done&&(h=i.return)&&h.call(i)}finally{if(l)throw l.error}return[7];case 9:return[4,n.renderTemplates(this.elseTemplates,e,r)];case 10:return t.sent(),[2]}})}},kn={parse:function(t){var e=new ar(t.args,this.liquid.options.operatorsTrie);this.variable=e.readIdentifier().content},render:function(t,e){var r=t.environments;h(r[this.variable])||(r[this.variable]=0);var n=r[this.variable];r[this.variable]++,e.write(l(n))}},xn={parseFilePath:dn,renderFilePath:gn,parse:function(t,e){var r=new ar(t.args,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(r,this.liquid),this.currentFile=t.file,this.hash=new pr(r.remaining()),this.tpls=this.liquid.parser.parseTokens(e)},render:function(e,r){var n,i,o,s,a,u,c,l,h,p,f;return q(this,function(t){switch(t.label){case 0:return i=(n=this).liquid,o=n.hash,s=n.file,a=i.renderer,null!==s?[3,2]:(e.setRegister("blockMode",pn.OUTPUT),[4,a.renderTemplates(this.tpls,e,r)]);case 1:return t.sent(),[2];case 2:return[4,this.renderFilePath(this.file,e,i)];case 3:return wt(u=t.sent(),function(){return'illegal filename "'.concat(u,'"')}),[4,i._parseLayoutFile(u,e.sync,this.currentFile)];case 4:return c=t.sent(),e.setRegister("blockMode",pn.STORE),[4,a.renderTemplates(this.tpls,e)];case 5:return l=t.sent(),void 0===(h=e.getRegister("blocks"))[""]&&(h[""]=function(t,e){return e.write(l)}),e.setRegister("blockMode",pn.OUTPUT),f=(p=e).push,[4,o.render(e)];case 6:return f.apply(p,[t.sent()]),[4,a.renderTemplates(c,e,r)];case 7:return t.sent(),e.pop(),[2]}})}},qn=(t(On,yn=s),On.prototype.super=function(){return this.superBlockRender()},On);function On(t){void 0===t&&(t=function(){return""});var e=yn.call(this)||this;return e.superBlockRender=t,e}var Rn,Sn={parse:function(t,e){var r=this,n=/\w+/.exec(t.args);this.block=n?n[0]:"",this.tpls=[],this.liquid.parser.parseStream(e).on("tag:endblock",function(){this.stop()}).on("template",function(t){return r.tpls.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}).start()},render:function(e,r){var n;return q(this,function(t){switch(t.label){case 0:return n=this.getBlockRender(e),e.getRegister("blockMode")!==pn.STORE?[3,1]:(e.getRegister("blocks")[this.block]=n,[3,3]);case 1:return[4,n(new qn,r)];case 2:t.sent(),t.label=3;case 3:return[2]}})},getBlockRender:function(n){function r(e,r){return q(this,function(t){switch(t.label){case 0:return n.push({block:e}),[4,i.renderer.renderTemplates(o,n,r)];case 1:return t.sent(),n.pop(),[2]}})}var i=this.liquid,o=this.tpls,s=n.getRegister("blocks")[this.block];return s?function(t,e){return s(new qn(function(){return r(t,e)}),e)}:r}},Fn={parse:function(t,e){var r=this;this.tokens=[];var n=this.liquid.parser.parseStream(e);n.on("token",function(t){"endraw"===t.name?n.stop():r.tokens.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}),n.start()},render:function(){return this.tokens.map(function(t){return t.getText()}).join("")}},En=(t(Ln,Rn=rn),Ln.prototype.row=function(){return Math.floor(this.i/this.cols)+1},Ln.prototype.col0=function(){return this.i%this.cols},Ln.prototype.col=function(){return this.col0()+1},Ln.prototype.col_first=function(){return 0===this.col0()},Ln.prototype.col_last=function(){return this.col()===this.cols},Ln);function Ln(t,e,r,n){var i=Rn.call(this,t,r,n)||this;return i.length=t,i.cols=e,i}var Pn,Dn={assign:en,for:sn,capture:an,case:ln,comment:hn,include:mn,render:fn,decrement:wn,increment:kn,cycle:bn,if:Tn,layout:xn,block:Sn,raw:Fn,tablerow:{parse:function(t,e){var r=this,n=new ar(t.args,this.liquid.options.operatorsTrie),i=n.readIdentifier();n.skipBlank();var o,s=n.readIdentifier();wt(s&&"in"===s.content,function(){return"illegal tag: ".concat(t.getText())}),this.variable=i.content,this.collection=n.readValue(),this.hash=new pr(n.remaining()),this.templates=[];var a=this.liquid.parser.parseStream(e).on("start",function(){return o=r.templates}).on("tag:endtablerow",function(){return a.stop()}).on("template",function(t){return o.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))});a.start()},render:function(e,r){var n,i,o,s,a,u,c,l,h,p;return q(this,function(t){switch(t.label){case 0:return i=_r,[4,ve(this.collection,e)];case 1:return n=i.apply(void 0,[t.sent()]),[4,this.hash.render(e)];case 2:o=t.sent(),s=o.offset||0,a=void 0===o.limit?n.length:o.limit,n=n.slice(s,s+a),u=o.cols||n.length,c=this.liquid.renderer,l=new En(n.length,u,this.collection.getText(),this.variable),h={tablerowloop:l},e.push(h),p=0,t.label=3;case 3:return p<n.length?(h[this.variable]=n[p],0===l.col0()&&(1!==l.row()&&r.write("</tr>"),r.write('<tr class="row'.concat(l.row(),'">'))),r.write('<td class="col'.concat(l.col(),'">')),[4,c.renderTemplates(this.templates,e,r)]):[3,6];case 4:t.sent(),r.write("</td>"),t.label=5;case 5:return p++,l.next(),[3,3];case 6:return n.length&&r.write("</tr>"),e.pop(),[2]}})}},unless:{parse:function(t,e){var r,n=this;this.branches=[],this.elseTemplates=[],this.liquid.parser.parseStream(e).on("start",function(){return n.branches.push({predicate:new gr(t.args,n.liquid),test:z,templates:r=[]})}).on("tag:elsif",function(t){return n.branches.push({predicate:new gr(t.args,n.liquid),test:I,templates:r=[]})}).on("tag:else",function(){return r=n.elseTemplates}).on("tag:endunless",function(){this.stop()}).on("template",function(t){return r.push(t)}).on("end",function(){throw new Error("tag ".concat(t.getText()," not closed"))}).start()},render:function(e,r){var n,i,o,s,a,u,c,l,h,p,f;return q(this,function(t){switch(t.label){case 0:n=this.liquid.renderer,t.label=1;case 1:t.trys.push([1,7,8,9]),i=O(this.branches),o=i.next(),t.label=2;case 2:return o.done?[3,6]:(s=o.value,a=s.predicate,u=s.test,c=s.templates,[4,a.value(e,e.opts.lenientIf)]);case 3:return l=t.sent(),u(l,e)?[4,n.renderTemplates(c,e,r)]:[3,5];case 4:return t.sent(),[2];case 5:return o=i.next(),[3,2];case 6:return[3,9];case 7:return h=t.sent(),p={error:h},[3,9];case 8:try{o&&!o.done&&(f=i.return)&&f.call(i)}finally{if(p)throw p.error}return[7];case 9:return[4,n.renderTemplates(this.elseTemplates,e,r)];case 10:return t.sent(),[2]}})}},break:{render:function(t,e){e.break=!0}},continue:{render:function(t,e){e.continue=!0}},echo:{parse:function(t){this.value=new gr(t.args,this.liquid)},render:function(e,r){var n;return q(this,function(t){switch(t.label){case 0:return[4,this.value.value(e,!1)];case 1:return n=t.sent(),r.write(n),[2]}})}},liquid:{parse:function(t){var e=new ar(t.args,this.liquid.options.operatorsTrie).readLiquidTagTokens(this.liquid.options);this.tpls=this.liquid.parser.parseTokens(e)},render:function(e,r){return q(this,function(t){switch(t.label){case 0:return[4,this.liquid.renderer.renderTemplates(this.tpls,e,r)];case 1:return t.sent(),[2]}})}}},Mn=Object.freeze({__proto__:null,default:Dn}),_n=(t(Nn,Pn=Jt),Nn.prototype.render=function(e,r){var n,i;return q(this,function(t){switch(t.label){case 0:return[4,new pr(this.token.args).render(e)];case 1:return n=t.sent(),c((i=this.impl).render)?[4,i.render(e,r,n)]:[3,3];case 2:return[2,t.sent()];case 3:return[2]}})},Nn);function Nn(t,e,r){var n=Pn.call(this,t)||this;n.name=t.name;var i=r.tags.get(t.name);return n.impl=Object.create(i),n.impl.liquid=r,n.impl.parse&&n.impl.parse(t,e),n}var jn,An=(t(In,jn=Jt),In.prototype.render=function(e,r){var n;return q(this,function(t){switch(t.label){case 0:return[4,this.value.value(e,!1)];case 1:return n=t.sent(),r.write(n),[2]}})},In);function In(t,e){var r=jn.call(this,t)||this;return r.value=new gr(t.content,e),r}var zn,Vn=(t(Bn,zn=Jt),Bn.prototype.render=function(t,e){return q(this,function(t){return e.write(this.str),[2]})},Bn);function Bn(t){var e=zn.call(this,t)||this;return e.str=t.getContent(),e}var Cn=(Hn.prototype.parse=function(t,e){var r=new ar(t,this.liquid.options.operatorsTrie,e).readTopLevelTokens(this.liquid.options);return this.parseTokens(r)},Hn.prototype.parseTokens=function(t){for(var e,r=[];e=t.shift();)r.push(this.parseToken(e,t));return r},Hn.prototype.parseToken=function(e,t){try{return zt(e)?new _n(e,t,this.liquid):It(e)?new An(e,this.liquid):new Vn(e)}catch(t){throw new et(t,e)}},Hn.prototype.parseStream=function(t){var r=this;return new Wt(t,function(t,e){return r.parseToken(t,e)})},Hn.prototype._parseFileCached=function(e,r,n,i){var o,s,a;return void 0===n&&(n=vt.Root),q(this,function(t){switch(t.label){case 0:return o=this.loader.shouldLoadRelative(e)?i+","+e:n+":"+e,[4,this.cache.read(o)];case 1:if(s=t.sent())return[2,s];a=St(this._parseFile(e,r,n,i)),this.cache.write(o,a),t.label=2;case 2:return t.trys.push([2,4,,5]),[4,a];case 3:return[2,t.sent()];case 4:return t.sent(),this.cache.remove(o),[3,5];case 5:return[2,[]]}})},Hn.prototype._parseFile=function(e,r,n,i){var o,s,a,u;return void 0===n&&(n=vt.Root),q(this,function(t){switch(t.label){case 0:return[4,this.loader.lookup(e,n,r,i)];case 1:return o=t.sent(),a=(s=this.liquid).parse,r?(u=this.fs.readFileSync(o),[3,4]):[3,2];case 2:return[4,this.fs.readFile(o)];case 3:u=t.sent(),t.label=4;case 4:return[2,a.apply(s,[u,o])]}})},Hn);function Hn(t){this.liquid=t,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new bt(this.liquid.options)}var Kn=(Un.prototype.get=function(t){var e=this.impls[t];return wt(e,function(){return'tag "'.concat(t,'" not found')}),e},Un.prototype.set=function(t,e){this.impls[t]=e},Un);function Un(){this.impls={}}var Qn=($n.prototype.get=function(t){var e=this.impls[t];return wt(e||!this.strictFilters,function(){return"undefined filter: ".concat(t)}),e},$n.prototype.set=function(t,e){this.impls[t]=e},$n.prototype.create=function(t,e){return new dr(t,this.get(t),e,this.liquid)},$n);function $n(t,e){this.strictFilters=t,this.liquid=e,this.impls={}}var Wn=(Yn.prototype.parse=function(t,e){return this.parser.parse(t,e)},Yn.prototype._render=function(t,e,r){var n=new yt(e,this.options,r);return this.renderer.renderTemplates(t,n)},Yn.prototype.render=function(e,r,n){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,Ft(this._render(e,r,x(x({},n),{sync:!1})))]})})},Yn.prototype.renderSync=function(t,e,r){return Et(this._render(t,e,x(x({},r),{sync:!0})))},Yn.prototype.renderToNodeStream=function(t,e,r){void 0===r&&(r={});var n=new yt(e,this.options,r);return this.renderer.renderTemplatesToNodeStream(t,n)},Yn.prototype._parseAndRender=function(t,e,r){var n=this.parse(t);return this._render(n,e,r)},Yn.prototype.parseAndRender=function(e,r,n){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,Ft(this._parseAndRender(e,r,x(x({},n),{sync:!1})))]})})},Yn.prototype.parseAndRenderSync=function(t,e,r){return Et(this._parseAndRender(t,e,x(x({},r),{sync:!0})))},Yn.prototype._parsePartialFile=function(t,e,r){return this.parser.parseFile(t,e,vt.Partials,r)},Yn.prototype._parseLayoutFile=function(t,e,r){return this.parser.parseFile(t,e,vt.Layouts,r)},Yn.prototype.parseFile=function(e){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,Ft(this.parser.parseFile(e,!1))]})})},Yn.prototype.parseFileSync=function(t){return Et(this.parser.parseFile(t,!0))},Yn.prototype.renderFile=function(r,n,i){return o(this,void 0,void 0,function(){var e;return q(this,function(t){switch(t.label){case 0:return[4,this.parseFile(r)];case 1:return e=t.sent(),[2,this.render(e,n,i)]}})})},Yn.prototype.renderFileSync=function(t,e,r){var n=this.parseFileSync(t);return this.renderSync(n,e,r)},Yn.prototype.renderFileToNodeStream=function(r,n,i){return o(this,void 0,void 0,function(){var e;return q(this,function(t){switch(t.label){case 0:return[4,this.parseFile(r)];case 1:return e=t.sent(),[2,this.renderToNodeStream(e,n,i)]}})})},Yn.prototype._evalValue=function(t,e){return new gr(t,this).value(e,!1)},Yn.prototype.evalValue=function(e,r){return o(this,void 0,void 0,function(){return q(this,function(t){return[2,Ft(this._evalValue(e,r))]})})},Yn.prototype.evalValueSync=function(t,e){return Et(this._evalValue(t,e))},Yn.prototype.registerFilter=function(t,e){this.filters.set(t,e)},Yn.prototype.registerTag=function(t,e){this.tags.set(t,e)},Yn.prototype.plugin=function(t){return t.call(this,Yn)},Yn.prototype.express=function(){var a=this,u=!0;return function(t,e,r){var n,i,o;if(u){u=!1;var s=$(this.root);(n=a.options.root).unshift.apply(n,w([],m(s),!1)),(i=a.options.layouts).unshift.apply(i,w([],m(s),!1)),(o=a.options.partials).unshift.apply(o,w([],m(s),!1))}a.renderFile(t,e).then(function(t){return r(null,t)},r)}},Yn);function Yn(t){var r=this;void 0===t&&(t={}),this.options=function(t){if(t.hasOwnProperty("operators")&&(t.operatorsTrie=U(t.operators)),t.hasOwnProperty("root")&&(t.hasOwnProperty("partials")||(t.partials=t.root),t.hasOwnProperty("layouts")||(t.layouts=t.root)),t.hasOwnProperty("cache")){var e=void 0;e="number"==typeof t.cache?0<t.cache?new M(t.cache):void 0:"object"==typeof t.cache?t.cache:t.cache?new M(1024):void 0,t.cache=e}return!(t=x(x(x({},Q),t.jekyllInclude?{dynamicPartials:!1}:{}),t)).fs.dirname&&t.relativeReference&&(console.warn("[LiquidJS] `fs.dirname` is required for relativeReference, set relativeReference to `false` to suppress this warning, or provide implementation for `fs.dirname`"),t.relativeReference=!1),t.root=$(t.root),t.partials=$(t.partials),t.layouts=$(t.layouts),t}(t),this.parser=new Cn(this),this.renderer=new Mt,this.filters=new Qn(this.options.strictFilters,this),this.tags=new Kn,g(Dn,function(t,e){return r.registerTag(F(e),t)}),g(tn,function(t,e){return r.registerFilter(F(e),t)})}p.AssertionError=ft,p.Context=yt,p.Drop=s,p.Expression=fe,p.Hash=pr,p.InternalUndefinedVariableError=lt,p.Liquid=Wn,p.LiquidError=Y,p.ParseError=et,p.ParseStream=Wt,p.RenderError=it,p.TagToken=lr,p.TimezoneDate=br,p.Token=ye,p.TokenizationError=X,p.Tokenizer=ar,p.TypeGuards=$t,p.UndefinedVariableError=at,p.Value=gr,p.assert=wt,p.createTrie=U,p.defaultOperators=V,p.evalQuotedToken=ge,p.evalToken=ve,p.filters=tn,p.isFalsy=z,p.isTruthy=I,p.tags=Mn,p.toPromise=Ft,p.toThenable=St,p.toValue=f,p.version="9.36.0",Object.defineProperty(p,"__esModule",{value:!0})});

              };
    var moneyCurrency = window.Shopify.currency.active ? window.Shopify.currency.active : "USD";
    var moneyFormats = {
      USD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} USD",
      },
      EUR: {
        money_format: "&euro;{{amount_with_comma_separator}}",
        money_with_currency_format:
        "&euro;{{amount_with_comma_separator}} EUR",
      },
      GBP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} GBP",
      },
      CAD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} CAD",
      },
      ALL: {
        money_format: "Lek {{amount}}",
        money_with_currency_format: "Lek {{amount}} ALL",
      },
      DZD: {
        money_format: "DA {{amount}}",
        money_with_currency_format: "DA {{amount}} DZD",
      },
      AOA: {
        money_format: "Kz{{amount}}",
        money_with_currency_format: "Kz{{amount}} AOA",
      },
      ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format:
        "${{amount_with_comma_separator}} ARS",
      },
      AMD: {
        money_format: "{{amount}} AMD",
        money_with_currency_format: "{{amount}} AMD",
      },
      AWG: {
        money_format: "Afl{{amount}}",
        money_with_currency_format: "Afl{{amount}} AWG",
      },
      AUD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} AUD",
      },
      BBD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} Bds",
      },
      AZN: {
        money_format: "m.{{amount}}",
        money_with_currency_format: "m.{{amount}} AZN",
      },
      BDT: {
        money_format: "Tk {{amount}}",
        money_with_currency_format: "Tk {{amount}} BDT",
      },
      BSD: {
        money_format: "BS${{amount}}",
        money_with_currency_format: "BS${{amount}} BSD",
      },
      BHD: {
        money_format: "{{amount}}0 BD",
        money_with_currency_format: "{{amount}}0 BHD",
      },
      BYR: {
        money_format: "Br {{amount}}",
        money_with_currency_format: "Br {{amount}} BYR",
      },
      BZD: {
        money_format: "BZ${{amount}}",
        money_with_currency_format: "BZ${{amount}} BZD",
      },
      BTN: {
        money_format: "Nu {{amount}}",
        money_with_currency_format: "Nu {{amount}} BTN",
      },
      BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format:
        "KM {{amount_with_comma_separator}} BAM",
      },
      BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format:
        "R$ {{amount_with_comma_separator}} BRL",
      },
      BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format:
        "Bs{{amount_with_comma_separator}} BOB",
      },
      BWP: {
        money_format: "P{{amount}}",
        money_with_currency_format: "P{{amount}} BWP",
      },
      BND: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} BND",
      },
      BGN: {
        money_format: "{{amount}} ????????",
        money_with_currency_format: "{{amount}} ???????? BGN",
      },
      MMK: {
        money_format: "K{{amount}}",
        money_with_currency_format: "K{{amount}} MMK",
      },
      KHR: {
        money_format: "KHR{{amount}}",
        money_with_currency_format: "KHR{{amount}}",
      },
      KYD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} KYD",
      },
      XAF: {
        money_format: "FCFA{{amount}}",
        money_with_currency_format: "FCFA{{amount}} XAF",
      },
      CLP: {
        money_format: "${{amount_no_decimals}}",
        money_with_currency_format: "${{amount_no_decimals}} CLP",
      },
      CNY: {
        money_format: "&#165;{{amount}}",
        money_with_currency_format: "&#165;{{amount}} CNY",
      },
      COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format:
        "${{amount_with_comma_separator}} COP",
      },
      CRC: {
        money_format: "&#8353; {{amount_with_comma_separator}}",
        money_with_currency_format:
        "&#8353; {{amount_with_comma_separator}} CRC",
      },
      HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format:
        "{{amount_with_comma_separator}} kn HRK",
      },
      CZK: {
        money_format: "{{amount_with_comma_separator}} K&#269;",
        money_with_currency_format:
        "{{amount_with_comma_separator}} K&#269;",
      },
      DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}",
      },
      DOP: {
        money_format: "RD$ {{amount}}",
        money_with_currency_format: "RD$ {{amount}}",
      },
      XCD: {
        money_format: "${{amount}}",
        money_with_currency_format: "EC${{amount}}",
      },
      EGP: {
        money_format: "LE {{amount}}",
        money_with_currency_format: "LE {{amount}} EGP",
      },
      ETB: {
        money_format: "Br{{amount}}",
        money_with_currency_format: "Br{{amount}} ETB",
      },
      XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format:
        "{{amount_no_decimals_with_comma_separator}} XPF",
      },
      FJD: {
        money_format: "${{amount}}",
        money_with_currency_format: "FJ${{amount}}",
      },
      GMD: {
        money_format: "D {{amount}}",
        money_with_currency_format: "D {{amount}} GMD",
      },
      GHS: {
        money_format: "GH&#8373;{{amount}}",
        money_with_currency_format: "GH&#8373;{{amount}}",
      },
      GTQ: {
        money_format: "Q{{amount}}",
        money_with_currency_format: "{{amount}} GTQ",
      },
      GYD: {
        money_format: "G${{amount}}",
        money_with_currency_format: "${{amount}} GYD",
      },
      GEL: {
        money_format: "{{amount}} GEL",
        money_with_currency_format: "{{amount}} GEL",
      },
      HNL: {
        money_format: "L {{amount}}",
        money_with_currency_format: "L {{amount}} HNL",
      },
      HKD: {
        money_format: "${{amount}}",
        money_with_currency_format: "HK${{amount}}",
      },
      HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format:
        "{{amount_no_decimals_with_comma_separator}} Ft",
      },
      ISK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr ISK",
      },
      INR: {
        money_format: "Rs. {{amount}}",
        money_with_currency_format: "Rs. {{amount}}",
      },
      IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}",
      },
      ILS: {
        money_format: "{{amount}} NIS",
        money_with_currency_format: "{{amount}} NIS",
      },
      JMD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} JMD",
      },
      JPY: {
        money_format: "&#165;{{amount_no_decimals}}",
        money_with_currency_format: "&#165;{{amount_no_decimals}} JPY",
      },
      JEP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} JEP",
      },
      JOD: {
        money_format: "{{amount}}0 JD",
        money_with_currency_format: "{{amount}}0 JOD",
      },
      KZT: {
        money_format: "{{amount}} KZT",
        money_with_currency_format: "{{amount}} KZT",
      },
      KES: {
        money_format: "KSh{{amount}}",
        money_with_currency_format: "KSh{{amount}}",
      },
      KWD: {
        money_format: "{{amount}}0 KD",
        money_with_currency_format: "{{amount}}0 KWD",
      },
      KGS: {
        money_format: "????????{{amount}}",
        money_with_currency_format: "????????{{amount}}",
      },
      LVL: {
        money_format: "Ls {{amount}}",
        money_with_currency_format: "Ls {{amount}} LVL",
      },
      LBP: {
        money_format: "L&pound;{{amount}}",
        money_with_currency_format: "L&pound;{{amount}} LBP",
      },
      LTL: {
        money_format: "{{amount}} Lt",
        money_with_currency_format: "{{amount}} Lt",
      },
      MGA: {
        money_format: "Ar {{amount}}",
        money_with_currency_format: "Ar {{amount}} MGA",
      },
      MKD: {
        money_format: "???????????? {{amount}}",
        money_with_currency_format: "???????????? {{amount}} MKD",
      },
      MOP: {
        money_format: "MOP${{amount}}",
        money_with_currency_format: "MOP${{amount}}",
      },
      MVR: {
        money_format: "Rf{{amount}}",
        money_with_currency_format: "Rf{{amount}} MRf",
      },
      MXN: {
        money_format: "$ {{amount}}",
        money_with_currency_format: "$ {{amount}} MXN",
      },
      MYR: {
        money_format: "RM{{amount}} MYR",
        money_with_currency_format: "RM{{amount}} MYR",
      },
      MUR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} MUR",
      },
      MDL: {
        money_format: "{{amount}} MDL",
        money_with_currency_format: "{{amount}} MDL",
      },
      MAD: {
        money_format: "{{amount}} dh",
        money_with_currency_format: "Dh {{amount}} MAD",
      },
      MNT: {
        money_format: "{{amount_no_decimals}} &#8366",
        money_with_currency_format: "{{amount_no_decimals}} MNT",
      },
      MZN: {
        money_format: "{{amount}} Mt",
        money_with_currency_format: "Mt {{amount}} MZN",
      },
      NAD: {
        money_format: "N${{amount}}",
        money_with_currency_format: "N${{amount}} NAD",
      },
      NPR: {
        money_format: "Rs{{amount}}",
        money_with_currency_format: "Rs{{amount}} NPR",
      },
      ANG: {
        money_format: "&fnof;{{amount}}",
        money_with_currency_format: "{{amount}} NA&fnof;",
      },
      NZD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} NZD",
      },
      NIO: {
        money_format: "C${{amount}}",
        money_with_currency_format: "C${{amount}} NIO",
      },
      NGN: {
        money_format: "&#8358;{{amount}}",
        money_with_currency_format: "&#8358;{{amount}} NGN",
      },
      NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format:
        "kr {{amount_with_comma_separator}} NOK",
      },
      OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR",
      },
      PKR: {
        money_format: "Rs.{{amount}}",
        money_with_currency_format: "Rs.{{amount}} PKR",
      },
      PGK: {
        money_format: "K {{amount}}",
        money_with_currency_format: "K {{amount}} PGK",
      },
      PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format:
        "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
      },
      PEN: {
        money_format: "S/. {{amount}}",
        money_with_currency_format: "S/. {{amount}} PEN",
      },
      PHP: {
        money_format: "&#8369;{{amount}}",
        money_with_currency_format: "&#8369;{{amount}} PHP",
      },
      PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format:
        "{{amount_with_comma_separator}} zl PLN",
      },
      QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}",
      },
      RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format:
        "{{amount_with_comma_separator}} lei RON",
      },
      RUB: {
        money_format:
        "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
        money_with_currency_format:
        "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB",
      },
      RWF: {
        money_format: "{{amount_no_decimals}} RF",
        money_with_currency_format: "{{amount_no_decimals}} RWF",
      },
      WST: {
        money_format: "WS$ {{amount}}",
        money_with_currency_format: "WS$ {{amount}} WST",
      },
      SAR: {
        money_format: "{{amount}} SR",
        money_with_currency_format: "{{amount}} SAR",
      },
      STD: {
        money_format: "Db {{amount}}",
        money_with_currency_format: "Db {{amount}} STD",
      },
      RSD: {
        money_format: "{{amount}} RSD",
        money_with_currency_format: "{{amount}} RSD",
      },
      SCR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} SCR",
      },
      SGD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} SGD",
      },
      SYP: {
        money_format: "S&pound;{{amount}}",
        money_with_currency_format: "S&pound;{{amount}} SYP",
      },
      ZAR: {
        money_format: "R {{amount}}",
        money_with_currency_format: "R {{amount}} ZAR",
      },
      KRW: {
        money_format: "&#8361;{{amount_no_decimals}}",
        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW",
      },
      LKR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} LKR",
      },
      SEK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr SEK",
      },
      CHF: {
        money_format: "SFr. {{amount}}",
        money_with_currency_format: "SFr. {{amount}} CHF",
      },
      TWD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TWD",
      },
      THB: {
        money_format: "{{amount}} &#xe3f;",
        money_with_currency_format: "{{amount}} &#xe3f; THB",
      },
      TZS: {
        money_format: "{{amount}} TZS",
        money_with_currency_format: "{{amount}} TZS",
      },
      TTD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TTD",
      },
      TND: {
        money_format: "{{amount}}",
        money_with_currency_format: "{{amount}} DT",
      },
      TRY: {
        money_format: "{{amount}}TL",
        money_with_currency_format: "{{amount}}TL",
      },
      UGX: {
        money_format: "Ush {{amount_no_decimals}}",
        money_with_currency_format: "Ush {{amount_no_decimals}} UGX",
      },
      UAH: {
        money_format: "???????{{amount}}",
        money_with_currency_format: "???????{{amount}} UAH",
      },
      AED: {
        money_format: "Dhs. {{amount}}",
        money_with_currency_format: "Dhs. {{amount}} AED",
      },
      UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format:
        "${{amount_with_comma_separator}} UYU",
      },
      VUV: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}}VT",
      },
      VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format:
        "Bs. {{amount_with_comma_separator}} VEF",
      },
      VND: {
        money_format:
        "{{amount_no_decimals_with_comma_separator}}&#8363;",
        money_with_currency_format:
        "{{amount_no_decimals_with_comma_separator}} VND",
      },
      XBT: {
        money_format: "{{amount_no_decimals}} BTC",
        money_with_currency_format: "{{amount_no_decimals}} BTC",
      },
      XOF: {
        money_format: "CFA{{amount}}",
        money_with_currency_format: "CFA{{amount}} XOF",
      },
      ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format:
        "ZMW{{amount_no_decimals_with_comma_separator}}",
      },
    };
    var format = moneyFormats.hasOwnProperty(moneyCurrency) ? moneyFormats[moneyCurrency].money_format : "${{amount}}";
    function formatMoney(cents, format) {
      if (typeof cents === 'string') {
        cents = cents.replace('.', '');
      }
      var value = '';
      var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = format || moneyFormat;

      function formatWithDelimiters(number, precision, thousands, decimal) {
        thousands = thousands || ',';
        decimal = decimal || '.';

        if (isNaN(number) || number === null) {
          return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          '$1' + thousands
        );
        var centsAmount = parts[1] ? decimal + parts[1] : '';

        return dollarsAmount + centsAmount;
      }

      switch (formatString.match(placeholderRegex)[1]) {
        case 'amount':
          value = formatWithDelimiters(cents, 2);
          break;
        case 'amount_no_decimals':
          value = formatWithDelimiters(cents, 0);
          break;
        case 'amount_with_comma_separator':
          value = formatWithDelimiters(cents, 2, '.', ',');
          break;
        case 'amount_no_decimals_with_comma_separator':
          value = formatWithDelimiters(cents, 0, '.', ',');
          break;
        case 'amount_no_decimals_with_space_separator':
          value = formatWithDelimiters(cents, 0, ' ');
          break;
        case 'amount_with_apostrophe_separator':
          value = formatWithDelimiters(cents, 2, "'");
          break;
      }

      return formatString.replace(placeholderRegex, value);
    }
    /* This is my app's JavaScript */
    var initSimesyNotification = function ($) {
      $("head").append($("<link />", {
        rel: "stylesheet",
        type: "text/css",
        href:
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      }));
      let timeago_js = document.createElement("script");
      timeago_js.src =
        "https://timeago.yarp.com/jquery.timeago.js";
      document.body.appendChild(timeago_js);
      var data = {
        config:{
          limit:'15',
          boxbgcolor:'#ffffff',
          textcolor:'#000000',
          boxplacement:'bottom-left',
          boxlayout:'imageleft',
          boxsize:'small',
          dropshadow:'ds-subtle',
          roundedcorners:'rc-none',
          text:'{{first_name}} from {{city}}, {{country}} purchased {{product_name}} for {{price}}.',
          title:'{{product_name}}',
          timeago:1,
          hideonmobile:0,
          notificationdelay:4,
          notificationduration:2,
          firstnotification:2,
          hideclose:1,
          excludepages:[],
          disablelink:1,
          notificationage:7,
          loop:0,
          trackingurl:'',
          imagesize:'shop_thumbnail',
          cache:300,
          disableajax:0,
          ordertype:'all',
        },
        saleNoti:[
          {
            buyer: {name: "Maarten", city: "Brussels", state: "N/A", country: "Belgium"},
            city: "Brussels",
            country: "Belgium",
            name: "Maarten",
            state: "N/A",
            date: "2021-10-22 04:55:00",
            id: 121,
            image: "http://demostore.studiowombat.com/wp-content/uploads/2013/06/T_6_front-150x150.jpg",
            name: "Woo Ninja",
            price: "9000000",
            stock: {availability: "", class: "in-stock"},
            availability: "",
            class: "in-stock",
            url: "http://demostore.studiowombat.com/product/woo-ninja/"
          }
        ]
      };
      var interval = setInterval(function() {
        var html_sn = '';
        var title_sn = data.config.title;
        title_sn = title_sn.replace("{{product_name}}", data.saleNoti[0].name)
        .replace("{{price}}", formatMoney(data.saleNoti[0].price,format))
        .replace("{{stock}}", data.saleNoti[0].stock.availability);

        var text_sn = data.config.text;
        text_sn = text_sn.replace("{{first_name}}", data.saleNoti[0].buyer.name)
        .replace("{{city}}", data.saleNoti[0].buyer.city)
        .replace("{{state}}", data.saleNoti[0].buyer.state)
        .replace("{{country}}", data.saleNoti[0].buyer.country)
        .replace("{{product_name}}", data.saleNoti[0].name)
        .replace("{{price}}", formatMoney(data.saleNoti[0].price,format))
        .replace("{{stock}}", data.saleNoti[0].stock.availability);
        html_sn += '<div id="simesy-sb-wrapper" class="simesy-sb-'+data.config.boxplacement+'">';
        html_sn += '<div class="simesy-sb-'+data.config.boxlayout+' simesy-sb-'+data.config.dropshadow+' simesy-sb-'+data.config.roundedcorners+' simesy-sb-'+data.config.boxsize+'" style="background-color: '+data.config.boxbgcolor+';">';
        if(data.saleNoti[0].image != '' && data.config.boxlayout != 'noimage'){
          html_sn += '<div class="image-wrapper simesy-sb-image-wrapper" style="background-image:url('+data.saleNoti[0].image+')"></div>';
        }
        html_sn += '<div class="message-wrapper simesy-sb-message">';
        html_sn += '<h4 style="color:'+data.config.textcolor+'">'+title_sn+'</h4>';
        html_sn += '<div class="simesy-sb-message-body">'+text_sn+'</div>';
        html_sn += '<div class="simesy-sb-message-bottom">';
        html_sn += '<div class="timeago" style="color:'+data.config.textcolor+'">'+jQuery.timeago(data.saleNoti[0].date)+'</div>';
        if(data.config.hideclose == 1){
          html_sn += '<div class="simesy-sb-hide"><a href="javascript:void(0)" style="color:'+data.config.textcolor+'">Disable</a></div>'
        }
        html_sn += '</div>';
        html_sn += '</div>';
        html_sn += '<a href="javascript:void(0)" class="simesy-sb-close" style="color:'+data.config.textcolor+'">x</a>'

        html_sn += '</div>';
        html_sn += '</div>';
        $('body').append(html_sn);
        setTimeout(function(){
          $(document).find('#simesy-sb-wrapper').remove();

        }, parseInt(data.config.notificationduration)*1000)
      },parseInt(data.config.notificationdelay)*1000 + parseInt(data.config.notificationduration)*1000)
      // Disable Loop
      $(document).on('click','.simesy-sb-hide',function(e){
        e.preventDefault();
        $('#simesy-sb-wrapper').remove();
        clearInterval(interval)
      })
      // Event Click hide
      $(document).on('click','.simesy-sb-close',function(e){
        e.preventDefault();
        $('#simesy-sb-wrapper').remove();
      })
    };
    if (typeof jQuery === "undefined" || parseFloat(jQuery.fn.jquery) < 1.7) {
      loadScript(
        "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
        function () {
          //     jQuery191 = jQuery.noConflict(true);
          initSimesyNotificationLibrary(jQuery);
          initSimesyNotification(jQuery);
        }
      );
    } else {
      initSimesyNotificationLibrary(jQuery);
      initSimesyNotification(jQuery);
    }
  })();
