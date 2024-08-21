/*! For license information please see page.4f384308.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["317"],{450445:function(e,r,t){"use strict";t.r(r),t.d(r,{LatestVideoCard:function(){return v},useLatestVideoCardRef:function(){return y}});var o=t("397458"),a=t("280550"),i=t("333906"),n=t.n(i),l=t("189976"),s=t("409396"),u=t.n(s),c=t("673148"),d=t("124230"),p=t("622403"),m=t("490467"),h=t("424374"),f=t("588578"),g=t("984719"),x=t("651378");function y(){return(0,i.useRef)(null)}let v=n().forwardRef((e,r)=>{let{onClickNewCard:n,currentTermId:s}=e,{loadingLatestCopilots:y,loadingLatestVideos:v,getLatestCopilotsAsync:C,getLatestVideosAsync:b,latestCopilots:j,latestVideos:_,refresh:T}=(0,h.useLatestVideo)(),[{isLogin:w}]=(0,l.useModel)(g.FeishuModel);(0,i.useEffect)(()=>{w&&(C(),b())},[w]);let S=(0,i.useMemo)(()=>{let e=j?.filter(e=>e.term_id===s),r=(0,c.maxBy)(e,e=>e.score);return{maxScoreCopilot:r,minScoreCopilot:(0,c.minBy)(e,e=>e.score)}},[j,s]);(0,i.useImperativeHandle)(r,()=>({refresh:T,latestMaxAndMinScoreCopilots:S,latestVideo:_?.result?.[0]}),[T,S,_?.result?.[0]?.bvid]);let{data:k,loading:F}=(0,d.useRequest)(async()=>({list:Array.from(await t.e("777").then(t.t.bind(t,"139281",19)))}),{});return w?"localhost"===location.hostname?(0,o.jsx)(a.Card,{title:"B\u7AD9\u89C6\u9891\u6700\u65B0\u6536\u5F55\u60C5\u51B5\uFF1A\u6700\u8FD1 20 \u6761\u6309\u65B0\u53D1\u5E03\u6392\u5E8F\u641C\u7D22\u7ED3\u679C",loading:y||v||F,bodyStyle:{overflow:"auto",height:400},extra:(0,o.jsx)(a.Button,{type:"primary",loading:y||v,onClick:e=>{e.stopPropagation(),T()},children:"\u5237\u65B0"}),children:j&&_?(0,o.jsx)(a.Flex,{wrap:"wrap",gap:"small",children:_.result.map(e=>{let r=(0,m.trimTitle)(e.title),t=j.find(r=>r.href.startsWith(e.bvid)),i=1===e.hit_columns.length&&e.hit_columns.includes("author"),l="0"===(0,c.first)(e.duration.split(":")),s=k?.list.includes(e.bvid);return(0,o.jsxs)(a.Card,{hoverable:!t&&!s,className:f.Card,size:"small",cover:(0,o.jsxs)("div",{className:f.CoverContainer,children:[(0,o.jsxs)(a.Flex,{className:f.UploadedTagContainer,wrap:"wrap",children:[t?(0,o.jsx)(a.Tooltip,{title:`${t?.created_by.name} \u{4E8E} ${u()(t?.created_time).format("YYYY-MM-DD HH:mm:ss")} \u{6536}\u{5F55}\u{4E86}\u{6B64}\u{4F5C}\u{4E1A}`,children:(0,o.jsx)(a.Tag,{color:"green",children:"\u5DF2\u6536\u5F55"})}):s?null:(0,o.jsx)(a.Tag,{color:x.GLOBAL_THEME.primaryColor,children:"\u672A\u6536\u5F55"}),i||l?(0,o.jsx)(a.Tag,{color:"orange-inverse",children:"\u7591\u4F3C\u975E\u8352\u5178\u4F5C\u4E1A"}):null,s?(0,o.jsx)(a.Tag,{color:"gray",children:"\u65E0\u9700\u6536\u5F55"}):null]}),(0,o.jsx)("img",{className:f.CoverImage,referrerPolicy:"no-referrer",crossOrigin:"anonymous",alt:e.title,src:`${e.pic}@672w_378h_1c_!web-search-common-cover.webp`}),(0,o.jsx)("div",{className:f.Duration,children:e.duration})]}),onClick:r=>{r.stopPropagation(),!t&&n?.(e.bvid)},children:[(0,o.jsxs)(a.Flex,{className:f.Author,align:"center",children:[(0,o.jsx)(a.Typography.Text,{strong:!0,children:e.author}),(0,o.jsx)(a.Typography.Text,{className:f.Dot,type:"secondary",children:"\xb7"}),(0,o.jsx)(p.RelativeTimeText,{time:new Date(e.pubdate)})]}),(0,o.jsx)("div",{className:f.Title,children:(0,o.jsx)(a.Typography.Link,{href:`https://www.bilibili.com/video/${e.bvid}`,target:"_blank",title:e.title,ellipsis:!0,onClick:e=>e.stopPropagation(),children:(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:r}})})})]},e.bvid)})}):null}):null:null})},122938:function(e,r,t){"use strict";t.r(r),t.d(r,{SearchVideoResultSchema:function(){return i}});var o=t("250877");let a=o.z.object({type:o.z.literal("video"),author:o.z.string(),pic:o.z.string(),bvid:o.z.string().startsWith("BV"),title:o.z.string(),pubdate:o.z.number().transform(e=>1e3*e),hit_columns:o.z.array(o.z.enum(["title","tag","author","description"])),duration:o.z.string()}),i=o.z.object({seid:o.z.string(),page:o.z.number(),pagesize:o.z.number(),numResults:o.z.number(),numPages:o.z.number(),result:o.z.array(a)})},913666:function(e,r,t){"use strict";t.r(r),t.d(r,{SimpleLatestCopilotsResultSchema:function(){return i}});var o=t("250877");let a=o.z.object({created_time:o.z.coerce.date(),created_by:o.z.preprocess(e=>"string"==typeof e?JSON.parse(e):e,o.CopilotNextUserSchema),copilot_id:o.z.string(),score:o.z.coerce.number(),term_id:o.z.string(),href:o.z.string()}),i=o.z.array(a)},424374:function(e,r,t){"use strict";t.r(r),t.d(r,{useLatestVideo:function(){return s}});var o=t("124230"),a=t("333906"),i=t("122938"),n=t("913666"),l=t("494590");function s(){let{loading:e,runAsync:r,data:t,refresh:s}=(0,o.useRequest)(async()=>{try{let e=await (0,l.getLatestVideo)();return i.SearchVideoResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0}),{data:u,loading:c,runAsync:d,refresh:p}=(0,o.useRequest)(async()=>{try{let e=await (0,l.getLatestCopilots)({pageSize:30});return n.SimpleLatestCopilotsResultSchema.parse(e)}catch(e){console.log("parse error",e)}},{manual:!0});return{latestVideos:t,loadingLatestVideos:e,getLatestVideosAsync:r,latestCopilots:u,loadingLatestCopilots:c,getLatestCopilotsAsync:d,refresh:(0,a.useCallback)(()=>{p(),s()},[])}}},734616:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianTallCard:function(){return f}});var o=t("397458"),a=t("333906"),i=t("189976"),n=t("280550"),l=t("11561"),s=t("567498"),u=t("709807"),c=t("595052"),d=t("69500"),p=t("157064"),m=t("792421");let h=[{label:"\u53EF\u66FF",value:"All"},{label:"\u53EF\u66FF\u8F93\u51FA",value:"DPS"},{label:"\u53EF\u66FF\u4F4D\u79FB",value:"TP"}],f=e=>{let{id:r,breakthrough:t,remark:f,onBreakthroughChange:g,onRemarkChange:x}=e,[{auroriansMap:y}]=(0,i.useModel)(p.AuroriansModel),v=(0,a.useMemo)(()=>y[r],[y,r]),C=Object.keys(f?.level??{}).length>0;return(0,o.jsxs)(n.Flex,{vertical:!0,align:"center",gap:8,children:[(0,o.jsx)("div",{className:s.AdaptiveContainer,children:(0,o.jsx)(m.AdaptiveAurorianCard,{readOnly:!0,aurorianId:r,remark:f,breakthrough:t})}),"number"==typeof t&&v?.rarity?(0,o.jsx)(n.Rate,{className:s.BreakThrough,value:t,count:v.rarity,onChange:g,tooltips:(0,u.getDefaultTooltips)(v.rarity)}):null,(0,o.jsxs)(n.Flex,{align:"center",gap:2,wrap:"wrap",children:[(0,o.jsx)(n.Switch,{checkedChildren:"\u53EF\u66FF\u6362",unCheckedChildren:"\u4E0D\u53EF\u66FF\u6362",checked:f?.replace?.type==="any",onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{e?r.replace={type:"any",any:"All"}:delete r.replace})))}}),f?.replace?.type==="any"?(0,o.jsx)(n.Radio.Group,{size:"small",value:f?.replace?.any,options:h,optionType:"button",onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{r.replace?.type==="any"&&(r.replace.any=e.target.value)})))}}):null]}),"number"==typeof v?.rarity&&v.rarity>=4?(0,o.jsxs)(n.Flex,{align:"center",gap:6,wrap:"wrap",vertical:!0,children:[(0,o.jsx)(n.Switch,{checkedChildren:"\u6807\u6CE8\u7EC3\u5EA6",unCheckedChildren:"\u4E0D\u6807\u6CE8\u7EC3\u5EA6",checked:C,onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{e?r.level={asc:3,lv:80,eq:0,rfn:0,aff:0}:delete r.level})))}}),C?(0,o.jsxs)(n.Flex,{align:"center",gap:2,wrap:"wrap",vertical:!0,children:[(0,o.jsx)(n.Radio.Group,{size:"small",optionType:"button",disabled:!0,value:f?.level?.asc??0,options:d.ASC_OPTIONS}),(0,o.jsxs)(n.Space,{children:[(0,o.jsx)(n.Slider,{style:{width:180},value:f?.level?.lv??0,min:1,max:80,marks:d.LEVEL_MARKS,onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{r.level&&(r.level.lv=e,e<80&&(r.level.rfn=0))})))},step:null}),(0,o.jsx)(n.InputNumber,{style:{width:60},size:"small",value:f?.level?.lv??0,min:1,max:80,onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{r.level&&(r.level.lv=e??0)})))}})]}),f?.level?.lv===80?(0,o.jsx)(n.Radio.Group,{size:"small",optionType:"button",value:f?.level?.rfn??0,options:d.RFN_OPTIONS,onChange:e=>{x?.(c.normalizeRemark(l.produce(f??{},r=>{r.level&&(r.level.rfn=e.target.value)})))}}):null]}):null]}):null]})}},595052:function(e,r,t){"use strict";function o(e){if(!e||0!==Object.keys(e).length)return e}t.r(r),t.d(r,{normalizeRemark:function(){return o}})},764549:function(e,r,t){"use strict";t.r(r),t.d(r,{CopilotnSelector:function(){return d}});var o=t("397458"),a=t("280550"),i=t("11561"),n=t("367882"),l=t("439958"),s=t("623922"),u=t("734616"),c=t("141035");let d=e=>{let{value:r,onChange:t}=e,d=(0,l.useModal)(c.AurorianSelector);return(0,o.jsxs)(a.Flex,{vertical:!0,gap:8,children:[(0,o.jsx)(a.Button,{type:"primary",icon:(0,o.jsx)(n.UserPositioning,{}),onClick:e=>{e.stopPropagation(),d.show({multi:!0,initialValue:r}).then(e=>{t?.(e)})},children:"\u5FEB\u901F\u7F16\u961F"}),(0,o.jsx)(a.Flex,{className:s.AuroriansTeam,wrap:"wrap",gap:16,children:r?.map((e,a)=>{let{aurorian_id:n,breakthrough:l,remark:s}=e;return o.jsx(u.AurorianTallCard,{id:n,breakthrough:l,remark:s,onBreakthroughChange:e=>{t?.(i.produce(r,r=>{r&&(r[a].breakthrough=e)}))},onRemarkChange:e=>{t?.(i.produce(r,r=>{r&&(r[a].remark=e)}))}},n)})})]})}},833086:function(e,r,t){"use strict";t.r(r),t.d(r,{VideoIframe:function(){return i}});var o=t("397458"),a=t("333906");let i=t.n(a)().memo(e=>{let{bvid:r}=e,t=(0,a.useMemo)(()=>{if("string"==typeof r){let e=new URL("https://player.bilibili.com/player.html");return e.searchParams.append("bvid",r),e.href}},[r]);return t?(0,o.jsx)("iframe",{src:t,scrolling:"no",frameBorder:"no",style:{border:0,width:700,height:420}}):null})},40050:function(e,r,t){"use strict";t.r(r),t.d(r,{useCheckVideoExist:function(){return i}});var o=t("124230"),a=t("494590");function i(){let{loading:e,runAsync:r}=(0,o.useRequest)(async e=>(0,a.checkVideoExist)(e),{manual:!0});return{loadingCheckVideoExist:e,check:r}}},206669:function(e,r,t){"use strict";t.r(r),t.d(r,{usePostCopilot:function(){return n}});var o=t("124230"),a=t("250877"),i=t("494590");function n(){let{loading:e,runAsync:r}=(0,o.useRequest)(async(e,r)=>{let{triggerAction:t}=r,o=(0,a.toFeishuCopilotWithoutCreatedInfo)(e);return await (0,i.postCopilot)(o,{triggerAction:t})},{manual:!0});return{loadingPostCopilot:e,postCopilotAsync:r}}},180369:function(e,r,t){"use strict";t.r(r),t.d(r,{useVideoInfo:function(){return i}});var o=t("124230"),a=t("494590");function i(){let{data:e,loading:r,runAsync:t,mutate:i}=(0,o.useRequest)(async e=>await (0,a.getVideoInfo)(e),{manual:!0});return{videoInfo:e,loadingVideoInfo:r,getVideoInfo:t,setVideoInfo:i}}},866929:function(e,r,t){"use strict";t.r(r),t.d(r,{UploadForm:function(){return w}});var o=t("397458"),a=t("444189"),i=t("189976"),n=t("280550"),l=t("333906"),s=t("955950"),u=t.n(s),c=t("250877"),d=t("450445"),p=t("764549"),m=t("582248"),h=t("180369"),f=t("833086"),g=t("914607"),x=t("108670"),y=t("40050"),v=t("206669"),C=t("289593"),b=t("73708"),j=t("191857"),_=t("984719");let T=[{label:"\u54D4\u54E9\u54D4\u54E9",value:c.CopilotSourceType.Bilibili},{label:"Youtube",value:c.CopilotSourceType.Youtube,disabled:!0}],w=()=>{let[{termsOptions:e,latestTerm:r}]=(0,i.useModel)(j.TermsModel),[{isLogin:t}]=(0,i.useModel)(_.FeishuModel),{videoInfo:s,loadingVideoInfo:w,getVideoInfo:S,setVideoInfo:k}=(0,h.useVideoInfo)(),{loadingCheckVideoExist:F,check:A}=(0,y.useCheckVideoExist)(),{loadingPostCopilot:R,postCopilotAsync:P}=(0,v.usePostCopilot)(),[z]=a.ProForm.useForm(),V=(0,l.useMemo)(()=>{let e={source_type:c.CopilotSourceType.Bilibili};return r?.term_id&&(e.term_id=r.term_id),e},[r?.term_id]),B=(0,d.useLatestVideoCardRef)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.LatestVideoCard,{currentTermId:z.getFieldValue((0,C.ensureKey)("term_id")),ref:B,onClickNewCard:e=>{z.setFieldValue((0,C.ensureKey)("href"),e)}}),t?(0,o.jsx)(n.Card,{children:(0,o.jsxs)(a.ProForm,{form:z,initialValues:V,submitter:{submitButtonProps:{loading:F||R},render:(e,r)=>(0,o.jsx)(a.FooterToolbar,{className:m.FootBar,children:r}),searchConfig:{submitText:F?"\u6821\u9A8C\u91CD\u590D\u4E2D":R?"\u63D0\u4EA4\u4E2D":"\u63D0\u4EA4\u4F5C\u4E1A"}},onFinish:async e=>{let r={...e,copilot_id:(0,b.getCopilotId)(e)},t=await A(e);if(t?.total){n.notification.error({message:"\u649E\u8F66\u4E86",placement:"bottom",duration:3});return}console.log("\u5F00\u59CB\u63D0\u4EA4",t,r);try{let t=await c.CopilotNextSchema.omit({created_by:!0,created_time:!0}).parseAsync(r),o=await P(t,{triggerAction:e?.triggerUpdate??!1});o?.record?.record_id?(n.notification.success({message:`\u{9192}\u{5C71}\u{5C0F}\u{72D7}\u{5DF2}\u{7ECF}\u{6210}\u{529F}\u{5E2E}\u{60A8}\u{6DFB}\u{52A0}\u{4E86} ${o?.record?.fields?.author_name} \u{7684}\u{4E00}\u{4EFD}\u{4F5C}\u{4E1A}, record_id \u{4E3A} ${o?.record?.record_id}`}),z.resetFields(),k(void 0),B.current?.refresh()):(n.notification.error({message:`\u{6CA1}\u{6709}\u{4E0A}\u{4F20}\u{6210}\u{529F} ${JSON.stringify(o,null,2)}`}),console.log("upload failed",o,t))}catch(e){n.notification.error({message:`\u{89E3}\u{6790}\u{8868}\u{5355}\u{5931}\u{8D25} ${JSON.stringify(e,null,2)}`}),console.error("\u89E3\u6790\u5931\u8D25",e)}},children:[(0,o.jsxs)(a.ProForm.Group,{children:[(0,o.jsx)(a.ProFormSelect,{name:(0,C.ensureKey)("term_id"),label:"\u8352\u5178\u671F\u6570",options:e,rules:[{required:!0}],width:"sm",showSearch:!1}),(0,o.jsx)(a.ProFormRadio.Group,{name:(0,C.ensureKey)("source_type"),label:"\u6295\u7A3F\u5E73\u53F0",radioType:"button",options:T,rules:[{required:!0}]})]}),(0,o.jsxs)(a.ProForm.Group,{children:[(0,o.jsx)(a.ProFormText,{name:(0,C.ensureKey)("href"),label:"BV\u53F7\u6216B\u7AD9\u89C6\u9891\u94FE\u63A5",placeholder:"BVxxxxxxxxxx \u6216 https://www.bilibili.com/video/BVxxxxxxxxxx/",validateTrigger:"onBlur",width:"lg",fieldProps:{onChange(e){let r=e.target.value;(0,x.trimBV)(z,r)}},rules:[{required:!0},{pattern:/^BV.+$/,message:"BV\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],extra:"\u5C0F\u63D0\u793A\uFF1A\u70B9\u51FB\u4E0A\u65B9\u672A\u6536\u5F55\u7684\u89C6\u9891\u5361\u7247\uFF0C\u80FD\u5FEB\u901F\u586B\u5165 BV \u53F7"}),(0,o.jsx)(a.ProForm.Item,{label:" ",children:(0,o.jsx)(a.ProFormDependency,{name:[(0,C.ensureKey)("href")],children:e=>{let{href:r}=e;return(0,o.jsx)(n.Button,{disabled:!t||!("string"==typeof r&&r.startsWith("BV")),type:"primary",loading:w,onClick:async e=>{e.stopPropagation();let t=await S(r);if(console.log("result",t),t){let{title:e,desc:r,owner:o,pubdate:a}=t;z.setFieldsValue({title:e,description:"-"===r?void 0:r,author_id:String(o.mid),author_name:o.name,upload_time:a.valueOf()})}},children:"\u8BFB\u53D6\u54D4\u54E9\u54D4\u54E9\u6295\u7A3F\u89C6\u9891\u4FE1\u606F"})}})})]}),(0,o.jsx)(f.VideoIframe,{bvid:s?.bvid}),(0,o.jsx)(a.ProForm.Item,{label:"\u5149\u7075\u9635\u5BB9",name:(0,C.ensureKey)("aurorian_requirements"),rules:g.AURORIAN_SUMMARIES_RULES,children:(0,o.jsx)(p.CopilotnSelector,{})}),(0,o.jsx)(a.ProFormDigit,{label:"\u7ED3\u7B97\u5206\u6570",name:(0,C.ensureKey)("score"),validateTrigger:"onBlur",rules:g.SCORE_RULES,min:0,fieldProps:{formatter:e=>u()(e).format("0,0"),parser:e=>u()(e).value()??0,size:"large"},extra:(0,o.jsx)(a.ProFormDependency,{name:[(0,C.ensureKey)("score")],children:e=>{let{score:r}=e;if(B.current?.latestMaxAndMinScoreCopilots?.maxScoreCopilot&&B.current?.latestMaxAndMinScoreCopilots.minScoreCopilot){if(r>=2*B.current.latestMaxAndMinScoreCopilots.maxScoreCopilot.score)return(0,o.jsx)(n.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u8D85\u8FC7\u6700\u8FD1\u4F5C\u4E1A\u6700\u9AD8\u5206\u4E24\u500D\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"});if(r<=.5*B.current.latestMaxAndMinScoreCopilots.minScoreCopilot.score)return(0,o.jsx)(n.Typography.Text,{type:"warning",children:"\u5F55\u5165\u7684\u5206\u6570\u4F4E\u4E8E\u6700\u8FD1\u4F5C\u4E1A\u6700\u4F4E\u5206\u7684\u4E00\u534A\uFF0C\u8BF7\u518D\u6B21\u786E\u8BA4\u662F\u5426\u5F55\u5165\u6B63\u786E"})}return null}})}),(0,o.jsx)(a.ProFormText,{label:"\u89C6\u9891\u6807\u9898",name:(0,C.ensureKey)("title"),rules:[{required:!0}]}),(0,o.jsxs)(a.ProForm.Group,{children:[(0,o.jsx)(a.ProFormDateTimePicker,{label:"\u89C6\u9891\u53D1\u5E03\u65F6\u95F4",name:(0,C.ensureKey)("upload_time"),rules:[{required:!0}]}),(0,o.jsx)(a.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005",name:(0,C.ensureKey)("author_name"),rules:[{required:!0}]}),(0,o.jsx)(a.ProFormText,{label:"\u4F5C\u4E1A\u4F5C\u8005\u7A7A\u95F4 ID",name:(0,C.ensureKey)("author_id"),rules:[{required:!0}],placeholder:`space.bilibili.com/[\u{8FD9}\u{4E00}\u{6BB5}\u{6570}\u{5B57}\u{586B}\u{8FDB}\u{6765}]`,width:"md"}),(0,o.jsx)(a.ProFormTextArea,{label:"\u89C6\u9891\u63CF\u8FF0",name:"description",width:"xl"})]}),(0,o.jsx)(a.ProFormSwitch,{label:"\u662F\u5426\u89E6\u53D1\u7F51\u7AD9\u66F4\u65B0",extra:"\u4E00\u822C\u7528\u4E8E\u6536\u5F55\u5230\u4E86\u6700\u65B0\u89C6\u9891\u65F6\u5F00\u542F",name:(0,C.ensureKey)("triggerUpdate")})]})}):null]})}},289593:function(e,r,t){"use strict";function o(e){return e}t.r(r),t.d(r,{ensureKey:function(){return o}})},73708:function(e,r,t){"use strict";function o(e){let{href:r,aurorian_requirements:t,term_id:o}=e;if(r&&t&&o){let e=new URL(`https://example.com/${r}`);return`${o}_${e.pathname.slice(1)}_${t[0].aurorian_id}_${t[4].aurorian_id}`}}t.r(r),t.d(r,{getCopilotId:function(){return o}})},108670:function(e,r,t){"use strict";function o(e,r){if("string"==typeof r&&(r.startsWith("https://")||r.startsWith("http://"))){let t=/\/(BV[^/]+)\/?/.exec(new URL(r).pathname)?.[1];"string"==typeof t&&t.startsWith("BV")&&e?.setFieldValue("bv",t)}}t.r(r),t.d(r,{trimBV:function(){return o}})},914607:function(e,r,t){"use strict";t.r(r),t.d(r,{AURORIAN_SUMMARIES_RULES:function(){return o},SCORE_RULES:function(){return a}});let o=[{async validator(e,r){if(Array.isArray(r)&&5===r.length);else throw Error("\u5149\u7075\u6570\u91CF\u5FC5\u987B\u6EE1\u8DB3 5 \u4E2A")}},{required:!0}],a=[{required:!0},{async validator(e,r){if("number"==typeof r&&r.toString().endsWith("0000"))throw Error("\u4E0D\u80FD\u586B\u5199\u7C97\u7565\u5206\u6570, \u8352\u5178\u4F5C\u4E1A\u5206\u6570\u5FC5\u987B\u7CBE\u786E\u5230\u4E2A\u4F4D, \u8BF7\u62D6\u52A8\u89C6\u9891\u8FDB\u5EA6\u6761\u5230\u6700\u540E\u67E5\u770B\u5177\u4F53\u5206\u6570")}},{async validator(e,r){if("number"==typeof r&&Number.isInteger(r)&&r>0);else throw Error("\u5206\u6570\u5FC5\u987B\u662F\u6B63\u6574\u6570");if(r>=1e8)throw Error("\u5206\u6570\u5927\u4E8E\u4E00\u4EBF\u5206\u4E86\uFF0C\u4F60\u8981\u4E0D\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F");if(r<=1e5)throw Error("\u5206\u6570\u5C0F\u4E8E\u5341\u4E07\u5206\uFF0C\u4F60\u8981\u4E0D\u8981\u518D\u770B\u770B\u6709\u6CA1\u6709\u586B\u5BF9\uFF1F")}}]},984719:function(e,r,t){"use strict";t.r(r),t.d(r,{FeishuModel:function(){return o}});let o=(0,t("189976").model)("feishu").define({state:{profile:void 0},computed:{isLogin:e=>"string"==typeof e.profile?.name&&"string"==typeof e.profile?.open_id},actions:{}})},414818:function(e,r,t){"use strict";t.r(r);var o=t("397458"),a=t("444189"),i=t("280550"),n=t("866929"),l=t("770193");r.default=()=>(0,o.jsx)(a.PageContainer,{title:"\u4F5C\u4E1A\u6536\u5F55\uFF08\u5185\u90E8\u7248\uFF09",content:"\u5185\u90E8\u7684\u6536\u5F55\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528\u6B64\u9875\u9762\u5FEB\u901F\u4E0A\u4F20\u4F5C\u4E1A\uFF0C\u4E4B\u540E\u4F1A\u518D\u63D0\u4F9B Chrome \u63D2\u4EF6\u63D0\u9AD8\u6548\u7387\uFF08\u6BD4\u5FC3\uFF09",children:(0,o.jsxs)(i.Flex,{vertical:!0,gap:"middle",children:[(0,o.jsx)(l.LarkLoginCard,{}),(0,o.jsx)(n.UploadForm,{})]})})},770193:function(e,r,t){"use strict";t.r(r),t.d(r,{LarkLoginCard:function(){return h}});var o=t("397458"),a=t("609049"),i=t("280550"),n=t("333906"),l=t("124230"),s=t("189976"),u=t("930486"),c=t("103367"),d=t("494590"),p=t("984719"),m=t("42901");let h=()=>{let e=(0,n.useMemo)(()=>`${window.location.origin}${c.RoutePath.Upload}/`,[]),[r,t]=(0,n.useState)(),h=(0,a.useLocation)();(0,n.useEffect)(()=>{let e=h.search.slice(1).split("&").find(e=>e.startsWith("code="))?.replace("code=","");e&&t(e)},[h.search]);let[{profile:f},{setProfile:g}]=(0,s.useModel)(p.FeishuModel),{data:x,loading:y}=(0,l.useRequest)(async()=>{try{let e=window.localStorage.getItem(u.LOCAL_STORAGE_ACCESS_TOKEN);return m.FeishuAccessTokenSchema.parse(e?JSON.parse(e):null)}catch{}if(r){let e=await (0,d.getFeishuAccessToken)({code:r});return t(void 0),e}},{refreshDeps:[r]}),{loading:v}=(0,l.useRequest)(async()=>{x?.access_token&&g(await (0,d.getFeishuProfile)())},{refreshDeps:[x?.access_token]}),C=(0,n.useMemo)(()=>{let r=new URL("https://open.feishu.cn/open-apis/authen/v1/authorize");return r.searchParams.append("app_id",u.UPLOAD_APP_ID),r.searchParams.append("redirect_uri",e),r.searchParams.append("scope",u.LARK_SCOPE),r.href},[]);return(0,o.jsx)(i.Card,{loading:y||v,children:f?(0,o.jsx)(i.Card.Meta,{avatar:(0,o.jsx)(i.Avatar,{src:f.avatar_url}),title:f.name,description:"\u6B22\u8FCE\u56DE\u6765~ \u60A8\u5DF2\u6388\u6743\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5DE5\u4F5C\u5566"}):(0,o.jsxs)(i.Space,{children:[(0,o.jsx)(i.Typography.Text,{children:"\u60A8\u597D\uFF0C\u6211\u662F\u4F5C\u4E1A\u63D0\u4EA4\u9192\u5C71\u5C0F\u72D7\uFF0C\u6211\u9700\u8981\u60A8\u98DE\u4E66\u6388\u6743\u624D\u80FD\u5DE5\u4F5C"}),(0,o.jsx)(a.Link,{target:"_self",to:C,children:(0,o.jsx)(i.Button,{type:"primary",children:"\u53BB\u98DE\u4E66\u6388\u6743"})})]})})}},588578:function(e){"use strict";e.exports={Author:"Author-f55823",author:"Author-f55823",Card:"Card-c088dd",card:"Card-c088dd",CoverContainer:"CoverContainer-_8adb6",coverContainer:"CoverContainer-_8adb6",CoverImage:"CoverImage-_565fe",coverImage:"CoverImage-_565fe",Dot:"Dot-_916b0",dot:"Dot-_916b0",Duration:"Duration-_0528f",duration:"Duration-_0528f",Title:"Title-_7b631",title:"Title-_7b631",UploadedTagContainer:"UploadedTagContainer-b30f9e",uploadedTagContainer:"UploadedTagContainer-b30f9e"}},567498:function(e){"use strict";e.exports={AdaptiveContainer:"AdaptiveContainer-f84115",adaptiveContainer:"AdaptiveContainer-f84115",BreakThrough:"BreakThrough-_8e406",breakThrough:"BreakThrough-_8e406"}},623922:function(e){"use strict";e.exports={AuroriansTeam:"AuroriansTeam-fa97d1",auroriansTeam:"AuroriansTeam-fa97d1"}},582248:function(e){"use strict";e.exports={FootBar:"FootBar-_705b4",footBar:"FootBar-_705b4"}}}]);