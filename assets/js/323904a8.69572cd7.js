"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5344],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),k=o,f=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53091:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={date:new Date("2019-03-22T00:00:00.000Z"),title:"dkron keygen",slug:"dkron_keygen",url:"/v1.2/cli/dkron_keygen/"},l=void 0,s={unversionedId:"cli/dkron_keygen",id:"version-v1/cli/dkron_keygen",title:"dkron keygen",description:"dkron keygen",source:"@site/versioned_docs/version-v1/cli/dkron_keygen.md",sourceDirName:"cli",slug:"/cli/dkron_keygen",permalink:"/docs/v1/cli/dkron_keygen",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/cli/dkron_keygen.md",tags:[],version:"v1",frontMatter:{date:"2019-03-22T00:00:00.000Z",title:"dkron keygen",slug:"dkron_keygen",url:"/v1.2/cli/dkron_keygen/"},sidebar:"tutorialSidebar",previous:{title:"dkron doc",permalink:"/docs/v1/cli/dkron_doc"},next:{title:"dkron leave",permalink:"/docs/v1/cli/dkron_leave"}},p={},d=[{value:"dkron keygen",id:"dkron-keygen",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 22-Mar-2019",id:"auto-generated-by-spf13cobra-on-22-mar-2019",level:6}],u={toc:d};function k(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron-keygen"},"dkron keygen"),(0,i.kt)("p",null,"Generates a new encryption key"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Generates a new encryption key that can be used to configure the\nagent to encrypt traffic. The output of this command is already\nin the proper format that the agent expects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dkron keygen [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for keygen\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron/"},"dkron"),"\t - Open source distributed job scheduling system")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-22-mar-2019"},"Auto generated by spf13/cobra on 22-Mar-2019"))}k.isMDXComponent=!0}}]);