"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8845],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),k=o,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3706:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={date:new Date("2023-09-02T00:00:00.000Z"),title:"dkron",slug:"dkron",url:"/docs/pro/cli/dkron/"},i=void 0,l={unversionedId:"pro/cli/dkron",id:"pro/cli/dkron",title:"dkron",description:"dkron",source:"@site/docs/pro/cli/dkron.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron",permalink:"/docs/pro/cli/dkron",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron.md",tags:[],version:"current",frontMatter:{date:"2023-09-02T00:00:00.000Z",title:"dkron",slug:"dkron",url:"/docs/pro/cli/dkron/"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/pro/auth"},next:{title:"dkron agent",permalink:"/docs/pro/cli/dkron_agent"}},c={},s=[{value:"dkron",id:"dkron",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 2-Sep-2023",id:"auto-generated-by-spf13cobra-on-2-sep-2023",level:6}],p={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron"},"dkron"),(0,o.kt)("p",null,"Professional distributed job scheduling system"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Dkron is a system service that runs scheduled jobs at given intervals or times,\njust like the cron unix service but distributed in several machines in a cluster.\nIf a machine fails (the leader), a follower will take over and keep running the scheduled jobs without human intervention."),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n  -h, --help            help for dkron\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_agent/"},"dkron agent"),"\t - Start a dkron agent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_completion/"},"dkron completion"),"\t - Generate the autocompletion script for the specified shell"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_doc/"},"dkron doc"),"\t - Generate Markdown documentation for the Dkron CLI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_keygen/"},"dkron keygen"),"\t - Generates a new encryption key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_leave/"},"dkron leave"),"\t - Force an agent to leave the cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_raft/"},"dkron raft"),"\t - Command to perform some raft operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_version/"},"dkron version"),"\t - Show version")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-sep-2023"},"Auto generated by spf13/cobra on 2-Sep-2023"))}d.isMDXComponent=!0}}]);