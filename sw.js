if(!self.define){let s,c={};const a=(a,e)=>(a=new URL(a+".js",e).href,c[a]||new Promise((c=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=c,document.head.appendChild(s)}else s=a,importScripts(a),c()})).then((()=>{let s=c[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(e,i)=>{const b=s||("document"in self?document.currentScript.src:"")||location.href;if(c[b])return;let f={};const d=s=>a(s,b),t={module:{uri:b},exports:f,require:d};c[b]=Promise.all(e.map((s=>t[s]||d(s)))).then((s=>(i(...s),f)))}}define(["./workbox-202fea16"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"api/aurorians.json",revision:"dfc9edf08eff01a9bc337d317dc6ba03"},{url:"api/terms.json",revision:"476fb470a8eead8d1d8513fcb919d410"},{url:"index.html",revision:"84c57443a900a2bb0d0ffe5c94d9a362"},{url:"static/css/async/copilots/(term)/page.5319ce28.css",revision:"f878cc6f954e82b707c0e761ea85cce2"},{url:"static/css/async/my-box/create/page.7b8feb15.css",revision:"0a0fbfc54e364959ab76e718debdc559"},{url:"static/css/async/solutions/(term)/page.5319ce28.css",revision:"f878cc6f954e82b707c0e761ea85cce2"},{url:"static/css/async/upload/page.7a378c7c.css",revision:"d4d215d7a32454cbaecf261db9d37cfa"},{url:"static/css/main.3eaf6f4b.css",revision:"26d41e677eb4ca4cc3cd1d433a701e70"},{url:"static/image/qun.f606d3d9.webp",revision:"12eca5a491e52e75d15abdf0b3b60b88"},{url:"static/js/9913.0955c78b.js",revision:"8fb1a0c794ff98041786ce707823a443"},{url:"static/js/async/1121.059bf7fd.js",revision:"6166709d8f3b0d455e3c641e73607a83"},{url:"static/js/async/1295.5230683d.js",revision:"ce90d3de0049628fabcdb7bf36dc25ac"},{url:"static/js/async/1346.bae74d6e.js",revision:"f24e8a9aa865e220f1c6bf585ddf9e9b"},{url:"static/js/async/1375.89222497.js",revision:"070c49fe92487128fe69b6cb5d380807"},{url:"static/js/async/1458.47f94da2.js",revision:"63fb3ffbab97d5c94023ca60b3cba76d"},{url:"static/js/async/1479.bff86515.js",revision:"1a2527536937b6d06484db95e2f27287"},{url:"static/js/async/1492.b1832490.js",revision:"dd1d19e2ec7c0a8a8770fdcc4fbd38d3"},{url:"static/js/async/1566.15d7c7bf.js",revision:"6e5ba5a78bcbaffd77f7125c083b2a40"},{url:"static/js/async/1596.ac61ac9b.js",revision:"1c1709485447e02ce92a7b9773a341db"},{url:"static/js/async/1625.ef35462d.js",revision:"c8c6b681e6b871ea89273b96b3aa457f"},{url:"static/js/async/1707.321e38dd.js",revision:"7a02b8a1665cd627fb37195b2aac64e5"},{url:"static/js/async/1903.c800c0ca.js",revision:"279fd693355d593b61035b72dd9257a9"},{url:"static/js/async/1991.d1db7005.js",revision:"a6ae9e1c37efc2f70198d1f536f98f5a"},{url:"static/js/async/2043.3ebbdcb1.js",revision:"947b74ca2a01c900cba468198b8cb812"},{url:"static/js/async/2206.989fcb27.js",revision:"f29db4863a037989a4614290c022517e"},{url:"static/js/async/2255.e1bbedb3.js",revision:"af98f288f8650294668fe11945931daa"},{url:"static/js/async/2279.365892f8.js",revision:"b7c4b802b50dbf68e178d9ec85d1ec2d"},{url:"static/js/async/2365.be6695e5.js",revision:"1f9bf35caa66251e8bf6b4723b21a75c"},{url:"static/js/async/2425.be6435fb.js",revision:"dbf67496a9128dece2431701af77884f"},{url:"static/js/async/2452.4029c189.js",revision:"ca81d939a198cd0475e58460b707bd3c"},{url:"static/js/async/251.8345f2ff.js",revision:"4a0a56c8592cd50fdf2604d9e69276ce"},{url:"static/js/async/2518.bf1e37d7.js",revision:"a0df205bf858a35e361997b55f88321f"},{url:"static/js/async/2579.3f28644a.js",revision:"3d399dce598945cdab3e8f1a1146e320"},{url:"static/js/async/2732.244cc7e3.js",revision:"21efdbe8435798a7bca061a147f158fa"},{url:"static/js/async/275.d85f8da5.js",revision:"4671dee001da4ada0639749a91c9e7bc"},{url:"static/js/async/2862.aa09ac6b.js",revision:"f3042956604c2bb86b7ac5b700facf93"},{url:"static/js/async/2958.45475fc6.js",revision:"0b5c5b93a888b55a03aeaf48214f340e"},{url:"static/js/async/3142.cefe8c20.js",revision:"997baa99440507e2f1abac3fe3f50709"},{url:"static/js/async/3216.a9dc0c3a.js",revision:"72e8139b8336800ca0e29bf6f4dd96f5"},{url:"static/js/async/3328.7badd95a.js",revision:"9201b4d9600024e16a3b03f6a3a98122"},{url:"static/js/async/3332.055c485c.js",revision:"156cc4322a1d40adc61a7c4bf93fdbf7"},{url:"static/js/async/3398.0f6f52af.js",revision:"c53a9ed46518fb250786fc4469dcbe1a"},{url:"static/js/async/3413.2bbcccc2.js",revision:"31efdc7dc5f16cbbe601ed3865ad1756"},{url:"static/js/async/3420.423a36d8.js",revision:"ce53fd5574b2260924e63af1870fdd20"},{url:"static/js/async/345.bf644f2a.js",revision:"2e09add588095b61c71ac30c66307229"},{url:"static/js/async/3527.932cf055.js",revision:"d1edaa04961b1c75adba0c3413691bfe"},{url:"static/js/async/3565.86d07445.js",revision:"4c7a1fc3bf751277cfc4a9e8f8f893df"},{url:"static/js/async/3707.6a0ffb4e.js",revision:"b3b550bad8bdb0883db6d7733f935105"},{url:"static/js/async/3816.ef51b3b5.js",revision:"1d566a0f800945fc744c49f2aae49ae5"},{url:"static/js/async/3833.6e7f1649.js",revision:"1844a2efc183eb514b16f0806cda98df"},{url:"static/js/async/3860.6ca756d7.js",revision:"20e4d62d7d70bf77f061402769a20785"},{url:"static/js/async/3986.b558867a.js",revision:"1b4b33c724be68d73bd55046438420cf"},{url:"static/js/async/4088.2b4d481c.js",revision:"82671bb1ecb7c4be212a821be9d9adef"},{url:"static/js/async/4162.1087da9f.js",revision:"c7f9f882cd374a8832d8bd6be9b73a08"},{url:"static/js/async/420.78a50063.js",revision:"cc1c392ae8eb742920e7b643ab6232de"},{url:"static/js/async/4211.ba1581ad.js",revision:"3e8e776e5b56d92201a61ab6c652dbe2"},{url:"static/js/async/4263.b58f8d15.js",revision:"8d214f45fa3df5e512aaff58ac4efa89"},{url:"static/js/async/448.f4c8d1b6.js",revision:"690b8f63c3095497e062bfc3c6a4143d"},{url:"static/js/async/4485.3cc080cc.js",revision:"1ed36d2a5487071dea4144e850552575"},{url:"static/js/async/4626.02a87453.js",revision:"2029452d67d6349d9210c57752240ca6"},{url:"static/js/async/4691.78c100df.js",revision:"acba13e11086515000d9f517ab53a13a"},{url:"static/js/async/4726.324888f4.js",revision:"195ace22dcb038093909781ded01c88b"},{url:"static/js/async/4760.8b084b09.js",revision:"86e0f7c0dd4357400dc3499480e316d6"},{url:"static/js/async/4769.3568b3a4.js",revision:"0849b40a753c7eaad8ddf793feb13c21"},{url:"static/js/async/4794.832434cb.js",revision:"bb08ad521e9e437575a5be4c1fe331cb"},{url:"static/js/async/4849.05e7a668.js",revision:"fcafa101440ff308cf1d9b3277ab63d3"},{url:"static/js/async/4875.791c71ab.js",revision:"2d94e3484b99a2c35bf14a7c494559c5"},{url:"static/js/async/4890.39cc46d8.js",revision:"a660774e12a7654fd331a9eb7ec54ccc"},{url:"static/js/async/4933.0cbd3b53.js",revision:"96bb3802a258a79754d21ecd3bf1f927"},{url:"static/js/async/4939.b69e0c98.js",revision:"20b191fab52b22eeb2a75de8c2bc7633"},{url:"static/js/async/4943.63201b22.js",revision:"f5f129f04a20860bd9b1cd73ae2c32c6"},{url:"static/js/async/5027.8c0e089e.js",revision:"adc114f6930d7641ce815b6e111629fc"},{url:"static/js/async/5047.8f24b089.js",revision:"b528699968ce01617b58fdb8703071ce"},{url:"static/js/async/505.f691239b.js",revision:"b2256fdf203f58f551c39b26a76e0135"},{url:"static/js/async/5067.39edafba.js",revision:"483a10d47f360790c413f3875ad3ab25"},{url:"static/js/async/5194.3f8680c4.js",revision:"6c265355ed5b720586e9ab6e166cd0b9"},{url:"static/js/async/5231.04e93c51.js",revision:"f7bbae30f64865ec9538ccde0063478d"},{url:"static/js/async/5251.be1f55f1.js",revision:"b98a6164d3dfc341e54878b50a3697c9"},{url:"static/js/async/5524.0963d743.js",revision:"11849abec922bf78ed059800c6b672cb"},{url:"static/js/async/5548.f6dea7a6.js",revision:"ed191f0edaeee4516e41b636ff4b031c"},{url:"static/js/async/5878.9439bf49.js",revision:"db831b7f35fa4938a2f01f806700f3f1"},{url:"static/js/async/5901.de36eba3.js",revision:"552d602df82090126e81a00b24511c1f"},{url:"static/js/async/5904.285cd526.js",revision:"0ed64375042bbf270997e62cf7aabd0f"},{url:"static/js/async/5979.40920689.js",revision:"e7487037f8998e67e3a061dcb21d9c8d"},{url:"static/js/async/5994.27c87d93.js",revision:"bfc866daac7ec172586928892aab7dfd"},{url:"static/js/async/6033.28ef9f2c.js",revision:"a9b25c8472914aad728f5b64db916a75"},{url:"static/js/async/6057.18f371bc.js",revision:"d0708a2d8dce57ee8904e80d92f37d11"},{url:"static/js/async/6166.94980e76.js",revision:"b34017a9d83839a3e78fe1ec05fca3f6"},{url:"static/js/async/6170.70bba4ba.js",revision:"7c6b7c11de9208967e89486961e0eb6c"},{url:"static/js/async/6365.88bfebd4.js",revision:"ad760ee08f8fbaae4807195290daadc0"},{url:"static/js/async/6461.e7001fa6.js",revision:"2159de4763f5054369edad46943b5869"},{url:"static/js/async/6494.3d5b32f5.js",revision:"edb24eef0e95bc457bb9ec63eb5b9c50"},{url:"static/js/async/6559.62725e77.js",revision:"3417d4533bfe057042f7cd3a01e52785"},{url:"static/js/async/6769.6ab02400.js",revision:"32efb6e5348714868b6e5df81776543e"},{url:"static/js/async/6778.28b65973.js",revision:"9d84fdcd60d3ab5a5a86518e281c96f4"},{url:"static/js/async/6820.c8e33bab.js",revision:"158bfbedfc85f4194fcae2f2944b1176"},{url:"static/js/async/6858.671d6142.js",revision:"e68365e1083af11f17c1fb497b331a56"},{url:"static/js/async/6916.236b63f2.js",revision:"38d33c70f2cc26ba7033e59b71b36417"},{url:"static/js/async/696.bf020d7f.js",revision:"b0e78c58876d1b74e50d0e49ae2252a7"},{url:"static/js/async/6989.1fe5d042.js",revision:"d21bc57a4d9b436c056a3d91fc5d8a30"},{url:"static/js/async/7024.2718f1ab.js",revision:"3813e59f3875d3e1ce610db9c6c37cea"},{url:"static/js/async/7083.460877fe.js",revision:"cd527009a53c8a60d28e459191552f00"},{url:"static/js/async/7216.24b70b84.js",revision:"5c3a1d4431ea9d664a6a776844c90995"},{url:"static/js/async/735.c145d03f.js",revision:"515a68fa43e81e85dccdc4def549941b"},{url:"static/js/async/7360.22f1a0d1.js",revision:"7bf1f039e14e4c29e26779c32cae4e7f"},{url:"static/js/async/7441.db6e82a0.js",revision:"83c53733b8d8dd137cf0749b7edf8458"},{url:"static/js/async/7534.6e5a5361.js",revision:"d21dcf5ee97a1ecafb4460a9bc915780"},{url:"static/js/async/7547.be453eb7.js",revision:"9a6efe136a6eedbbef29abb6cc4f4cdf"},{url:"static/js/async/7599.9326e046.js",revision:"4d42c788092d4ea7a85ce2f2b8553d8e"},{url:"static/js/async/7627.b3e85b20.js",revision:"ee7bc14653a7554cf0f7007a2bc967e8"},{url:"static/js/async/7690.143f214d.js",revision:"8882f2d074624ffb975a37301f5b764d"},{url:"static/js/async/7697.3a11e397.js",revision:"d62ed4729349258e7b68f74e56aafa64"},{url:"static/js/async/781.6f74a5dc.js",revision:"d9d5f16b0d5b92336cf72e2a37f37df9"},{url:"static/js/async/7896.b3df8404.js",revision:"eb762c9920bcf94ea4c6ec426b8f0bd4"},{url:"static/js/async/8103.94e5eac7.js",revision:"c41ba5a420b6368d8d6caa885eb52ded"},{url:"static/js/async/8138.79c62160.js",revision:"10574fa5941fae0886f42b1a56d5c7f3"},{url:"static/js/async/8139.db87ada6.js",revision:"09fb4a9cc49307c157766b2b1668ea8c"},{url:"static/js/async/8160.05d26e45.js",revision:"ebf01e10c8f169721d7bf57612ee3b75"},{url:"static/js/async/8183.9d39626c.js",revision:"d4e0fd297c4d92fb9416aa7d6df6551e"},{url:"static/js/async/8191.0919214a.js",revision:"d94613f645ed0799b288b06ac96699bf"},{url:"static/js/async/8227.48bc9686.js",revision:"916953026a986d6b03cc81cfbb4960ff"},{url:"static/js/async/8234.77ec2180.js",revision:"d63abcb10b4f3c7dd0c1d83387229b4b"},{url:"static/js/async/85.034f1b2a.js",revision:"b44287449198ab5b3d58460cdcbf3736"},{url:"static/js/async/8603.c04e8f1c.js",revision:"d74cd99686b47d84bbf6d92af2c7d102"},{url:"static/js/async/8643.aff33626.js",revision:"343bd4f76d9376a32f5b920af6027d1a"},{url:"static/js/async/8645.c23896cd.js",revision:"d920e429b14745b8b89512cb96615d31"},{url:"static/js/async/865.281b4a30.js",revision:"c3aad98da895fa98bbb1ab5601ba7eeb"},{url:"static/js/async/868.b1beea8a.js",revision:"e997c4ce46ec36fb29c2eade4c4894fa"},{url:"static/js/async/8710.6cdb8430.js",revision:"5584a84a9f19ac03043a1e77b7f5bd62"},{url:"static/js/async/8728.ba5e1e46.js",revision:"af5ef7a5e589844bf23c807861cf866a"},{url:"static/js/async/8793.51649ded.js",revision:"5658e3cbb2b09548438515d46ea3f0bb"},{url:"static/js/async/8956.92a2be41.js",revision:"45a424d7763f7b2785f71c7c010a9b22"},{url:"static/js/async/9024.e1d8f9e6.js",revision:"09455a4766ce659639b99743244fc671"},{url:"static/js/async/9149.3446fe95.js",revision:"0f1b170f87793105bac491410625a0bf"},{url:"static/js/async/9340.8056e49b.js",revision:"3bf4eaae087c43789d371a395d7622b1"},{url:"static/js/async/9366.383eb154.js",revision:"1266425a371f6d372c061b95c8647745"},{url:"static/js/async/9432.f3c816fe.js",revision:"c17a84debe8b5b45e97df59971540e21"},{url:"static/js/async/9433.349c8bb8.js",revision:"55c8c0fd483bf9530f30215d0b6af99b"},{url:"static/js/async/9453.6804ac37.js",revision:"13c2edc0505c1ba0fa496320160588f1"},{url:"static/js/async/9616.61656e9d.js",revision:"f5c285c870b51d2c559541b8ae7cc121"},{url:"static/js/async/9708.43706a05.js",revision:"a1037474b270c37e11eb2e000080d22a"},{url:"static/js/async/973.b405643d.js",revision:"f23bb090be8fb810610648e014a50950"},{url:"static/js/async/9752.938561fd.js",revision:"9cbd40475003d96ce6fd198433b20ac3"},{url:"static/js/async/9777.898c9dfe.js",revision:"aed18f85133fd5d70a1298c6531b8879"},{url:"static/js/async/9783.add685ba.js",revision:"4e0a3b921fc31e4f4580195f40ab4ccf"},{url:"static/js/async/990.416b19e3.js",revision:"ed2e801ea34314e991c7881697259a2c"},{url:"static/js/async/9910.4891c853.js",revision:"b373850ce794052875f60790d14b5c90"},{url:"static/js/async/9969.34fd2900.js",revision:"357f31f59721fa43bb496e23c72c700a"},{url:"static/js/async/copilots/(term)/page.b6e0e7c2.js",revision:"171ace5122bf0b88826d6f80089bd603"},{url:"static/js/async/my-box/create/page.01b1a21e.js",revision:"691b89cfa5f17b78aef3af3bcf29319b"},{url:"static/js/async/my-box/page.0ea600fc.js",revision:"25e02b05fc80198c3077055cbb89063d"},{url:"static/js/async/page.7c09a4e8.js",revision:"7743aec82334e68a969c8eeebe7ea637"},{url:"static/js/async/solutions/(term)/page.b6704ce4.js",revision:"cd2db8050037455121b209953470e141"},{url:"static/js/async/upload/page.e0cd4ff9.js",revision:"bda5fdd3a16dad09d26f2004e5d061da"},{url:"static/js/lib-antd.d03fc85b.js",revision:"f5865f48f7eab51ef4aa27654bf72c85"},{url:"static/js/lib-lodash.a483181c.js",revision:"cc2c0594373bd2bbeb391edf09467ebf"},{url:"static/js/lib-polyfill.fee50c2b.js",revision:"daf2703a70935d3a3ade7789f592eaba"},{url:"static/js/lib-router.41bd8b0e.js",revision:"280b6cc4fda6d387b9cd6a80223bf562"},{url:"static/js/main.ad313e10.js",revision:"0dbfcd04279d42f00eb444e82104a64d"},{url:"wrench.svg",revision:"edb3c8758ff47056e24bbb6114f4fe6b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),s.registerRoute(/\/api\/copilots\/\d+\.json/,new s.NetworkFirst({cacheName:"Copilots",networkTimeoutSeconds:8,plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
