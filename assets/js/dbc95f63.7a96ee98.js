"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8026],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||s;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84138:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),c=["components"],a={title:"Slack processor"},i=void 0,l={unversionedId:"pro/processors/slack",id:"version-v2/pro/processors/slack",title:"Slack processor",description:"The Slack processor provides slack notifications with multiple configurations and rich format.",source:"@site/versioned_docs/version-v2/pro/processors/slack.md",sourceDirName:"pro/processors",slug:"/pro/processors/slack",permalink:"/docs/v2/pro/processors/slack",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/processors/slack.md",tags:[],version:"v2",frontMatter:{title:"Slack processor"},sidebar:"tutorialSidebar",previous:{title:"Email processor",permalink:"/docs/v2/pro/processors/email"},next:{title:"Upgrade from v1 to v2",permalink:"/docs/v2/upgrading/from_v1_to_v2"}},p={},u=[],f={toc:u};function m(e){var r=e.components,a=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Slack processor provides slack notifications with multiple configurations and rich format."),(0,s.kt)("p",null,"Configuration of the slack processor is stored in a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"dkron-processor-slack.yml")," in the same locations as ",(0,s.kt)("inlineCode",{parentName:"p"},"dkron.yml"),", and should include a list of teams, it can include any number of teams."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(99433).Z,width:"643",height:"229"})),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"team1:\n  webhook_url: https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXX\n  bot_name: Dkron Production\n")),(0,s.kt)("p",null,"Then configure each job with the following options:"),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "processors": {\n    "slack": {\n      "team": "team1",\n      "channel": "#cron-production",\n      "onSuccess": "true"\n    }\n  }\n}\n')),(0,s.kt)("p",null,"By default the slack procesor doesn't send notifications on job success, the ",(0,s.kt)("inlineCode",{parentName:"p"},"onSuccess")," parameter, enables it, like in the previous example."))}m.isMDXComponent=!0},99433:function(e,r,t){r.Z=t.p+"assets/images/slack-c682ec1651a106f521d514f05ac8c26c.png"}}]);