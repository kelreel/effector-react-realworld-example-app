parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UZUC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$errors=exports.form=exports.FormGate=exports.signInFx=exports.formSubmitted=void 0;var e=require("effector"),r=require("effector-forms"),t=require("effector-react"),o=require("../../../api"),s=(0,e.createEvent)();exports.formSubmitted=s;var a=(0,e.createEffect)({handler:function(e){var r=e.email,t=e.password;return o.request.post("users/login",{user:{email:r,password:t}}).then(function(e){return e.data.user})}});exports.signInFx=a;var i=(0,t.createGate)();exports.FormGate=i;var f=(0,r.createForm)({fields:{email:{init:""},password:{init:""}}});exports.form=f;var n=(0,e.createStore)({errors:{}});exports.$errors=n;
},{"effector":"hr1S","effector-forms":"u7Zp","effector-react":"wuaz","../../../api":"in7L"}],"q9v5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Errors=void 0;var r=u(require("react")),e=require("effector-react"),t=require("../../../ui"),o=require("../model");function u(r){return r&&r.__esModule?r:{default:r}}var s=function(){var u=(0,e.useStore)(o.$errors);return r.default.createElement(t.ErrorList,{errors:u})};exports.Errors=s;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../model":"UZUC"}],"A765":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EmailField=void 0;var e=a(require("react")),r=require("effector-forms"),t=require("../../../ui"),l=require("../model");function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){var a=(0,r.useField)(l.form.fields.email),i=a.name,o=a.onChange;return e.default.createElement(t.InputField,{className:"form-control-lg",name:i,placeholder:"Email",type:"email",onChange:function(e){return o(e.target.value)}})};exports.EmailField=i;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","../model":"UZUC"}],"IQGa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PasswordField=void 0;var e=a(require("react")),r=require("effector-forms"),o=require("../../../ui"),t=require("../model");function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){var a=(0,r.useField)(t.form.fields.password),s=a.name,u=a.onChange;return e.default.createElement(o.InputField,{autoComplete:"current-password",className:"form-control-lg",name:s,placeholder:"Password",type:"password",onChange:function(e){return u(e.target.value)}})};exports.PasswordField=s;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","../model":"UZUC"}],"Hwsk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubmitButton=void 0;var e=i(require("react")),t=require("effector-react"),r=require("../../../ui"),u=require("../model");function i(e){return e&&e.__esModule?e:{default:e}}var n=function(){var i=(0,t.useStore)(u.signInFx.pending);return e.default.createElement(r.Button,{className:"btn-lg btn-primary pull-xs-right",disabled:i,type:"submit"},"Sign In")};exports.SubmitButton=n;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../model":"UZUC"}],"fM5T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var e=f(require("react")),t=require("effector-react"),r=require("../../../ui"),u=a(require("../model")),n=require("./email-field"),o=require("./password-field"),i=require("./submit-button");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=u?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){return(0,t.useGate)(u.FormGate),e.default.createElement(r.Form,{onSubmit:u.formSubmitted},e.default.createElement(n.EmailField,null),e.default.createElement(o.PasswordField,null),e.default.createElement(i.SubmitButton,null))};exports.Form=c;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../model":"UZUC","./email-field":"A765","./password-field":"IQGa","./submit-button":"Hwsk"}],"FV3X":[function(require,module,exports) {
"use strict";var e=require("effector"),r=require("."),t=require("../../../features/user");r.formSubmitted.watch(function(e){return e.preventDefault()}),(0,e.sample)({source:r.form.$values,clock:r.formSubmitted,target:r.signInFx}),(0,e.forward)({from:r.FormGate.close,to:r.form.reset}),t.$user.on(r.signInFx.doneData,function(e,r){return r}),r.$errors.on(r.signInFx.failData,function(e,r){var t;return null===(t=r.response)||void 0===t?void 0:t.data}).reset(r.form.$values,r.FormGate.close);
},{"effector":"hr1S",".":"UZUC","../../../features/user":"TQk2"}],"xEtO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoginPage=void 0;var e=n(require("react")),r=require("react-router-dom"),t=require("../../../library/router"),a=require("../../../ui"),l=require("./errors"),u=require("./form");function n(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var o=function(){return e.default.createElement(a.Page,null,e.default.createElement(a.Row,null,e.default.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},e.default.createElement("h1",{className:"text-xs-center"},"Sign In"),e.default.createElement("p",{className:"text-xs-center"},e.default.createElement(r.Link,{to:t.Paths.REGISTRATION},"Need an account?")),e.default.createElement(l.Errors,null),e.default.createElement(u.Form,null))))};exports.LoginPage=o;
},{"react":"n8MK","react-router-dom":"uc19","../../../library/router":"CgWG","../../../ui":"npgd","./errors":"q9v5","./form":"fM5T","../model/init":"FV3X"}],"bOQh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoginPage",{enumerable:!0,get:function(){return e.LoginPage}});var e=require("./ui/login");
},{"./ui/login":"xEtO"}]},{},[], null)