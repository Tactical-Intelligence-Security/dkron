"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2347],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],u={},c="NATS Executor",i={unversionedId:"usage/executors/nats",id:"usage/executors/nats",title:"NATS Executor",description:"The NATS executor sends a message to a NATS server/cluster.",source:"@site/docs/usage/executors/nats.md",sourceDirName:"usage/executors",slug:"/usage/executors/nats",permalink:"/docs/usage/executors/nats",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/executors/nats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kafka Executor",permalink:"/docs/usage/executors/kafka"},next:{title:"Shell Executor",permalink:"/docs/usage/executors/shell"}},l={},p=[{value:"Configuration",id:"configuration",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nats-executor"},"NATS Executor"),(0,a.kt)("p",null,"The NATS executor sends a message to a NATS server/cluster."),(0,a.kt)("p",null,"Currently, only username/password authentication is supported."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"url:      Comma separated list of NATS server URLs\nmessage:  The message to send\nsubject:  The subject to send the message to\nuserName: username for authentication\npassword: password for authentication\ndebug:    If not empty, turns on debugging. Will log the NATS specific job config and the request sent.\n")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "executor": "nats",\n   "executor_config": {\n       "url": "tls://nats.demo.io:4443", \n       "message": "the message",\n       "subject": "myfavoritesubject",\n       "userName":"someusername",\n       "password":"somepassword"\n}\n')))}m.isMDXComponent=!0}}]);