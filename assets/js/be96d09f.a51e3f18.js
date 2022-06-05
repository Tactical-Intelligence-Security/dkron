"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[988],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=i(r),m=o,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9887:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],u={},s="Kafka Executor",i={unversionedId:"usage/executors/kafka",id:"usage/executors/kafka",title:"Kafka Executor",description:"A basic Kafka executor that produces a message on a Kafka broker.",source:"@site/docs/usage/executors/kafka.md",sourceDirName:"usage/executors",slug:"/usage/executors/kafka",permalink:"/docs/usage/executors/kafka",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/executors/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Executor",permalink:"/docs/usage/executors/http"},next:{title:"NATS Executor",permalink:"/docs/usage/executors/nats"}},p={},f=[{value:"Configuration",id:"configuration",level:2}],l={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kafka-executor"},"Kafka Executor"),(0,a.kt)("p",null,"A basic Kafka executor that produces a message on a Kafka broker."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'brokerAddress: Comma separated string containing "IP:port" of the brokers\nkey:           The key of the message to produce\nmessage:       The body of the message to produce\ntopic:         The Kafka topic for this message\ndebug:         Turns on debugging output if not empty\n')),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"executor": "kafka",\n"executor_config": {\n    "brokerAddress": "localhost:9092,another.host:9092",\n    "key": "My key",\n    "message": "My message",\n    "topic": "my_topic"\n}\n')))}m.isMDXComponent=!0}}]);