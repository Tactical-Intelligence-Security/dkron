"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Executors",c={unversionedId:"usage/executors/index",id:"usage/executors/index",title:"Executors",description:'Executor plugins are the main mechanism of execution in Dkron. They implement different "types" of jobs in the sense that they can perform the most diverse actions on the target nodes.',source:"@site/docs/usage/executors/index.md",sourceDirName:"usage/executors",slug:"/usage/executors/",permalink:"/docs/usage/executors/",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/executors/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use with AWS ECS",permalink:"/docs/usage/ecs"},next:{title:"GRPC Executor",permalink:"/docs/usage/executors/grpc"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"executors"},"Executors"),(0,o.kt)("p",null,'Executor plugins are the main mechanism of execution in Dkron. They implement different "types" of jobs in the sense that they can perform the most diverse actions on the target nodes.'),(0,o.kt)("p",null,"For example, the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell")," executor, will run the indicated command on the target node."),(0,o.kt)("p",null,"New plugins will be added, or you can create new ones, to perform different tasks, such as HTTP requests, Docker runs, anything that you can imagine."),(0,o.kt)("p",null,"If you need more features you can check ",(0,o.kt)("a",{parentName:"p",href:"/pro"},"Dkron Pro")," that brings commercially supported plugins."))}p.isMDXComponent=!0}}]);