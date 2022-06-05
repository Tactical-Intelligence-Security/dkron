"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1354],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"HTTP Executor"},u=void 0,s={unversionedId:"usage/executors/http",id:"version-v2/usage/executors/http",title:"HTTP Executor",description:"HTTP executor can send a request to an HTTP endpoint",source:"@site/versioned_docs/version-v2/usage/executors/http.md",sourceDirName:"usage/executors",slug:"/usage/executors/http",permalink:"/docs/v2/usage/executors/http",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/executors/http.md",tags:[],version:"v2",frontMatter:{title:"HTTP Executor"},sidebar:"tutorialSidebar",previous:{title:"Use with AWS ECS",permalink:"/docs/v2/usage/ecs"},next:{title:"shell",permalink:"/docs/v2/usage/executors/shell"}},l={},p=[{value:"Configuration",id:"configuration",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"HTTP executor can send a request to an HTTP endpoint"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Params:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'method: Request method in uppercase\nurl: Request url\nheaders: Json string, such as "[\\"Content-Type: application/json\\"]"\nbody: POST body\ntimeout: Request timeout, unit seconds\nexpectCode: Expect response code, such as 200,206\nexpectBody: Expect response body, support regexp, such as /success/\ndebug: Debug option, will log everything when this option is not empty\ntlsNoVerifyPeer: false (default) or true. If true, disables verification of the remote SSL certificate\'s validity.\ntlsCertificateFile: Path to the PEM file containing the client certificate. Optional.\ntlsCertificateKeyFile: Path to the PEM file containing the client certificate private key. Optional.\ntlsRootCAsFile: Path to the PEM file containing certificates to use as root CAs. Optional.\n')),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executor": "http",\n  "executor_config": {\n      "method": "GET",\n      "url": "http://example.com",\n      "headers": "[]",\n      "body": "",\n      "timeout": "30",\n      "expectCode": "200",\n      "expectBody": "",\n      "debug": "true"\n  }\n}\n')))}d.isMDXComponent=!0}}]);