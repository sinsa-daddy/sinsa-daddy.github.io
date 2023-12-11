/*! For license information please see page.ab6aa16a.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([["8473"],{20586:function(e,t,r){"use strict";e.exports={AurorianCard:"AurorianCard-d42393",aurorianCard:"AurorianCard-d42393",BlackContainer:"BlackContainer-e8c720",blackContainer:"BlackContainer-e8c720",BreakThrough:"BreakThrough-ce2a97",breakThrough:"BreakThrough-ce2a97",MetaAttributeContainer:"MetaAttributeContainer-_81be2",metaAttributeContainer:"MetaAttributeContainer-_81be2",MetaClass:"MetaClass-_18f93",metaClass:"MetaClass-_18f93",MetaContainer:"MetaContainer-_9d666",metaContainer:"MetaContainer-_9d666",MetaFirstAttribute:"MetaFirstAttribute-_39683",metaFirstAttribute:"MetaFirstAttribute-_39683",MetaSecondAttribute:"MetaSecondAttribute-b69352",metaSecondAttribute:"MetaSecondAttribute-b69352",NameContainer:"NameContainer-a93283",nameContainer:"NameContainer-a93283",Skin:"Skin-_6e8ba",skin:"Skin-_6e8ba"}},3569:function(e,t,r){"use strict";e.exports={AuroriansTeam:"AuroriansTeam-_162da",auroriansTeam:"AuroriansTeam-_162da"}},37084:function(e,t,r){"use strict";r.r(t),r.d(t,{AurorianCard:function(){return d}});var a=r("66791"),n=r("50348"),o=r.n(n),i=r("67348"),s=r("75748"),l=r("20586"),u=r("75122"),c=r("39538");let d=o().memo(e=>{let{name:t,breakthrough:o,isReplaceable:d}=e,[{auroriansMap:m}]=(0,i.useModel)(c.AuroriansModel),p=(0,n.useMemo)(()=>m[t],[m,t]),b=(0,n.useRef)(null);return(0,n.useEffect)(()=>{p?.aurorian_name&&r("32662")(`@/assets/skins/${p.aurorian_name}.webp`.replace("@/assets/skins/","./")).then(e=>{"string"==typeof e?.default&&b.current&&(b.current.style.backgroundImage=`url(${e.default})`)}).catch(()=>{})},[p?.aurorian_name]),(0,a.jsx)(s.Badge.Ribbon,{style:{fontSize:"12px",display:d?"block":"none",zIndex:1e4},text:d?"\u53EF\u66FF":void 0,children:(0,a.jsxs)("div",{className:l.AurorianCard,ref:b,children:[p?.class&&p?.attribute?(0,a.jsxs)("div",{className:l.MetaContainer,children:[(0,a.jsx)("img",{className:l.MetaClass,alt:p.class,src:u.ClassURLMapper[p.class]}),(0,a.jsxs)("div",{className:l.MetaAttributeContainer,children:[(0,a.jsx)("img",{className:l.MetaFirstAttribute,alt:p.attribute,src:u.ElementURLMapper[p.attribute]}),p.secondary_attribute?(0,a.jsx)("img",{className:l.MetaSecondAttribute,alt:p.secondary_attribute,src:u.ElementURLMapper[p.secondary_attribute]}):null]})]}):null,(0,a.jsxs)("div",{className:l.NameContainer,children:[(0,a.jsx)("div",{title:p?.aurorian_name,children:p?.aurorian_cn_name}),p?.rarity?(0,a.jsx)(s.ConfigProvider,{theme:{components:{Rate:{starBg:"white",starSize:10}}},children:(0,a.jsx)(s.Rate,{className:l.BreakThrough,disabled:!0,value:o,count:u.RarityMapper[p.rarity]})}):null]})]})})})},92079:function(e,t,r){"use strict";r.r(t),r.d(t,{AuroriansTeam:function(){return i}});var a=r("66791");r("50348");var n=r("37084"),o=r("3569");let i=e=>{let{aurorianSummaries:t}=e;return(0,a.jsx)("div",{className:o.AuroriansTeam,children:t.map(e=>{let{aurorian_name:t,breakthrough:r,is_replaceable:o}=e;return(0,a.jsx)(n.AurorianCard,{name:t,breakthrough:r,isReplaceable:o},t)})})}},84157:function(e,t,r){"use strict";r.r(t),r.d(t,{copilotsColumns:function(){return i}});var a=r("66791"),n=r("75748"),o=r("92079");let i=[{title:"\u5149\u7075\u914D\u7F6E",dataIndex:"aurorian_summaries",hideInSearch:!0,render:(e,t)=>(0,a.jsx)(o.AuroriansTeam,{aurorianSummaries:t.aurorian_summaries}),width:448},{title:"\u7ED3\u7B97\u5206\u6570",dataIndex:"score",valueType:"digit",width:130,hideInSearch:!0},{title:"\u4F5C\u8005",dataIndex:"author",valueType:"select",hideInSearch:!0,ellipsis:!0,width:150},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0,render:(e,t)=>(0,a.jsx)(n.Typography.Link,{href:`https://b23.tv/${t.bv}`,target:"_blank",title:t.title,children:t.title})},{title:"\u4E0A\u4F20\u65F6\u95F4",dataIndex:"upload_time",valueType:"dateTime",width:160}]},64204:function(e,t,r){"use strict";r.r(t),r.d(t,{copilotRowKey:function(){return s},CopilotsTable:function(){return u}});var a=r("66791"),n=r("50348"),o=r("39943"),i=r("84157");function s(e){return e.bv}let l={pagination:{pageSize:5,size:"default",position:["bottomCenter"]},scroll:{x:"max-content",scrollToFirstRowOnChange:!0},toolbar:{title:"\u6536\u5F55\u4F5C\u4E1A"}},u=e=>{let{dataSource:t,term:r}=e,u=(0,n.useRef)(),c=(0,n.useMemo)(()=>({term:r}),[r]),d=(0,n.useCallback)(async e=>({data:t.filter(t=>{let r=!0;return e.title&&(r=t.title.includes(e.title)),r}),success:!0}),[]);return(0,a.jsx)(o.ProTable,{rowKey:s,actionRef:u,columns:i.copilotsColumns,params:c,request:d,...l})}},71240:function(e,t,r){"use strict";r.r(t),r.d(t,{SolutionScenarioCard:function(){return u}});var a=r("66791"),n=r("39943"),o=r("50348"),i=r("26424"),s=r("64204"),l=r("84157");let u=e=>{let{solution:t,title:r}=e,u=(0,o.useCallback)(async()=>({data:(0,i.produce)(t.copilots,e=>{e.sort((e,t)=>Number(t.score-e.score))}),success:!0}),[]),c=(0,o.useMemo)(()=>({title:r,settings:[]}),[r]),d=(0,o.useMemo)(()=>({x:"max-content"}),[]);return(0,a.jsx)(n.ProTable,{toolbar:c,rowKey:s.copilotRowKey,columns:l.copilotsColumns,request:u,search:!1,pagination:!1,size:"small",scroll:d})}},31128:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotHeader:function(){return u}});var a=r("66791"),n=r("67348"),o=r("75748"),i=r("51895"),s=r("9596"),l=r("28445");let u=()=>{let e=(0,i.useParams)(),[t]=(0,n.useModel)(s.TermsModel),r=(0,i.useNavigate)();return(0,a.jsx)(o.Select,{value:e.term&&Number.parseInt(e.term,10),options:t.termsOptions,placeholder:"\u8352\u5178\u671F\u6570",onChange:e=>{r(l.RoutePath.Copilots(e))}})}},17266:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotSolution:function(){return p}});var a=r("66791"),n=r("39943"),o=r("75748"),i=r("50348"),s=r("67348"),l=r("32802"),u=r.n(l),c=r("51436"),d=r("39538"),m=r("71240");let p=e=>{let{dataSource:t}=e,[{WHOLE_BOX:r}]=(0,s.useModel)(d.AuroriansModel),[l,p]=(0,i.useState)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Typography.Title,{level:3,children:"\u5BFB\u627E\u961F\u4F0D\u65B9\u6848"}),(0,a.jsxs)(n.QueryFilter,{defaultCollapsed:!0,onFinish:async e=>{p((0,c.calculateAllScenariosAndScores)({copilots:t,availableBox:r.aurorian_summaries},e.k,{disalbeAlternative:e.disalbeAlternative}))},searchText:"\u5BFB\u627E\u961F\u4F0D\u65B9\u6848",initialValues:{k:3,box:"whole"},layout:"vertical",children:[(0,a.jsx)(n.ProFormRadio.Group,{name:"k",label:"\u961F\u4F0D\u6570\u91CF",rules:[{required:!0}],options:[{label:"\u4E24\u652F\u961F\u4F0D",value:2},{label:"\u4E09\u652F\u961F\u4F0D",value:3},{label:"\u56DB\u652F\u961F\u4F0D",value:4}],allowClear:!1,radioType:"button"}),(0,a.jsx)(n.ProFormRadio.Group,{name:"box",label:"Box \u5339\u914D",options:[{label:"\u5168\u56FE\u9274\u6EE1\u7A81\u7834 Box",value:"whole"},{label:"\u6211\u7684\u81EA\u5B9A\u4E49 Box",value:"my-box",disabled:!0}],allowClear:!1,radioType:"button",rules:[{required:!0}]}),(0,a.jsx)(n.ProFormSwitch,{name:"disalbeAlternative",label:"\u4E0D\u8003\u8651\u53EF\u66FF\u81EA\u7531\u4F4D",tooltip:"\u5F00\u542F\u540E\uFF0C\u8BA1\u7B97\u7684\u961F\u4F0D\u65B9\u6848\u4E2D\u7EDD\u5BF9\u4E0D\u4F1A\u51FA\u73B0\u91CD\u590D\u5149\u7075\uFF0C\u6EE1\u8DB3\u56FE\u9274\u5927\u4F6C\u7684\u5F3A\u8FEB\u75C7"})]}),l?.scenarios.length?(0,a.jsxs)(o.Typography.Paragraph,{children:["\u5DF2\u4E3A\u60A8\u627E\u5230 ",l?.scenarios.length," ","\u4E2A\u961F\u4F0D\u65B9\u6848\uFF0C\u603B\u5206\u6570\u7531\u9AD8\u81F3\u4F4E\u6392\u5217"]}):null,(0,a.jsx)(o.List,{dataSource:l?.scenarios,pagination:{align:"center"},rowKey:e=>e.copilots.map(e=>e.bv).join(""),renderItem:e=>(0,a.jsx)("div",{style:{marginBottom:"1rem"},children:(0,a.jsx)(m.SolutionScenarioCard,{solution:e,title:`\u{65B9}\u{6848}: ${u()(e.totalScore).format("0,0")} \u{5206}`})},e.copilots.map(e=>e.bv).join(""))})]})}},1860:function(e,t,r){"use strict";r.r(t),r.d(t,{TermNotFound:function(){return u}});var a=r("66791"),n=r("67348"),o=r("75748"),i=r("51895"),s=r("9596"),l=r("28445");let u=()=>{let[{firstTerm:e}]=(0,n.useModel)(s.TermsModel);return(0,a.jsx)(o.Result,{status:"404",title:"\u8352\u5178\u4F5C\u4E1A\u4E0D\u89C1\u4E86",subTitle:"\u68C0\u67E5\u94FE\u63A5\u662F\u5426\u6B63\u786E\u6216\u8FD4\u56DE\u6700\u8FD1\u8352\u5178\u4F5C\u4E1A",extra:e?(0,a.jsx)(i.Link,{to:l.RoutePath.Copilots(e.term),children:(0,a.jsx)(o.Button,{type:"primary",children:"\u8FD4\u56DE\u6700\u8FD1\u4F5C\u4E1A"})}):(0,a.jsx)(i.Link,{to:l.RoutePath.Home,children:(0,a.jsx)(o.Button,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})})})}},94114:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a=r("66791"),n=r("51895"),o=r("36404"),i=r("39943"),s=r("50348"),l=r("5086"),u=r("1860"),c=r("31128"),d=r("17266"),m=r("64204"),p=()=>{let e=(0,n.useParams)(),{data:t,error:r,isLoading:p}=(0,o.default)(`/api/copilots/${e.term}.json`,l.fetcher),b=(0,s.useMemo)(()=>Object.values(t??[]),[t]);return r?(0,a.jsx)(u.TermNotFound,{}):(0,a.jsxs)(i.PageContainer,{content:(0,a.jsx)(c.CopilotHeader,{}),title:"\u8352\u5178\u4F5C\u4E1A",loading:p,children:[(0,a.jsx)(m.CopilotsTable,{term:e.term,dataSource:b}),(0,a.jsx)(d.CopilotSolution,{dataSource:b})]})}},51436:function(e,t,r){"use strict";r.r(t),r.d(t,{calculateAllScenariosAndScores:function(){return i}});var a=r("26424"),n=r("80620"),o=r("47621");function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,{disalbeAlternative:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i={scenarios:[]};return!function a(s,l,u,c){if(0===c||s===e.copilots.length){u.length>=t&&i.scenarios.push({copilots:[...u],totalScore:u.reduce((e,t)=>e+BigInt(t.score),BigInt(0))});return}let d=e.copilots[s];(0,o.canUseCopilot)(l,d,{disalbeAlternative:r})&&a(s+1,(0,n.boxWithoutAuroriansInCopilot)(l,d,{disalbeAlternative:r}),[...u,d],c-1),a(s+1,l,u,c)}(0,e.availableBox,[],t),i.scenarios=(0,a.produce)(i.scenarios,e=>{e.sort((e,t)=>Number(t.totalScore-e.totalScore))}),i}},80620:function(e,t,r){"use strict";r.r(t),r.d(t,{boxWithoutAuroriansInCopilot:function(){return n}});var a=r("26424");function n(e,t,r){let{disalbeAlternative:n}=r;return(0,a.produce)(e,e=>{for(let r of t.aurorian_summaries)(n||!r.is_replaceable)&&delete e[r.aurorian_name]})}},47621:function(e,t,r){"use strict";function a(e,t,r){let{disalbeAlternative:a}=r;for(let r of t.aurorian_summaries){if(!a&&r.is_replaceable)continue;let t=e[r.aurorian_name];if(!t||t.breakthrough<r.breakthrough)return!1}return!0}r.r(t),r.d(t,{canUseCopilot:function(){return a}})},5086:function(e,t,r){"use strict";function a(e){return fetch(e).then(e=>e.json())}r.r(t),r.d(t,{fetcher:function(){return a}})}}]);