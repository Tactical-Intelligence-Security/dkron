"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4498],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Encryption"},s=void 0,l={unversionedId:"pro/encryption",id:"version-v2/pro/encryption",title:"Encryption",description:"SSL encryption is used for communicating dkron pro nodes. Also if client auth is enabled. This means that no other software running on your local network will be able to talk to dkron servers.",source:"@site/versioned_docs/version-v2/pro/encryption.md",sourceDirName:"pro",slug:"/pro/encryption",permalink:"/docs/v2/pro/encryption",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/encryption.md",tags:[],version:"v2",frontMatter:{title:"Encryption"},sidebar:"tutorialSidebar",previous:{title:"configuration",permalink:"/docs/v2/pro/configuration"},next:{title:"Docker executor",permalink:"/docs/v2/pro/executors/docker"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SSL encryption is used for communicating dkron pro nodes. Also if client auth is enabled. This means that no other software running on your local network will be able to talk to dkron servers."),(0,i.kt)("p",null,"This ensures that no unexpected usage of the Dkron's store will happen, unless it is another Dkron pro instance."),(0,i.kt)("p",null,"SSL encryption is enabled by default in Dkron Pro and can not be disabled, you don't need to do nothing to use it."),(0,i.kt)("p",null,"By default Dkron Pro runs with automatically generated SSL certificates, this is enough for using it in a trusted environment but to have a better grade of confidence, it is recommended to run Dkron Pro with custom SSL certificates."),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"https://coreos.com/os/docs/latest/generate-self-signed-certificates.html"},"this tutorial")," to generate autosigned SSL certificates for your instances."),(0,i.kt)("p",null,'{{% notice note %}}\nYou don\'t need a client certificate for Dkron server, just add "client auth" usage to your server cert.\n{{% /notice %}}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# dkron.yaml\nauto-tls: false # Set to false to use custom certs\nkey-file: server-key.pem\ncert-file: server.pem\ntrusted-ca-file: ca.pem\nclient-cert-auth: true # Enable it to only allow certs signed by the same CA\n")))}d.isMDXComponent=!0}}]);