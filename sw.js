if(!self.define){let s,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=i,document.head.appendChild(s)}else s=n,importScripts(n),i()})).then((()=>{let s=i[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,c)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const t=s=>n(s,a),e={module:{uri:a},exports:r,require:t};i[a]=Promise.all(l.map((s=>e[s]||t(s)))).then((s=>(c(...s),r)))}}define(["./workbox-39832f5d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/html/main/index.html",revision:"01a84a131a4e6dbb7cf7a2f906eb6bc7"},{url:"/static/css/async/copilots/(term)/page.557997db.css",revision:null},{url:"/static/css/async/my-box/create/page.7fb127b0.css",revision:null},{url:"/static/css/async/solutions/(term)/page.557997db.css",revision:null},{url:"/static/image/qun.903e4b21.webp",revision:null},{url:"/static/js/3011.0ea024dc.js",revision:null},{url:"/static/js/async/1029.598d056a.js",revision:null},{url:"/static/js/async/1190.355a510e.js",revision:null},{url:"/static/js/async/1265.c737d2cc.js",revision:null},{url:"/static/js/async/1626.92e7af94.js",revision:null},{url:"/static/js/async/1655.035f6c6e.js",revision:null},{url:"/static/js/async/1659.3f432905.js",revision:null},{url:"/static/js/async/1681.52e2dca9.js",revision:null},{url:"/static/js/async/1850.c327b26e.js",revision:null},{url:"/static/js/async/1893.9acbd366.js",revision:null},{url:"/static/js/async/2030.5fa4470c.js",revision:null},{url:"/static/js/async/2135.2c78bdc3.js",revision:null},{url:"/static/js/async/2170.985fa3bf.js",revision:null},{url:"/static/js/async/2188.93902533.js",revision:null},{url:"/static/js/async/219.1517c656.js",revision:null},{url:"/static/js/async/220.b7633bfc.js",revision:null},{url:"/static/js/async/228.4bb3f4a5.js",revision:null},{url:"/static/js/async/2516.bd76c826.js",revision:null},{url:"/static/js/async/277.8900a0c8.js",revision:null},{url:"/static/js/async/2911.c3dd41d0.js",revision:null},{url:"/static/js/async/2961.7771a0e4.js",revision:null},{url:"/static/js/async/310.4c0eb690.js",revision:null},{url:"/static/js/async/3197.bf031967.js",revision:null},{url:"/static/js/async/3238.8837e424.js",revision:null},{url:"/static/js/async/3534.e58662fd.js",revision:null},{url:"/static/js/async/3562.be5dda57.js",revision:null},{url:"/static/js/async/3585.78a93b19.js",revision:null},{url:"/static/js/async/3735.734d136e.js",revision:null},{url:"/static/js/async/383.3dac6791.js",revision:null},{url:"/static/js/async/3910.7ebe9530.js",revision:null},{url:"/static/js/async/3956.8d837fce.js",revision:null},{url:"/static/js/async/3961.5d9bc801.js",revision:null},{url:"/static/js/async/3991.ec44a2b4.js",revision:null},{url:"/static/js/async/4048.0c6bedc6.js",revision:null},{url:"/static/js/async/4300.eb7c7ead.js",revision:null},{url:"/static/js/async/4553.e6f18136.js",revision:null},{url:"/static/js/async/4666.c2a2a9bc.js",revision:null},{url:"/static/js/async/4783.844cda0f.js",revision:null},{url:"/static/js/async/4961.89d95134.js",revision:null},{url:"/static/js/async/4965.59735e33.js",revision:null},{url:"/static/js/async/5079.1e8fdab8.js",revision:null},{url:"/static/js/async/5262.2b9a3c1c.js",revision:null},{url:"/static/js/async/5343.9839959b.js",revision:null},{url:"/static/js/async/5376.57bfffc0.js",revision:null},{url:"/static/js/async/5377.1e1351f9.js",revision:null},{url:"/static/js/async/5379.34109020.js",revision:null},{url:"/static/js/async/5391.4d80b640.js",revision:null},{url:"/static/js/async/5474.0a6e58a0.js",revision:null},{url:"/static/js/async/5666.441cf940.js",revision:null},{url:"/static/js/async/5763.2d3efcb1.js",revision:null},{url:"/static/js/async/5849.f944d7a9.js",revision:null},{url:"/static/js/async/589.982b4f86.js",revision:null},{url:"/static/js/async/5898.73123170.js",revision:null},{url:"/static/js/async/6396.417f6b4b.js",revision:null},{url:"/static/js/async/6799.d726ce06.js",revision:null},{url:"/static/js/async/6923.de32e2f8.js",revision:null},{url:"/static/js/async/6944.6b841cbe.js",revision:null},{url:"/static/js/async/6991.5e73869c.js",revision:null},{url:"/static/js/async/7030.721cd5b0.js",revision:null},{url:"/static/js/async/7055.4afbc295.js",revision:null},{url:"/static/js/async/7067.f5c6c5d4.js",revision:null},{url:"/static/js/async/7102.6088551b.js",revision:null},{url:"/static/js/async/7431.ff35adb6.js",revision:null},{url:"/static/js/async/7626.b8419d34.js",revision:null},{url:"/static/js/async/7654.8e890800.js",revision:null},{url:"/static/js/async/7671.b280484b.js",revision:null},{url:"/static/js/async/7754.79cf2ab1.js",revision:null},{url:"/static/js/async/7772.8f56fc40.js",revision:null},{url:"/static/js/async/8340.3ab8e4c5.js",revision:null},{url:"/static/js/async/8500.ce83e955.js",revision:null},{url:"/static/js/async/8610.048b0170.js",revision:null},{url:"/static/js/async/8693.aac1fde6.js",revision:null},{url:"/static/js/async/8765.8912089c.js",revision:null},{url:"/static/js/async/8769.e645929f.js",revision:null},{url:"/static/js/async/8780.4ac8b6d1.js",revision:null},{url:"/static/js/async/8807.1dc76190.js",revision:null},{url:"/static/js/async/8843.55e6c5bc.js",revision:null},{url:"/static/js/async/9087.78c15893.js",revision:null},{url:"/static/js/async/9223.a600e3ec.js",revision:null},{url:"/static/js/async/9230.e82b9d7e.js",revision:null},{url:"/static/js/async/9489.1d6c85c5.js",revision:null},{url:"/static/js/async/9713.c075ca16.js",revision:null},{url:"/static/js/async/9717.c6ca6b66.js",revision:null},{url:"/static/js/async/9829.9f5f6878.js",revision:null},{url:"/static/js/async/9928.46c94433.js",revision:null},{url:"/static/js/async/copilots/(term)/page.e8346090.js",revision:null},{url:"/static/js/async/my-box/create/page.1e93a40d.js",revision:null},{url:"/static/js/async/my-box/page.02cf3cd5.js",revision:null},{url:"/static/js/async/page.c9d16f33.js",revision:null},{url:"/static/js/async/solutions/(term)/page.a9662bce.js",revision:null},{url:"/static/js/async/upload/page.957b1ba9.js",revision:null},{url:"/static/js/lib-antd.7cab0209.js",revision:null},{url:"/static/js/lib-lodash.a267f9e1.js",revision:null},{url:"/static/js/lib-polyfill.acec9a5b.js",revision:null},{url:"/static/js/lib-router.a13a80dd.js",revision:null},{url:"/static/js/main.e47f879b.js",revision:null},{url:"/wrench.svg",revision:"edb3c8758ff47056e24bbb6114f4fe6b"},{revision:null,url:"https://registry.npmmirror.com/antd/5.11.3/files/dist/antd.min.js"},{revision:null,url:"https://registry.npmmirror.com/dayjs/1.11.10/files/dayjs.min.js"},{revision:null,url:"https://registry.npmmirror.com/react-dom/18.2.0/files/umd/react-dom.production.min.js"},{revision:null,url:"https://registry.npmmirror.com/react/18.2.0/files/umd/react.production.min.js"}],{}),s.registerRoute(/\/api\/copilots\/\d+\.json/,new s.NetworkFirst({cacheName:"Copilots",networkTimeoutSeconds:8,plugins:[]}),"GET"),s.registerRoute(/\/api\/(aurorians|terms)\.json/,new s.CacheFirst({cacheName:"AuroriansAndTerms",plugins:[new s.ExpirationPlugin({maxAgeSeconds:7200})]}),"GET")}));
//# sourceMappingURL=sw.js.map
