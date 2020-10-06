parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bb2W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.form=exports.validTagAdded=exports.keyPressed=exports.tagAdded=void 0;var e=require("effector"),r=require("effector-forms"),t=require("../../../../library/ascii"),o=(0,e.createEvent)();exports.tagAdded=o;var d=(0,e.createEvent)();exports.keyPressed=d;var s=o.filter({fn:function(e){return Boolean(e.length)&&(0,t.isASCII)(e)}});exports.validTagAdded=s;var a=(0,r.createForm)({fields:{currentTag:{init:""}}});exports.form=a;
},{"effector":"hr1S","effector-forms":"u7Zp","../../../../library/ascii":"Jule"}],"fVAm":[function(require,module,exports) {
"use strict";var e=require("effector"),r=require(".");(0,e.sample)({source:r.form.fields.currentTag.$value,clock:(0,e.guard)(r.keyPressed,{filter:function(e){return"Enter"===e.key}}),target:r.tagAdded}),(0,e.forward)({from:r.tagAdded,to:r.form.reset});
},{"effector":"hr1S",".":"bb2W"}],"j3QM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AddTag=void 0;var e=a(require("react")),r=require("effector-forms"),t=require("../../../ui"),n=o(require("./model"));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}function a(e){return e&&e.__esModule?e:{default:e}}require("./model/init");var f=function(){var u=(0,r.useForm)(n.form).fields;return e.default.createElement(t.Form,{onSubmit:function(e){return e.preventDefault()}},e.default.createElement(t.Input,{autoComplete:"off",name:"tag-list",placeholder:"Enter tags",value:u.currentTag.value,onChange:function(e){return u.currentTag.onChange(e.target.value)},onKeyDown:n.keyPressed}))};exports.AddTag=f;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","./model":"bb2W","./model/init":"fVAm"}],"kXV7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$errors=exports.$tagList=exports.form=exports.$isEmptySlug=exports.$hasSlug=exports.$slug=exports.Gate=exports.fetchArticleFx=exports.createArticleFx=exports.tagDeleted=exports.formSubmitted=void 0;var e=require("effector"),t=require("effector-forms"),r=require("effector-react"),s=require("../../../api"),i=(0,e.createEvent)();exports.formSubmitted=i;var o=(0,e.createEvent)();exports.tagDeleted=o;var a=(0,e.createEffect)({handler:function(e){return s.request.post("articles",{article:e}).then(function(e){return e.data.article})}});exports.createArticleFx=a;var c=(0,e.createEffect)(function(e){return s.request.get("articles/"+e).then(function(e){var t=e.data.article;return{slug:t.slug,title:t.title,description:t.description,body:t.body,tagList:t.tagList}})});exports.fetchArticleFx=c;var p=(0,r.createGate)();exports.Gate=p;var u=p.state.map(function(e){return e.slug});exports.$slug=u;var n=u.map(Boolean);exports.$hasSlug=n;var l=n.map(function(e){return!e});exports.$isEmptySlug=l;var x=(0,t.createForm)({fields:{slug:{init:""},title:{init:""},description:{init:""},body:{init:""},tagList:{init:[]}}});exports.form=x;var f=x.fields.tagList.$value;exports.$tagList=f;var g=(0,e.createStore)({errors:{}});exports.$errors=g;
},{"effector":"hr1S","effector-forms":"u7Zp","effector-react":"wuaz","../../../api":"in7L"}],"Gc9s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Errors=void 0;var r=u(require("react")),e=require("effector-react"),t=require("../../../ui"),o=require("../model");function u(r){return r&&r.__esModule?r:{default:r}}var s=function(){var u=(0,e.useStore)(o.$errors);return r.default.createElement(t.ErrorList,{errors:u})};exports.Errors=s;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../model":"kXV7"}],"LTb3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BodyField=void 0;var e=u(require("react")),r=require("effector-forms"),t=require("../../../ui"),o=require("../model");function u(e){return e&&e.__esModule?e:{default:e}}var a=function(){var u=(0,r.useField)(o.form.fields.body),a=u.value,i=u.name,n=u.onChange;return e.default.createElement(t.TextField,{name:i,placeholder:"Write your article (in markdown)",rows:8,value:a,onChange:function(e){return n(e.target.value)}})};exports.BodyField=a;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","../model":"kXV7"}],"BV0p":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DescriptionField=void 0;var e=u(require("react")),r=require("effector-forms"),t=require("../../../ui"),i=require("../model");function u(e){return e&&e.__esModule?e:{default:e}}var n=function(){var u=(0,r.useField)(i.form.fields.description),n=u.value,o=u.name,a=u.onChange;return e.default.createElement(t.InputField,{name:o,placeholder:"What's this article about?",value:n,onChange:function(e){return a(e.target.value)}})};exports.DescriptionField=n;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","../model":"kXV7"}],"E0Pu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleField=void 0;var e=u(require("react")),r=require("effector-forms"),t=require("../../../ui"),l=require("../model");function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){var u=(0,r.useField)(l.form.fields.title),i=u.value,o=u.name,a=u.onChange;return e.default.createElement(t.InputField,{className:"form-control-lg",name:o,placeholder:"Article Title",value:i,onChange:function(e){return a(e.target.value)}})};exports.TitleField=i;
},{"react":"n8MK","effector-forms":"u7Zp","../../../ui":"npgd","../model":"kXV7"}],"raOy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uniq=void 0;var e=function(e){return Array.from(new Set(e))};exports.uniq=e;
},{}],"ch6P":[function(require,module,exports) {
"use strict";var e=require("effector"),r=require("."),t=u(require("../../../library/router")),o=require("../../../library/uniq"),a=u(require("../add-tag/model"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(t,a,u):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}var c=function(){return(c=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},f=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},i=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var o=Array(e),a=0;for(r=0;r<t;r++)for(var n=arguments[r],u=0,c=n.length;u<c;u++,a++)o[a]=n[u];return o};r.formSubmitted.watch(function(e){return e.preventDefault()}),(0,e.guard)({source:r.Gate.open,filter:r.$hasSlug,target:(0,e.attach)({source:r.$slug,effect:r.fetchArticleFx})}),(0,e.forward)({from:r.fetchArticleFx.doneData,to:r.form.set}),(0,e.sample)({source:r.form.$values,clock:a.validTagAdded,fn:function(e,r){var t=e.tagList,a=f(e,["tagList"]);return c(c({},a),{tagList:(0,o.uniq)(i(t,[r]))})},target:r.form.set}),(0,e.sample)({source:r.form.$values,clock:r.tagDeleted,fn:function(e,r){var t=e.tagList,o=f(e,["tagList"]);return c(c({},o),{tagList:t.filter(function(e){return e!==r})})},target:r.form.set}),(0,e.forward)({from:[r.createArticleFx.done,r.$isEmptySlug],to:r.form.reset}),(0,e.sample)({source:r.form.$values,clock:r.form.submit,target:r.createArticleFx}),r.createArticleFx.doneData.watch(function(e){var r=e.slug;t.model.history.replace("/article/"+r)}),r.$errors.on(r.createArticleFx.failData,function(e,r){var t;return null===(t=r.response)||void 0===t?void 0:t.data}).reset(r.form.$values,r.Gate.close);
},{"effector":"hr1S",".":"kXV7","../../../library/router":"CgWG","../../../library/uniq":"raOy","../add-tag/model":"bb2W"}],"Vkqa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var e=f(require("react")),r=require("../../../ui"),t=l(require("../model")),i=require("./body-field"),n=require("./description-field"),u=require("./title-field");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o();if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var u=i?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(t,n,u):t[n]=e[n]}return t.default=e,r&&r.set(e,t),t}function f(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var d=function(){return e.default.createElement(r.Form,{id:"editor",onSubmit:t.formSubmitted},e.default.createElement(u.TitleField,null),e.default.createElement(n.DescriptionField,null),e.default.createElement(i.BodyField,null))};exports.Form=d;
},{"react":"n8MK","../../../ui":"npgd","../model":"kXV7","./body-field":"LTb3","./description-field":"BV0p","./title-field":"E0Pu","../model/init":"ch6P"}],"LXit":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubmitButton=void 0;var e=f(require("react")),t=require("effector-forms"),r=require("effector-react"),u=require("../../../ui"),n=i(require("../model"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=u?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function f(e){return e&&e.__esModule?e:{default:e}}var a=function(){var o=(0,t.useForm)(n.form).submit,i=(0,r.useStore)(n.createArticleFx.pending);return e.default.createElement(u.Button,{className:"btn-lg btn-primary pull-xs-right",disabled:i,form:"editor",type:"submit",onClick:function(e){e.preventDefault(),o()}},"Publish article")};exports.SubmitButton=a;
},{"react":"n8MK","effector-forms":"u7Zp","effector-react":"wuaz","../../../ui":"npgd","../model":"kXV7"}],"kDga":[function(require,module,exports) {

},{}],"FYKu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tag=void 0;var e=r(require("react")),t=require("../../../../ui");function r(e){return e&&e.__esModule?e:{default:e}}require("./index.css");var a=function(r){var a=r.children,l=r.onClick;return e.default.createElement("span",{className:"tag-default tag-pill"},a,e.default.createElement(t.Button,{className:"btn-sm editor-tag",onClick:l},e.default.createElement("i",{className:"ion-close-round"})))};exports.Tag=a;
},{"react":"n8MK","../../../../ui":"npgd","./index.css":"kDga"}],"Ox0u":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TagList=void 0;var e=a(require("react")),t=require("effector-react"),r=require("../../../ui"),n=o(require("../model")),u=require("./tag");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function a(e){return e&&e.__esModule?e:{default:e}}var f=function(){return e.default.createElement(r.TagList,null,(0,t.useList)(n.$tagList,function(t){return e.default.createElement(u.Tag,{onClick:function(){return n.tagDeleted(t)}},t)}))};exports.TagList=f;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../model":"kXV7","./tag":"FYKu"}],"LiCs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditorPage=void 0;var e=o(require("react")),t=require("effector-react"),r=require("../../../ui"),l=require("../add-tag"),u=require("../model"),a=require("./errors"),i=require("./form"),n=require("./submit-button"),d=require("./tag-list");function o(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var s=function(o){var s=o.match.params.slug;return(0,t.useGate)(u.Gate,{slug:s}),e.default.createElement(r.Page,null,e.default.createElement(r.Row,null,e.default.createElement("div",{className:"col-md-10 offset-md-1 col-xs-12"},e.default.createElement(a.Errors,null),e.default.createElement(i.Form,null),e.default.createElement(l.AddTag,null),e.default.createElement(d.TagList,null),e.default.createElement(n.SubmitButton,null))))};exports.EditorPage=s;
},{"react":"n8MK","effector-react":"wuaz","../../../ui":"npgd","../add-tag":"j3QM","../model":"kXV7","./errors":"Gc9s","./form":"Vkqa","./submit-button":"LXit","./tag-list":"Ox0u","../model/init":"ch6P"}],"jkHw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"EditorPage",{enumerable:!0,get:function(){return e.EditorPage}});var e=require("./ui/editor");
},{"./ui/editor":"LiCs"}]},{},[], null)