"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6136],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12317:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={date:new Date("2019-08-26T00:00:00.000Z"),title:"dkron raft",slug:"dkron_raft",url:"/2.0/pro/cli/dkron_raft/"},s=void 0,c={unversionedId:"pro/cli/dkron_raft",id:"version-v2/pro/cli/dkron_raft",title:"dkron raft",description:"dkron raft",source:"@site/versioned_docs/version-v2/pro/cli/dkron_raft.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_raft",permalink:"/docs/v2/pro/cli/dkron_raft",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/cli/dkron_raft.md",tags:[],version:"v2",frontMatter:{date:"2019-08-26T00:00:00.000Z",title:"dkron raft",slug:"dkron_raft",url:"/2.0/pro/cli/dkron_raft/"},sidebar:"tutorialSidebar",previous:{title:"dkron leave",permalink:"/docs/v2/pro/cli/dkron_leave"},next:{title:"dkron raft list-peers",permalink:"/docs/v2/pro/cli/dkron_raft_list-peers"}},p={},d=[{value:"dkron raft",id:"dkron-raft",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Aug-2019",id:"auto-generated-by-spf13cobra-on-26-aug-2019",level:6}],f={toc:d};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron-raft"},"dkron raft"),(0,i.kt)("p",null,"Command to perform some raft operations"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Command to perform some raft operations"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --cert-file string         Path to the client server TLS cert file\n  -h, --help                     help for raft\n      --key-file string          Path to the client server TLS key file\n      --rpc-addr string          gRPC address of the agent (default "127.0.0.1:6868")\n      --trusted-ca-file string   Path to the client server TLS trusted CA cert file\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v2/cli/dkron/"},"dkron"),"\t - Professional distributed job scheduling system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v2/cli/dkron_raft_list-peers/"},"dkron raft list-peers"),"\t - Command to list raft peers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v2/cli/dkron_raft_remove-peer/"},"dkron raft remove-peer"),"\t - Command to list raft peers")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-aug-2019"},"Auto generated by spf13/cobra on 26-Aug-2019"))}u.isMDXComponent=!0}}]);