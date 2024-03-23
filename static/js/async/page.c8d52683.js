/*! For license information please see page.c8d52683.js.LICENSE.txt */
(self.webpackChunk_sinsa_web=self.webpackChunk_sinsa_web||[]).push([["484"],{454336:function(e,t,n){"use strict";e.exports=n.p+"static/image/qun.c410a69b.webp"},818433:function(e,t,n){"use strict";n.r(t);var s=n("356284");t.default=s.HomeView},888749:function(e,t,n){"use strict";n.r(t),n.d(t,{CoolCanvas:function(){return r}});var s=n("397458"),o=n("333906"),i=n.n(o),a=n("942138");let r=i().memo(()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t;let n=e.current,s=e.current.getContext("2d");if(!(s&&n))return;let o=window.devicePixelRatio||1,i=window.innerWidth,a=window.innerHeight,r=0,c=2*Math.PI,{cos:l}=Math,{random:d}=Math;n.width=i*o,n.height=a*o,s.scale(o,o),s.globalAlpha=.3;let h=[],u=[],p=[],x=!0;function y(e){.5>d()||(e.v_x+=.1*(d()-.5)),.5>d()||(e.v_y+=.1*(d()-.499));e.v_x=Math.max(Math.min(e.v_x,.3),-.3),e.v_y=Math.max(Math.min(e.v_y,.3),-.3),e.x+=e.v_x,e.y+=e.v_y,(e.x<0||e.x>i)&&(e.v_x*=-1.01),(e.y<0||e.y>a)&&(e.v_y*=-1.01)}function m(e){e.preventDefault()}return document.addEventListener("touchmove",m),window.requestAnimationFrame(function e(){if(s.clearRect(0,0,i,a),x)for(t=[{x:0,y:.5*a+180,v_x:0,v_y:0},{x:0,y:.5*a-180,v_x:0,v_y:0}],h.push(t[0]),h.push(t[1]);t[1].x<i+180;)(function(e,n){s.beginPath(),s.moveTo(e.x,e.y),s.lineTo(n.x,n.y);let o=n.x+(2*d()-.25)*180,i=function e(t){let n=t+(2*d()-1.1)*180;return n>a||0>n?e(t):n}(n.y);s.lineTo(o,i),s.closePath(),r-=-(c/50),s.strokeStyle=`#${(127*l(r)+128<<16|127*l(r+c/3)+128<<8|127*l(r+c/3*2)+128).toString(16)}`,s.stroke(),t[0]=t[1],t[1]={x:o,y:i,v_x:0,v_y:0},h.push(t[1]),p.push(s.strokeStyle),u.push(t[1])})(t[0],t[1]);else for(let e=0,t=1;t<h.length-1;)(function(e,t){s.beginPath();let n=h[e],o=h[t],i=u[e],a=p[e];y(o),s.moveTo(n.x,n.y),s.lineTo(o.x,o.y),y(i),s.lineTo(i.x,i.y),s.closePath(),s.strokeStyle=a,s.stroke()})(e,t),e++,t++;x=!1,requestAnimationFrame(e)}),()=>{document.removeEventListener("touchmove",m)}},[]),(0,s.jsx)("canvas",{className:a.Cool,ref:e})})},508485:function(e,t,n){"use strict";n.r(t),n.d(t,{HeroSection:function(){return h}});var s=n("397458"),o=n("333906"),i=n.n(o),a=n("280550"),r=n("367882"),c=n("609049"),l=n("417490"),d=n("103367");let h=i().memo(()=>(0,s.jsxs)("section",{className:l.Hero,children:[(0,s.jsxs)(a.Typography.Title,{className:l.Name,children:[(0,s.jsx)("span",{className:l.Accent,children:"\u7EA2\u6CB9\u6273\u624B"}),"\u4F5C\u4E1A\u7AD9"]}),(0,s.jsx)(a.Typography.Paragraph,{type:"secondary",className:l.Description,children:"\u767D\u591C\u6781\u5149\u4E00\u7AD9\u5F0F\u8352\u5178\u4F5C\u4E1A\u6536\u5F55 & \u914D\u961F\u5E73\u53F0"}),(0,s.jsxs)(a.Space,{children:[(0,s.jsx)(c.Link,{to:d.RoutePath.Solutions("latest"),children:(0,s.jsxs)(a.Button,{type:"primary",children:[(0,s.jsx)("span",{className:l.GoCopilotButtonText,children:"\u7ACB\u5373\u8BD5\u8BD5\u914D\u961F"}),(0,s.jsx)(r.RightSmall,{})]})}),(0,s.jsx)(c.Link,{to:d.RoutePath.Copilots("latest"),children:(0,s.jsx)(a.Button,{ghost:!0,type:"primary",children:"\u5168\u89C8"})})]})]}))},356284:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeView:function(){return x}});var s=n("397458"),o=n("280550"),i=n("333906"),a=n.n(i),r=n("609049"),c=n("298662"),l=n("508485"),d=n("888749"),h=n("454336");let u="sinsa-daddy.com"===window.location.hostname||"localhost"===window.location.hostname,p=[{label:"\u9996\u53D1\u7AD9\u70B9",key:"1st",children:(0,s.jsxs)(o.Space,{children:[(0,s.jsx)(o.Typography.Link,{href:"https://sinsa-daddy.com",target:"_self",children:"https://sinsa-daddy.com"}),(0,s.jsx)(o.Tag,{color:"blue",children:"\u63A8\u8350"})]})},{label:"\u5907\u7528\u7AD9\u70B9",key:"2nd",children:(0,s.jsx)(o.Typography.Link,{href:"https://sinsa-daddy.gitee.io",target:"_blank",children:"https://sinsa-daddy.gitee.io"})},{label:"Github",key:"github",children:(0,s.jsx)(o.Typography.Link,{href:"https://github.com/sinsa-daddy/sinsa",target:"_blank",children:"https://github.com/sinsa-daddy/sinsa"})}],x=a().memo(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.CoolCanvas,{}),(0,s.jsx)(l.HeroSection,{}),(0,s.jsxs)(o.Flex,{className:c.MainBody,vertical:!0,wrap:"nowrap",gap:12,children:[(0,s.jsx)(o.Card,{children:(0,s.jsx)(o.Descriptions,{size:"small",column:1,items:p})}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(o.Typography.Paragraph,{children:["\u5982\u679C\u60A8\u662F\u6211\u4EEC\u7684\u4F5C\u4E1A\u6536\u5F55\u540C\u5B66\uFF0C\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u8DF3\u8F6C\u5230\u5BF9\u5E94\u6536\u5F55\u9875\u9762\uFF0C\u9700\u8981\u60A8",(0,s.jsx)(o.Typography.Text,{strong:!0,children:"\u6709\u98DE\u4E66\u8D26\u53F7\u4E14\u52A0\u5165\u6211\u4EEC\u7EA2\u6CB9\u6273\u624B\u98DE\u4E66\u7FA4"})]}),(0,s.jsx)("div",{children:u?(0,s.jsx)(r.Link,{to:"/upload",children:(0,s.jsx)(o.Button,{type:"primary",children:"\u53BB\u6536\u5F55"})}):(0,s.jsx)(r.Link,{to:"https://sinsa-daddy.com/upload",target:"_self",children:(0,s.jsx)(o.Button,{type:"primary",children:"\u53BB sinsa-daddy.com \u6536\u5F55"})})})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsx)(o.Typography.Paragraph,{children:"\u7F51\u7AD9\u4F9D\u7136\u6B63\u5728\u5B8C\u5584\u5E76\u4E14\u53D8\u5F97\u66F4\u597D\uFF0C\u6211\u4EEC\u4E5F\u4ECD\u7136\u5341\u5206\u7F3A\u5C11\u6536\u5F55\u4F5C\u4E1A\u6570\u636E\u5DE5\u3002\u5982\u679C\u60A8\u4E5F\u60F3\u53C2\u4E0E\u4F5C\u4E1A\u6536\u5F55\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u52A0\u5165\u6211\u4EEC QQ \u7FA4\uFF0C\u6211\u4EEC\u4F1A\u63D0\u4F9B\u6536\u5F55\u6743\u9650\u3002"}),(0,s.jsx)(o.Image,{width:100,src:h,alt:"qun"})]}),(0,s.jsx)("div",{})]})]}))},942138:function(e){"use strict";e.exports={Cool:"Cool-d12d71",cool:"Cool-d12d71"}},417490:function(e){"use strict";e.exports={Accent:"Accent-_404a8",accent:"Accent-_404a8",Description:"Description-d0f7be",description:"Description-d0f7be",GoCopilotButtonText:"GoCopilotButtonText-_4c287",goCopilotButtonText:"GoCopilotButtonText-_4c287",Hero:"Hero-_7379e",hero:"Hero-_7379e",Name:"Name-_49123",name:"Name-_49123"}},298662:function(e){"use strict";e.exports={MainBody:"MainBody-ee0bc1",mainBody:"MainBody-ee0bc1"}}}]);