/*! For license information please see page.c5af96f8.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["624"],{858666:function(e,t,r){"use strict";e.exports=r.p+"static/image/get_started.efdbb000.png"},824593:function(e,t,r){"use strict";e.exports=r.p+"static/image/sorry.08c94cdb.png"},377588:function(e,t,r){"use strict";r.r(t),r.d(t,{ExcludeAurorianFormList:function(){return d}});var o=r("397458"),n=r("116139"),l=r("189976"),i=r("280550"),s=r("367882"),a=r("792421"),u=r("87118"),c=r("157064");let d=e=>{let{name:t,...r}=e,[{auroriansOptions:d,auroriansMap:m}]=(0,l.useModel)(c.AuroriansModel);return(0,o.jsx)(n.ProFormList,{...r,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u6392\u9664\u7684\u5149\u7075"},name:t,alwaysShowItemLabel:!0,actionRender:(e,t)=>[(0,o.jsx)(i.Tooltip,{title:"\u5220\u9664\u6B64\u5149\u7075",children:(0,o.jsx)(i.Button,{style:{marginLeft:".5rem"},icon:(0,o.jsx)(s.Delete,{}),onClick:r=>{r.stopPropagation(),t.remove(e.name)}})},"delete")],children:()=>(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProForm.Item,{label:"\u6392\u9664\u7684\u5149\u7075",name:(0,u.ensureExcludeKey)("aurorianId"),rules:[{required:!0}],children:(0,o.jsx)(i.Select,{options:d,showSearch:!0,allowClear:!1,placeholder:"\u652F\u6301\u6309\u62FC\u97F3\u641C\u7D22\u5149\u7075, \u6BD4\u5982 ad \u53EF\u4EE5\u641C\u5230 \u5B89\u987F",filterOption:c.filterAuroriansOption})}),(0,o.jsx)(n.ProFormDependency,{name:[(0,u.ensureExcludeKey)("aurorianId")],children:e=>{let{aurorianId:t}=e;return t?(0,o.jsx)(a.AdaptiveAurorianCard,{readOnly:!0,mini:!0,aurorianId:t}):null}}),(0,o.jsx)(n.ProFormDependency,{name:[(0,u.ensureExcludeKey)("aurorianId")],children:e=>{let{aurorianId:t}=e;return t?(0,o.jsx)(n.ProFormSwitch,{label:"\u4EC5\u6392\u9664\u7A81\u7834",name:(0,u.ensureExcludeKey)("excludeBreakthroughOnly")}):null}}),(0,o.jsx)(n.ProFormDependency,{name:[(0,u.ensureExcludeKey)("aurorianId"),(0,u.ensureExcludeKey)("excludeBreakthroughOnly")],children:e=>{let{aurorianId:t,excludeBreakthroughOnly:r}=e,l=m[t];return r&&l?(0,o.jsx)(n.ProFormRate,{name:(0,u.ensureExcludeKey)("excludeBreakthrough"),label:"\u6392\u9664\u7A81\u7834\u6570",fieldProps:{count:l.rarity,allowHalf:!1},tooltip:"\u5927\u4E8E\u7B49\u4E8E\u6B64\u7A81\u7834\u6570\u7684\u5149\u7075\u4F1A\u88AB\u6392\u9664\uFF0C\u4F46\u4E0D\u4F1A\u6392\u9664\u96F6\u7834\u7684\u6B64\u5149\u7075",rules:[{required:!0}]}):null}})]})})}},87118:function(e,t,r){"use strict";function o(e){return e}r.r(t),r.d(t,{ensureExcludeKey:function(){return o}})},442384:function(e,t,r){"use strict";r.r(t),r.d(t,{AssetTypeTextMapper:function(){return o}});let o={script33:"\u4E09\u5341\u4E09\u53F7\u811A\u672C"}},410404:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotBlock:function(){return T}});var o,n=r("397458"),l=r("113861"),i=r("280550"),s=r("333906"),a=r.n(s),u=r("955950"),c=r.n(u),d=r("116139"),m=r("367882"),p=r("103600"),h=r("921663"),x=r("442384"),y=r("622403"),f=r("490467"),j=r("72285"),g=r("121128");(o||(o={})).IgnoreCopilot="IgnoreCopilot";let T=a().memo(e=>{let{copilot:t,currentTerm:r,className:o,readOnly:a}=e,u=function(){let e=(0,d.useBreakpoint)();return(0,s.useMemo)(()=>"lg"===e||"xl"===e||"xxl"===e,[e])}(),T=(0,s.useMemo)(()=>Array.isArray(t.assets),[t.assets]),_=(0,s.useMemo)(()=>(0,f.trimTitle)(t.title),[t.title]),{triggerFormAction:S}=(0,j.useSolutionResultContext)(),C=(0,s.useCallback)(e=>{if("IgnoreCopilot"===e.key)S({type:g.QueryFormAction.IgnoreCopilot,copilot:t})},[t.copilot_id]),b=(0,s.useCallback)(e=>{S({type:g.QueryFormAction.ReplaceAurorian,aurorian:e,copilot:t,currentTerm:r})},[t.copilot_id,r.term_id]);return(0,n.jsxs)("div",{className:(0,l.clsx)(h.CopilotBlock,o),children:[(0,n.jsx)(p.AdaptiveAuroriansTeam,{aurorianRequirements:t.aurorian_requirements,readOnly:a,onReplace:b}),(0,n.jsxs)("div",{className:h.PaddingContainer,children:[(0,n.jsxs)(i.Flex,{className:h.Header,wrap:"nowrap",align:"center",children:[(0,n.jsx)("span",{className:h.Score,children:c()(t.score).format("0,0")}),(0,n.jsxs)(i.Flex,{className:h.Author,align:"center",gap:4,children:[(0,n.jsxs)(i.Space.Compact,{size:"small",children:[a?null:(0,n.jsx)(i.Dropdown,{menu:{items:[{key:"IgnoreCopilot",label:(0,n.jsxs)("span",{children:[(0,n.jsx)(m.PreviewCloseOne,{})," \u6392\u9664\u6B64\u4F5C\u4E1A"]})}],onClick:C},children:(0,n.jsx)(i.Button,{icon:(0,n.jsx)(m.More,{})})}),(0,n.jsx)(i.Button,{icon:(0,n.jsx)(i.Tooltip,{title:"\u62A5\u544A\u6536\u5F55\u9519\u8BEF",children:(0,n.jsx)(m.Bug,{})}),onClick:e=>{e.stopPropagation();let r=Object.entries({\u6709\u6536\u5F55\u95EE\u9898\u7684\u4F5C\u4E1A\u6240\u5728\u8352\u5178\u671F\u6570:t.term_id,\u6709\u6536\u5F55\u95EE\u9898\u7684\u4F5C\u4E1A\u89C6\u9891\u94FE\u63A5:`${t.author_name} ${t.title} https://www.bilibili.com/video/${t.href}`}).map(e=>{let[t,r]=e;return`prefill_${window.encodeURIComponent(t)}=${window.encodeURIComponent(r)}`}).join("&");window.open(`https://fwf92qm5h53.feishu.cn/share/base/form/shrcnFMYfIOulCFwcl5ELDfGCVf?${r}`,"_blank")}})]}),(0,n.jsx)(y.RelativeTimeText,{time:t.upload_time}),t.description&&!u?(0,n.jsx)(i.Tooltip,{title:t.description,children:t.description?(0,n.jsx)(m.MessageOne,{size:18}):null}):null,(0,n.jsx)("span",{className:(0,l.clsx)(h.AuthorName,!u&&h.AuthorSmall),children:t.author_name})]})]}),(0,n.jsx)("div",{className:h.Title,children:(0,n.jsxs)(i.Typography.Link,{href:`https://www.bilibili.com/video/${t.href}`,target:"_blank",title:t.title,ellipsis:!0,children:[r?.term_id&&t.term_id!==r.term_id?(0,n.jsx)(i.Tooltip,{title:`\u{590D}\u{523B} ${t.term_id} \u{671F}\u{8352}\u{5178}`,children:(0,n.jsx)(i.Tag,{color:"red",children:"\u590D\u523B"})}):null,_]})}),t.description&&u?(0,n.jsx)(i.Typography.Paragraph,{type:"secondary",children:t.description}):null,T&&u?t.assets?.map((e,t)=>n.jsx(i.Popconfirm,{okText:"\u786E\u8BA4",title:"\u6B64\u8D44\u6E90\u4EC5\u4E3A\u4E34\u65F6\u5B58\u6863\u3002\u662F\u5426\u5F00\u59CB\u4E0B\u8F7D\uFF1F",onConfirm:()=>{let t=document.createElement("a");t.href=e.script33.link,t.click()},children:n.jsxs(i.Typography.Link,{children:[n.jsx(m.Paperclip,{})," ",x.AssetTypeTextMapper[e.type],"\u5B58\u6863"]})},`${e.type}${t}`)):null]})]})},(e,t)=>e.className===t.className&&e.copilot.copilot_id===t.copilot.copilot_id&&e.currentTerm.term_id===t.currentTerm.term_id)},278978:function(e,t,r){"use strict";r.r(t),r.d(t,{getSolutionTitle:function(){return o}});let o=(0,r("673148").memoize)(e=>{switch(e){case 1:return"\u4E00\u961F\u65B9\u6848";case 2:return"\u4E24\u961F\u65B9\u6848";case 3:return"\u4E09\u961F\u65B9\u6848";case 4:return"\u56DB\u961F\u65B9\u6848";default:return"\u5339\u914D\u65B9\u6848"}})},741829:function(e,t,r){"use strict";r.r(t),r.d(t,{SolutionCard:function(){return h}});var o=r("397458"),n=r("280550"),l=r("333906"),i=r.n(l),s=r("673148"),a=r("955950"),u=r.n(a),c=r("410404"),d=r("925770"),m=r("278978");let p=e=>e.copilot_id,h=i().memo(e=>{let{solution:t,currentTerm:r,index:i}=e,s=(0,l.useMemo)(()=>[...t.copilots].sort((e,t)=>t.score-e.score),[t]);return(0,o.jsxs)(n.Card,{className:d.SolutionCard,bodyStyle:{paddingBottom:16},children:[(0,o.jsx)("div",{className:d.TotalScore,children:(0,o.jsx)(n.Typography.Text,{strong:!0,children:`#${i+1} ${(0,m.getSolutionTitle)(t.copilots.length)} ${u()(t.totalScore).format("0,0")}`})}),s.map(e=>(0,o.jsx)(c.CopilotBlock,{className:d.ControlledCopilotBlock,copilot:e,currentTerm:r},p(e)))]})},(e,t)=>(0,s.isEqual)(e.solution.copilots.map(e=>e.copilot_id),t.solution.copilots.map(e=>e.copilot_id))&&e.currentTerm.term_id===t.currentTerm.term_id&&e.index===t.index)},621557:function(e,t,r){"use strict";r.r(t),r.d(t,{TermChanger:function(){return c},useTargetTermFromParams:function(){return u}});var o=r("397458"),n=r("189976"),l=r("280550"),i=r("609049"),s=r("333906"),a=r("191857");function u(){let e=(0,i.useParams)(),[{termsMap:t,latestTerm:r}]=(0,n.useModel)(a.TermsModel);return{targetTerm:(0,s.useMemo)(()=>{if(e.termId)return"latest"===e.termId?r:t[e.termId]},[e.termId,r?.term_id])}}let c=e=>{let{pathFn:t}=e,[r]=(0,n.useModel)(a.TermsModel),{targetTerm:s}=u(),c=(0,i.useNavigate)();return(0,o.jsx)(l.Select,{value:s?.term_id,options:r.termsOptions,placeholder:"\u8352\u5178\u671F\u6570",onChange:e=>{c(t(e===r.latestTerm?.term_id?"latest":e))}})}},461969:function(e,t,r){"use strict";r.r(t),r.d(t,{TermNotFound:function(){return c}});var o=r("397458"),n=r("189976"),l=r("280550"),i=r("609049"),s=r("191857"),a=r("103367"),u=r("824593");let c=()=>{let[{latestTerm:e}]=(0,n.useModel)(s.TermsModel);return(0,o.jsx)(l.Result,{title:"\u6682\u65F6\u6CA1\u6709\u8FD9\u671F\u8352\u5178\u4F5C\u4E1A",subTitle:"\u68C0\u67E5\u94FE\u63A5\u662F\u5426\u6B63\u786E\u6216\u8FD4\u56DE\u6700\u8FD1\u8352\u5178\u4F5C\u4E1A",icon:(0,o.jsx)("img",{alt:"\u672A\u627E\u5230\u4F5C\u4E1A",src:u}),extra:e?(0,o.jsx)(i.Link,{to:a.RoutePath.Copilots("latest"),children:(0,o.jsx)(l.Button,{type:"primary",children:"\u8FD4\u56DE\u6700\u8FD1\u4F5C\u4E1A"})}):(0,o.jsx)(i.Link,{to:a.RoutePath.Home,children:(0,o.jsx)(l.Button,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})})})}},530532:function(e,t,r){"use strict";r.r(t),r.d(t,{RumArmsMyType:function(){return o},initArmsRum:function(){return i}});var o,n=r("341438");let l=new URL(window.location.href);function i(){n.default.init({pid:"efvpghf1ny@b201b32018ef0b3",endpoint:"https://efvpghf1ny-default-cn.rum.aliyuncs.com",beforeReport:e=>"prod"!==e.app.env?null:e,version:"e861bce2024-03-23 06:27:20+0800",env:"sinsa-daddy.com"===l.hostname||"sinsa-daddy.gitee.io"===l.hostname?"prod":"local",spaMode:"history",collectors:{perf:!0,webVitals:!0,api:!0,staticResource:!0,jsError:!0,consoleError:!0,action:!0},tracing:!1})}(o||(o={})).QuerySolution="query_solution"},563860:function(e,t,r){"use strict";r.r(t);var o=r("397458"),n=r("116139"),l=r("333906"),i=r("124230"),s=r("280550"),a=r("461969"),u=r("621557"),c=r("494590"),d=r("103367"),m=r("622403"),p=r("862785");t.default=()=>{let{targetTerm:e}=(0,u.useTargetTermFromParams)(),{data:t,error:r,loading:h}=(0,i.useRequest)(()=>e?.term_id?(0,c.getCopilots)(e.term_id):Promise.resolve({}),{ready:!!e?.term_id,refreshDeps:[e?.term_id]}),x=(0,l.useMemo)(()=>Object.values(t??[]),[t]);return(0,o.jsx)(n.PageContainer,{content:(0,o.jsxs)(s.Space,{wrap:!0,children:[(0,o.jsx)(u.TermChanger,{pathFn:d.RoutePath.Solutions}),x[0]?(0,o.jsxs)(s.Typography.Text,{children:["\u4E0A\u6B21\u4F5C\u4E1A\u66F4\u65B0 ",(0,o.jsx)(m.RelativeTimeText,{time:x[0].upload_time})]}):null,(0,o.jsx)(s.Typography.Text,{type:"secondary",children:"Tips: \u70B9\u51FB\u5339\u914D\u4F5C\u4E1A\u4E2D\u5149\u7075\u5934\u50CF\u53EF\u5524\u51FA\u83DC\u5355\u4E00\u952E\u6392\u9664\u5149\u7075\u6216\u4EC5\u6392\u9664\u7A81\u7834 \u2764"})]}),title:"\u4F5C\u4E1A\u5339\u914D",loading:h,children:r||!x?.length?(0,o.jsx)(a.TermNotFound,{}):e?(0,o.jsx)(p.SolutionView,{copilots:x,currentTerm:e}):(0,o.jsx)(a.TermNotFound,{})})}},698999:function(e,t,r){"use strict";r.r(t),r.d(t,{EXTENDED_TEAM_COUNT:function(){return o}});let o=[{label:"\u4E00\u961F",value:1},{label:"\u4E24\u961F",value:2},{label:"\u4E09\u961F",value:3},{label:"\u56DB\u961F",value:4}]},799537:function(e,t,r){"use strict";r.r(t),r.d(t,{useInitialValues:function(){return i}});var o=r("124230"),n=r("333906");let l={k:3,exclude:[{}]};function i(e){let{termId:t}=e,r=(0,n.useMemo)(()=>`SINSA_DADDY_SOLUTIONS_FILTER_KEY_V1_${t}`,[t]),[i,s]=(0,o.useLocalStorageState)(r,{defaultValue:void 0});return{initialValues:i??l,setLocalInitialValues:s}}},225489:function(e,t,r){"use strict";r.r(t),r.d(t,{QueryForm:function(){return y}});var o=r("397458"),n=r("116139"),l=r("333906"),i=r("280550"),s=r("367882"),a=r("341438"),u=r("332590"),c=r("72285"),d=r("799537"),m=r("698999"),p=r("165493"),h=r("377588"),x=r("530532");let y=e=>{let{termId:t,copilots:r}=e,{initialValues:y,setLocalInitialValues:f}=(0,d.useInitialValues)({termId:t}),{loadingSolutionResult:j,solutionResult:g,form:T,requestSolution:_}=(0,c.useSolutionResultContext)(),S=(0,l.useMemo)(()=>({searchConfig:{submitText:"\u5BFB\u627E\u65B9\u6848"},submitButtonProps:{icon:(0,o.jsx)(s.Search,{theme:"outline"})},render(e,t){let r=[...t];return"number"==typeof g?.allSolutions.solutions.length&&r.push((0,o.jsxs)(i.Typography.Text,{children:["\u5DF2\u4E3A\u60A8\u627E\u5230"," ",(0,o.jsx)(i.Typography.Text,{strong:!0,children:g.allSolutions.solutions.length})," ","\u4E2A\u4F5C\u4E1A\u5339\u914D\u65B9\u6848"]},"count")),(0,o.jsx)(i.Space,{wrap:!0,children:r})}}),[g?.allSolutions.solutions.length]),C=(0,l.useCallback)((e,t)=>{t.enableSaveLocalStorage?f(t):f(void 0),f(t.enableSaveLocalStorage?t:void 0)},[]),b=(0,l.useMemo)(()=>r.map(e=>({label:`${e.author_name} ${Math.floor(e.score/1e4)}W`,value:e.copilot_id})),[r]),v=(0,l.useCallback)(async e=>{a.default.sendEvent({event_type:u.RumEventType.CUSTOM,type:x.RumArmsMyType.QuerySolution,name:"\u56DE\u6EAF\u641C\u7D22\u914D\u961F\u65B9\u6848",group:JSON.stringify(e)}),await _(r,e)},[r]);return(0,o.jsxs)(n.ProForm,{onFinish:v,layout:"vertical",initialValues:y,submitter:S,loading:j,onValuesChange:C,form:T,children:[(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProFormRadio.Group,{name:(0,p.ensureQueryKey)("k"),label:"\u961F\u4F0D\u6570\u91CF",rules:[{required:!0}],options:m.EXTENDED_TEAM_COUNT,allowClear:!1,radioType:"button"}),(0,o.jsx)(n.ProFormSwitch,{name:(0,p.ensureQueryKey)("disableAlternative"),label:"\u4E0D\u8003\u8651\u53EF\u66FF\u81EA\u7531\u4F4D",tooltip:"\u5F00\u542F\u540E\uFF0C\u8BA1\u7B97\u7684\u961F\u4F0D\u65B9\u6848\u4E2D\u7EDD\u5BF9\u4E0D\u4F1A\u51FA\u73B0\u91CD\u590D\u5149\u7075\uFF0C\u6EE1\u8DB3\u56FE\u9274\u5927\u4F6C\u7684\u5F3A\u8FEB\u75C7"}),(0,o.jsxs)(n.ProForm.Group,{children:[(0,o.jsx)(n.ProFormSwitch,{name:(0,p.ensureQueryKey)("enableExclude"),label:"\u989D\u5916\u6392\u9664\u5149\u7075",tooltip:"\u6392\u9664\u5149\u7075\u4F1A\u5FFD\u7565\u53EF\u66FF\u81EA\u7531\u4F4D"}),(0,o.jsx)(n.ProFormDependency,{name:[(0,p.ensureQueryKey)("enableExclude")],children:e=>{let{enableExclude:t}=e;return t?(0,o.jsx)(h.ExcludeAurorianFormList,{name:(0,p.ensureQueryKey)("exclude")}):null}})]}),(0,o.jsx)(n.ProFormSwitch,{name:(0,p.ensureQueryKey)("enableSaveLocalStorage"),label:"\u8BB0\u4F4F\u6211\u7684\u8BBE\u7F6E",tooltip:"\u5F00\u542F\u540E\uFF0C\u8FD9\u4E00\u671F\u8352\u5178\u7B5B\u9009\u7684\u8BBE\u7F6E\u5C06\u4F1A\u50A8\u5B58\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\uFF0C\u907F\u514D\u7E41\u7410\u91CD\u590D\u7B5B\u9009"})]}),(0,o.jsx)(n.ProFormDependency,{name:[(0,p.ensureQueryKey)("copilotsIgnore")],children:e=>{let{copilotsIgnore:t}=e;return t?.length?(0,o.jsx)(n.ProFormSelect,{mode:"multiple",name:(0,p.ensureQueryKey)("copilotsIgnore"),label:"\u5DF2\u989D\u5916\u6392\u9664\u7684\u4F5C\u4E1A",options:b}):null}})]})}},960351:function(e,t,r){"use strict";r.r(t),r.d(t,{ALERT_MAP:function(){return i},COMMON_ALERT_PROPS:function(){return l}});var o=r("397458"),n=r("280550");let l={type:"error",showIcon:!1,banner:!0},i=new Map([["cn-26",{message:"\u5149\u7075\u9ED1\u6F6E\u76EE\u524D\u88C5\u5907\u6280\u80FD\u5B58\u5728 Bug \u4F7F\u5F97\u8352\u5178\u5206\u6570\u53EF\u80FD\u5B58\u5728\u865A\u9AD8\u95EE\u9898\u3002\u5B98\u65B9\u5C06\u4E8E 1 \u6708 10 \u65E5\u66F4\u65B0\u540E\u4FEE\u590D\u3002\u672C\u671F\u9ED1\u6F6E\u961F\u4F0D\u5206\u6570\u4EC5\u4F9B\u53C2\u8003\u3002",action:(0,o.jsx)(n.Typography.Link,{href:"https://www.bilibili.com/read/cv29262782/",target:"_blank",children:"\u67E5\u770B\u5B98\u65B9\u516C\u544A"})}]])},36988:function(e,t,r){"use strict";r.r(t),r.d(t,{SolutionAlert:function(){return a}});var o=r("397458"),n=r("333906"),l=r.n(n),i=r("280550"),s=r("960351");let a=l().memo(e=>{let{currentTerm:t}=e,r=s.ALERT_MAP.get(t.term_id);return r?(0,o.jsx)(i.Alert,{...s.COMMON_ALERT_PROPS,...r}):null},(e,t)=>e.currentTerm.term_id===t.currentTerm.term_id)},285024:function(e,t,r){"use strict";r.r(t),r.d(t,{SolutionListView:function(){return p}});var o=r("397458"),n=r("280550"),l=r("333906"),i=r("72285"),s=r("285780"),a=r("824593"),u=r("858666"),c=r("741829");let d=e=>e.copilots.map(e=>e.copilot_id).join(","),m={opacity:.5},p=e=>{let{currentTerm:t}=e,r=(0,l.useRef)(null),{loadingSolutionResult:p,solutionResult:h}=(0,i.useSolutionResultContext)(),[x,y]=(0,l.useState)(1);(0,l.useEffect)(()=>{h&&1!==x&&y(1)},[h]);let f=(0,l.useMemo)(()=>({align:"center",defaultPageSize:5,current:x,onChange(e){y(e),window.scrollTo({top:r.current.offsetTop,behavior:"smooth"})},showSizeChanger:!1}),[x]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s.Mount,ref:r}),(0,o.jsx)(n.ConfigProvider,{renderEmpty:e=>"List"===e?h?.allSolutions.solutions.length===0?(0,o.jsx)(n.Result,{icon:(0,o.jsx)("img",{width:100,src:a,alt:"\u9192\u5C71daddy: \u5F88\u62B1\u6B49"}),title:"\u6CA1\u80FD\u627E\u5230\u5339\u914D\u7684\u4F5C\u4E1A",subTitle:(0,o.jsxs)("div",{children:["1. \u53EF\u4EE5\u9002\u5F53\u964D\u4F4E\u641C\u7D22\u7684\u961F\u4F0D\u6570\u91CF\u3002\u4F8B\u5982\u641C\u7D22\u4E24\u961F + \u81EA\u5DF1\u81EA\u52A8\u4E00\u961F",(0,o.jsx)("br",{}),"2. \u5F53\u524D\u4F5C\u4E1A\u6570\u91CF\u8F83\u5C11\u3002\u53EF\u7B49\u5F85\u4F5C\u4E1A\u7AD9\u66F4\u65B0\u540E\u518D\u6B21\u641C\u7D22"]})}):(0,o.jsx)(n.Empty,{image:(0,o.jsx)("img",{src:u,alt:"\u9192\u5C71daddy: \u4FE1\u5FC3"}),imageStyle:m,description:(0,o.jsx)(n.Typography.Text,{type:"secondary",children:"\u51C6\u5907\u597D\u5BFB\u627E\u4F5C\u4E1A\u5339\u914D\u4E86\uFF01"})}):(0,o.jsx)(n.Empty,{image:n.Empty.PRESENTED_IMAGE_SIMPLE}),children:(0,o.jsx)(n.List,{loading:p,dataSource:h?.allSolutions.solutions,pagination:f,rowKey:d,renderItem:e=>(0,o.jsx)(c.SolutionCard,{index:h?.rankSet.get(e)??0,solution:e,currentTerm:t})})})]})}},862785:function(e,t,r){"use strict";r.r(t),r.d(t,{SolutionView:function(){return c}});var o=r("397458"),n=r("280550"),l=r("439958"),i=r("72285"),s=r("225489"),a=r("285024"),u=r("36988");let c=e=>{let{copilots:t,currentTerm:r}=e;return(0,o.jsx)(l.Provider,{children:(0,o.jsx)(i.SolutionResultProvider,{children:(0,o.jsxs)(n.Flex,{vertical:!0,gap:"middle",children:[(0,o.jsx)(u.SolutionAlert,{currentTerm:r}),(0,o.jsx)(n.Card,{children:(0,o.jsx)(s.QueryForm,{copilots:t,termId:r.term_id})}),(0,o.jsx)(a.SolutionListView,{currentTerm:r})]})})})}},921663:function(e){"use strict";e.exports={Author:"Author-_4d4b8",author:"Author-_4d4b8",AuthorName:"AuthorName-d4efae",authorName:"AuthorName-d4efae",AuthorSmall:"AuthorSmall-_8e499",authorSmall:"AuthorSmall-_8e499",CopilotBlock:"CopilotBlock-_51402",copilotBlock:"CopilotBlock-_51402",Dot:"Dot-_3d0fb",dot:"Dot-_3d0fb",Header:"Header-_18b85",header:"Header-_18b85",PaddingContainer:"PaddingContainer-_620c9",paddingContainer:"PaddingContainer-_620c9",Score:"Score-_04302",score:"Score-_04302",Title:"Title-cf149e",title:"Title-cf149e"}},925770:function(e){"use strict";e.exports={ControlledCopilotBlock:"ControlledCopilotBlock-dc36e2",controlledCopilotBlock:"ControlledCopilotBlock-dc36e2",SolutionCard:"SolutionCard-ebad4e",solutionCard:"SolutionCard-ebad4e",TotalScore:"TotalScore-_372c2",totalScore:"TotalScore-_372c2"}},285780:function(e){"use strict";e.exports={Mount:"Mount-_70740",mount:"Mount-_70740"}}}]);