/*! For license information please see 8313.019f47bf.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([["8313"],{32802:function(e,t,r){var n,i;e=r.nmd(e),n=this,i=function(){var e,t,r,n,i,o={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function c(e,t){this._input=e,this._value=t}return(n=function(e){var t,r,a,l;if(n.isNumeral(e))t=e.value();else if(0===e||void 0===e)t=0;else if(null===e||i.isNaN(e))t=null;else if("string"==typeof e){if(u.zeroFormat&&e===u.zeroFormat)t=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in o)if((l="function"==typeof o[r].regexps.unformat?o[r].regexps.unformat():o[r].regexps.unformat)&&e.match(l)){a=o[r].unformat;break}t=(a=a||n._.stringToNumber)(e)}}else t=Number(e)||null;return new c(e,t)}).version="2.0.6",n.isNumeral=function(e){return e instanceof c},n._=i={numberToFormat:function(e,t,r){var i,o,l,u,c,s,f,p=a[n.options.currentLocale],h=!1,d=!1,m=0,_="",b="",y=!1;if(o=Math.abs(e=e||0),n._.includes(t,"(")?(h=!0,t=t.replace(/[\(|\)]/g,"")):(n._.includes(t,"+")||n._.includes(t,"-"))&&(c=n._.includes(t,"+")?t.indexOf("+"):e<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),n._.includes(t,"a")&&(i=!!(i=t.match(/a(k|m|b|t)?/))&&i[1],n._.includes(t," a")&&(_=" "),t=t.replace(RegExp(_+"a[kmbt]?"),""),o>=1e12&&!i||"t"===i?(_+=p.abbreviations.trillion,e/=1e12):o<1e12&&o>=1e9&&!i||"b"===i?(_+=p.abbreviations.billion,e/=1e9):o<1e9&&o>=1e6&&!i||"m"===i?(_+=p.abbreviations.million,e/=1e6):(o<1e6&&o>=1e3&&!i||"k"===i)&&(_+=p.abbreviations.thousand,e/=1e3)),n._.includes(t,"[.]")&&(d=!0,t=t.replace("[.]",".")),l=e.toString().split(".")[0],u=t.split(".")[1],s=t.indexOf(","),m=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(n._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),b=n._.toFixed(e,u[0].length+u[1].length,r,u[1].length)):b=n._.toFixed(e,u.length,r),l=b.split(".")[0],b=n._.includes(b,".")?p.delimiters.decimal+b.split(".")[1]:"",d&&0===Number(b.slice(1))&&(b="")):l=n._.toFixed(e,0,r),_&&!i&&Number(l)>=1e3&&_!==p.abbreviations.trillion)switch(l=String(Number(l)/1e3),_){case p.abbreviations.thousand:_=p.abbreviations.million;break;case p.abbreviations.million:_=p.abbreviations.billion;break;case p.abbreviations.billion:_=p.abbreviations.trillion}if(n._.includes(l,"-")&&(l=l.slice(1),y=!0),l.length<m)for(var g=m-l.length;g>0;g--)l="0"+l;return s>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+p.delimiters.thousands)),0===t.indexOf(".")&&(l=""),f=l+b+(_||""),h?f=(h&&y?"(":"")+f+(h&&y?")":""):c>=0?f=0===c?(y?"-":"+")+f:f+(y?"-":"+"):y&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,i=a[u.currentLocale],o=e,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)r=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),l)if(n=RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,r*=Number(e=e.replace(/[^0-9\.]+/g,""))}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return -1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(this===null)throw TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,o=0;if(3==arguments.length)r=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<i;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var r=i.multiplier(t);return e>r?e:r},1)},toFixed:function(e,t,r,n){var i,o,a,l,u=e.toString().split("."),c=t-(n||0);return a=Math.pow(10,i=2===u.length?Math.min(Math.max(u[1].length,c),t):c),l=(r(e+"e+"+i)/a).toFixed(i),n>t-i&&(o=RegExp("\\.?0{1,"+(n-(t-i))+"}$"),l=l.replace(o,"")),l}},n.options=u,n.formats=o,n.locales=a,n.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},n.localeData=function(e){if(!e)return a[u.currentLocale];if(!a[e=e.toLowerCase()])throw Error("Unknown locale : "+e);return a[e]},n.reset=function(){for(var e in l)u[e]=l[e]},n.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},n.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},n.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},n.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},n.validate=function(e,t){var r,i,o,a,l,u,c,s;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{c=n.localeData(t)}catch(e){c=n.localeData(n.locale())}if(o=c.currency.symbol,l=c.abbreviations,r=c.delimiters.decimal,i="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,null!==(s=e.match(/^[^\d]+/))&&(e=e.substr(1),s[0]!==o)||null!==(s=e.match(/[^\d]+$/))&&(e=e.slice(0,-1),s[0]!==l.thousand&&s[0]!==l.million&&s[0]!==l.billion&&s[0]!==l.trillion))return!1;if(u=RegExp(i+"{2}"),!e.match(/[^\d.,]/g)){if((a=e.split(r)).length>2);else return a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/)}return!1},n.fn=c.prototype={clone:function(){return n(this)},format:function(e,t){var r,i,a,l=this._value,c=e||u.defaultFormat;if(t=t||Math.round,0===l&&null!==u.zeroFormat)i=u.zeroFormat;else if(null===l&&null!==u.nullFormat)i=u.nullFormat;else{for(r in o)if(c.match(o[r].regexps.format)){a=o[r].format;break}i=(a=a||n._.numberToFormat)(l,c,t)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=i.correctionFactor.call(null,this._value,e);return this._value=i.reduce([this._value,e],function(e,r,n,i){return e+Math.round(t*r)},0)/t,this},subtract:function(e){var t=i.correctionFactor.call(null,this._value,e);return this._value=i.reduce([e],function(e,r,n,i){return e-Math.round(t*r)},Math.round(this._value*t))/t,this},multiply:function(e){return this._value=i.reduce([this._value,e],function(e,t,r,n){var o=i.correctionFactor(e,t);return Math.round(e*o)*Math.round(t*o)/Math.round(o*o)},1),this},divide:function(e){return this._value=i.reduce([this._value,e],function(e,t,r,n){var o=i.correctionFactor(e,t);return Math.round(e*o)/Math.round(t*o)}),this},difference:function(e){return Math.abs(n(this._value).subtract(e).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,t,r){var i,o=n._.includes(t," BPS")?" ":"";return e*=1e4,t=t.replace(/\s?BPS/,""),i=n._.numberToFormat(e,t,r),n._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(e){return+(1e-4*n._.stringToNumber(e)).toFixed(15)}}),t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r="("+(r=(e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(t.suffixes.filter(function(t){return 0>e.suffixes.indexOf(t)})).join("|")).replace("B","B(?!PS)")+")",n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(r,i,o){var a,l,u,c=n._.includes(i,"ib")?t:e,s=n._.includes(i," b")||n._.includes(i," ib")?" ":"";for(a=0,i=i.replace(/\s?i?b/,"");a<=c.suffixes.length;a++)if(l=Math.pow(c.base,a),u=Math.pow(c.base,a+1),null===r||0===r||r>=l&&r<u){s+=c.suffixes[a],l>0&&(r/=l);break}return n._.numberToFormat(r,i,o)+s},unformat:function(r){var i,o,a=n._.stringToNumber(r);if(a){for(i=e.suffixes.length-1;i>=0;i--){if(n._.includes(r,e.suffixes[i])){o=Math.pow(e.base,i);break}if(n._.includes(r,t.suffixes[i])){o=Math.pow(t.base,i);break}}a*=o||1}return a}}),n.register("format","currency",{regexps:{format:/(\$)/},format:function(e,t,r){var i,o,a,l=n.locales[n.options.currentLocale],u={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),i=n._.numberToFormat(e,t,r),e>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):e<0&&!n._.includes(u.before,"-")&&!n._.includes(u.before,"(")&&(u.before="-"+u.before),a=0;a<u.before.length;a++)switch(o=u.before[a]){case"$":i=n._.insert(i,l.currency.symbol,a);break;case" ":i=n._.insert(i," ",a+l.currency.symbol.length-1)}for(a=u.after.length-1;a>=0;a--)switch(o=u.after[a]){case"$":i=a===u.after.length-1?i+l.currency.symbol:n._.insert(i,l.currency.symbol,-(u.after.length-(1+a)));break;case" ":i=a===u.after.length-1?i+" ":n._.insert(i," ",-(u.after.length-(1+a)+l.currency.symbol.length-1))}return i}}),n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,t,r){var i=("number"!=typeof e||n._.isNaN(e)?"0e+0":e.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),n._.numberToFormat(Number(i[0]),t,r)+"e"+i[1]},unformat:function(e){var t=n._.includes(e,"e+")?e.split("e+"):e.split("e-"),r=Number(t[0]),i=Number(t[1]);return i=n._.includes(e,"e-")?i*=-1:i,n._.reduce([r,Math.pow(10,i)],function(e,t,r,i){var o=n._.correctionFactor(e,t);return e*o*(t*o)/(o*o)},1)}}),n.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,t,r){var i=n.locales[n.options.currentLocale],o=n._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),o+=i.ordinal(e),n._.numberToFormat(e,t,r)+o}}),n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,r){var i,o=n._.includes(t," %")?" ":"";return n.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?\%/,""),i=n._.numberToFormat(e,t,r),n._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(e){var t=n._.stringToNumber(e);return n.options.scalePercentBy100?.01*t:t}}),n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-3600*n)/60),o=Math.round(e-3600*n-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?r+=3600*Number(t[0])+60*Number(t[1])+Number(t[2]):2===t.length&&(r+=60*Number(t[0])+Number(t[1])),Number(r)}}),n},"function"==typeof define&&define.amd?define(i):"object"==typeof e&&e.exports?e.exports=i():n.numeral=i()},26424:function(e,t,r){"use strict";r.r(t),r.d(t,{produce:function(){return G}});var n,i=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),a=Symbol.for("immer-state");function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var u=Object.getPrototypeOf;function c(e){return!!e&&!!e[a]}function s(e){return!!e&&(p(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||b(e)||y(e))}var f=Object.prototype.constructor.toString();function p(e){if(!e||"object"!=typeof e)return!1;let t=u(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function h(e,t){0===d(e)?Object.entries(e).forEach(r=>{let[n,i]=r;t(n,i,e)}):e.forEach((r,n)=>t(n,r,e))}function d(e){let t=e[a];return t?t.type_:Array.isArray(e)?1:b(e)?2:y(e)?3:0}function m(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _(e,t,r){let n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function b(e){return e instanceof Map}function y(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function v(e,t){if(b(e))return new Map(e);if(y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&p(e))return u(e)?{...e}:Object.assign(Object.create(null),e);let r=Object.getOwnPropertyDescriptors(e);delete r[a];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){let i=n[t],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(u(e),r)}function F(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return x(e)||c(e)||!s(e)?e:(d(e)>1&&(e.set=e.add=e.clear=e.delete=w),Object.freeze(e),t&&h(e,(e,t)=>F(t,!0),!0),e)}function w(){l(2)}function x(e){return Object.isFrozen(e)}var P={};function S(e){let t=P[e];return!t&&l(0,e),t}function z(){return n}function N(e,t){t&&(S("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function M(e){B(e),e.drafts_.forEach(k),e.drafts_=null}function B(e){e===n&&(n=e.parent_)}function O(e){var t;return t=n,n={drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function k(e){let t=e[a];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function j(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[a].modified_&&(M(t),l(4)),s(e)&&(e=A(t,e),!t.parent_&&$(t,e)),t.patches_&&S("Patches").generateReplacementPatches_(r[a].base_,e,t.patches_,t.inversePatches_)):e=A(t,r,[]),M(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function A(e,t,r){if(x(t))return t;let n=t[a];if(!n)return h(t,(i,o)=>T(e,n,t,i,o,r),!0),t;if(n.scope_!==e)return t;if(!n.modified_)return $(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),h(i,(i,a)=>T(e,n,t,i,a,r,o)),$(e,t,!1),r&&e.patches_&&S("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function T(e,t,r,n,i,o,a){if(c(i)){let a=A(e,i,o&&t&&3!==t.type_&&!m(t.assigned_,n)?o.concat(n):void 0);if(_(r,n,a),!c(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(s(i)&&!x(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;A(e,i),(!t||!t.scope_.parent_)&&$(e,i)}}function $(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&F(t,r)}var E={get(e,t){if(t===a)return e;let r=g(e);if(!m(r,t))return function(e,t,r){let n=C(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!s(n)?n:n===L(e.base_,t)?(K(e),e.copy_[t]=W(n,e)):n},has:(e,t)=>t in g(e),ownKeys:e=>Reflect.ownKeys(g(e)),set(e,t,r){let n=C(g(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){var i,o;let n=L(g(e),t),l=n?.[a];if(l&&l.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((i=r)===(o=n)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==r||m(e.base_,t)))return!0;K(e),R(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==L(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,K(e),R(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=g(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){l(11)},getPrototypeOf:e=>u(e.base_),setPrototypeOf(){l(12)}},D={};function L(e,t){let r=e[a];return(r?g(r):e)[t]}h(E,(e,t)=>{D[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),D.deleteProperty=function(e,t){return D.set.call(this,e,t,void 0)},D.set=function(e,t,r){return E.set.call(this,e[0],t,r,e[0])};function C(e,t){if(!(t in e))return;let r=u(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=u(r)}}function R(e){!e.modified_&&(e.modified_=!0,e.parent_&&R(e.parent_))}function K(e){!e.copy_&&(e.copy_=v(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var U=class{createDraft(e){!s(e)&&l(8),c(e)&&(e=function(e){return!c(e)&&l(10,e),function e(t){let r;if(!s(t)||x(t))return t;let n=t[a];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=v(t,n.scope_.immer_.useStrictShallowCopy_)}else r=v(t,!0);return h(r,(t,n)=>{_(r,t,e(n))}),n&&(n.finalized_=!1),r}(e)}(e));let t=O(this),r=W(e,void 0);return r[a].isManual_=!0,B(t),r}finishDraft(e,t){let r=e&&e[a];(!r||!r.isManual_)&&l(9);let{scope_:n}=r;return N(n,t),j(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=S("Patches").applyPatches_;return c(e)?n(e,t):this.produce(e,e=>n(e,t))}constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&l(6),void 0!==r&&"function"!=typeof r&&l(7),s(e)){let i=O(this),o=W(e,void 0),a=!0;try{n=t(o),a=!1}finally{a?M(i):B(i)}return N(i,r),j(n,i)}if(e&&"object"==typeof e)l(1,e);else{if(void 0===(n=t(e))&&(n=e),n===i&&(n=void 0),this.autoFreeze_&&F(n,!0),r){let t=[],i=[];S("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}},this.produceWithPatches=(e,t)=>{let r,n;if("function"==typeof e){var i=this;return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return i.produceWithPatches(t,t=>e(t,...n))}}return[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}};function W(e,t){let r=b(e)?S("MapSet").proxyMap_(e,t):y(e)?S("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=i,a=E;r&&(o=[i],a=D);let{revoke:l,proxy:u}=Proxy.revocable(o,a);return i.draft_=u,i.revoke_=l,u}(e,t);return(t?t.scope_:n).drafts_.push(r),r}var Z=new U,G=Z.produce;Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseStrictShallowCopy.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z)}}]);