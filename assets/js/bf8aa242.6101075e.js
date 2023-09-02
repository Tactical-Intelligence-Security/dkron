"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4172],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(f,d(d({ref:r},p),{},{components:t})):n.createElement(f,d({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,d=new Array(i);d[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[s]="string"==typeof e?e:o,d[1]=a;for(var l=2;l<i;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6593:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={date:new Date("2023-09-02T00:00:00.000Z"),title:"dkron doc",slug:"dkron_doc",url:"/docs/pro/cli/dkron_doc/"},d=void 0,a={unversionedId:"pro/cli/dkron_doc",id:"pro/cli/dkron_doc",title:"dkron doc",description:"dkron doc",source:"@site/docs/pro/cli/dkron_doc.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_doc",permalink:"/docs/pro/cli/dkron_doc",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron_doc.md",tags:[],version:"current",frontMatter:{date:"2023-09-02T00:00:00.000Z",title:"dkron doc",slug:"dkron_doc",url:"/docs/pro/cli/dkron_doc/"},sidebar:"tutorialSidebar",previous:{title:"dkron completion zsh",permalink:"/docs/pro/cli/dkron_completion_zsh"},next:{title:"dkron keygen",permalink:"/docs/pro/cli/dkron_keygen"}},c={},l=[{value:"dkron doc",id:"dkron-doc",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 2-Sep-2023",id:"auto-generated-by-spf13cobra-on-2-sep-2023",level:6}],p={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron-doc"},"dkron doc"),(0,o.kt)("p",null,"Generate Markdown documentation for the Dkron CLI."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate Markdown documentation for the Dkron CLI.\nThis command is, mostly, used to create up-to-date documentation\nof Dkron's command-line interface for ",(0,o.kt)("a",{parentName:"p",href:"http://dkron.io/"},"http://dkron.io/"),".\nIt creates one Markdown file per command with front matter suitable\nfor rendering in Hugo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dkron doc [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --dir string   the directory to write the doc. (default "/tmp/dkrondoc/")\n  -h, --help         help for doc\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron/"},"dkron"),"\t - Professional distributed job scheduling system")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-sep-2023"},"Auto generated by spf13/cobra on 2-Sep-2023"))}s.isMDXComponent=!0}}]);