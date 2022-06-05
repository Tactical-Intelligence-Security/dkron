"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5502],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||c;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<c;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90763:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),s=["components"],a={},i="Slack processor",l={unversionedId:"pro/processors/slack",id:"pro/processors/slack",title:"Slack processor",description:"The Slack processor provides slack notifications with multiple configurations and rich format.",source:"@site/docs/pro/processors/slack.md",sourceDirName:"pro/processors",slug:"/pro/processors/slack",permalink:"/docs/pro/processors/slack",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/processors/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email processor",permalink:"/docs/pro/processors/email"},next:{title:"Upgrade from v1 to v2",permalink:"/docs/upgrading/from_v1_to_v2"}},p={},u=[],f={toc:u};function m(e){var r=e.components,a=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"slack-processor"},"Slack processor"),(0,c.kt)("p",null,"The Slack processor provides slack notifications with multiple configurations and rich format."),(0,c.kt)("p",null,"Configuration of the slack processor is stored in a file named ",(0,c.kt)("inlineCode",{parentName:"p"},"dkron-processor-slack.yml")," in the same locations as ",(0,c.kt)("inlineCode",{parentName:"p"},"dkron.yml"),", and should include a list of teams, it can include any number of teams."),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(99433).Z,width:"643",height:"229"})),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"team1:\n  webhook_url: https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXX\n  bot_name: Dkron Production\n")),(0,c.kt)("p",null,"Then configure each job with the following options:"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "processors": {\n    "slack": {\n      "team": "team1",\n      "channel": "#cron-production",\n      "onSuccess": "true"\n    }\n  }\n}\n')),(0,c.kt)("p",null,"By default the slack procesor doesn't send notifications on job success, the ",(0,c.kt)("inlineCode",{parentName:"p"},"onSuccess")," parameter, enables it, like in the previous example."))}m.isMDXComponent=!0},99433:function(e,r,t){r.Z=t.p+"assets/images/slack-c682ec1651a106f521d514f05ac8c26c.png"}}]);