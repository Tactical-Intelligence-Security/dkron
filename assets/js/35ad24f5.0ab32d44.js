"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,v=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={date:new Date("2023-09-02T00:00:00.000Z"),title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},l=void 0,i={unversionedId:"pro/cli/dkron_leave",id:"pro/cli/dkron_leave",title:"dkron leave",description:"dkron leave",source:"@site/docs/pro/cli/dkron_leave.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_leave",permalink:"/docs/pro/cli/dkron_leave",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron_leave.md",tags:[],version:"current",frontMatter:{date:"2023-09-02T00:00:00.000Z",title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},sidebar:"tutorialSidebar",previous:{title:"dkron keygen",permalink:"/docs/pro/cli/dkron_keygen"},next:{title:"dkron raft",permalink:"/docs/pro/cli/dkron_raft"}},s={},c=[{value:"dkron leave",id:"dkron-leave",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 2-Sep-2023",id:"auto-generated-by-spf13cobra-on-2-sep-2023",level:6}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron-leave"},"dkron leave"),(0,o.kt)("p",null,"Force an agent to leave the cluster"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Stop stops an agent, if the agent is a server and is running for election\nstop running for election, if this server was the leader\nthis will force the cluster to elect a new leader and start a new scheduler.\nIf this is a server and has the scheduler started stop it, ignoring if this server\nwas participating in leader election or not (local storage).\nThen actually leave the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dkron leave [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --cert-file string         Path to the client server TLS cert file\n  -h, --help                     help for leave\n      --key-file string          Path to the client server TLS key file\n      --rpc-addr string          gRPC address of the agent (default "127.0.0.1:6868")\n      --trusted-ca-file string   Path to the client server TLS trusted CA cert file\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron/"},"dkron"),"\t - Professional distributed job scheduling system")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-sep-2023"},"Auto generated by spf13/cobra on 2-Sep-2023"))}p.isMDXComponent=!0}}]);