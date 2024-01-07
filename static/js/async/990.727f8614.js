/*! For license information please see 990.727f8614.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([["990"],{745:function(n,t,r){"use strict";r.r(t),r.d(t,{createUpdateEffect:function(){return u}});var e=r("50348"),u=function(n){return function(t,r){var u=(0,e.useRef)(!1);n(function(){return function(){u.current=!1}},[]),n(function(){if(u.current)return t();u.current=!0},r)}}},98033:function(n,t,r){"use strict";r.r(t),r.d(t,{createUseStorageState:function(){return c}});var e=r("31947"),u=r("50348"),i=r("44065"),a=r("78529"),o=r("43702");function c(n){return function(t,r){void 0===r&&(r={});var c,f=r.onError,s=void 0===f?function(n){console.error(n)}:f;try{c=n()}catch(n){s(n)}function l(){try{var n,e=null==c?void 0:c.getItem(t);if(e){;return n=e,(null==r?void 0:r.deserializer)?null==r?void 0:r.deserializer(n):JSON.parse(n)}}catch(n){s(n)}return(0,o.isFunction)(null==r?void 0:r.defaultValue)?null==r?void 0:r.defaultValue():null==r?void 0:r.defaultValue}var d=(0,e.__read)((0,u.useState)(function(){return l()}),2),v=d[0],p=d[1];return(0,a.default)(function(){p(l())},[t]),[v,(0,i.default)(function(n){var e,u=(0,o.isFunction)(n)?n(v):n;if(p(u),(0,o.isUndef)(u))null==c||c.removeItem(t);else try{;null==c||c.setItem(t,(e=u,(null==r?void 0:r.serializer)?null==r?void 0:r.serializer(e):JSON.stringify(e)))}catch(n){console.error(n)}})]}}},60740:function(n,t,r){"use strict";r.r(t),r.d(t,{useRequest:function(){return i.default},useLocalStorageState:function(){return e.default},useMemoizedFn:function(){return u.default}});var e=r("75549"),u=r("44065"),i=r("72615")},49140:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var e=r("50348"),u=r("58899");function i(n,t){var r=(0,e.useRef)({deps:t,obj:void 0,initialized:!1}).current;return(!1===r.initialized||!(0,u.default)(r.deps,t))&&(r.deps=t,r.obj=n(),r.initialized=!0),r.obj}},50775:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("50348"),u=function(n){var t=(0,e.useRef)(n);return t.current=n,t}},75549:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var e=r("98033"),u=r("70551"),i=(0,e.createUseStorageState)(function(){return u.default?localStorage:void 0})},44065:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var e=r("50348"),u=r("43702"),i=r("64002"),a=function(n){i.default&&!(0,u.isFunction)(n)&&console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof n));var t=(0,e.useRef)(n);t.current=(0,e.useMemo)(function(){return n},[n]);var r=(0,e.useRef)();return!r.current&&(r.current=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.current.apply(this,n)}),r.current}},2547:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var e=r("50348"),u=r("43702"),i=r("64002"),a=function(n){i.default&&!(0,u.isFunction)(n)&&console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof n,'".')),(0,e.useEffect)(function(){null==n||n()},[])}},72615:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return e}});var e=r("25817").default},64097:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var e=r("31947"),u=r("43702"),i=function(){function n(n,t,r,u){void 0===u&&(u={}),this.serviceRef=n,this.options=t,this.subscribe=r,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=(0,e.__assign)((0,e.__assign)((0,e.__assign)({},this.state),{loading:!t.manual}),u)}return n.prototype.setState=function(n){void 0===n&&(n={}),this.state=(0,e.__assign)((0,e.__assign)({},this.state),n),this.subscribe()},n.prototype.runPluginHandler=function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var u=this.pluginImpls.map(function(r){var u;return null===(u=r[n])||void 0===u?void 0:u.call.apply(u,(0,e.__spreadArray)([r],(0,e.__read)(t),!1))}).filter(Boolean);return Object.assign.apply(Object,(0,e.__spreadArray)([{}],(0,e.__read)(u),!1))},n.prototype.runAsync=function(){for(var n,t,r,u,i,a,o,c,f,s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return(0,e.__awaiter)(this,void 0,void 0,function(){var d,v,p,h,_,g,y,m,b,w,A;return(0,e.__generator)(this,function(P){switch(P.label){case 0:if(this.count+=1,d=this.count,h=void 0!==(p=(v=this.runPluginHandler("onBefore",l)).stopNow)&&p,g=void 0!==(_=v.returnNow)&&_,y=(0,e.__rest)(v,["stopNow","returnNow"]),h)return[2,new Promise(function(){})];if(this.setState((0,e.__assign)({loading:!0,params:l},y)),g)return[2,Promise.resolve(y.data)];null===(t=(n=this.options).onBefore)||void 0===t||t.call(n,l),P.label=1;case 1:return P.trys.push([1,3,,4]),!(m=this.runPluginHandler("onRequest",this.serviceRef.current,l).servicePromise)&&(m=(A=this.serviceRef).current.apply(A,(0,e.__spreadArray)([],(0,e.__read)(l),!1))),[4,m];case 2:if(b=P.sent(),d!==this.count)return[2,new Promise(function(){})];return this.setState({data:b,error:void 0,loading:!1}),null===(u=(r=this.options).onSuccess)||void 0===u||u.call(r,b,l),this.runPluginHandler("onSuccess",b,l),null===(a=(i=this.options).onFinally)||void 0===a||a.call(i,l,b,void 0),d===this.count&&this.runPluginHandler("onFinally",l,b,void 0),[2,b];case 3:if(w=P.sent(),d!==this.count)return[2,new Promise(function(){})];throw this.setState({error:w,loading:!1}),null===(c=(o=this.options).onError)||void 0===c||c.call(o,w,l),this.runPluginHandler("onError",w,l),null===(s=(f=this.options).onFinally)||void 0===s||s.call(f,l,void 0,w),d===this.count&&this.runPluginHandler("onFinally",l,void 0,w),w;case 4:return[2]}})})},n.prototype.run=function(){for(var n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];this.runAsync.apply(this,(0,e.__spreadArray)([],(0,e.__read)(t),!1)).catch(function(t){!n.options.onError&&console.error(t)})},n.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},n.prototype.refresh=function(){this.run.apply(this,(0,e.__spreadArray)([],(0,e.__read)(this.state.params||[]),!1))},n.prototype.refreshAsync=function(){return this.runAsync.apply(this,(0,e.__spreadArray)([],(0,e.__read)(this.state.params||[]),!1))},n.prototype.mutate=function(n){var t=(0,u.isFunction)(n)?n(this.state.data):n;this.runPluginHandler("onMutate",t),this.setState({data:t})},n}()},78599:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("31947"),u=r("50348"),i=r("78529"),a=function(n,t){var r=t.manual,a=t.ready,o=void 0===a||a,c=t.defaultParams,f=void 0===c?[]:c,s=t.refreshDeps,l=t.refreshDepsAction,d=(0,u.useRef)(!1);return d.current=!1,(0,i.default)(function(){!r&&o&&(d.current=!0,n.run.apply(n,(0,e.__spreadArray)([],(0,e.__read)(f),!1)))},[o]),(0,i.default)(function(){!d.current&&!r&&(d.current=!0,l?l():n.refresh())},(0,e.__spreadArray)([],(0,e.__read)(void 0===s?[]:s),!1)),{onBefore:function(){if(!o)return{stopNow:!0}}}};a.onInit=function(n){var t=n.ready;return{loading:!n.manual&&(void 0===t||t)}};var o=a},77030:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var e=r("31947"),u=r("50348"),i=r("49140"),a=r("62257"),o=r("65011"),c=r("83106"),f=r("10563"),s=function(n,t){var r=t.cacheKey,s=t.cacheTime,l=void 0===s?3e5:s,d=t.staleTime,v=void 0===d?0:d,p=t.setCache,h=t.getCache,_=(0,u.useRef)(),g=(0,u.useRef)(),y=function(n,t){p?p(t):o.setCache(n,l,t),f.trigger(n,t.data)},m=function(n,t){return(void 0===t&&(t=[]),h)?h(t):o.getCache(n)};return((0,i.default)(function(){if(r){var t=m(r);t&&Object.hasOwnProperty.call(t,"data")&&(n.state.data=t.data,n.state.params=t.params,(-1===v||new Date().getTime()-t.time<=v)&&(n.state.loading=!1)),_.current=f.subscribe(r,function(t){n.setState({data:t})})}},[]),(0,a.default)(function(){var n;null===(n=_.current)||void 0===n||n.call(_)}),r)?{onBefore:function(n){var t=m(r,n);return t&&Object.hasOwnProperty.call(t,"data")?-1===v||new Date().getTime()-t.time<=v?{loading:!1,data:null==t?void 0:t.data,error:void 0,returnNow:!0}:{data:null==t?void 0:t.data,error:void 0}:{}},onRequest:function(n,t){var u=c.getCachePromise(r);return u&&u!==g.current?{servicePromise:u}:(u=n.apply(void 0,(0,e.__spreadArray)([],(0,e.__read)(t),!1)),g.current=u,c.setCachePromise(r,u),{servicePromise:u})},onSuccess:function(t,e){var u;r&&(null===(u=_.current)||void 0===u||u.call(_),y(r,{data:t,params:e,time:new Date().getTime()}),_.current=f.subscribe(r,function(t){n.setState({data:t})}))},onMutate:function(t){var e;r&&(null===(e=_.current)||void 0===e||e.call(_),y(r,{data:t,params:n.state.params,time:new Date().getTime()}),_.current=f.subscribe(r,function(t){n.setState({data:t})}))}}:{}}},86260:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("31947"),u=r("60370"),i=r.n(u),a=r("50348"),o=function(n,t){var r=t.debounceWait,u=t.debounceLeading,o=t.debounceTrailing,c=t.debounceMaxWait,f=(0,a.useRef)(),s=(0,a.useMemo)(function(){var n={};return void 0!==u&&(n.leading=u),void 0!==o&&(n.trailing=o),void 0!==c&&(n.maxWait=c),n},[u,o,c]);return((0,a.useEffect)(function(){if(r){var t=n.runAsync.bind(n);return f.current=i()(function(n){n()},r,s),n.runAsync=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new Promise(function(r,u){var i;null===(i=f.current)||void 0===i||i.call(f,function(){t.apply(void 0,(0,e.__spreadArray)([],(0,e.__read)(n),!1)).then(r).catch(u)})})},function(){var r;null===(r=f.current)||void 0===r||r.cancel(),n.runAsync=t}}},[r,s]),r)?{onCancel:function(){var n;null===(n=f.current)||void 0===n||n.cancel()}}:{}}},37970:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("50348"),u=function(n,t){var r=t.loadingDelay,u=t.ready,i=(0,e.useRef)();if(!r)return{};var a=function(){i.current&&clearTimeout(i.current)};return{onBefore:function(){return a(),!1!==u&&(i.current=setTimeout(function(){n.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}}},87598:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("50348"),u=r("78529"),i=r("2443"),a=r("68938"),o=function(n,t){var r=t.pollingInterval,o=t.pollingWhenHidden,c=void 0===o||o,f=t.pollingErrorRetryCount,s=void 0===f?-1:f,l=(0,e.useRef)(),d=(0,e.useRef)(),v=(0,e.useRef)(0),p=function(){var n;l.current&&clearTimeout(l.current),null===(n=d.current)||void 0===n||n.call(d)};return((0,u.default)(function(){!r&&p()},[r]),r)?{onBefore:function(){p()},onError:function(){v.current+=1},onSuccess:function(){v.current=0},onFinally:function(){-1===s||-1!==s&&v.current<=s?l.current=setTimeout(function(){c||(0,i.default)()?n.refresh():d.current=(0,a.default)(function(){n.refresh()})},r):v.current=0},onCancel:function(){p()}}:{}}},57797:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("50348"),u=r("62257"),i=r("36995"),a=r("30086"),o=function(n,t){var r=t.refreshOnWindowFocus,o=t.focusTimespan,c=void 0===o?5e3:o,f=(0,e.useRef)(),s=function(){var n;null===(n=f.current)||void 0===n||n.call(f)};return(0,e.useEffect)(function(){if(r){var t=(0,i.default)(n.refresh.bind(n),c);f.current=(0,a.default)(function(){t()})}return function(){s()}},[r,c]),(0,u.default)(function(){s()}),{}}},72361:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("50348"),u=function(n,t){var r=t.retryInterval,u=t.retryCount,i=(0,e.useRef)(),a=(0,e.useRef)(0),o=(0,e.useRef)(!1);return u?{onBefore:function(){!o.current&&(a.current=0),o.current=!1,i.current&&clearTimeout(i.current)},onSuccess:function(){a.current=0},onError:function(){if(a.current+=1,-1===u||a.current<=u){var t=null!=r?r:Math.min(1e3*Math.pow(2,a.current),3e4);i.current=setTimeout(function(){o.current=!0,n.refresh()},t)}else a.current=0},onCancel:function(){a.current=0,i.current&&clearTimeout(i.current)}}:{}}},17542:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("31947"),u=r("44707"),i=r.n(u),a=r("50348"),o=function(n,t){var r=t.throttleWait,u=t.throttleLeading,o=t.throttleTrailing,c=(0,a.useRef)(),f={};return(void 0!==u&&(f.leading=u),void 0!==o&&(f.trailing=o),(0,a.useEffect)(function(){if(r){var t=n.runAsync.bind(n);return c.current=i()(function(n){n()},r,f),n.runAsync=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new Promise(function(r,u){var i;null===(i=c.current)||void 0===i||i.call(c,function(){t.apply(void 0,(0,e.__spreadArray)([],(0,e.__read)(n),!1)).then(r).catch(u)})})},function(){var r;n.runAsync=t,null===(r=c.current)||void 0===r||r.cancel()}}},[r,u,o]),r)?{onCancel:function(){var n;null===(n=c.current)||void 0===n||n.cancel()}}:{}}},25817:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var e=r("31947"),u=r("78599"),i=r("77030"),a=r("86260"),o=r("37970"),c=r("87598"),f=r("57797"),s=r("72361"),l=r("17542"),d=r("89698"),v=function(n,t,r){return(0,d.default)(n,t,(0,e.__spreadArray)((0,e.__spreadArray)([],(0,e.__read)(r||[]),!1),[a.default,o.default,c.default,f.default,l.default,u.default,i.default,s.default],!1))}},89698:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var e=r("31947"),u=r("49140"),i=r("50775"),a=r("44065"),o=r("2547"),c=r("62257"),f=r("19780"),s=r("64002"),l=r("64097"),d=function(n,t,r){void 0===t&&(t={}),void 0===r&&(r=[]);var d=t.manual,v=void 0!==d&&d,p=(0,e.__rest)(t,["manual"]);s.default&&t.defaultParams&&!Array.isArray(t.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof t.defaultParams));var h=(0,e.__assign)({manual:v},p),_=(0,i.default)(n),g=(0,f.default)(),y=(0,u.default)(function(){var n=r.map(function(n){var t;return null===(t=null==n?void 0:n.onInit)||void 0===t?void 0:t.call(n,h)}).filter(Boolean);return new l.default(_,h,g,Object.assign.apply(Object,(0,e.__spreadArray)([{}],(0,e.__read)(n),!1)))},[]);return y.options=h,y.pluginImpls=r.map(function(n){return n(y,h)}),(0,o.default)(function(){if(!v){var n=y.state.params||t.defaultParams||[];y.run.apply(y,(0,e.__spreadArray)([],(0,e.__read)(n),!1))}}),(0,c.default)(function(){y.cancel()}),{loading:y.state.loading,data:y.state.data,error:y.state.error,params:y.state.params||[],cancel:(0,a.default)(y.cancel.bind(y)),refresh:(0,a.default)(y.refresh.bind(y)),refreshAsync:(0,a.default)(y.refreshAsync.bind(y)),run:(0,a.default)(y.run.bind(y)),runAsync:(0,a.default)(y.runAsync.bind(y)),mutate:(0,a.default)(y.mutate.bind(y))}}},65011:function(n,t,r){"use strict";r.r(t),r.d(t,{getCache:function(){return a},setCache:function(){return i}});var e=r("31947"),u=new Map,i=function(n,t,r){var i=u.get(n);(null==i?void 0:i.timer)&&clearTimeout(i.timer);var a=void 0;t>-1&&(a=setTimeout(function(){u.delete(n)},t)),u.set(n,(0,e.__assign)((0,e.__assign)({},r),{timer:a}))},a=function(n){return u.get(n)}},83106:function(n,t,r){"use strict";r.r(t),r.d(t,{getCachePromise:function(){return u},setCachePromise:function(){return i}});var e=new Map,u=function(n){return e.get(n)},i=function(n,t){e.set(n,t),t.then(function(t){return e.delete(n),t}).catch(function(){e.delete(n)})}},10563:function(n,t,r){"use strict";r.r(t),r.d(t,{trigger:function(){return u},subscribe:function(){return i}});var e={},u=function(n,t){e[n]&&e[n].forEach(function(n){return n(t)})},i=function(n,t){return!e[n]&&(e[n]=[]),e[n].push(t),function(){var r=e[n].indexOf(t);e[n].splice(r,1)}}},2443:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("70551");function u(){return!e.default||"hidden"!==document.visibilityState}},9073:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("70551");function u(){return!e.default||void 0===navigator.onLine||navigator.onLine}},36995:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("31947");function u(n,t){var r=!1;return function(){for(var u=[],i=0;i<arguments.length;i++)u[i]=arguments[i];!r&&(r=!0,n.apply(void 0,(0,e.__spreadArray)([],(0,e.__read)(u),!1)),setTimeout(function(){r=!1},t))}}},30086:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var e=r("70551"),u=r("2443"),i=r("9073"),a=[];if(e.default){var o=function(){if((0,u.default)()&&(0,i.default)())for(var n=0;n<a.length;n++)(0,a[n])()};window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1)}var c=function(n){return a.push(n),function(){var t=a.indexOf(n);t>-1&&a.splice(t,1)}}},68938:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var e=r("70551"),u=r("2443"),i=[];e.default&&window.addEventListener("visibilitychange",function(){if((0,u.default)())for(var n=0;n<i.length;n++)(0,i[n])()},!1);var a=function(n){return i.push(n),function(){var t=i.indexOf(n);i.splice(t,1)}}},62257:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var e=r("50348"),u=r("50775"),i=r("43702"),a=r("64002"),o=function(n){a.default&&!(0,i.isFunction)(n)&&console.error("useUnmount expected parameter is a function, got ".concat(typeof n));var t=(0,u.default)(n);(0,e.useEffect)(function(){return function(){t.current()}},[])}},19780:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var e=r("31947"),u=r("50348"),i=function(){var n=(0,e.__read)((0,u.useState)({}),2)[1];return(0,u.useCallback)(function(){return n({})},[])}},78529:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var e=r("50348"),u=(0,r("745").createUpdateEffect)(e.useEffect)},58899:function(n,t,r){"use strict";function e(n,t){if(n===t)return!0;for(var r=0;r<n.length;r++)if(!Object.is(n[r],t[r]))return!1;return!0}r.r(t),r.d(t,{default:function(){return e}})},43702:function(n,t,r){"use strict";r.r(t),r.d(t,{isFunction:function(){return e},isUndef:function(){return u}});var e=function(n){return"function"==typeof n},u=function(n){return void 0===n}},70551:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return e}});var e=!!("undefined"!=typeof window&&window.document&&window.document.createElement)},64002:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return e}});var e=!1},35079:function(n,t,r){"use strict";r.r(t),r.d(t,{clsx:function(){return e},default:function(){return u}});function e(){for(var n,t,r=0,e="";r<arguments.length;)(n=arguments[r++])&&(t=function n(t){var r,e,u="";if("string"==typeof t||"number"==typeof t)u+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(e=n(t[r]))&&(u&&(u+=" "),u+=e);else for(r in t)t[r]&&(u&&(u+=" "),u+=r)}return u}(n))&&(e&&(e+=" "),e+=t);return e}var u=e}}]);