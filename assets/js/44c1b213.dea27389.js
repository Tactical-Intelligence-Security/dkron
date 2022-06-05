"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7342],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={Description:"Dkron release 3.2 public release",Keywords:["Development","OpenSource","Distributed systems","cron"],Tags:["Development","OpenSource","Distributed systems","cron"],date:"2021-06-01",Topics:["Development","OpenSource","Distributed Systems"],Slug:"dkron-3-2"},s="Dkron 3.2",u={permalink:"/blog/dkron-3-2",editUrl:"https://github.com/distribworks/dkron/tree/main/website/blog/blog/dkron-3-2.md",source:"@site/blog/dkron-3-2.md",title:"Dkron 3.2",description:"New website",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[],readingTime:1.89,truncated:!1,authors:[],frontMatter:{Description:"Dkron release 3.2 public release",Keywords:["Development","OpenSource","Distributed systems","cron"],Tags:["Development","OpenSource","Distributed systems","cron"],date:"2021-06-01",Topics:["Development","OpenSource","Distributed Systems"],Slug:"dkron-3-2"},nextItem:{title:"Dkron 3.0 Release",permalink:"/blog/dkron-3-0"}},c={authorsImageUrls:[]},p=[{value:"New website",id:"new-website",level:2},{value:"New features",id:"new-features",level:2},{value:"Cronitor integration",id:"cronitor-integration",level:3},{value:"Upcoming features",id:"upcoming-features",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-website"},"New website"),(0,i.kt)("p",null,"Our brand new web site designed and implemented by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Macxim"},"https://github.com/Macxim"),", comes with a brand new look, better content structure, better documentation a new blog section and the new API navigator."),(0,i.kt)("p",null,"This marks the start of a new and better product design, more focused on the UX, easy of use and more documentation for Dkron."),(0,i.kt)("p",null,"We hope you like it as much as we do. \u2764\ufe0f"),(0,i.kt)("h2",{id:"new-features"},"New features"),(0,i.kt)("h3",{id:"cronitor-integration"},"Cronitor integration"),(0,i.kt)("p",null,"Our goal is to provide a very reliable way of running your cron jobs, we share that vision with the people behind ",(0,i.kt)("a",{parentName:"p",href:"https://cronitor.io/"},"Cronitor"),". Dkron is very reliable but sometimes a very bad event can bring your cluster down to its knees. To provide multiple options to monitor Dkron, I'm happy to introduce a new way to monitor your job executions using Cronitor service."),(0,i.kt)("p",null,"Cronitor is tightly integrated with Dkron, it will notify the details of every execution and Cronitor can offer multiple channels for alerting you in case something goes wrong."),(0,i.kt)("p",null,"Check the service ",(0,i.kt)("a",{parentName:"p",href:"https://cronitor.io/"},"https://cronitor.io/")," and follow the integration guide in the docs to set up your ",(0,i.kt)("a",{parentName:"p",href:"/docs/usage/cronitor"},"Dkron-Cronitor integration"),"."),(0,i.kt)("h2",{id:"upcoming-features"},"Upcoming features"),(0,i.kt)("p",null,"The new look of Dkron will pave the road for the upcoming v4 release. We have really interesting features almost ready for the new version, some of them are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bump React Admin to v4.0"),(0,i.kt)("li",{parentName:"ul"},"Shell plugin will be included in the main binary"),(0,i.kt)("li",{parentName:"ul"},"New light image including only the main binary"),(0,i.kt)("li",{parentName:"ul"},"Optionally use fast-store instead of boltdb for Raft log, this will improve performance tenfold"),(0,i.kt)("li",{parentName:"ul"},"Farewell to the old UI")),(0,i.kt)("p",null,"We think this will open Dkron to be used for new use cases that where not possible before."),(0,i.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,i.kt)("p",null,"We are very happy of giving Dkron a well deserved new face to the world and also to keep integrating with new services we love to be able to offer the best product we can for this specific -and niche- market."),(0,i.kt)("p",null,"We think there's a gap in Job schedulers for the rest-of-us that is currently improving, but still very needed of cost-effective and easy to operate solutions like Dkron for small-mid start-ups and for specific needs in bigger companies."),(0,i.kt)("p",null,"We're always open to our users feedback so feel free to contact us if you have any suggestion."))}d.isMDXComponent=!0}}]);