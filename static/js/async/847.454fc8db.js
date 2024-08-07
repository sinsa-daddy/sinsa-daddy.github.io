/*! For license information please see 847.454fc8db.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["847"],{268763:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianSelectorBox:function(){return h}});var a=t("397458"),n=t("189976"),l=t("167471"),i=t("673148"),u=t("333906"),o=t("126736"),s=t("11561"),c=t("286982"),d=t("157064"),m=t("792421");let p=[1,2,3,4,5],f=[1],v=e=>{let{columnIndex:r,rowIndex:t,style:n,data:l}=e,u=l.dataSource?.[t]?.[r];if(u){let e=(0,i.findKey)(l.selected,e=>e===u.aurorian_id),r=l.requireMap[u.aurorian_id];return(0,a.jsx)("div",{style:n,className:c.CellContainer,children:(0,a.jsxs)("div",{className:c.CardContainer,onClick:r=>{if(r.stopPropagation(),"string"==typeof e){l.setSelected(r=>(0,s.produce)(r,r=>{delete r[e]})),l.setActiveArurorianId(null);return}let t=l.getNextLabel();"number"==typeof t&&(l.setSelected(e=>({...e,[t]:u.aurorian_id})),l.setActiveArurorianId(u.aurorian_id))},children:[(0,a.jsx)(m.AdaptiveAurorianCard,{readOnly:!0,aurorianId:u.aurorian_id,remark:r?.remark,breakthrough:r?.breakthrough}),"string"==typeof e?(0,a.jsx)("div",{className:c.SelectedSingle,children:e}):null]})})}return null},h=e=>{let{filter:r,column:t=3,selected:s,setSelected:m,activeArurorianId:h,setActiveArurorianId:x,multi:A,requireMap:g}=e,[{auroriansMap:C}]=(0,n.useModel)(d.AuroriansModel),b=(0,u.useMemo)(()=>{let e="all"===r.element?(0,i.toArray)(C):(0,i.filter)(C,e=>e.primary_element===r.element||"string"==typeof(0,i.find)(s,r=>r===e.aurorian_id)),a=(0,i.sortBy)(e,e=>-e.rarity-("string"==typeof(0,i.find)(s,r=>r===e.aurorian_id)&&"all"!==r.element&&e.primary_element!==r.element?100:0));return(0,i.chunk)(a,t)},[C,r.element,t,s]),y=(0,u.useCallback)(()=>{for(let e of A?p:f){if("string"!=typeof s[e])return e;if(!A)return e}return null},[s,A]),j=(0,u.useMemo)(()=>({selected:s,dataSource:b,setSelected:m,getNextLabel:y,activeArurorianId:h,setActiveArurorianId:x,requireMap:g}),[b,s,y,h,g]);return(0,a.jsx)("div",{className:c.BoxContainer,children:(0,a.jsx)(o.default,{children:e=>{let{height:r,width:n}=e;return(0,a.jsx)(l.FixedSizeGrid,{columnCount:t,columnWidth:(t>=4?n-16:n)/t,height:r,rowCount:b.length,rowHeight:138,width:n,itemData:j,children:v})}})})}},276829:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianSelectorDetail:function(){return v}});var a=t("397458"),n=t("189976"),l=t("333906"),i=t("280550"),u=t("11561"),o=t("367882"),s=t("807910"),c=t("157064"),d=t("792421"),m=t("250470"),p=t("709807"),f=t("69500");let v=e=>{let{value:r,onChange:t,activeArurorianId:v}=e,[{auroriansMap:h}]=(0,n.useModel)(c.AuroriansModel),x=(0,l.useMemo)(()=>"string"==typeof v?h[v]:void 0,[h,v]);if((0,l.useEffect)(()=>{if(v&&x?.rarity){let e=r[v];x.rarity>=4&&0===Object.keys(e?.remark?.level??{}).length&&t({...r,[v]:{...A,remark:{level:{asc:3,lv:80,eq:0,rfn:0,aff:0}}}})}},[v,r,x?.rarity]),!v)return(0,a.jsx)(i.Result,{icon:(0,a.jsx)(o.SmilingFace,{size:48}),title:"\u6B22\u8FCE\u4F7F\u7528",subTitle:"\u8BF7\u4ECE\u5149\u7075\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u5149\u7075\u4EE5\u914D\u7F6E"});let A=r[v]??{aurorian_id:v,breakthrough:x?(0,m.getDefaultBreakthrough)(x.rarity):0};return x?(0,a.jsxs)("div",{className:s.Container,children:[(0,a.jsx)("div",{className:s.CardContainer,children:(0,a.jsx)(d.AdaptiveAurorianCard,{readOnly:!0,aurorianId:v,remark:A.remark,breakthrough:A.breakthrough})}),(0,a.jsxs)(i.Form,{children:[(0,a.jsx)(i.Form.Item,{label:"\u7A81\u7834\u6570",children:(0,a.jsx)(i.Rate,{value:A.breakthrough,count:x.rarity,onChange:e=>{t?.({...r,[v]:u.produce(A,r=>{r.breakthrough=e})})},tooltips:(0,p.getDefaultTooltips)(x.rarity)})}),x?.rarity&&x.rarity>=4?(0,a.jsx)(i.Form.Item,{label:"\u5149\u7075\u7B49\u7EA7",extra:(0,a.jsx)(i.InputNumber,{prefix:"Lv.",className:s.LvInput,value:A.remark?.level?.lv,min:1,max:80,onChange:e=>{t?.({...r,[v]:{...A,remark:u.produce(A.remark??{},r=>{r.level&&"number"==typeof e&&(r.level.lv=e,e<80&&(r.level.rfn=0))})}})}}),children:(0,a.jsx)(i.Slider,{value:A.remark?.level?.lv,min:1,max:80,marks:f.LEVEL_MARKS,onChange:e=>{t?.({...r,[v]:{...A,remark:u.produce(A.remark??{},r=>{r.level&&(r.level.lv=e,e<80&&(r.level.rfn=0))})}})},step:null})}):null,A.remark?.level?.lv===80?(0,a.jsx)(i.Form.Item,{label:"\u88C5\u5907\u7CBE\u70BC",children:(0,a.jsx)(i.Radio.Group,{optionType:"button",value:A.remark?.level?.rfn??0,options:f.RFN_OPTIONS,onChange:e=>{t?.({...r,[v]:{...A,remark:u.produce(A.remark??{},r=>{r.level&&(r.level.rfn=e.target.value)})}})}})}):null]})]}):(0,a.jsxs)("div",{children:["\u672A\u627E\u5230 ",v," \u7684\u5149\u7075"]})}},917495:function(e,r,t){"use strict";t.r(r),t.d(r,{InnerAurorianSelectorFilter:function(){return c}});var a=t("397458"),n=t("280550"),l=t("250877"),i=t("11561"),u=t("679626"),o=t("717747");let s=[{label:"\u5168\u90E8",value:"all"},{label:"\u6C34",value:l.AurorianAttributeType.Water,icon:(0,a.jsx)("img",{className:u.FilterElementIcon,alt:l.AurorianAttributeType.Water,src:o.ElementURLMapper[l.AurorianAttributeType.Water]})},{label:"\u706B",value:l.AurorianAttributeType.Fire,icon:(0,a.jsx)("img",{className:u.FilterElementIcon,alt:l.AurorianAttributeType.Fire,src:o.ElementURLMapper[l.AurorianAttributeType.Fire]})},{label:"\u68EE",value:l.AurorianAttributeType.Forest,icon:(0,a.jsx)("img",{className:u.FilterElementIcon,alt:l.AurorianAttributeType.Forest,src:o.ElementURLMapper[l.AurorianAttributeType.Forest]})},{label:"\u96F7",value:l.AurorianAttributeType.Thunder,icon:(0,a.jsx)("img",{className:u.FilterElementIcon,alt:l.AurorianAttributeType.Thunder,src:o.ElementURLMapper[l.AurorianAttributeType.Thunder]})}],c=e=>{let{value:r,onChange:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Segmented,{size:"large",value:r.element,options:s,onChange:e=>{t((0,i.produce)(r,r=>{r.element=e}))}})})}},141035:function(e,r,t){"use strict";t.r(r),t.d(r,{AurorianSelector:function(){return c}});var a=t("397458"),n=t("439958"),l=t("280550"),i=t("333906"),u=t("268763"),o=t("276829"),s=t("917495");let c=(0,n.create)(e=>{let{multi:r,initialValue:t}=e,c=(0,n.useModal)(),d=l.Grid.useBreakpoint(),[m,p]=(0,i.useState)(()=>({element:"all"})),[f,v]=(0,i.useState)(()=>{let e={};if(t)for(let r=0;r<t.length;r++)e[r+1]=t[r].aurorian_id;return e}),[h,x]=(0,i.useState)(()=>{let e={};if(t)for(let r of t)e[r.aurorian_id]=r;return e}),[A,g]=(0,i.useState)(null);return(0,a.jsx)(l.Modal,{...(0,n.antdModalV5)(c),title:r?"\u5FEB\u901F\u7F16\u961F":"\u9009\u62E9\u5149\u7075",onOk:e=>{var r,t;e.stopPropagation();let a=(r=f,t=h,Object.entries(r).toSorted((e,r)=>Number(e[0])-Number(r[0])).filter(e=>"string"==typeof e[1]).map(e=>e[1]).map(e=>t[e]).filter(e=>!!e));c.resolve(a),c.hide()},width:"1080px",children:d.md?(0,a.jsxs)(l.Flex,{wrap:"nowrap",gap:8,children:[(0,a.jsxs)(l.Flex,{vertical:!0,gap:8,style:{flexBasis:0,flexGrow:1},children:[(0,a.jsx)(s.InnerAurorianSelectorFilter,{value:m,onChange:p}),(0,a.jsx)(u.AurorianSelectorBox,{selected:f,setSelected:v,column:d.lg?6:4,filter:m,activeArurorianId:A,setActiveArurorianId:g,multi:r,requireMap:h})]}),(0,a.jsx)("div",{style:{width:"400px"},children:(0,a.jsx)(o.AurorianSelectorDetail,{activeArurorianId:A,value:h,onChange:x})})]}):(0,a.jsxs)(l.Flex,{vertical:!0,gap:8,children:[(0,a.jsx)(s.InnerAurorianSelectorFilter,{value:m,onChange:p}),(0,a.jsx)(u.AurorianSelectorBox,{selected:f,setSelected:v,filter:m,activeArurorianId:A,setActiveArurorianId:g,multi:r,requireMap:h}),(0,a.jsx)(o.AurorianSelectorDetail,{activeArurorianId:A,value:h,onChange:x})]})})})},69500:function(e,r,t){"use strict";t.r(r),t.d(r,{ASC_OPTIONS:function(){return a},LEVEL_MARKS:function(){return l},RFN_OPTIONS:function(){return n}});let a=[{label:"\u89C9\u9192\u4E09",value:3},{label:"\u89C9\u9192\u4E8C",value:2},{label:"\u89C9\u9192\u4E00",value:1},{label:"\u672A\u89C9\u9192",value:0}],n=[{label:"\u672A\u7CBE\u70BC",value:0},{label:"\u7CBE\u70BC\u2160",value:1},{label:"\u7CBE\u70BC\u2161",value:2},{label:"\u7CBE\u70BC\u2162",value:3}],l={1:"1",10:"10",20:"20",30:"30",40:"40",50:"50",60:"60",80:"80"}},709807:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultTooltips:function(){return a}});let a=(0,t("673148").memoize)(e=>{switch(e){case 6:return["\u96F6","\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 5:return["\u96F6","\u4E00","\u4E00","\u4E00","\u6EE1"].map(e=>`${e}\u{7834}`);case 4:return["\u96F6","\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 3:return["\u96F6","\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 2:return["\u96F6","\u6EE1"].map(e=>`${e}\u{7834}`);case 1:return["\u6EE1"].map(e=>`${e}\u{7834}`);default:return[]}})},250470:function(e,r,t){"use strict";t.r(r),t.d(r,{getDefaultBreakthrough:function(){return a}});let a=(0,t("673148").memoize)(e=>{switch(e){case 6:case 2:return 2;case 5:case 1:return 1;case 4:return 4;case 3:return 3;default:return 0}})},286982:function(e){"use strict";e.exports={BoxContainer:"BoxContainer-_03a30",boxContainer:"BoxContainer-_03a30",CardContainer:"CardContainer-e57d98",cardContainer:"CardContainer-e57d98",CellContainer:"CellContainer-_9517f",cellContainer:"CellContainer-_9517f",SelectedSingle:"SelectedSingle-_23e2f",selectedSingle:"SelectedSingle-_23e2f"}},807910:function(e){"use strict";e.exports={CardContainer:"CardContainer-d82ab2",cardContainer:"CardContainer-d82ab2",Container:"Container-ca82c4",container:"Container-ca82c4",LvInput:"LvInput-aec760",lvInput:"LvInput-aec760"}},679626:function(e){"use strict";e.exports={FilterElementIcon:"FilterElementIcon-af80d4",filterElementIcon:"FilterElementIcon-af80d4"}}}]);