"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2970],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?t.createElement(d,s(s({ref:r},l),{},{components:n})):t.createElement(d,s({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50988:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"Email processor"},c=void 0,p={unversionedId:"pro/processors/email",id:"version-v1/pro/processors/email",title:"Email processor",description:"The Email processor provides flexibility to job email notifications.",source:"@site/versioned_docs/version-v1/pro/processors/email.md",sourceDirName:"pro/processors",slug:"/pro/processors/email",permalink:"/docs/v1/pro/processors/email",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/processors/email.md",tags:[],version:"v1",frontMatter:{title:"Email processor"},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch processor",permalink:"/docs/v1/pro/processors/elasticsearch"},next:{title:"Slack processor",permalink:"/docs/v1/pro/processors/slack"}},l={},u=[],m={toc:u};function f(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Email processor provides flexibility to job email notifications."),(0,i.kt)("p",null,"Configuration of the email processor is stored in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"dkron-processor-email.yml")," in the same locations as ",(0,i.kt)("inlineCode",{parentName:"p"},"dkron.yml"),", and should include a list of providers, it can include any number of providers."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"provider1:\n  host: smtp.myprovider.com\n  port: 25\n  username: myusername\n  password: mypassword\n  from: cron@mycompany.com\n  subjectPrefix: '[Staging] '\n")),(0,i.kt)("p",null,"Then configure each job with the following options:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "processors": {\n    "email": {\n      "provider": "provider1",\n      "emails": "team@mycompany.com, owner@mycompany.com",\n      "onSuccess": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,"By default the email procesor doesn't send emails on job success, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess")," parameter, enables it, like in the previous example."))}f.isMDXComponent=!0}}]);