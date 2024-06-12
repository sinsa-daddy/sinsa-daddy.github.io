/*! For license information please see page.a0446e36.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["317"],{450445:function(e,r,t){"use strict";t.r(r),t.d(r,{LatestVideoCard:function(){return v},useLatestVideoCardRef:function(){return y}});var a=t("397458"),n=t("280550"),o=t("333906"),i=t.n(o),l=t("189976"),s=t("409396"),u=t.n(s),c=t("673148"),d=t("124230"),p=t("622403"),m=t("490467"),h=t("424374"),f=t("588578"),g=t("984719"),x=t("651378");function y(){return(0,o.useRef)(null)}let v=i().forwardRef((e,r)=>{let{onClickNewCard:i,currentTermId:s}=e,{loadingLatestCopilots:y,loadingLatestVideos:v,getLatestCopilotsAsync:b,getLatestVideosAsync:C,latestCopilots:_,latestVideos:j,refresh:w}=(0,h.useLatestVideo)(),[{isLogin:T}]=(0,l.useModel)(g.FeishuModel);(0,o.useEffect)(()=>{T&&(b(),C())},[T]);let S=(0,o.useMemo)(()=>{let e=_?.filter(e=>e.term_id===s),r=(0,c.maxBy)(e,e=>e.score);return{maxScoreCopilot:r,minScoreCopilot:(0,c.minBy)(e,e=>e.score)}},[_,s]);(0,o.useImperativeHandle)(r,()=>({refresh:w,latestMaxAndMinScoreCopilots:S,latestVideo:j?.result?.[0]}),[w,S,j?.result?.[0]?.bvid]);let{data:k,loading:F}=(0,d.useRequest)(async()=>({list:Array.from(await t.e("777").then(t.t.bind(t,"139281",19)))}),{});return T?"localhost"===location.hostname?(0,a.jsx)(n.Card,{title:"B\u7AD9\u89C6\u9891\u6700\u65B0\u6536\u5F55\u60C5\u51B5\uFF1A\u6700\u8FD1 20 \u6761\u6309\u65B0\u53D1\u5E03\u6392\u5E8F\u641C\u7D22\u7ED3\u679C",loading:y||v||F,bodyStyle:{overflow:"auto",height:400},extra:(0,a.jsx)(n.Button,{type:"primary",loading:y||v,onClick:e=>{e.stopPropagation(),w()},children:"\u5237\u65B0"}),children:_&&j?(0,a.jsx)(n.Flex,{wrap:"wrap",gap:"small",children:j.result.map(e=>{let r=(0,m.trimTitle)(e.title),t=_.find(r=>r.href.startsWith(e.bvid)),o=1===e.hit_columns.length&&e.hit_columns.includes("author"),l="0"===(0,c.first)(e.duration.split(":")),s=k?.list.includes(e.bvid);return(0,a.jsxs)(n.Card,{hoverable:!t&&!s,className:f.Card,size:"small",cover:(0,a.jsxs)("div",{className:f.CoverContainer,children:[(0,a.jsxs)(n.Flex,{className:f.UploadedTagContainer,wrap:"wrap",children:[t?(0,a.jsx)(n.Tooltip,{title:`${t?.created_by.name} \u{4E8E} ${u()(t?.created_time).format("YYYY-MM-DD HH:mm:ss")} \u{6536}\u{5F55}\u{4E86}\u{6B64}\u{4F5C}\u{4E1A}`,children:(0,a.jsx)(n.Tag,{color:"green",children:"\u5DF2\u6536\u5F55"})}):s?null:(0,a.jsx)(n.Tag,{color:x.GLOBAL_THEME.primaryColor,children:"\u672A\u6536\u5F55"}),o||l?(0,a.jsx)(n.Tag,{color:"orange-inverse",children:"\u7591\u4F3C\u975E\u8352\u5178\u4F5C\u4E1A"}):null,s?(0,a.jsx)(n.Tag,{color:"gray",children:"\u65E0\u9700\u6536\u5F55"}):null]}),(0,a.jsx)("img",{className:f.CoverImage,referrerPolicy:"no-referrer",crossOrigin:"anonymous",alt:e.title,src:`${e.pic}@672w_378h_1c_!web-search-common-cover.webp`}),(0,a.jsx)("div",{className:f.Duration,children:e.duration})]}),onClick:r=>{r.stopPropagation(),!t&&i?.(e.bvid)},children:[(0,a.jsxs)(n.Flex,{className:f.Author,align:"center",children:[(0,a.jsx)(n.Typography.Text,{strong:!0,children:e.author}),(0,a.jsx)(n.Typography.Text,{className:f.Dot,type:"secondary",children:"\xb7"}),(0,a.jsx)(p.RelativeTimeText,{time:new Date(e.pubdate)})]}),(0,a.jsx)("div",{className:f.Title,children:(0,a.jsx)(n.Typography.Link,{href:`https://www.bilibili.com/video/${e.bvid}`,target:"_blank",title:e.title,ellipsis:!0,onClick:e=>e.stopPropagation(),children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:r}})})})]},e.bvid)})}):null}):null:null})},122938:function(e,r,t){"use strict";t.r(r),t.d(r,{SearchVideoResultSchema:function(){return o}});var a=t("250877");let n=a.z.object({type:a.z.literal("video"),author:a.z.string(),pic:a.z.string(),bvid:a.z.string().startsWith("BV"),title:a.z.string(),pubdate:a.z.number().transform(e=>1e3*e),hit_columns:a.z.array(a.z.enum(["title","tag","author","description"])),duration:a.z.string()}),o=a.z.object({seid:a.z.string(),page:a.z.number(),pagesize:a.z.number(),numResults:a.z.number(),numPages:a.z.number(),result:a.z.array(n)})},913666:function(e,r,t){"use strict";t.r(r),t.d(r,{SimpleLatestCopilotsResultSchema:function(){return o}});var a=t("250877");let n=a.z.object({created_time:a.z.coerce.date(),created_by:a.z.preprocess(e=>"string"==typeof e?JSON.parse(e):e,a.CopilotNextUserSchema),copilot_id:a.z.string(),score:a.z.coerce.number(),term_id:a.z.string(),href:a.z.string()}),o=a.z.array(n)},424374:function(e,r,t){"use strict";t.r(r),t.d(r,{useLatestVideo:function(){return s}});var a=t("124230"),n=t("333906"),o=t("122938"),i=t("913666"),l=t("494590");function s(){let{loading:e,runAsync:r,data:t,refresh:s}=(0,a.useRequest)(async()=>{try{let e=await (0,l.getLatestVideo)();return o.SearchVideoResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0}),{data:u,loading:c,runAsync:d,refresh:p}=(0,a.useRequest)(async()=>{try{let e=await (0,l.getLatestCopilots)({pageSize:30});return i.SimpleLatestCopilotsResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0});return{latestVideos:t,loadingLatestVideos:e,getLatestVideosAsync:r,latestCopilots:u,loadingLatestCopilots:c,getLatestCopilotsAsync:d,refresh:(0,n.useCallback)(()=>{p(),s()},[])}}},734616:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianTallCard:function(){return x}});var a=t("397458"),n=t("333906"),o=t("189976"),i=t("280550"),l=t("11561"),s=t("567498"),u=t("709807"),c=t("595052"),d=t("157064"),p=t("792421");let m=[{label:"\u53EF\u66FF",value:"All"},{label:"\u53EF\u66FF\u8F93\u51FA",value:"DPS"},{label:"\u53EF\u66FF\u4F4D\u79FB",value:"TP"}],h=[{label:"\u89C9\u9192\u4E09",value:3},{label:"\u89C9\u9192\u4E8C",value:2},{label:"\u89C9\u9192\u4E00",value:1},{label:"\u672A\u89C9\u9192",value:0}],f=[{label:"\u7CBE\u70BC\u4E09",value:3},{label:"\u7CBE\u70BC\u4E8C",value:2},{label:"\u7CBE\u70BC\u4E00",value:1},{label:"\u672A\u7CBE\u70BC",value:0}],g={1:"1",10:"10",20:"20",30:"30",40:"40",60:"60",80:"80"},x=e=>{let{id:r,breakthrough:t,remark:x,onBreakthroughChange:y,onRemarkChange:v}=e,[{auroriansMap:b}]=(0,o.useModel)(d.AuroriansModel),C=(0,n.useMemo)(()=>b[r],[b,r]),_=Object.keys(x?.level??{}).length>0;return(0,a.jsxs)(i.Flex,{vertical:!0,align:"center",gap:8,children:[(0,a.jsx)("div",{className:s.AdaptiveContainer,children:(0,a.jsx)(p.AdaptiveAurorianCard,{readOnly:!0,aurorianId:r,remark:x,breakthrough:t})}),"number"==typeof t&&C?.rarity?(0,a.jsx)(i.Rate,{className:s.BreakThrough,value:t,count:C.rarity,onChange:y,tooltips:(0,u.getDefaultTooltips)(C.rarity)}):null,(0,a.jsxs)(i.Flex,{align:"center",gap:2,wrap:"wrap",children:[(0,a.jsx)(i.Switch,{checkedChildren:"\u53EF\u66FF\u6362",unCheckedChildren:"\u4E0D\u53EF\u66FF\u6362",checked:x?.replace?.type==="any",onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{e?r.replace={type:"any",any:"All"}:delete r.replace})))}}),x?.replace?.type==="any"?(0,a.jsx)(i.Radio.Group,{size:"small",value:x?.replace?.any,options:m,optionType:"button",onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{r.replace?.type==="any"&&(r.replace.any=e.target.value)})))}}):null]}),"number"==typeof C?.rarity&&C.rarity>=4?(0,a.jsxs)(i.Flex,{align:"center",gap:6,wrap:"wrap",vertical:!0,children:[(0,a.jsx)(i.Switch,{checkedChildren:"\u6807\u6CE8\u7EC3\u5EA6",unCheckedChildren:"\u4E0D\u6807\u6CE8\u7EC3\u5EA6",checked:_,onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{e?r.level={asc:3,lv:80,eq:0,rfn:0,aff:0}:delete r.level})))}}),_?(0,a.jsxs)(i.Flex,{align:"center",gap:2,wrap:"wrap",vertical:!0,children:[(0,a.jsx)(i.Radio.Group,{size:"small",optionType:"button",disabled:!0,value:x?.level?.asc??0,options:h}),(0,a.jsxs)(i.Space,{children:[(0,a.jsx)(i.Slider,{style:{width:180},value:x?.level?.lv??0,min:1,max:80,marks:g,onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{r.level&&(r.level.lv=e,e<80&&(r.level.rfn=0))})))},step:null}),(0,a.jsx)(i.InputNumber,{style:{width:60},size:"small",value:x?.level?.lv??0,min:1,max:80,onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{r.level&&(r.level.lv=e??0)})))}})]}),x?.level?.lv===80?(0,a.jsx)(i.Radio.Group,{size:"small",optionType:"button",value:x?.level?.rfn??0,options:f,onChange:e=>{v?.(c.normalizeRemark(l.produce(x??{},r=>{r.level&&(r.level.rfn=e.target.value)})))}}):null]}):null]}):null]})}},709807:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultTooltips:function(){return a}});let a=(0,t("673148").memoize)(e=>{switch(e){case 6:return["\u96F6","\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 5:return["\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 4:return["\u96F6","\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 3:return["\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 2:return["\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 1:return["\u6EE1"].map(e=>`${e}\u{7834}`);default:return[]}})},595052:function(e,r,t){"use strict";function a(e){if(!e||0!==Object.keys(e).length)return e}t.r(r),t.d(r,{normalizeRemark:function(){return a}})},764549:function(e,r,t){"use strict";t.r(r),t.d(r,{CopilotnSelector:function(){return p}});var a=t("397458"),n=t("189976"),o=t("280550"),i=t("673148"),l=t("11561"),s=t("623922"),u=t("250470"),c=t("157064"),d=t("734616");let p=e=>{let{value:r,onChange:t}=e,[{auroriansOptions:p,auroriansMap:m}]=(0,n.useModel)(c.AuroriansModel),h=r?.map(e=>e.aurorian_id);return(0,a.jsxs)(o.Flex,{vertical:!0,gap:8,children:[(0,a.jsx)(o.Select,{mode:"multiple",options:p,placeholder:"\u652F\u6301\u6309\u62FC\u97F3\u641C\u7D22, \u6BD4\u5982 ad \u53EF\u4EE5\u641C\u5230 \u5B89\u987F",showSearch:!0,allowClear:!1,value:r?.map(e=>e.aurorian_id),filterOption:c.filterAuroriansOption,onChange:e=>{let a=(0,i.intersection)(h,e),n=r?.filter(e=>a.includes(e.aurorian_id));t?.(e.slice(0,5).map(e=>{let r=n?.find(r=>r.aurorian_id===e);if(r)return{...r};let t=m[e];return{aurorian_id:e,breakthrough:u.getDefaultBreakthrough(t.rarity)}}))}}),(0,a.jsx)(o.Flex,{className:s.AuroriansTeam,wrap:"wrap",gap:16,children:r?.map((e,n)=>{let{aurorian_id:o,breakthrough:i,remark:s}=e;return a.jsx(d.AurorianTallCard,{id:o,breakthrough:i,remark:s,onBreakthroughChange:e=>{t?.(l.produce(r,r=>{r&&(r[n].breakthrough=e)}))},onRemarkChange:e=>{t?.(l.produce(r,r=>{r&&(r[n].remark=e)}))}},o)})})]})}},250470:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultBreakthrough:function(){return a}});let a=(0,t("673148").memoize)(e=>{switch(e){case 6:case 2:return 2;case 5:case 1:return 1;case 4:return 4;case 3:return 3;default:return 0}})},833086:function(e,r,t){"use strict";t.r(r),t.d(r,{VideoIframe:function(){return o}});var a=t("397458"),n=t("333906");let o=t.n(n)().memo(e=>{let{bvid:r}=e,t=(0,n.useMemo)(()=>{if("string"==typeof r){let e=new URL("https://player.bilibili.com/player.html");return e.searchParams.append("bvid",r),e.href}},[r]);return t?(0,a.jsx)("iframe",{src:t,scrolling:"no",frameBorder:"no",style:{border:0,width:700,height:420}}):null})},40050:function(e,r,t){"use strict";t.r(r),t.d(r,{useCheckVideoExist:function(){return o}});var a=t("124230"),n=t("494590");function o(){let{loading:e,runAsync:r}=(0,a.useRequest)(async e=>(0,n.checkVideoExist)(e),{manual:!0});return{loadingCheckVideoExist:e,check:r}}},206669:function(e,r,t){"use strict";t.r(r),t.d(r,{usePostCopilot:function(){return i}});var a=t("124230"),n=t("250877"),o=t("494590");function i(){let{loading:e,runAsync:r}=(0,a.useRequest)(async(e,r)=>{let{triggerAction:t}=r,a=(0,n.toFeishuCopilotWithoutCreatedInfo)(e);return await (0,o.postCopilot)(a,{triggerAction:t})},{manual:!0});return{loadingPostCopilot:e,postCopilotAsync:r}}},180369:function(e,r,t){"use strict";t.r(r),t.d(r,{useVideoInfo:function(){return o}});var a=t("124230"),n=t("494590");function o(){let{data:e,loading:r,runAsync:t,mutate:o}=(0,a.useRequest)(async e=>await (0,n.getVideoInfo)(e),{manual:!0});return{videoInfo:e,loadingVideoInfo:r,getVideoInfo:t,setVideoInfo:o}}},866929:function(e,r,t){"use strict";t.r(r),t.d(r,{UploadForm:function(){return T}});var a=t("397458"),n=t("444189"),o=t("189976"),i=t("280550"),l=t("333906"),s=t("955950"),u=t.n(s),c=t("250877"),d=t("450445"),p=t("764549"),m=t("582248"),h=t("180369"),f=t("833086"),g=t("914607"),x=t("108670"),y=t("40050"),v=t("206669"),b=t("289593"),C=t("73708"),_=t("191857"),j=t("984719");let w=[{label:"\u54D4\u54E9\u54D4\u54E9",value:c.CopilotSourceType.Bilibili},{label:"Youtube",value:c.CopilotSourceType.Youtube,disabled:!0}],T=()=>{let[{termsOptions:e,latestTerm:r}]=(0,o.useModel)(_.TermsModel),[{isLogin:t}]=(0,o.useModel)(j.FeishuModel),{videoInfo:s,loadingVideoInfo:T,getVideoInfo:S,setVideoInfo:k}=(0,h.useVideoInfo)(),{loadingCheckVideoExist:F,check:A}=(0,y.useCheckVideoExist)(),{loadingPostCopilot:R,postCopilotAsync:P}=(0,v.usePostCopilot)(),[z]=n.ProForm.useForm(),B=(0,l.useMemo)(()=>{let e={source_type:c.CopilotSourceType.Bilibili};return r?.term_id&&(e.term_id=r.term_id),e},[r?.term_id]),V=(0,d.useLatestVideoCardRef)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.LatestVideoCard,{currentTermId:z.getFieldValue((0,b.ensureKey)("term_id")),ref:V,onClickNewCard:e=>{z.setFieldValue((0,b.ensureKey)("href"),e)}}),t?(0,a.jsx)(i.Card,{children:(0,a.jsxs)(n.ProForm,{form:z,initialValues:B,submitter:{submitButtonProps:{loading:F||R},render:(e,r)=>(0,a.jsx)(n.FooterToolbar,{className:m.FootBar,children:r}),searchConfig:{submitText:F?"\u6821\u9A8C\u91CD\u590D\u4E2D":R?"\u63D0\u4EA4\u4E2D":"\u63D0\u4EA4\u4F5C\u4E1A"}},onFinish:async e=>{let r={...e,copilot_id:(0,C.getCopilotId)(e)},t=await A(e);if(t?.total){i.notification.error({message:"\u649E\u8F66\u4E86",placement:"bottom",duration:3});return}console.log("\u5F00\u59CB\u63D0\u4EA4",t,r);try{let t=await c.CopilotNextSchema.omit({created_by:!0,created_time:!0}).parseAsync(r),a=await P(t,{triggerAction:e?.triggerUpdate??!1});a?.record?.record_id?(i.notification.success({message:`\u{9192}\u{5C71}\u{5C0F}\u{72D7}\u{5DF2}\u{7ECF}\u{6210}\u{529F}\u{5E2E}\u{60A8}\u{6DFB}\u{52A0}\u{4E86} ${a?.record?.fields?.author_name} \u{7684}\u{4E00}\u{4EFD}\u{4F5C}\u{4E1A}, record_id \u{4E3A} ${a?.record?.record_id}`}),z.resetFields(),k(void 0),V.current?.refresh()):(i.notification.error({message:`\u{6CA1}\u{6709}\u{4E0A}\u{4F20}\u{6210}\u{529F} ${JSON.stringify(a,null,2)}`}),console.log("upload failed",a,t))}catch(e){i.notification.error({message:`\u{89E3}\u{6790}\u{8868}\u{5355}\u{5931}\u{8D25} ${JSON.stringify(e,null,2)}`}),console.error("\u89E3\u6790\u5931\u8D25",e)}},children:[(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormSelect,{name:(0,b.ensureKey)("term_id"),label:"\u8352\u5178\u671F\u6570",options:e,rules:[{required:!0}],width:"sm",showSearch:!1}),(0,a.jsx)(n.ProFormRadio.Group,{name:(0,b.ensureKey)("source_type"),label:"\u6295\u7A3F\u5E73\u53F0",radioType:"button",options:w,rules:[{required:!0}]})]}),(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormText,{name:(0,b.ensureKey)("href"),label:"BV\u53F7\u6216B\u7AD9\u89C6\u9891\u94FE\u63A5",placeholder:"BVxxxxxxxxxx \u6216 https://www.bilibili.com/video/BVxxxxxxxxxx/",validateTrigger:"onBlur",width:"lg",fieldProps:{onChange(e){let r=e.target.value;(0,x.trimBV)(z,r)}},rules:[{required:!0},{pattern:/^BV.+$/,message:"BV\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],extra:"\u5C0F\u63D0\u793A\uFF1A\u70B9\u51FB\u4E0A\u65B9\u672A\u6536\u5F55\u7684\u89C6\u9891\u5361\u7247\uFF0C\u80FD\u5FEB\u901F\u586B\u5165 BV \u53F7"}),(0,a.jsx)(n.ProForm.Item,{label:" ",children:(0,a.jsx)(n.ProFormDependency,{name:[(0,b.ensureKey)("href")],children:e=>{let{href:r}=e;return(0,a.jsx)(i.Button,{disabled:!t||!("string"==typeof r&&r.startsWith("BV")),type:"primary",loading:T,onClick:async e=>{e.stopPropagation();let t=await S(r);if(console.log("result",t),t){let{title:e,desc:r,owner:a,pubdate:n}=t;z.setFieldsValue({title:e,description:"-"===r?void 0:r,author_id:String(a.mid),author_name:a.name,upload_time:n.valueOf()})}},children:"\u8BFB\u53D6\u54D4\u54E9\u54D4\u54E9\u6295\u7A3F\u89C6\u9891\u4FE1\u606F"})}})})]}),(0,a.jsx)(f.VideoIframe,{bvid:s?.bvid}),(0,a.jsx)(n.ProForm.Item,{label:"\u5149\u7075\u9635\u5BB9",name:(0,b.ensureKey)("aurorian_requirements"),rules:g.AURORIAN_SUMMARIES_RULES,children:(0,a.jsx)(p.CopilotnSelector,{})}),(0,a.jsx)(n.ProFormDigit,{label:"\u7ED3\u7B97\u5206\u6570",name:(0,b.ensureKey)("score"),validateTrigger:"onBlur",rules:g.SCORE_RULES,min:0,fieldProps:{formatter:e=>u()(e).format("0,0"),parser:e=>u()(e).value()??0,size:"large"},extra:(0,a.jsx)(n.ProFormDependency,{name:[(0,b.ensureKey)("score")],children:e=>{let{score:r}=e;if(V.current?.latestMaxAndMinScoreCopilots?.maxScoreCopilot&&V.current?.latestMaxAndMinScoreCopilots.minScoreCopilot){if(r>=2*V.current.latestMaxAndMinScoreCopilots.maxScoreCopilot.score)return(0,a.jsx)(i.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u8D85\u8FC7\u6700\u8FD1\u4F5C\u4E1A\u6700\u9AD8\u5206\u4E24\u500D\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"});if(r<=.5*V.current.latestMaxAndMinScoreCopilots.minScoreCopilot.score)return(0,a.jsx)(i.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u4F4E\u4E8E\u6700\u8FD1\u4F5C\u4E1A\u6700\u4F4E\u5206\u7684\u4E00\u534A\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"})}return null}})}),(0,a.jsx)(n.ProFormText,{label:"\u89C6\u9891\u6807\u9898",name:(0,b.ensureKey)("title"),rules:[{required:!0}]}),(0,a.jsxs)(n.ProForm.Group,{children:[(0,a.jsx)(n.ProFormDateTimePicker,{label:"\u89C6\u9891\u53D1\u5E03\u65F6\u95F4",name:(0,b.ensureKey)("upload_time"),rules:[{required:!0}]}),(0,a.jsx)(n.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005",name:(0,b.ensureKey)("author_name"),rules:[{required:!0}]}),(0,a.jsx)(n.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005\u7A7A\u95F4 ID",name:(0,b.ensureKey)("author_id"),rules:[{required:!0}],placeholder:`space.bilibili.com/[\u{8FD9}\u{4E00}\u{6BB5}\u{6570}\u{5B57}\u{586B}\u{8FDB}\u{6765}]`,width:"md"}),(0,a.jsx)(n.ProFormTextArea,{label:"\u89C6\u9891\u63CF\u8FF0",name:"description",width:"xl"})]}),(0,a.jsx)(n.ProFormSwitch,{label:"\u662F\u5426\u89E6\u53D1\u7F51\u7AD9\u66F4\u65B0",extra:"\u4E00\u822C\u7528\u4E8E\u6536\u5F55\u5230\u4E86\u6700\u65B0\u89C6\u9891\u65F6\u5F00\u542F",name:(0,b.ensureKey)("triggerUpdate")})]})}):null]})}},289593:function(e,r,t){"use strict";function a(e){return e}t.r(r),t.d(r,{ensureKey:function(){return a}})},73708:function(e,r,t){"use strict";function a(e){let{href:r,aurorian_requirements:t,term_id:a}=e;if(r&&t&&a){let e=new URL(`https://example.com/${r}`);return`${a}_${e.pathname.slice(1)}_${t[0].aurorian_id}_${t[4].aurorian_id}`}}t.r(r),t.d(r,{getCopilotId:function(){return a}})},108670:function(e,r,t){"use strict";function a(e,r){if("string"==typeof r&&(r.startsWith("https://")||r.startsWith("http://"))){let t=/\/(BV[^/]+)\/?/.exec(new URL(r).pathname)?.[1];"string"==typeof t&&t.startsWith("BV")&&e?.setFieldValue("bv",t)}}t.r(r),t.d(r,{trimBV:function(){return a}})},914607:function(e,r,t){"use strict";t.r(r),t.d(r,{AURORIAN_SUMMARIES_RULES:function(){return a},SCORE_RULES:function(){return n}});let a=[{async validator(e,r){if(Array.isArray(r)&&5===r.length);else throw Error("\u5149\u7075\u6570\u91CF\u5FC5\u987B\u6EE1\u8DB3 5 \u4E2A")}},{required:!0}],n=[{required:!0},{async validator(e,r){if("number"==typeof r&&r.toString().endsWith("0000"))throw Error("\u4E0D\u80FD\u586B\u5199\u7C97\u7565\u5206\u6570, \u8352\u5178\u4F5C\u4E1A\u5206\u6570\u5FC5\u987B\u7CBE\u786E\u5230\u4E2A\u4F4D, \u8BF7\u62D6\u52A8\u89C6\u9891\u8FDB\u5EA6\u6761\u5230\u6700\u540E\u67E5\u770B\u5177\u4F53\u5206\u6570")}},{async validator(e,r){if("number"==typeof r&&Number.isInteger(r)&&r>0);else throw Error("\u5206\u6570\u5FC5\u987B\u662F\u6B63\u6574\u6570");if(r>=1e8)throw Error("\u5206\u6570\u5927\u4E8E\u4E00\u4EBF\u5206\u4E86\uFF0C\u4F60\u8981\u4E0D\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F");if(r<=1e5)throw Error("\u5206\u6570\u5C0F\u4E8E\u5341\u4E07\u5206\uFF0C\u4F60\u8981\u4E0D\u8981\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F")}}]},984719:function(e,r,t){"use strict";t.r(r),t.d(r,{FeishuModel:function(){return a}});let a=(0,t("189976").model)("feishu").define({state:{profile:void 0},computed:{isLogin:e=>"string"==typeof e.profile?.name&&"string"==typeof e.profile?.open_id},actions:{}})},414818:function(e,r,t){"use strict";t.r(r);var a=t("397458"),n=t("444189"),o=t("280550"),i=t("866929"),l=t("770193");r.default=()=>(0,a.jsx)(n.PageContainer,{title:"\u4F5C\u4E1A\u6536\u5F55\uFF08\u5185\u90E8\u7248\uFF09",content:"\u5185\u90E8\u7684\u6536\u5F55\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528\u6B64\u9875\u9762\u5FEB\u901F\u4E0A\u4F20\u4F5C\u4E1A\uFF0C\u4E4B\u540E\u4F1A\u518D\u63D0\u4F9B Chrome \u63D2\u4EF6\u63D0\u9AD8\u6548\u7387\uFF08\u6BD4\u5FC3\uFF09",children:(0,a.jsxs)(o.Flex,{vertical:!0,gap:"middle",children:[(0,a.jsx)(l.LarkLoginCard,{}),(0,a.jsx)(i.UploadForm,{})]})})},770193:function(e,r,t){"use strict";t.r(r),t.d(r,{LarkLoginCard:function(){return h}});var a=t("397458"),n=t("609049"),o=t("280550"),i=t("333906"),l=t("124230"),s=t("189976"),u=t("930486"),c=t("103367"),d=t("494590"),p=t("984719"),m=t("42901");let h=()=>{let e=(0,i.useMemo)(()=>`${window.location.origin}${c.RoutePath.Upload}/`,[]),[r,t]=(0,i.useState)(),h=(0,n.useLocation)();(0,i.useEffect)(()=>{let e=h.search.slice(1).split("&").find(e=>e.startsWith("code="))?.replace("code=","");e&&t(e)},[h.search]);let[{profile:f},{setProfile:g}]=(0,s.useModel)(p.FeishuModel),{data:x,loading:y}=(0,l.useRequest)(async()=>{try{let e=window.localStorage.getItem(u.LOCAL_STORAGE_ACCESS_TOKEN);return m.FeishuAccessTokenSchema.parse(e?JSON.parse(e):null)}catch{}if(r){let e=await (0,d.getFeishuAccessToken)({code:r});return t(void 0),e}},{refreshDeps:[r]}),{loading:v}=(0,l.useRequest)(async()=>{x?.access_token&&g(await (0,d.getFeishuProfile)())},{refreshDeps:[x?.access_token]}),b=(0,i.useMemo)(()=>{let r=new URL("https://open.feishu.cn/open-apis/authen/v1/authorize");return r.searchParams.append("app_id",u.UPLOAD_APP_ID),r.searchParams.append("redirect_uri",e),r.searchParams.append("scope",u.LARK_SCOPE),r.href},[]);return(0,a.jsx)(o.Card,{loading:y||v,children:f?(0,a.jsx)(o.Card.Meta,{avatar:(0,a.jsx)(o.Avatar,{src:f.avatar_url}),title:f.name,description:"\u6B22\u8FCE\u56DE\u6765~ \u60A8\u5DF2\u6388\u6743\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5DE5\u4F5C\u5566"}):(0,a.jsxs)(o.Space,{children:[(0,a.jsx)(o.Typography.Text,{children:"\u60A8\u597D\uFF0C\u6211\u662F\u4F5C\u4E1A\u63D0\u4EA4\u9192\u5C71\u5C0F\u72D7\uFF0C\u6211\u9700\u8981\u60A8\u98DE\u4E66\u6388\u6743\u624D\u80FD\u5DE5\u4F5C"}),(0,a.jsx)(n.Link,{target:"_self",to:b,children:(0,a.jsx)(o.Button,{type:"primary",children:"\u53BB\u98DE\u4E66\u6388\u6743"})})]})})}},588578:function(e){"use strict";e.exports={Author:"Author-f55823",author:"Author-f55823",Card:"Card-c088dd",card:"Card-c088dd",CoverContainer:"CoverContainer-_8adb6",coverContainer:"CoverContainer-_8adb6",CoverImage:"CoverImage-_565fe",coverImage:"CoverImage-_565fe",Dot:"Dot-_916b0",dot:"Dot-_916b0",Duration:"Duration-_0528f",duration:"Duration-_0528f",Title:"Title-_7b631",title:"Title-_7b631",UploadedTagContainer:"UploadedTagContainer-b30f9e",uploadedTagContainer:"UploadedTagContainer-b30f9e"}},567498:function(e){"use strict";e.exports={AdaptiveContainer:"AdaptiveContainer-f84115",adaptiveContainer:"AdaptiveContainer-f84115",BreakThrough:"BreakThrough-_8e406",breakThrough:"BreakThrough-_8e406"}},623922:function(e){"use strict";e.exports={AuroriansTeam:"AuroriansTeam-fa97d1",auroriansTeam:"AuroriansTeam-fa97d1"}},582248:function(e){"use strict";e.exports={FootBar:"FootBar-_705b4",footBar:"FootBar-_705b4"}}}]);