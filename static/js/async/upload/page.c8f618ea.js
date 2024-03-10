/*! For license information please see page.c8f618ea.js.LICENSE.txt */
(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([["501"],{128750:function(e,r,t){"use strict";e.exports={Author:"Author-f55823",author:"Author-f55823",Card:"Card-c088dd",card:"Card-c088dd",CoverContainer:"CoverContainer-_8adb6",coverContainer:"CoverContainer-_8adb6",CoverImage:"CoverImage-_565fe",coverImage:"CoverImage-_565fe",Dot:"Dot-_916b0",dot:"Dot-_916b0",Duration:"Duration-_0528f",duration:"Duration-_0528f",Title:"Title-_7b631",title:"Title-_7b631",UploadedTagContainer:"UploadedTagContainer-b30f9e",uploadedTagContainer:"UploadedTagContainer-b30f9e"}},441854:function(e,r,t){"use strict";e.exports={AdaptiveContainer:"AdaptiveContainer-f84115",adaptiveContainer:"AdaptiveContainer-f84115",BreakThrough:"BreakThrough-_8e406",breakThrough:"BreakThrough-_8e406"}},794017:function(e,r,t){"use strict";e.exports={AuroriansTeam:"AuroriansTeam-fa97d1",auroriansTeam:"AuroriansTeam-fa97d1"}},903621:function(e,r,t){"use strict";e.exports={FootBar:"FootBar-_705b4",footBar:"FootBar-_705b4"}},711248:function(e,r,t){"use strict";t.r(r),t.d(r,{useLatestVideoCardRef:function(){return x},LatestVideoCard:function(){return y}});var a=t("766791"),n=t("375748"),i=t("450348"),o=t.n(i),l=t("67348"),s=t("561904"),u=t.n(s),c=t("667227"),d=t("260740"),p=t("216746"),m=t("870233"),h=t("126254"),f=t("128750"),g=t("386025");function x(){return(0,i.useRef)(null)}let y=o().forwardRef((e,r)=>{let{onClickNewCard:o,currentTermId:s}=e,{loadingLatestCopilots:x,loadingLatestVideos:y,getLatestCopilotsAsync:v,getLatestVideosAsync:C,latestCopilots:b,latestVideos:_,refresh:j}=(0,h.useLatestVideo)(),[{isLogin:w}]=(0,l.useModel)(g.FeishuModel);(0,i.useEffect)(()=>{w&&(v(),C())},[w]);let T=(0,i.useMemo)(()=>{let e=b?.filter(e=>e.term_id===s),r=(0,c.maxBy)(e,e=>e.score);return{maxScoreCopilot:r,minScoreCopilot:(0,c.minBy)(e,e=>e.score)}},[b,s]);(0,i.useImperativeHandle)(r,()=>({refresh:j,latestMaxAndMinScoreCopilots:T}),[j,T]);let{data:S,loading:k}=(0,d.useRequest)(async()=>({list:Array.from(await t.el("711248@2004:2030").then(t.t.bind(t,"335718",19)))}),{});return w?(0,a.jsx)(n.Card,{title:"B\u7AD9\u89C6\u9891\u6700\u65B0\u6536\u5F55\u60C5\u51B5\uFF1A\u6700\u8FD1 20 \u6761\u6309\u65B0\u53D1\u5E03\u6392\u5E8F\u641C\u7D22\u7ED3\u679C",loading:x||y||k,bodyStyle:{overflow:"auto",height:400},extra:(0,a.jsx)(n.Button,{type:"primary",loading:x||y,onClick:e=>{e.stopPropagation(),j()},children:"\u5237\u65B0"}),children:b&&_?(0,a.jsx)(n.Flex,{wrap:"wrap",gap:"small",children:_.result.map(e=>{let r=(0,m.trimTitle)(e.title),t=b.find(r=>r.href.startsWith(e.bvid)),i=1===e.hit_columns.length&&e.hit_columns.includes("author"),l="0"===(0,c.first)(e.duration.split(":")),s=S?.list.includes(e.bvid);return(0,a.jsxs)(n.Card,{hoverable:!t&&!s,className:f.Card,size:"small",cover:(0,a.jsxs)("div",{className:f.CoverContainer,children:[(0,a.jsxs)(n.Flex,{className:f.UploadedTagContainer,wrap:"wrap",children:[t?(0,a.jsx)(n.Tooltip,{title:`${t?.created_by.name} \u{4E8E} ${u()(t?.created_time).format("YYYY-MM-DD HH:mm:ss")} \u{6536}\u{5F55}\u{4E86}\u{6B64}\u{4F5C}\u{4E1A}`,children:(0,a.jsx)(n.Tag,{color:"green",children:"\u5DF2\u6536\u5F55"})}):s?null:(0,a.jsx)(n.Tag,{color:"#dc5950",children:"\u672A\u6536\u5F55"}),i||l?(0,a.jsx)(n.Tag,{color:"orange-inverse",children:"\u7591\u4F3C\u975E\u8352\u5178\u4F5C\u4E1A"}):null,s?(0,a.jsx)(n.Tag,{color:"gray",children:"\u65E0\u9700\u6536\u5F55"}):null]}),(0,a.jsx)("img",{className:f.CoverImage,referrerPolicy:"no-referrer",crossOrigin:"anonymous",alt:e.title,src:`${e.pic}@672w_378h_1c_!web-search-common-cover.webp`}),(0,a.jsx)("div",{className:f.Duration,children:e.duration})]}),onClick:r=>{r.stopPropagation(),!t&&o?.(e.bvid)},children:[(0,a.jsxs)(n.Flex,{className:f.Author,align:"center",children:[(0,a.jsx)(n.Typography.Text,{strong:!0,children:e.author}),(0,a.jsx)(n.Typography.Text,{className:f.Dot,type:"secondary",children:"\xb7"}),(0,a.jsx)(p.RelativeTimeText,{time:new Date(e.pubdate)})]}),(0,a.jsx)("div",{className:f.Title,children:(0,a.jsx)(n.Typography.Link,{href:`https://www.bilibili.com/video/${e.bvid}`,target:"_blank",title:e.title,ellipsis:!0,onClick:e=>e.stopPropagation(),children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:r}})})})]},e.bvid)})}):null}):null})},620221:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianTallCard:function(){return g}});var a=t("766791"),n=t("450348"),i=t("67348"),o=t("375748"),l=t("826424"),s=t("441854"),u=t("306301"),c=t("618579"),d=t("439538"),p=t("408748");let m=[{label:"\u53EF\u66FF",value:"All"},{label:"\u53EF\u66FF\u8F93\u51FA",value:"DPS"}],h=[{label:"\u89C9\u9192\u4E09",value:3},{label:"\u89C9\u9192\u4E8C",value:2},{label:"\u89C9\u9192\u4E00",value:1},{label:"\u672A\u89C9\u9192",value:0}],f={1:"1",10:"10",20:"20",30:"30",40:"40",60:"60",80:"80"},g=e=>{let{id:r,breakthrough:t,remark:g,onBreakthroughChange:x,onRemarkChange:y}=e,[{auroriansMap:v}]=(0,i.useModel)(d.AuroriansModel),C=(0,n.useMemo)(()=>v[r],[v,r]),b=Object.keys(g?.level??{}).length>0;return(0,a.jsxs)(o.Flex,{vertical:!0,align:"center",gap:8,children:[(0,a.jsx)("div",{className:s.AdaptiveContainer,children:(0,a.jsx)(p.AdaptiveAurorianCard,{readOnly:!0,aurorianId:r,remark:g,breakthrough:t})}),"number"==typeof t&&C?.rarity?(0,a.jsx)(o.Rate,{className:s.BreakThrough,value:t,count:C.rarity,onChange:x,tooltips:(0,u.getDefaultTooltips)(C.rarity)}):null,(0,a.jsxs)(o.Flex,{align:"center",gap:2,wrap:"wrap",children:[(0,a.jsx)(o.Switch,{checkedChildren:"\u53EF\u66FF\u6362",unCheckedChildren:"\u4E0D\u53EF\u66FF\u6362",checked:g?.replace?.type==="any",onChange:e=>{y?.(c.normalizeRemark(l.produce(g??{},r=>{e?r.replace={type:"any",any:"All"}:delete r.replace})))}}),g?.replace?.type==="any"?(0,a.jsx)(o.Radio.Group,{size:"small",value:g?.replace?.any,options:m,optionType:"button",onChange:e=>{y?.(c.normalizeRemark(l.produce(g??{},r=>{r.replace?.type==="any"&&(r.replace.any=e.target.value)})))}}):null]}),"number"==typeof C?.rarity&&C.rarity>=4&&!g?.replace?(0,a.jsxs)(o.Flex,{align:"center",gap:6,wrap:"wrap",vertical:!0,children:[(0,a.jsx)(o.Switch,{checkedChildren:"\u6807\u6CE8\u7EC3\u5EA6",unCheckedChildren:"\u4E0D\u6807\u6CE8\u7EC3\u5EA6",checked:b,onChange:e=>{y?.(c.normalizeRemark(l.produce(g??{},r=>{e?r.level={asc:3,lv:80,eq:0,rfn:0,aff:0}:delete r.level})))}}),b?(0,a.jsxs)(o.Flex,{align:"center",gap:2,wrap:"wrap",vertical:!0,children:[(0,a.jsx)(o.Radio.Group,{size:"small",optionType:"button",disabled:!0,value:g?.level?.asc??0,options:h}),(0,a.jsxs)(o.Space,{children:[(0,a.jsx)(o.Slider,{style:{width:180},value:g?.level?.lv??0,min:1,max:80,marks:f,onChange:e=>{y?.(c.normalizeRemark(l.produce(g??{},r=>{r.level&&(r.level.lv=e)})))},step:null}),(0,a.jsx)(o.InputNumber,{style:{width:60},size:"small",value:g?.level?.lv??0,min:1,max:80,onChange:e=>{y?.(c.normalizeRemark(l.produce(g??{},r=>{r.level&&(r.level.lv=e??0)})))}})]})]}):null]}):null]})}},270081:function(e,r,t){"use strict";t.r(r),t.d(r,{CopilotnSelector:function(){return p}});var a=t("766791"),n=t("67348"),i=t("375748"),o=t("667227"),l=t("826424"),s=t("794017"),u=t("672430"),c=t("439538"),d=t("620221");let p=e=>{let{value:r,onChange:t}=e,[{auroriansOptions:p,auroriansMap:m}]=(0,n.useModel)(c.AuroriansModel),h=r?.map(e=>e.aurorian_id);return(0,a.jsxs)(i.Flex,{vertical:!0,gap:8,children:[(0,a.jsx)(i.Select,{mode:"multiple",options:p,placeholder:"\u652F\u6301\u6309\u62FC\u97F3\u641C\u7D22, \u6BD4\u5982 ad \u53EF\u4EE5\u641C\u5230 \u5B89\u987F",showSearch:!0,allowClear:!1,value:r?.map(e=>e.aurorian_id),filterOption:c.filterAuroriansOption,onChange:e=>{let a=(0,o.intersection)(h,e),n=r?.filter(e=>a.includes(e.aurorian_id));t?.(e.slice(0,5).map(e=>{let r=n?.find(r=>r.aurorian_id===e);if(r)return{...r};let t=m[e];return{aurorian_id:e,breakthrough:u.getDefaultBreakthrough(t.rarity)}}))}}),(0,a.jsx)(i.Flex,{className:s.AuroriansTeam,wrap:"wrap",gap:16,children:r?.map((e,n)=>{let{aurorian_id:i,breakthrough:o,remark:s}=e;return a.jsx(d.AurorianTallCard,{id:i,breakthrough:o,remark:s,onBreakthroughChange:e=>{t?.(l.produce(r,r=>{r&&(r[n].breakthrough=e)}))},onRemarkChange:e=>{t?.(l.produce(r,r=>{r&&(r[n].remark=e)}))}},i)})})]})}},533018:function(e,r,t){"use strict";t.r(r),t.d(r,{VideoIframe:function(){return i}});var a=t("766791"),n=t("450348");let i=t.n(n)().memo(e=>{let{bvid:r}=e,t=(0,n.useMemo)(()=>{if("string"==typeof r){let e=new URL("https://player.bilibili.com/player.html");return e.searchParams.append("bvid",r),e.href}},[r]);return t?(0,a.jsx)("iframe",{src:t,scrolling:"no",frameBorder:"no",style:{border:0,width:700,height:420}}):null})},145739:function(e,r,t){"use strict";t.r(r),t.d(r,{UploadForm:function(){return T}});var a=t("766791"),n=t("928958"),i=t("67348"),o=t("375748"),l=t("450348"),s=t("132802"),u=t.n(s),c=t("763615"),d=t("711248"),p=t("270081"),m=t("903621"),h=t("292365"),f=t("533018"),g=t("714511"),x=t("575066"),y=t("651031"),v=t("980674"),C=t("779079"),b=t("393717"),_=t("966785"),j=t("386025");let w=[{label:"\u54D4\u54E9\u54D4\u54E9",value:c.CopilotSourceType.Bilibili},{label:"Youtube",value:c.CopilotSourceType.Youtube,disabled:!0}],T=()=>{let[{termsOptions:e,latestTerm:r}]=(0,i.useModel)(_.TermsModel),[{isLogin:t}]=(0,i.useModel)(j.FeishuModel),{videoInfo:s,loadingVideoInfo:T,getVideoInfo:S,setVideoInfo:k}=(0,h.useVideoInfo)(),{loadingCheckVideoExist:F,check:A}=(0,y.useCheckVideoExist)(),{loadingPostCopilot:R,postCopilotAsync:P}=(0,v.usePostCopilot)(),[z]=n.ProForm.useForm(),B=(0,l.useMemo)(()=>{let e={source_type:c.CopilotSourceType.Bilibili};return r?.term_id&&(e.term_id=r.term_id),e},[r?.term_id]),V=(0,d.useLatestVideoCardRef)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.LatestVideoCard,{currentTermId:z.getFieldValue((0,C.ensureKey)("term_id")),ref:V,onClickNewCard:e=>{z.setFieldValue((0,C.ensureKey)("href"),e)}}),t?(0,a.jsx)(o.Card,{children:(0,a.jsxs)(n.ProForm,{form:z,initialValues:B,submitter:{submitButtonProps:{loading:F||R},render:(e,r)=>(0,a.jsx)(n.FooterToolbar,{className:m.FootBar,children:r}),searchConfig:{submitText:F?"\u6821\u9A8C\u91CD\u590D\u4E2D":R?"\u63D0\u4EA4\u4E2D":"\u63D0\u4EA4\u4F5C\u4E1A"}},onFinish:async e=>{let r={...e,copilot_id:(0,b.getCopilotId)(e)},t=await A(e);if(t?.total){o.notification.error({message:"\u649E\u8F66\u4E86",placement:"bottom",duration:3});return}console.log("\u5F00\u59CB\u63D0\u4EA4",t,r);try{let e=await c.CopilotNextSchema.omit({created_by:!0,created_time:!0}).parseAsync(r),t=await P(e);t?.record?.record_id?(o.notification.success({message:`\u{9192}\u{5C71}\u{5C0F}\u{72D7}\u{5DF2}\u{7ECF}\u{6210}\u{529F}\u{5E2E}\u{60A8}\u{6DFB}\u{52A0}\u{4E86} ${t?.record?.fields?.author_name} \u{7684}\u{4E00}\u{4EFD}\u{4F5C}\u{4E1A}, record_id \u{4E3A} ${t?.record?.record_id}`}),z.resetFields(),k(void 0),V.current?.refresh()):(o.notification.error({message:`\u{6CA1}\u{6709}\u{4E0A}\u{4F20}\u{6210}\u{529F} ${JSON.stringify(t,null,2)}`}),console.log("upload failed",t,e))}catch(e){o.notification.error({message:`\u{89E3}\u{6790}\u{8868}\u{5355}\u{5931}\u{8D25} ${JSON.stringify(e,null,2)}`}),console.error("\u89E3\u6790\u5931\u8D25",e)}},children:[(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormSelect,{name:(0,C.ensureKey)("term_id"),label:"\u8352\u5178\u671F\u6570",options:e,rules:[{required:!0}],width:"sm",showSearch:!1}),(0,a.jsx)(n.ProFormRadio.Group,{name:(0,C.ensureKey)("source_type"),label:"\u6295\u7A3F\u5E73\u53F0",radioType:"button",options:w,rules:[{required:!0}]})]}),(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormText,{name:(0,C.ensureKey)("href"),label:"BV\u53F7\u6216B\u7AD9\u89C6\u9891\u94FE\u63A5",placeholder:"BVxxxxxxxxxx \u6216 https://www.bilibili.com/video/BVxxxxxxxxxx/",validateTrigger:"onBlur",width:"lg",fieldProps:{onChange(e){let r=e.target.value;(0,x.trimBV)(z,r)}},rules:[{required:!0},{pattern:/^BV.+$/,message:"BV\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],extra:"\u5C0F\u63D0\u793A\uFF1A\u70B9\u51FB\u4E0A\u65B9\u672A\u6536\u5F55\u7684\u89C6\u9891\u5361\u7247\uFF0C\u80FD\u5FEB\u901F\u586B\u5165 BV \u53F7"}),(0,a.jsx)(n.ProForm.Item,{label:" ",children:(0,a.jsx)(n.ProFormDependency,{name:[(0,C.ensureKey)("href")],children:e=>{let{href:r}=e;return(0,a.jsx)(o.Button,{disabled:!t||!("string"==typeof r&&r.startsWith("BV")),type:"primary",loading:T,onClick:async e=>{e.stopPropagation();let t=await S(r);if(console.log("result",t),t){let{title:e,desc:r,owner:a,pubdate:n}=t;z.setFieldsValue({title:e,description:"-"===r?void 0:r,author_id:String(a.mid),author_name:a.name,upload_time:n.valueOf()})}},children:"\u8BFB\u53D6\u54D4\u54E9\u54D4\u54E9\u6295\u7A3F\u89C6\u9891\u4FE1\u606F"})}})})]}),(0,a.jsx)(f.VideoIframe,{bvid:s?.bvid}),(0,a.jsx)(n.ProForm.Item,{label:"\u5149\u7075\u9635\u5BB9",name:(0,C.ensureKey)("aurorian_requirements"),rules:g.AURORIAN_SUMMARIES_RULES,children:(0,a.jsx)(p.CopilotnSelector,{})}),(0,a.jsx)(n.ProFormDigit,{label:"\u7ED3\u7B97\u5206\u6570",name:(0,C.ensureKey)("score"),validateTrigger:"onBlur",rules:g.SCORE_RULES,min:0,fieldProps:{formatter:e=>u()(e).format("0,0"),parser:e=>u()(e).value()??0,size:"large"},extra:(0,a.jsx)(n.ProFormDependency,{name:[(0,C.ensureKey)("score")],children:e=>{let{score:r}=e;if(V.current?.latestMaxAndMinScoreCopilots?.maxScoreCopilot&&V.current?.latestMaxAndMinScoreCopilots.minScoreCopilot){if(r>=2*V.current.latestMaxAndMinScoreCopilots.maxScoreCopilot.score)return(0,a.jsx)(o.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u8D85\u8FC7\u6700\u8FD1\u4F5C\u4E1A\u6700\u9AD8\u5206\u4E24\u500D\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"});if(r<=.5*V.current.latestMaxAndMinScoreCopilots.minScoreCopilot.score)return(0,a.jsx)(o.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u4F4E\u4E8E\u6700\u8FD1\u4F5C\u4E1A\u6700\u4F4E\u5206\u7684\u4E00\u534A\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"})}return null}})}),(0,a.jsx)(n.ProFormText,{label:"\u89C6\u9891\u6807\u9898",name:(0,C.ensureKey)("title"),rules:[{required:!0}]}),(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormDateTimePicker,{label:"\u89C6\u9891\u53D1\u5E03\u65F6\u95F4",name:(0,C.ensureKey)("upload_time"),rules:[{required:!0}]}),(0,a.jsx)(n.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005",name:(0,C.ensureKey)("author_name"),rules:[{required:!0}]}),(0,a.jsx)(n.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005\u7A7A\u95F4 ID",name:(0,C.ensureKey)("author_id"),rules:[{required:!0}],placeholder:`space.bilibili.com/[\u{8FD9}\u{4E00}\u{6BB5}\u{6570}\u{5B57}\u{586B}\u{8FDB}\u{6765}]`,width:"md"}),(0,a.jsx)(n.ProFormTextArea,{label:"\u89C6\u9891\u63CF\u8FF0",name:"description",width:"xl"})]})]})}):null]})}},294831:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var a=t("766791"),n=t("928958"),i=t("375748"),o=t("145739"),l=t("617273"),s=()=>(0,a.jsx)(n.PageContainer,{title:"\u4F5C\u4E1A\u6536\u5F55\uFF08\u5185\u90E8\u7248\uFF09",content:"\u5185\u90E8\u7684\u6536\u5F55\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528\u6B64\u9875\u9762\u5FEB\u901F\u4E0A\u4F20\u4F5C\u4E1A\uFF0C\u4E4B\u540E\u4F1A\u518D\u63D0\u4F9B Chrome \u63D2\u4EF6\u63D0\u9AD8\u6548\u7387\uFF08\u6BD4\u5FC3\uFF09",children:(0,a.jsxs)(i.Flex,{vertical:!0,gap:"middle",children:[(0,a.jsx)(l.LarkLoginCard,{}),(0,a.jsx)(o.UploadForm,{})]})})},617273:function(e,r,t){"use strict";t.r(r),t.d(r,{LarkLoginCard:function(){return h}});var a=t("766791"),n=t("551895"),i=t("375748"),o=t("450348"),l=t("260740"),s=t("67348"),u=t("473569"),c=t("605442"),d=t("885561"),p=t("386025"),m=t("649008");let h=()=>{let e=(0,o.useMemo)(()=>`${window.location.origin}/#${c.RoutePath.Upload}/`,[]),[r,t]=(0,o.useState)(),h=(0,n.useLocation)();(0,o.useEffect)(()=>{let e=h.search.slice(1).split("&").find(e=>e.startsWith("code="))?.replace("code=","");e&&t(e)},[h.search]);let[{profile:f},{setProfile:g}]=(0,s.useModel)(p.FeishuModel),{data:x,loading:y}=(0,l.useRequest)(async()=>{try{let e=window.localStorage.getItem(u.LOCAL_STORAGE_ACCESS_TOKEN);return m.FeishuAccessTokenSchema.parse(e?JSON.parse(e):null)}catch{}if(r){let e=await (0,d.getFeishuAccessToken)({code:r});return t(void 0),e}},{refreshDeps:[r]}),{loading:v}=(0,l.useRequest)(async()=>{x?.access_token&&g(await (0,d.getFeishuProfile)())},{refreshDeps:[x?.access_token]}),C=(0,o.useMemo)(()=>{let r=new URL("https://open.feishu.cn/open-apis/authen/v1/authorize");return r.searchParams.append("app_id",u.UPLOAD_APP_ID),r.searchParams.append("redirect_uri",e),r.searchParams.append("scope",u.LARK_SCOPE),r.href},[]);return(0,a.jsx)(i.Card,{loading:y||v,children:f?(0,a.jsx)(i.Card.Meta,{avatar:(0,a.jsx)(i.Avatar,{src:f.avatar_url}),title:f.name,description:"\u6B22\u8FCE\u56DE\u6765~ \u60A8\u5DF2\u6388\u6743\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5DE5\u4F5C\u5566"}):(0,a.jsxs)(i.Space,{children:[(0,a.jsx)(i.Typography.Text,{children:"\u60A8\u597D\uFF0C\u6211\u662F\u4F5C\u4E1A\u63D0\u4EA4\u9192\u5C71\u5C0F\u72D7\uFF0C\u6211\u9700\u8981\u60A8\u98DE\u4E66\u6388\u6743\u624D\u80FD\u5DE5\u4F5C"}),(0,a.jsx)(n.Link,{target:"_self",to:C,children:(0,a.jsx)(i.Button,{type:"primary",children:"\u53BB\u98DE\u4E66\u6388\u6743"})})]})})}},353151:function(e,r,t){"use strict";t.r(r),t.d(r,{SearchVideoResultSchema:function(){return i}});var a=t("763615");let n=a.z.object({type:a.z.literal("video"),author:a.z.string(),pic:a.z.string(),bvid:a.z.string().startsWith("BV"),title:a.z.string(),pubdate:a.z.number().transform(e=>1e3*e),hit_columns:a.z.array(a.z.enum(["title","tag","author","description"])),duration:a.z.string()}),i=a.z.object({seid:a.z.string(),page:a.z.number(),pagesize:a.z.number(),numResults:a.z.number(),numPages:a.z.number(),result:a.z.array(n)})},376361:function(e,r,t){"use strict";t.r(r),t.d(r,{SimpleLatestCopilotsResultSchema:function(){return i}});var a=t("763615");let n=a.z.object({created_time:a.z.coerce.date(),created_by:a.z.preprocess(e=>"string"==typeof e?JSON.parse(e):e,a.CopilotNextUserSchema),copilot_id:a.z.string(),score:a.z.coerce.number(),term_id:a.z.string(),href:a.z.string()}),i=a.z.array(n)},126254:function(e,r,t){"use strict";t.r(r),t.d(r,{useLatestVideo:function(){return s}});var a=t("260740"),n=t("450348"),i=t("353151"),o=t("376361"),l=t("885561");function s(){let{loading:e,runAsync:r,data:t,refresh:s}=(0,a.useRequest)(async()=>{try{let e=await (0,l.getLatestVideo)();return i.SearchVideoResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0}),{data:u,loading:c,runAsync:d,refresh:p}=(0,a.useRequest)(async()=>{try{let e=await (0,l.getLatestCopilots)({pageSize:30});return o.SimpleLatestCopilotsResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0});return{latestVideos:t,loadingLatestVideos:e,getLatestVideosAsync:r,latestCopilots:u,loadingLatestCopilots:c,getLatestCopilotsAsync:d,refresh:(0,n.useCallback)(()=>{p(),s()},[])}}},306301:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultTooltips:function(){return a}});let a=(0,t("667227").memoize)(e=>{switch(e){case 6:return["\u96F6","\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 5:return["\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 4:return["\u96F6","\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 3:return["\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 2:return["\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 1:return["\u6EE1"].map(e=>`${e}\u{7834}`);default:return[]}})},618579:function(e,r,t){"use strict";function a(e){if(!e||0!==Object.keys(e).length)return e}t.r(r),t.d(r,{normalizeRemark:function(){return a}})},672430:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultBreakthrough:function(){return a}});let a=(0,t("667227").memoize)(e=>{switch(e){case 6:case 2:return 2;case 5:case 1:return 1;case 4:return 4;case 3:return 3;default:return 0}})},651031:function(e,r,t){"use strict";t.r(r),t.d(r,{useCheckVideoExist:function(){return i}});var a=t("260740"),n=t("885561");function i(){let{loading:e,runAsync:r}=(0,a.useRequest)(async e=>(0,n.checkVideoExist)(e),{manual:!0});return{loadingCheckVideoExist:e,check:r}}},980674:function(e,r,t){"use strict";t.r(r),t.d(r,{usePostCopilot:function(){return o}});var a=t("260740"),n=t("763615"),i=t("885561");function o(){let{loading:e,runAsync:r}=(0,a.useRequest)(async e=>{let r=(0,n.toFeishuCopilotWithoutCreatedInfo)(e);return await (0,i.postCopilot)(r)},{manual:!0});return{loadingPostCopilot:e,postCopilotAsync:r}}},292365:function(e,r,t){"use strict";t.r(r),t.d(r,{useVideoInfo:function(){return i}});var a=t("260740"),n=t("885561");function i(){let{data:e,loading:r,runAsync:t,mutate:i}=(0,a.useRequest)(async e=>await (0,n.getVideoInfo)(e),{manual:!0});return{videoInfo:e,loadingVideoInfo:r,getVideoInfo:t,setVideoInfo:i}}},779079:function(e,r,t){"use strict";function a(e){return e}t.r(r),t.d(r,{ensureKey:function(){return a}})},393717:function(e,r,t){"use strict";function a(e){let{href:r,aurorian_requirements:t,term_id:a}=e;if(r&&t&&a){let e=new URL(`https://example.com/${r}`);return`${a}_${e.pathname.slice(1)}_${t[0].aurorian_id}_${t[4].aurorian_id}`}}t.r(r),t.d(r,{getCopilotId:function(){return a}})},575066:function(e,r,t){"use strict";function a(e,r){if("string"==typeof r&&(r.startsWith("https://")||r.startsWith("http://"))){let t=/\/(BV[^/]+)\/?/.exec(new URL(r).pathname)?.[1];"string"==typeof t&&t.startsWith("BV")&&e?.setFieldValue("bv",t)}}t.r(r),t.d(r,{trimBV:function(){return a}})},714511:function(e,r,t){"use strict";t.r(r),t.d(r,{AURORIAN_SUMMARIES_RULES:function(){return a},SCORE_RULES:function(){return n}});let a=[{async validator(e,r){if(Array.isArray(r)&&5===r.length);else throw Error("\u5149\u7075\u6570\u91CF\u5FC5\u987B\u6EE1\u8DB3 5 \u4E2A")}},{required:!0}],n=[{required:!0},{async validator(e,r){if("number"==typeof r&&r.toString().endsWith("0000"))throw Error("\u4E0D\u80FD\u586B\u5199\u7C97\u7565\u5206\u6570, \u8352\u5178\u4F5C\u4E1A\u5206\u6570\u5FC5\u987B\u7CBE\u786E\u5230\u4E2A\u4F4D, \u8BF7\u62D6\u52A8\u89C6\u9891\u8FDB\u5EA6\u6761\u5230\u6700\u540E\u67E5\u770B\u5177\u4F53\u5206\u6570")}},{async validator(e,r){if("number"==typeof r&&Number.isInteger(r)&&r>0);else throw Error("\u5206\u6570\u5FC5\u987B\u662F\u6B63\u6574\u6570");if(r>=1e8)throw Error("\u5206\u6570\u5927\u4E8E\u4E00\u4EBF\u5206\u4E86\uFF0C\u4F60\u8981\u4E0D\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F");if(r<=1e5)throw Error("\u5206\u6570\u5C0F\u4E8E\u5341\u4E07\u5206\uFF0C\u4F60\u8981\u4E0D\u8981\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F")}}]},386025:function(e,r,t){"use strict";t.r(r),t.d(r,{FeishuModel:function(){return a}});let a=(0,t("67348").model)("feishu").define({state:{profile:void 0},computed:{isLogin:e=>"string"==typeof e.profile?.name&&"string"==typeof e.profile?.open_id},actions:{}})}}]);