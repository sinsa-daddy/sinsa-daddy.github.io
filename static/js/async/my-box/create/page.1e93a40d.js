"use strict";(globalThis.webpackChunk_sinsa_web=globalThis.webpackChunk_sinsa_web||[]).push([[5728],{3331:(e,r,n)=>{n.r(r),n.d(r,{default:()=>I});var a=n(16799),t=n(21948),o=n(77811),s=n(76656),l=n(9122),i=n(17944),u=n(26308),d=n(81821),c=n(36490),p=n(87363),h=n.n(p),m=n(68426),x=n(97458),g=["fieldProps","proFieldProps"],v=["fieldProps","proFieldProps"],f="text",j=function(e){var r=(0,u.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),n=(0,s.Z)(r,2),a=n[0],t=n[1];return(0,x.jsx)(d.Form.Item,{shouldUpdate:!0,noStyle:!0,children:function(r){var n,o=r.getFieldValue(e.name||[]);return(0,x.jsx)(d.Popover,(0,l.Z)((0,l.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:t,content:(0,x.jsxs)("div",{style:{padding:"4px 0"},children:[null===(n=e.statusRender)||void 0===n?void 0:n.call(e,o),e.strengthText?(0,x.jsx)("div",{style:{marginTop:10},children:(0,x.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"right"},e.popoverProps),{},{open:a,children:e.children}))}})},b=function(e){var r=e.fieldProps,n=e.proFieldProps,a=(0,i.Z)(e,g);return(0,x.jsx)(m.Z,(0,l.Z)({valueType:f,fieldProps:r,filedConfig:{valueType:f},proFieldProps:n},a))};b.Password=function(e){var r=e.fieldProps,n=e.proFieldProps,a=(0,i.Z)(e,v),t=(0,p.useState)(!1),o=(0,s.Z)(t,2),u=o[0],d=o[1];return null!=r&&r.statusRender&&a.name?(0,x.jsx)(j,{name:a.name,statusRender:null==r?void 0:r.statusRender,popoverProps:null==r?void 0:r.popoverProps,strengthText:null==r?void 0:r.strengthText,open:u,onOpenChange:d,children:(0,x.jsx)(m.Z,(0,l.Z)({valueType:"password",fieldProps:(0,l.Z)((0,l.Z)({},(0,c.Z)(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var n;null==r||null===(n=r.onBlur)||void 0===n||n.call(r,e),d(!1)},onClick:function(e){var n;null==r||null===(n=r.onClick)||void 0===n||n.call(r,e),d(!0)}}),proFieldProps:n,filedConfig:{valueType:f}},a))}):(0,x.jsx)(m.Z,(0,l.Z)({valueType:"password",fieldProps:r,proFieldProps:n,filedConfig:{valueType:f}},a))},b.displayName="ProFormComponent";const C=b;var P=n(87431),y=n(61093),Z=n(50877),T=n(67103);const k="AurorianBoxCard-LexgSF",_="MetaContainer-dJMmhh",F="MetaClass-HwRwCA",w="MetaAttributeContainer-Qzval5",N="MetaFirstAttribute-VujLSL",B="MetaSecondAttribute-_jIoss",R="NameContainer-k1YCea",S="BreakThrough-qk6EVh";var M=n(38259);const L=h().memo((({name:e,breakthrough:r,onBreakthroughChange:a})=>{const[{auroriansMap:t}]=(0,y.tT)(M.b),o=(0,p.useMemo)((()=>t[e]),[t,e]),s=(0,p.useRef)(null);return(0,p.useEffect)((()=>{o?.aurorian_name&&n(1798)(`./${o.aurorian_name}.webp`).then((e=>{"string"==typeof e?.default&&s.current&&(s.current.style.backgroundImage=`url(${e.default})`)})).catch((()=>{}))}),[o?.aurorian_name]),(0,x.jsxs)("div",{className:k,ref:s,children:[o?.class&&o?.attribute?(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("img",{className:F,alt:o.class,src:T.T2[o.class]}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("img",{className:N,alt:o.attribute,src:T.nP[o.attribute]}),o.secondary_attribute?(0,x.jsx)("img",{className:B,alt:o.secondary_attribute,src:T.nP[o.secondary_attribute]}):null]})]}):null,(0,x.jsxs)("div",{className:R,children:[(0,x.jsx)("div",{title:o?.aurorian_name,children:o?.aurorian_cn_name}),o?.rarity?(0,x.jsx)(d.ConfigProvider,{theme:{components:{Rate:{starBg:"white",starSize:16}}},children:(0,x.jsx)(d.Rate,{className:S,value:r,count:T.gW[o.rarity],onChange:e=>{a?.(e)}})}):null]})]})})),A=({name:e,...r})=>{const[n,a]=(0,p.useState)(0);return(0,x.jsx)(P.Z,{...r,value:{name:e,breakthrough:n},style:{width:110,height:160,boxSizing:"border-box",overflow:"hidden"},cover:(0,x.jsx)(L,{name:e,breakthrough:n,onBreakthroughChange:a})})},z=()=>{const e=(0,p.useRef)(),[{auroriansMap:r}]=(0,y.tT)(M.b),n=(0,p.useMemo)((()=>(0,t.Z)(Object.values(r),(e=>e.attribute))),[r]);return console.log("chunks",n),(0,x.jsxs)(o.L0,{formRef:e,children:[(0,x.jsx)(o.L0.StepForm,{title:"\u5b8c\u6210 Box \u540d\u79f0",children:(0,x.jsx)(C,{name:"title",label:"Box \u540d\u79f0",placeholder:"\u7ed9 Box \u53d6\u4e00\u4e2a\u597d\u542c\u7684\u540d\u5b57",rules:[{required:!0}]})}),(0,x.jsx)(o.L0.StepForm,{title:"\u9009\u62e9\u706b\u5c5e\u6027\u5149\u7075",onValuesChange:e=>{console.log("changed",e)},children:(0,x.jsx)(d.Form.Item,{name:"fire",children:(0,x.jsx)(P.Z.Group,{multiple:!0,children:n[Z.kh.Fire].map((e=>(0,x.jsx)(A,{name:e.aurorian_name},e.aurorian_name)))})})})]})},I=()=>(0,x.jsx)(a._z,{title:"\u521b\u5efa\u81ea\u5b9a\u4e49 Box",children:(0,x.jsx)(z,{})})}}]);