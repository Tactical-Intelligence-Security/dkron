"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2478],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return y}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,d=f["".concat(a,".").concat(y)]||f[y]||p[y]||c;return r?t.createElement(d,u(u({ref:n},s),{},{components:r})):t.createElement(d,u({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=f;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<c;l++)u[l]=r[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84246:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(87462),o=r(63366),c=(r(67294),r(3905)),u=["components"],i={title:"Concurrency",toc:!0},a=void 0,l={unversionedId:"usage/concurrency",id:"version-v1/usage/concurrency",title:"Concurrency",description:"Concurrency",source:"@site/versioned_docs/version-v1/usage/concurrency.md",sourceDirName:"usage",slug:"/usage/concurrency",permalink:"/docs/v1/usage/concurrency",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/concurrency.md",tags:[],version:"v1",frontMatter:{title:"Concurrency",toc:!0},sidebar:"tutorialSidebar",previous:{title:"Clustering",permalink:"/docs/v1/usage/clustering"},next:{title:"Cron spec",permalink:"/docs/v1/usage/cron-spec"}},s={},p=[{value:"Concurrency",id:"concurrency",level:2}],f={toc:p};function y(e){var n=e.components,r=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"concurrency"},"Concurrency"),(0,c.kt)("p",null,"Jobs can be configured to allow overlapping executions or forbid them. "),(0,c.kt)("p",null,"Concurrency property accepts two option: "),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"allow")," (default): Allow concurrent job executions."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"forbid"),": If the job is already running don't send the execution, it will skip the executions until the next schedule.")),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  },\n  "concurrency": "forbid"\n}\n')))}y.isMDXComponent=!0}}]);