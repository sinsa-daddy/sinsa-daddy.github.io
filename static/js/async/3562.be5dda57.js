/*! For license information please see 3562.be5dda57.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([[3562],{10389:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(9122),o=r(17944),i=r(84337),a=r(81821),s=r(87363),l=r.n(s),u=r(46371),c=r(68426),f=r(97458),p=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],d=l().forwardRef((function(e,t){var r=e.fieldProps,a=e.options,s=e.radioType,l=e.layout,u=e.proFieldProps,d=e.valueEnum,h=(0,o.Z)(e,p);return(0,f.jsx)(c.Z,(0,n.Z)((0,n.Z)({valueType:"button"===s?"radioButton":"radio",ref:t,valueEnum:(0,i.h)(d,void 0)},h),{},{fieldProps:(0,n.Z)({options:a,layout:l},r),proFieldProps:u,filedConfig:{customLightMode:!0}}))})),h=l().forwardRef((function(e,t){var r=e.fieldProps,o=e.children;return(0,f.jsx)(a.Radio,(0,n.Z)((0,n.Z)({},r),{},{ref:t,children:o}))})),m=(0,u.G)(h,{valuePropName:"checked",ignoreWidth:!0});m.Group=d,m.Button=a.Radio.Button,m.displayName="ProFormComponent";const _=m},12781:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(9122),o=r(17944),i=r(87363),a=r.n(i),s=r(68426),l=r(97458),u=["fieldProps","proFieldProps"],c=function(e,t){var r=e.fieldProps,i=e.proFieldProps,a=(0,o.Z)(e,u);return(0,l.jsx)(s.Z,(0,n.Z)({valueType:"rate",fieldProps:r,ref:t,proFieldProps:i,filedConfig:{ignoreWidth:!0}},a))};const f=a().forwardRef(c)},46855:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(9122),o=r(17944),i=r(84337),a=r(87363),s=r.n(a),l=r(37750),u=r(68426),c=r(97458),f=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],p=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],d=function(e,t){var r=e.fieldProps,s=e.children,p=e.params,d=e.proFieldProps,h=e.mode,m=e.valueEnum,_=e.request,b=e.showSearch,y=e.options,g=(0,o.Z)(e,f),v=(0,a.useContext)(l.Z);return(0,c.jsx)(u.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,i.h)(m),request:_,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:y,mode:h,showSearch:b,getPopupContainer:v.getPopupContainer},r),ref:t,proFieldProps:d},g),{},{children:s}))},h=s().forwardRef((function(e,t){var r=e.fieldProps,s=e.children,f=e.params,d=e.proFieldProps,h=e.mode,m=e.valueEnum,_=e.request,b=e.options,y=(0,o.Z)(e,p),g=(0,n.Z)({options:b,mode:h||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},r),v=(0,a.useContext)(l.Z);return(0,c.jsx)(u.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,i.h)(m),request:_,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({getPopupContainer:v.getPopupContainer},g),ref:t,proFieldProps:d},y),{},{children:s}))})),m=s().forwardRef(d);m.SearchSelect=h,m.displayName="ProFormComponent";const _=m},48636:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(9122),o=r(17944),i=r(87363),a=r.n(i),s=r(68426),l=r(97458),u=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"];const c=a().forwardRef((function(e,t){var r=e.fieldProps,i=e.unCheckedChildren,a=e.checkedChildren,c=e.proFieldProps,f=(0,o.Z)(e,u);return(0,l.jsx)(s.Z,(0,n.Z)({valueType:"switch",fieldProps:(0,n.Z)({unCheckedChildren:i,checkedChildren:a},r),ref:t,valuePropName:"checked",proFieldProps:c,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},f))}))},55950:function(e,t,r){var n,o;n=function(){var e,t,r,n,o,i="2.0.6",a={},s={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function c(e,t){this._input=e,this._value=t}return(e=function(r){var n,o,i,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(u.zeroFormat&&r===u.zeroFormat)n=0;else if(u.nullFormat&&r===u.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(o in a)if((s="function"==typeof a[o].regexps.unformat?a[o].regexps.unformat():a[o].regexps.unformat)&&r.match(s)){i=a[o].unformat;break}n=(i=i||e._.stringToNumber)(r)}else n=Number(r)||null;return new c(r,n)}).version=i,e.isNumeral=function(e){return e instanceof c},e._=t={numberToFormat:function(t,r,n){var o,i,a,l,u,c,f,p=s[e.options.currentLocale],d=!1,h=!1,m=0,_="",b=1e12,y=1e9,g=1e6,v=1e3,P="",F=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(d=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(u=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(_=" "),r=r.replace(new RegExp(_+"a[kmbt]?"),""),i>=b&&!o||"t"===o?(_+=p.abbreviations.trillion,t/=b):i<b&&i>=y&&!o||"b"===o?(_+=p.abbreviations.billion,t/=y):i<y&&i>=g&&!o||"m"===o?(_+=p.abbreviations.million,t/=g):(i<g&&i>=v&&!o||"k"===o)&&(_+=p.abbreviations.thousand,t/=v)),e._.includes(r,"[.]")&&(h=!0,r=r.replace("[.]",".")),a=t.toString().split(".")[0],l=r.split(".")[1],c=r.indexOf(","),m=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),P=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):P=e._.toFixed(t,l.length,n),a=P.split(".")[0],P=e._.includes(P,".")?p.delimiters.decimal+P.split(".")[1]:"",h&&0===Number(P.slice(1))&&(P="")):a=e._.toFixed(t,0,n),_&&!o&&Number(a)>=1e3&&_!==p.abbreviations.trillion)switch(a=String(Number(a)/1e3),_){case p.abbreviations.thousand:_=p.abbreviations.million;break;case p.abbreviations.million:_=p.abbreviations.billion;break;case p.abbreviations.billion:_=p.abbreviations.trillion}if(e._.includes(a,"-")&&(a=a.slice(1),F=!0),a.length<m)for(var w=m-a.length;w>0;w--)a="0"+a;return c>-1&&(a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+p.delimiters.thousands)),0===r.indexOf(".")&&(a=""),f=a+P+(_||""),d?f=(d&&F?"(":"")+f+(d&&F?")":""):u>=0?f=0===u?(F?"-":"+")+f:f+(F?"-":"+"):F&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,o=s[u.currentLocale],i=e,a={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)r=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),a)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,a[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var o,i,a,s,l=e.toString().split("."),u=t-(n||0);return o=2===l.length?Math.min(Math.max(l[1].length,u),t):u,a=Math.pow(10,o),s=(r(e+"e+"+o)/a).toFixed(o),n>t-o&&(i=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),s=s.replace(i,"")),s}},e.options=u,e.formats=a,e.locales=s,e.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},e.localeData=function(e){if(!e)return s[u.currentLocale];if(e=e.toLowerCase(),!s[e])throw new Error("Unknown locale : "+e);return s[e]},e.reset=function(){for(var e in l)u[e]=l[e]},e.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,i,a,s,l,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(f){u=e.localeData(e.locale())}return i=u.currency.symbol,s=u.abbreviations,n=u.delimiters.decimal,o="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==i)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==s.thousand&&c[0]!==s.million&&c[0]!==s.billion&&c[0]!==s.trillion)||(l=new RegExp(o+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(l):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(l)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(l)||!a[1].match(/^\d+$/))))},e.fn=c.prototype={clone:function(){return e(this)},format:function(t,r){var n,o,i,s=this._value,l=t||u.defaultFormat;if(r=r||Math.round,0===s&&null!==u.zeroFormat)o=u.zeroFormat;else if(null===s&&null!==u.nullFormat)o=u.nullFormat;else{for(n in a)if(l.match(a[n].regexps.format)){i=a[n].format;break}o=(i=i||e._.numberToFormat)(s,l,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},o="("+(o=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,o,i){var a,s,l,u=e._.includes(o,"ib")?n:r,c=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=u.suffixes.length;a++)if(s=Math.pow(u.base,a),l=Math.pow(u.base,a+1),null===t||0===t||t>=s&&t<l){c+=u.suffixes[a],s>0&&(t/=s);break}return e._.numberToFormat(t,o,i)+c},unformat:function(t){var o,i,a=e._.stringToNumber(t);if(a){for(o=r.suffixes.length-1;o>=0;o--){if(e._.includes(t,r.suffixes[o])){i=Math.pow(r.base,o);break}if(e._.includes(t,n.suffixes[o])){i=Math.pow(n.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,i,a=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),i=0;i<s.before.length;i++)switch(s.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=s.after.length-1;i>=0;i--)switch(s.after[i]){case"$":o=i===s.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(s.after.length-(1+i)));break;case" ":o=i===s.after.length-1?o+" ":e._.insert(o," ",-(s.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);function i(t,r,n,o){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)}return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],i,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=o.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(o="function"==typeof n?n.call(t,r,t,e):n)||(e.exports=o)},82547:(e,t,r)=>{"use strict";r.d(t,{Uy:()=>U});var n=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function a(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function l(e){return!!e&&!!e[i]}function u(e){return!!e&&(f(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||_(e)||b(e))}var c=Object.prototype.constructor.toString();function f(e){if(!e||"object"!=typeof e)return!1;const t=s(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===c}function p(e,t){0===d(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function d(e){const t=e[i];return t?t.type_:Array.isArray(e)?1:_(e)?2:b(e)?3:0}function h(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m(e,t,r){const n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function _(e){return e instanceof Map}function b(e){return e instanceof Set}function y(e){return e.copy_||e.base_}function g(e,t){if(_(e))return new Map(e);if(b(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&f(e)){if(!s(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[i];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){const t=n[o],i=r[t];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[t]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[t]})}return Object.create(s(e),r)}function v(e,t=!1){return F(e)||l(e)||!u(e)||(d(e)>1&&(e.set=e.add=e.clear=e.delete=P),Object.freeze(e),t&&p(e,((e,t)=>v(t,!0)))),e}function P(){a(2)}function F(e){return Object.isFrozen(e)}var w,x={};function S(e){const t=x[e];return t||a(0),t}function N(){return w}function M(e,t){t&&(S("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function z(e){C(e),e.drafts_.forEach(B),e.drafts_=null}function C(e){e===w&&(w=e.parent_)}function k(e){return w={drafts_:[],parent_:w,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function B(e){const t=e[i];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Z(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[i].modified_&&(z(t),a(4)),u(e)&&(e=O(t,e),t.parent_||E(t,e)),t.patches_&&S("Patches").generateReplacementPatches_(r[i].base_,e,t.patches_,t.inversePatches_)):e=O(t,r,[]),z(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==n?e:void 0}function O(e,t,r){if(F(t))return t;const n=t[i];if(!n)return p(t,((o,i)=>T(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return E(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),p(o,((o,a)=>T(e,n,t,o,a,r,i))),E(e,t,!1),r&&e.patches_&&S("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function T(e,t,r,n,o,i,a){if(l(o)){const a=O(e,o,i&&t&&3!==t.type_&&!h(t.assigned_,n)?i.concat(n):void 0);if(m(r,n,a),!l(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(u(o)&&!F(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;O(e,o),t&&t.scope_.parent_||E(e,o)}}function E(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&v(t,r)}var j={get(e,t){if(t===i)return e;const r=y(e);if(!h(r,t))return function(e,t,r){const n=$(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!u(n)?n:n===R(e.base_,t)?(D(e),e.copy_[t]=W(n,e)):n},has:(e,t)=>t in y(e),ownKeys:e=>Reflect.ownKeys(y(e)),set(e,t,r){const n=$(y(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=R(y(e),t),s=n?.[i];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((o=r)===(a=n)?0!==o||1/o==1/a:o!=o&&a!=a)&&(void 0!==r||h(e.base_,t)))return!0;D(e),A(e)}var o,a;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==R(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,D(e),A(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){a(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){a(12)}},L={};function R(e,t){const r=e[i];return(r?y(r):e)[t]}function $(e,t){if(!(t in e))return;let r=s(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=s(r)}}function A(e){e.modified_||(e.modified_=!0,e.parent_&&A(e.parent_))}function D(e){e.copy_||(e.copy_=g(e.base_,e.scope_.immer_.useStrictShallowCopy_))}p(j,((e,t)=>{L[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),L.deleteProperty=function(e,t){return L.set.call(this,e,t,void 0)},L.set=function(e,t,r){return j.set.call(this,e[0],t,r,e[0])};function W(e,t){const r=_(e)?S("MapSet").proxyMap_(e,t):b(e)?S("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:N(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=j;r&&(o=[n],i=L);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:N()).drafts_.push(r),r}function q(e){if(!u(e)||F(e))return e;const t=e[i];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=g(e,t.scope_.immer_.useStrictShallowCopy_)}else r=g(e,!0);return p(r,((e,t)=>{m(r,e,q(t))})),t&&(t.finalized_=!1),r}var K=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let o;if("function"!=typeof t&&a(6),void 0!==r&&"function"!=typeof r&&a(7),u(e)){const n=k(this),i=W(e,void 0);let a=!0;try{o=t(i),a=!1}finally{a?z(n):C(n)}return M(n,r),Z(o,n)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===n&&(o=void 0),this.autoFreeze_&&v(o,!0),r){const t=[],n=[];S("Patches").generateReplacementPatches_(e,o,t,n),r(t,n)}return o}a(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){u(e)||a(8),l(e)&&(e=function(e){l(e)||a(10);return q(e)}(e));const t=k(this),r=W(e,void 0);return r[i].isManual_=!0,C(t),r}finishDraft(e,t){const r=e&&e[i];r&&r.isManual_||a(9);const{scope_:n}=r;return M(n,t),Z(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=S("Patches").applyPatches_;return l(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},U=K.produce;K.produceWithPatches.bind(K),K.setAutoFreeze.bind(K),K.setUseStrictShallowCopy.bind(K),K.applyPatches.bind(K),K.createDraft.bind(K),K.finishDraft.bind(K)}}]);