/*! For license information please see page.e0b71509.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([["253"],{363733:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var o=t("450348"),n={},l=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),l=1;l<r;l++)t[l-1]=arguments[l];var u=[],i=[],s=function(e){var r,t=(0,o.createContext)(n);u.push(t),i.push((r=t,function(){var e=(0,o.useContext)(r);return e}))};t.length?t.forEach(function(e){return s(e.name)}):s(e.name);var a=function(r){for(var n=r.children,l=e(function(e,r){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],!(r.indexOf(t)>=0)&&(n[t]=e[t]);return n}(r,["children"])),i=n,s=0;s<u.length;s+=1){var a=u[s],c=t[s]||function(e){return e};i=(0,o.createElement)(a.Provider,{value:c(l)},i)}return i};return[a].concat(i)}},493130:function(e,r,t){"use strict";e.exports=t.p+"static/image/sorry.06ca1022.png"},981939:function(e,r,t){"use strict";e.exports={ControlledCopilotBlock:"ControlledCopilotBlock-dc36e2",controlledCopilotBlock:"ControlledCopilotBlock-dc36e2",SolutionCard:"SolutionCard-ebad4e",solutionCard:"SolutionCard-ebad4e",TotalScore:"TotalScore-_372c2",totalScore:"TotalScore-_372c2"}},940904:function(e,r,t){"use strict";e.exports={Mount:"Mount-_70740",mount:"Mount-_70740"}},814647:function(e,r,t){"use strict";t.r(r),t.d(r,{ExcludeAurorianFormList:function(){return d}});var o=t("766791"),n=t("928958"),l=t("67348"),u=t("375748"),i=t("134640"),s=t("408748"),a=t("186659"),c=t("439538");let d=e=>{let{name:r,...t}=e,[{auroriansOptions:d,auroriansMap:m}]=(0,l.useModel)(c.AuroriansModel);return(0,o.jsx)(n.ProFormList,{...t,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u6392\u9664\u7684\u5149\u7075"},name:r,alwaysShowItemLabel:!0,actionRender:(e,r)=>[(0,o.jsx)(u.Tooltip,{title:"\u5220\u9664\u6B64\u5149\u7075",children:(0,o.jsx)(u.Button,{style:{marginLeft:".5rem"},icon:(0,o.jsx)(i.Delete,{}),onClick:t=>{t.stopPropagation(),r.remove(e.name)}})},"delete")],children:()=>(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProForm.Item,{label:"\u6392\u9664\u7684\u5149\u7075",name:(0,a.ensureExcludeKey)("aurorianId"),rules:[{required:!0}],children:(0,o.jsx)(u.Select,{options:d,showSearch:!0,allowClear:!1,placeholder:"\u652F\u6301\u6309\u62FC\u97F3\u641C\u7D22\u5149\u7075, \u6BD4\u5982 ad \u53EF\u4EE5\u641C\u5230 \u5B89\u987F",filterOption:c.filterAuroriansOption})}),(0,o.jsx)(n.ProFormDependency,{name:[(0,a.ensureExcludeKey)("aurorianId")],children:e=>{let{aurorianId:r}=e;return r?(0,o.jsx)(s.AdaptiveAurorianCard,{readOnly:!0,mini:!0,aurorianId:r}):null}}),(0,o.jsx)(n.ProFormDependency,{name:[(0,a.ensureExcludeKey)("aurorianId")],children:e=>{let{aurorianId:r}=e;return r?(0,o.jsx)(n.ProFormSwitch,{label:"\u4EC5\u6392\u9664\u7A81\u7834",name:(0,a.ensureExcludeKey)("excludeBreakthroughOnly")}):null}}),(0,o.jsx)(n.ProFormDependency,{name:[(0,a.ensureExcludeKey)("aurorianId"),(0,a.ensureExcludeKey)("excludeBreakthroughOnly")],children:e=>{let{aurorianId:r,excludeBreakthroughOnly:t}=e,l=m[r];return t&&l?(0,o.jsx)(n.ProFormRate,{name:(0,a.ensureExcludeKey)("excludeBreakthrough"),label:"\u6392\u9664\u7A81\u7834\u6570",fieldProps:{count:l.rarity,allowHalf:!1},tooltip:"\u5927\u4E8E\u7B49\u4E8E\u6B64\u7A81\u7834\u6570\u7684\u5149\u7075\u4F1A\u88AB\u6392\u9664\uFF0C\u4F46\u4E0D\u4F1A\u6392\u9664\u96F6\u7834\u7684\u6B64\u5149\u7075",rules:[{required:!0}]}):null}})]})})}},643394:function(e,r,t){"use strict";t.r(r),t.d(r,{SolutionCard:function(){return p}});var o=t("766791"),n=t("375748"),l=t("450348"),u=t.n(l),i=t("667227"),s=t("132802"),a=t.n(s),c=t("764059"),d=t("981939");let m=e=>e.copilot_id,p=u().memo(e=>{let{solution:r,currentTerm:t,index:u,onIgnore:i}=e,s=(0,l.useMemo)(()=>[...r.copilots].sort((e,r)=>r.score-e.score),[r]);return(0,o.jsxs)(n.Card,{className:d.SolutionCard,bodyStyle:{paddingBottom:16},children:[(0,o.jsx)("div",{className:d.TotalScore,children:(0,o.jsx)(n.Typography.Text,{strong:!0,children:`#${u+1} \u{5339}\u{914D}\u{65B9}\u{6848} ${a()(r.totalScore).format("0,0")}`})}),s.map(e=>(0,o.jsx)(c.CopilotBlock,{className:d.ControlledCopilotBlock,copilot:e,currentTerm:t,onIgnore:i},m(e)))]})},(e,r)=>(0,i.isEqual)(e.solution.copilots.map(e=>e.copilot_id),r.solution.copilots.map(e=>e.copilot_id))&&e.currentTerm.term_id===r.currentTerm.term_id&&e.index===r.index)},447132:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var o=t("766791"),n=t("928958"),l=t("450348"),u=t("260740"),i=t("375748"),s=t("18363"),a=t("718606"),c=t("885561"),d=t("605442"),m=t("216746"),p=t("459648"),x=()=>{let{targetTerm:e}=(0,a.useTargetTermFromParams)(),{data:r,error:t,loading:x}=(0,u.useRequest)(()=>e?.term_id?(0,c.getCopilots)(e.term_id):Promise.resolve({}),{ready:!!e?.term_id,refreshDeps:[e?.term_id]}),h=(0,l.useMemo)(()=>Object.values(r??[]),[r]);return(0,o.jsx)(n.PageContainer,{content:(0,o.jsxs)(i.Space,{wrap:!0,children:[(0,o.jsx)(a.TermChanger,{pathFn:d.RoutePath.Solutions}),h[0]?(0,o.jsxs)(i.Typography.Text,{children:["\u4E0A\u6B21\u4F5C\u4E1A\u66F4\u65B0 ",(0,o.jsx)(m.RelativeTimeText,{time:h[0].upload_time})]}):null,(0,o.jsx)(i.Typography.Text,{type:"secondary",children:"Tips: \u70B9\u51FB\u5339\u914D\u4F5C\u4E1A\u4E2D\u5149\u7075\u5934\u50CF\u53EF\u5524\u51FA\u83DC\u5355\u4E00\u952E\u6392\u9664\u5149\u7075\u6216\u4EC5\u6392\u9664\u7A81\u7834 \u2764"})]}),title:"\u4F5C\u4E1A\u5339\u914D",loading:x,children:t?(0,o.jsx)(s.TermNotFound,{}):e?(0,o.jsx)(p.SolutionView,{copilots:h,currentTerm:e}):(0,o.jsx)(s.TermNotFound,{})})}},541e3:function(e,r,t){"use strict";t.r(r),t.d(r,{QueryForm:function(){return p}});var o=t("766791"),n=t("928958"),l=t("450348"),u=t("375748"),i=t("134640"),s=t("714874"),a=t("764104"),c=t("234106"),d=t("718151"),m=t("814647");let p=e=>{let{termId:r,copilots:t}=e,{initialValues:p,setLocalInitialValues:x}=(0,a.useInitialValues)({termId:r}),{loadingSolutionResult:h,solutionResult:y,form:g,requestSolution:f}=(0,s.useSolutionResultContext)(),S=(0,l.useMemo)(()=>({searchConfig:{submitText:"\u5BFB\u627E\u65B9\u6848"},submitButtonProps:{icon:(0,o.jsx)(i.Search,{theme:"outline"})},render(e,r){let t=[...r];return"number"==typeof y?.allSolutions.solutions.length&&t.push((0,o.jsxs)(u.Typography.Text,{children:["\u5DF2\u4E3A\u60A8\u627E\u5230"," ",(0,o.jsx)(u.Typography.Text,{strong:!0,children:y.allSolutions.solutions.length})," ","\u4E2A\u4F5C\u4E1A\u5339\u914D\u65B9\u6848"]},"count")),(0,o.jsx)(u.Space,{wrap:!0,children:t})}}),[y?.allSolutions.solutions.length]),j=(0,l.useCallback)((e,r)=>{r.enableSaveLocalStorage?x(r):x(void 0),x(r.enableSaveLocalStorage?r:void 0)},[]),b=(0,l.useMemo)(()=>t.map(e=>({label:`${e.author_name} ${Math.floor(e.score/1e4)}W`,value:e.copilot_id})),[t]),v=(0,l.useCallback)(async e=>{await f(t,e)},[t]);return(0,o.jsxs)(n.ProForm,{onFinish:v,layout:"vertical",initialValues:p,submitter:S,loading:h,onValuesChange:j,form:g,children:[(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProFormRadio.Group,{name:(0,d.ensureQueryKey)("k"),label:"\u961F\u4F0D\u6570\u91CF",rules:[{required:!0}],options:c.EXTENDED_TEAM_COUNT,allowClear:!1,radioType:"button"}),(0,o.jsx)(n.ProFormSwitch,{name:(0,d.ensureQueryKey)("disableAlternative"),label:"\u4E0D\u8003\u8651\u53EF\u66FF\u81EA\u7531\u4F4D",tooltip:"\u5F00\u542F\u540E\uFF0C\u8BA1\u7B97\u7684\u961F\u4F0D\u65B9\u6848\u4E2D\u7EDD\u5BF9\u4E0D\u4F1A\u51FA\u73B0\u91CD\u590D\u5149\u7075\uFF0C\u6EE1\u8DB3\u56FE\u9274\u5927\u4F6C\u7684\u5F3A\u8FEB\u75C7"}),(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProFormSwitch,{name:(0,d.ensureQueryKey)("enableExclude"),label:"\u989D\u5916\u6392\u9664\u5149\u7075",tooltip:"\u6392\u9664\u5149\u7075\u4F1A\u5FFD\u7565\u53EF\u66FF\u81EA\u7531\u4F4D"}),(0,o.jsx)(n.ProFormDependency,{name:[(0,d.ensureQueryKey)("enableExclude")],children:e=>{let{enableExclude:r}=e;return r?(0,o.jsx)(m.ExcludeAurorianFormList,{name:"exclude"}):null}})]}),(0,o.jsx)(n.ProFormSwitch,{name:(0,d.ensureQueryKey)("enableSaveLocalStorage"),label:"\u8BB0\u4F4F\u6211\u7684\u8BBE\u7F6E",tooltip:"\u5F00\u542F\u540E\uFF0C\u8FD9\u4E00\u671F\u8352\u5178\u7B5B\u9009\u7684\u8BBE\u7F6E\u5C06\u4F1A\u50A8\u5B58\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\uFF0C\u907F\u514D\u7E41\u7410\u91CD\u590D\u7B5B\u9009"})]}),(0,o.jsx)(n.ProFormDependency,{name:[(0,d.ensureQueryKey)("copilotsIgnore")],children:e=>{let{copilotsIgnore:r}=e;return r?.length?(0,o.jsx)(n.ProFormSelect,{mode:"multiple",name:(0,d.ensureQueryKey)("copilotsIgnore"),label:"\u5DF2\u989D\u5916\u6392\u9664\u7684\u4F5C\u4E1A",options:b}):null}})]})}},873329:function(e,r,t){"use strict";t.r(r),t.d(r,{SolutionListView:function(){return p}});var o=t("766791"),n=t("375748"),l=t("450348"),u=t("260740"),i=t("667227"),s=t("714874"),a=t("493130"),c=t("940904"),d=t("643394");let m=e=>e.copilots.map(e=>e.copilot_id).join(","),p=e=>{let{currentTerm:r}=e,t=(0,l.useRef)(null),{loadingSolutionResult:p,solutionResult:x,form:h}=(0,s.useSolutionResultContext)(),[y,g]=(0,l.useState)(1);(0,l.useEffect)(()=>{x&&1!==y&&g(1)},[x]);let f=(0,l.useMemo)(()=>({align:"center",defaultPageSize:5,current:y,onChange(e){g(e),window.scrollTo({top:t.current.offsetTop,behavior:"smooth"})},showSizeChanger:!1}),[y]),S=(0,u.useMemoizedFn)(e=>{if("aurorian"===e.type&&e.aurorianId){h.setFieldValue("enableExclude",!0);let r=h.getFieldValue("exclude");Array.isArray(r)&&(r.find(r=>r.aurorianId===e.aurorianId)?n.notification.error({message:`\u{8FD9}\u{4E2A}\u{5149}\u{7075}\u{5DF2}\u{7ECF}\u{5728}\u{6392}\u{9664}\u{5217}\u{8868}\u{4E2D}\u{4E86} \u{2764}`}):(1===r.length&&(0,i.isEmpty)(r[0])&&r.pop(),e.breakthrough?h.setFieldValue("exclude",[...r,{aurorianId:e.aurorianId,excludeBreakthroughOnly:!0,excludeBreakthrough:e.breakthrough}]):h.setFieldValue("exclude",[...r,{aurorianId:e.aurorianId}]),h.submit()))}else if("copilot"===e.type){let r=h.getFieldValue("copilotsIgnore");Array.isArray(r)?h.setFieldValue("copilotsIgnore",[...r,e.copilotId]):h.setFieldValue("copilotsIgnore",[e.copilotId]),h.submit()}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:c.Mount,ref:t}),(0,o.jsx)(n.ConfigProvider,{renderEmpty:e=>"List"===e?x?.allSolutions.solutions.length===0?(0,o.jsx)(n.Result,{icon:(0,o.jsx)("img",{width:100,src:a,alt:"\u9192\u5C71daddy: \u5F88\u62B1\u6B49"}),title:"\u6CA1\u80FD\u627E\u5230\u5339\u914D\u7684\u4F5C\u4E1A",subTitle:(0,o.jsxs)("div",{children:["1. \u53EF\u4EE5\u9002\u5F53\u964D\u4F4E\u641C\u7D22\u7684\u961F\u4F0D\u6570\u91CF\u3002\u4F8B\u5982\u641C\u7D22\u4E24\u961F + \u81EA\u5DF1\u81EA\u52A8\u4E00\u961F",(0,o.jsx)("br",{}),"2. \u5F53\u524D\u4F5C\u4E1A\u6570\u91CF\u8F83\u5C11\u3002\u53EF\u7B49\u5F85\u4F5C\u4E1A\u7AD9\u66F4\u65B0\u540E\u518D\u6B21\u641C\u7D22"]})}):(0,o.jsx)(n.Empty,{image:n.Empty.PRESENTED_IMAGE_SIMPLE,description:"\u51C6\u5907\u597D\u5BFB\u627E\u4F5C\u4E1A\u4E86\uFF01"}):(0,o.jsx)(n.Empty,{image:n.Empty.PRESENTED_IMAGE_SIMPLE}),children:(0,o.jsx)(n.List,{loading:p,dataSource:x?.allSolutions.solutions,pagination:f,rowKey:m,renderItem:e=>(0,o.jsx)(d.SolutionCard,{index:x?.rankSet.get(e)??0,solution:e,currentTerm:r,onIgnore:S})})})]})}},459648:function(e,r,t){"use strict";t.r(r),t.d(r,{SolutionView:function(){return s}});var o=t("766791"),n=t("375748"),l=t("714874"),u=t("541000"),i=t("873329");let s=e=>{let{copilots:r,currentTerm:t}=e;return(0,o.jsx)(l.SolutionResultProvider,{children:(0,o.jsxs)(n.Flex,{vertical:!0,gap:"middle",children:[26===t.order?(0,o.jsx)(n.Alert,{type:"error",showIcon:!1,banner:!0,message:"\u5149\u7075\u9ED1\u6F6E\u76EE\u524D\u88C5\u5907\u6280\u80FD\u5B58\u5728 Bug \u4F7F\u5F97\u8352\u5178\u5206\u6570\u53EF\u80FD\u5B58\u5728\u865A\u9AD8\u95EE\u9898\u3002\u5B98\u65B9\u5C06\u4E8E 1 \u6708 10 \u65E5\u66F4\u65B0\u540E\u4FEE\u590D\u3002\u672C\u671F\u9ED1\u6F6E\u961F\u4F0D\u5206\u6570\u4EC5\u4F9B\u53C2\u8003\u3002",action:(0,o.jsx)(n.Typography.Link,{href:"https://www.bilibili.com/read/cv29262782/",target:"_blank",children:"\u67E5\u770B\u5B98\u65B9\u516C\u544A"})}):null,(0,o.jsx)(n.Card,{children:(0,o.jsx)(u.QueryForm,{copilots:r,termId:t.term_id})}),(0,o.jsx)(i.SolutionListView,{currentTerm:t})]})})}},186659:function(e,r,t){"use strict";function o(e){return e}t.r(r),t.d(r,{ensureExcludeKey:function(){return o}})},28549:function(e,r,t){"use strict";t.r(r),t.d(r,{solutionAlgorithm:function(){return n}});class o{static getInstance(){return null===o.instance&&(o.instance=new o),o.instance}calculateAllSolutions(e,r,o){return new Promise((n,l)=>{let u=new Worker(new URL(t.p+t.u("651"),t.b));u.addEventListener("message",e=>{n(e.data),u.terminate()}),u.addEventListener("error",e=>{l(e),u.terminate()}),u.postMessage({context:e,k:r,options:o})})}constructor(){}}o.instance=null;let n=o.getInstance()},234106:function(e,r,t){"use strict";t.r(r),t.d(r,{EXTENDED_TEAM_COUNT:function(){return o}});let o=[{label:"\u4E00\u961F",value:1},{label:"\u4E24\u961F",value:2},{label:"\u4E09\u961F",value:3},{label:"\u56DB\u961F",value:4}]},764104:function(e,r,t){"use strict";t.r(r),t.d(r,{useInitialValues:function(){return u}});var o=t("260740"),n=t("450348");let l={k:3,exclude:[{}]};function u(e){let{termId:r}=e,t=(0,n.useMemo)(()=>`SINSA_DADDY_SOLUTIONS_FILTER_KEY_V1_${r}`,[r]),[u,i]=(0,o.useLocalStorageState)(t,{defaultValue:void 0});return{initialValues:u??l,setLocalInitialValues:i}}},718151:function(e,r,t){"use strict";function o(e){return e}t.r(r),t.d(r,{ensureQueryKey:function(){return o}})},714874:function(e,r,t){"use strict";t.r(r),t.d(r,{SolutionResultProvider:function(){return u},useSolutionResultContext:function(){return i}});var o=t("363733"),n=t("928958"),l=t("642862");let[u,i]=(0,o.default)(()=>{let{solutionResult:e,loadingSolutionResult:r,requestSolution:t}=(0,l.useRequestSolution)(),[o]=n.ProForm.useForm();return{solutionResult:e,loadingSolutionResult:r,requestSolution:t,form:o}})},642862:function(e,r,t){"use strict";t.r(r),t.d(r,{useRequestSolution:function(){return s}});var o=t("260740"),n=t("67348"),l=t("734513"),u=t("439538"),i=t("28549");function s(){let[{WHOLE_BOX:e}]=(0,n.useModel)(u.AuroriansModel),{data:r,loading:t,runAsync:s}=(0,o.useRequest)(async(r,t)=>{let{exclude:o,k:n,disableAlternative:u,copilotsIgnore:s,enableExclude:a}=t,c=a&&Array.isArray(o)?(0,l.withoutExclude)(e,o):e,d=await i.solutionAlgorithm.calculateAllSolutions({copilots:r,availableBox:c},n,{disableAlternative:u,copilotsIgnore:s}),m=new WeakMap;for(let e=0;e<d.solutions.length;e++){let r=d.solutions[e];m.set(r,e)}return{allSolutions:d,rankSet:m}},{manual:!0});return{solutionResult:r,loadingSolutionResult:t,requestSolution:s}}}}]);