/*! For license information please see page.dc686b25.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["978"],{639900:function(e,t,r){"use strict";r.r(t),r.d(t,{BossCard:function(){return d}});var o=r("397458"),i=r("280550"),n=r("333906"),s=r.n(n),a=r("622403"),l=r("717747"),u=r("428756"),c=r("567099");let d=s().memo(e=>{let{term:t}=e,{boss_name:r,features:s,end_time:d,boss_element:p}=t,m=(0,n.useMemo)(()=>c.REVERSED_MATCH_UP[p],[p]);return(0,o.jsx)(i.Card,{className:u.Card,children:(0,o.jsxs)(i.Flex,{vertical:!0,gap:4,children:[(0,o.jsxs)(i.Flex,{align:"center",gap:4,wrap:"nowrap",children:[(0,o.jsx)("span",{className:u.BossName,children:r}),(0,o.jsx)("img",{className:u.MetaFirstAttribute,alt:p,src:l.ElementURLMapper[p]})]}),(0,o.jsxs)("span",{className:u.EndTimeContainer,children:[(0,o.jsx)(a.RelativeTimeText,{time:d}),"\u7ED3\u675F"]}),(0,o.jsxs)("ul",{className:u.FeaturesContainer,children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{className:u.FeatureElement,alt:m,src:l.ElementURLMapper[m]}),"  ","\u5C5E\u6027\u514B\u5236\u4F24\u5BB3\u589E\u52A0 100%"]},"matchup"),s.split("\n").map(e=>(0,o.jsx)("li",{children:e},e))]})]})})},(e,t)=>e.term.term_id===t.term.term_id)},442384:function(e,t,r){"use strict";r.r(t),r.d(t,{AssetTypeTextMapper:function(){return o}});let o={script33:"\u4E09\u5341\u4E09\u53F7\u811A\u672C"}},410404:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotBlock:function(){return A}});var o,i=r("397458"),n=r("113861"),s=r("280550"),a=r("333906"),l=r.n(a),u=r("955950"),c=r.n(u),d=r("444189"),p=r("367882"),m=r("103600"),h=r("921663"),C=r("442384"),x=r("622403"),T=r("490467"),f=r("72285"),_=r("121128"),j=r("258315");(o||(o={})).IgnoreCopilot="IgnoreCopilot";let A=l().memo(e=>{let{copilot:t,currentTerm:r,className:o,readOnly:l}=e,u=function(){let e=(0,d.useBreakpoint)();return(0,a.useMemo)(()=>"lg"===e||"xl"===e||"xxl"===e,[e])}(),A=(0,a.useMemo)(()=>Array.isArray(t.assets),[t.assets]),g=(0,a.useMemo)(()=>(0,T.trimTitle)(t.title),[t.title]),{triggerFormAction:b}=(0,f.useSolutionResultContext)(),y=(0,a.useCallback)(e=>{if("IgnoreCopilot"===e.key)b({type:_.QueryFormAction.IgnoreCopilot,copilot:t})},[t.copilot_id]),R=(0,a.useCallback)(e=>{b({type:_.QueryFormAction.ReplaceAurorian,aurorian:e,copilot:t,currentTerm:r})},[t.copilot_id,r.term_id]),S=(0,a.useMemo)(()=>j.realRandomService.isRealRandom(t),[t.copilot_id]);return(0,i.jsxs)("div",{className:(0,n.clsx)(h.CopilotBlock,o),children:[(0,i.jsx)(m.AdaptiveAuroriansTeam,{aurorianRequirements:t.aurorian_requirements,readOnly:l,onReplace:R}),(0,i.jsxs)("div",{className:h.PaddingContainer,children:[(0,i.jsxs)(s.Flex,{className:h.Header,wrap:"nowrap",align:"center",children:[(0,i.jsx)("span",{className:h.Score,children:c()(t.score).format("0,0")}),(0,i.jsxs)(s.Flex,{className:h.Author,align:"center",gap:4,children:[(0,i.jsxs)(s.Space.Compact,{size:"small",children:[l?null:(0,i.jsx)(s.Dropdown,{menu:{items:[{key:"IgnoreCopilot",label:(0,i.jsxs)("span",{children:[(0,i.jsx)(p.PreviewCloseOne,{})," \u6392\u9664\u6B64\u4F5C\u4E1A"]})}],onClick:y},children:(0,i.jsx)(s.Button,{icon:(0,i.jsx)(p.More,{})})}),(0,i.jsx)(s.Button,{icon:(0,i.jsx)(s.Tooltip,{title:"\u62A5\u544A\u6536\u5F55\u9519\u8BEF",children:(0,i.jsx)(p.Bug,{})}),onClick:e=>{e.stopPropagation();let r=Object.entries({\u6709\u6536\u5F55\u95EE\u9898\u7684\u4F5C\u4E1A\u6240\u5728\u8352\u5178\u671F\u6570:t.term_id,\u6709\u6536\u5F55\u95EE\u9898\u7684\u4F5C\u4E1A\u89C6\u9891\u94FE\u63A5:`${t.author_name} ${t.title} https://www.bilibili.com/video/${t.href}`}).map(e=>{let[t,r]=e;return`prefill_${window.encodeURIComponent(t)}=${window.encodeURIComponent(r)}`}).join("&");window.open(`https://fwf92qm5h53.feishu.cn/share/base/form/shrcnFMYfIOulCFwcl5ELDfGCVf?${r}`,"_blank")}})]}),(0,i.jsx)(x.RelativeTimeText,{time:t.upload_time}),t.description&&!u?(0,i.jsx)(s.Tooltip,{title:t.description,children:t.description?(0,i.jsx)(p.MessageOne,{size:18}):null}):null,(0,i.jsx)("span",{className:(0,n.clsx)(h.AuthorName,!u&&h.AuthorSmall),children:t.author_name})]})]}),(0,i.jsx)("div",{className:h.Title,children:(0,i.jsxs)(s.Typography.Link,{href:`https://www.bilibili.com/video/${t.href}`,target:"_blank",className:(0,n.clsx)(S.isRealRandomResult&&h.NotWritableTitle),title:t.title,ellipsis:!0,onClick:e=>{e.stopPropagation(),window.browserClient.sendEvent?.({name:"go_to_copilot",metrics:{score:t.score},categories:{copilot_source:t.source_type,author:t.author_id,author_name:t.author_name,term_id:t.term_id,href:t.href,copilot_id:t.copilot_id,title:t.title}})},children:[r?.term_id&&t.term_id!==r.term_id?(0,i.jsx)(s.Tooltip,{title:`\u{590D}\u{523B} ${t.term_id} \u{671F}\u{8352}\u{5178}`,children:(0,i.jsx)(s.Tag,{color:"red",children:"\u590D\u523B"})}):null,g]})}),S.isRealRandomResult?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.Typography.Text,{type:"secondary",strong:!0,children:[(0,i.jsx)(p.Caution,{})," \u6B64\u4F5C\u4E1A\u6284\u4E0D\u4E86\uFF1A",(0,i.jsx)(s.Tooltip,{title:S.stack.map(e=>e.reason).join("\u3001"),children:(0,i.jsx)("span",{className:h.ReasonText,children:"\u67E5\u770B\u539F\u56E0"})})," ",(0,i.jsx)(s.Typography.Link,{onClick:e=>{e.stopPropagation(),y({key:"IgnoreCopilot"})},children:"\u6392\u9664\u6B64\u4F5C\u4E1A"})]})}):null,t.description&&u?(0,i.jsx)(s.Typography.Paragraph,{type:"secondary",children:t.description}):null,A&&u?t.assets?.map((e,t)=>i.jsx(s.Popconfirm,{okText:"\u786E\u8BA4",title:"\u6B64\u8D44\u6E90\u4EC5\u4E3A\u4E34\u65F6\u5B58\u6863\u3002\u662F\u5426\u5F00\u59CB\u4E0B\u8F7D\uFF1F",onConfirm:()=>{let t=document.createElement("a");t.href=e.script33.link,t.click()},children:i.jsxs(s.Typography.Link,{children:[i.jsx(p.Paperclip,{})," ",C.AssetTypeTextMapper[e.type],"\u5B58\u6863"]})},`${e.type}${t}`)):null]})]})},(e,t)=>e.className===t.className&&e.copilot.copilot_id===t.copilot.copilot_id&&e.currentTerm.term_id===t.currentTerm.term_id)},621557:function(e,t,r){"use strict";r.r(t),r.d(t,{TermChanger:function(){return c},useTargetTermFromParams:function(){return u}});var o=r("397458"),i=r("189976"),n=r("280550"),s=r("609049"),a=r("333906"),l=r("191857");function u(){let e=(0,s.useParams)(),[{termsMap:t,latestTerm:r}]=(0,i.useModel)(l.TermsModel);return{targetTerm:(0,a.useMemo)(()=>{if(e.termId)return"latest"===e.termId?r:t[e.termId]},[e.termId,r?.term_id])}}let c=e=>{let{pathFn:t}=e,[r]=(0,i.useModel)(l.TermsModel),{targetTerm:a}=u(),c=(0,s.useNavigate)();return(0,o.jsx)(n.Select,{value:a?.term_id,options:r.termsOptions,placeholder:"\u8352\u5178\u671F\u6570",onChange:e=>{c(t(e===r.latestTerm?.term_id?"latest":e))}})}},461969:function(e,t,r){"use strict";r.r(t),r.d(t,{TermNotFound:function(){return u}});var o=r("397458"),i=r("189976"),n=r("280550"),s=r("609049"),a=r("191857"),l=r("103367");let u=()=>{let[{latestTerm:e}]=(0,i.useModel)(a.TermsModel);return(0,o.jsx)(n.Result,{title:"\u6682\u65F6\u6CA1\u6709\u8FD9\u671F\u8352\u5178\u4F5C\u4E1A",subTitle:"\u68C0\u67E5\u94FE\u63A5\u662F\u5426\u6B63\u786E\u6216\u8FD4\u56DE\u6700\u8FD1\u8352\u5178\u4F5C\u4E1A",icon:(0,o.jsx)("img",{alt:"\u672A\u627E\u5230\u4F5C\u4E1A",src:"https://s2.loli.net/2024/04/27/BAlKp9ERMiDo8cN.png"}),extra:e?(0,o.jsx)(s.Link,{to:l.RoutePath.Copilots("latest"),children:(0,o.jsx)(n.Button,{type:"primary",children:"\u8FD4\u56DE\u6700\u8FD1\u4F5C\u4E1A"})}):(0,o.jsx)(s.Link,{to:l.RoutePath.Home,children:(0,o.jsx)(n.Button,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})})})}},399544:function(e,t,r){"use strict";r.r(t);var o=r("397458"),i=r("124230"),n=r("444189"),s=r("333906"),a=r("280550"),l=r("461969"),u=r("621557"),c=r("103367"),d=r("299717"),p=r("151861"),m=r("504638"),h=r("639900"),C=r("953071");t.default=()=>{let{targetTerm:e}=(0,u.useTargetTermFromParams)(),{data:t,error:r,loading:x}=(0,i.useRequest)(()=>e?.term_id?(0,C.getRerunsCopilots)(e):Promise.resolve({}),{ready:!!e?.term_id,refreshDeps:[e?.term_id]}),T=(0,s.useMemo)(()=>Object.values(t??[]),[t]);return(0,o.jsx)(p.CopilotSorterProvider,{children:(0,o.jsx)(n.PageContainer,{content:(0,o.jsxs)(a.Space,{children:[(0,o.jsx)(u.TermChanger,{pathFn:c.RoutePath.Copilots}),(0,o.jsx)(m.CopilotSelect,{})]}),title:"\u4F5C\u4E1A\u5168\u89C8",loading:x,children:(0,o.jsxs)(a.Flex,{vertical:!0,gap:"middle",children:[e?(0,o.jsx)(h.BossCard,{term:e}):null,r||!T?.length?(0,o.jsx)(l.TermNotFound,{}):e?(0,o.jsx)(d.CopilotsView,{currentTerm:e,copilots:T}):(0,o.jsx)(l.TermNotFound,{})]})})})}},953071:function(e,t,r){"use strict";r.r(t),r.d(t,{getRerunsCopilots:function(){return i}});var o=r("494590");async function i(e){let t={};for(let r of(await Promise.all([e.term_id,...Array.isArray(e.reruns)?e.reruns:[]].map(e=>(0,o.getCopilots)(e)))))t={...t,...r};return t}},567099:function(e,t,r){"use strict";r.r(t),r.d(t,{REVERSED_MATCH_UP:function(){return i}});var o=r("250877");o.AurorianAttributeType.Water,o.AurorianAttributeType.Fire,o.AurorianAttributeType.Fire,o.AurorianAttributeType.Forest,o.AurorianAttributeType.Forest,o.AurorianAttributeType.Thunder,o.AurorianAttributeType.Thunder,o.AurorianAttributeType.Water;let i={[o.AurorianAttributeType.Forest]:o.AurorianAttributeType.Fire,[o.AurorianAttributeType.Thunder]:o.AurorianAttributeType.Forest,[o.AurorianAttributeType.Water]:o.AurorianAttributeType.Thunder,[o.AurorianAttributeType.Fire]:o.AurorianAttributeType.Water}},743746:function(e,t,r){"use strict";r.r(t),r.d(t,{REAL_RANDOM_RULES:function(){return o}});let o=[function(e){let t=e.aurorian_requirements.find(e=>"ryza"===e.aurorian_id);if("number"==typeof t?.breakthrough&&t.breakthrough>=3)return{level:"error",reason:"\u5149\u7075\u83B1\u838E\u4E00\u7834\u6DF1\u8272\u683C\u6548\u679C"}}]},258315:function(e,t,r){"use strict";r.r(t),r.d(t,{realRandomService:function(){return n}});var o=r("743746");class i{static getInstance(){return null===i.instance&&(i.instance=new i),i.instance}isRealRandom(e){let t=this.cache.get(e.copilot_id);if(t)return t;let r=[];for(let t of o.REAL_RANDOM_RULES){let o=t(e);o&&r.push(o)}return{stack:r,isRealRandomResult:r.some(e=>"error"===e.level)}}constructor(){this.cache=new Map}}i.instance=null;let n=i.getInstance()},151861:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotSorterProvider:function(){return s},useCopilotSorter:function(){return a}});var o=r("938101"),i=r("333906"),n=r("760078");let[s,a]=(0,o.default)(()=>{let[e,t]=(0,i.useState)(n.CopilotSorter.UploadTime);return{sorter:e,setSorter:t}})},504638:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotSelect:function(){return l}});var o=r("397458"),i=r("280550"),n=r("760078"),s=r("151861");let a=[{label:"\u6309\u6700\u8FD1\u4E0A\u4F20\u65F6\u95F4",value:n.CopilotSorter.UploadTime},{label:"\u6309\u5206\u6570\u9AD8\u81F3\u4F4E",value:n.CopilotSorter.Score},{label:"\u6309\u5206\u6570\u4F4E\u81F3\u9AD8",value:n.CopilotSorter.ReversedScore}],l=()=>{let{sorter:e,setSorter:t}=(0,s.useCopilotSorter)();return(0,o.jsx)(i.Select,{options:a,value:e,onChange:t})}},760078:function(e,t,r){"use strict";var o,i;r.r(t),r.d(t,{CopilotSorter:function(){return o}}),(i=o||(o={})).UploadTime="UploadTime",i.Score="Score",i.ReversedScore="ReversedScore"},106907:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotListView:function(){return d}});var o=r("397458"),i=r("333906"),n=r("280550"),s=r("464813"),a=r("151861"),l=r("760078"),u=r("410404");let c=e=>e.copilot_id,d=e=>{let{currentTerm:t,dataSource:r}=e,d=(0,i.useRef)(null),[p,m]=(0,i.useState)(1),{sorter:h}=(0,a.useCopilotSorter)(),C=(0,i.useMemo)(()=>{switch(h){case l.CopilotSorter.UploadTime:return r;case l.CopilotSorter.Score:return Array.from(r).sort((e,t)=>t.score-e.score);case l.CopilotSorter.ReversedScore:return Array.from(r).sort((e,t)=>e.score-t.score);default:return r}},[r,h]),x=(0,i.useMemo)(()=>({align:"center",defaultPageSize:5,current:p,onChange(e){m(e),window.scrollTo({top:d.current.offsetTop,behavior:"smooth"})},showSizeChanger:!1,showTotal:e=>`\u{603B}\u{5171} ${e} \u{6761}\u{4F5C}\u{4E1A}`}),[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s.Mount,ref:d}),(0,o.jsx)(n.Card,{className:s.CopilotCard,children:(0,o.jsx)(n.List,{dataSource:C,pagination:x,rowKey:c,renderItem:e=>(0,o.jsx)(u.CopilotBlock,{className:s.ControlledCopilotBlock,copilot:e,currentTerm:t,readOnly:!0})})})]})}},299717:function(e,t,r){"use strict";r.r(t),r.d(t,{CopilotsView:function(){return n}});var o=r("397458"),i=r("106907");let n=e=>{let{copilots:t,currentTerm:r}=e;return(0,o.jsx)(i.CopilotListView,{dataSource:t,currentTerm:r})}},428756:function(e){"use strict";e.exports={BossName:"BossName-_4b804",bossName:"BossName-_4b804",Card:"Card-_35489",card:"Card-_35489",EndTimeContainer:"EndTimeContainer-_0447a",endTimeContainer:"EndTimeContainer-_0447a",FeatureElement:"FeatureElement-_5a6cd",featureElement:"FeatureElement-_5a6cd",FeaturesContainer:"FeaturesContainer-_6cb96",featuresContainer:"FeaturesContainer-_6cb96",MetaFirstAttribute:"MetaFirstAttribute-_47c92",metaFirstAttribute:"MetaFirstAttribute-_47c92"}},921663:function(e){"use strict";e.exports={Author:"Author-_4d4b8",author:"Author-_4d4b8",AuthorName:"AuthorName-d4efae",authorName:"AuthorName-d4efae",AuthorSmall:"AuthorSmall-_8e499",authorSmall:"AuthorSmall-_8e499",CopilotBlock:"CopilotBlock-_51402",copilotBlock:"CopilotBlock-_51402",Dot:"Dot-_3d0fb",dot:"Dot-_3d0fb",Header:"Header-_18b85",header:"Header-_18b85",NotWritableTitle:"NotWritableTitle-_87a07",notWritableTitle:"NotWritableTitle-_87a07",PaddingContainer:"PaddingContainer-_620c9",paddingContainer:"PaddingContainer-_620c9",ReasonText:"ReasonText-e4e19a",reasonText:"ReasonText-e4e19a",Score:"Score-_04302",score:"Score-_04302",Title:"Title-cf149e",title:"Title-cf149e"}},464813:function(e){"use strict";e.exports={ControlledCopilotBlock:"ControlledCopilotBlock-_68120",controlledCopilotBlock:"ControlledCopilotBlock-_68120",CopilotCard:"CopilotCard-c96087",copilotCard:"CopilotCard-c96087",Mount:"Mount-_702f0",mount:"Mount-_702f0"}}}]);