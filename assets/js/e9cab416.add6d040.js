"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5169],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96821:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={date:new Date("2019-03-22T00:00:00.000Z"),title:"dkron doc",slug:"dkron_doc",url:"/v1.2/cli/dkron_doc/"},d=void 0,l={unversionedId:"cli/dkron_doc",id:"version-v1/cli/dkron_doc",title:"dkron doc",description:"dkron doc",source:"@site/versioned_docs/version-v1/cli/dkron_doc.md",sourceDirName:"cli",slug:"/cli/dkron_doc",permalink:"/docs/v1/cli/dkron_doc",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/cli/dkron_doc.md",tags:[],version:"v1",frontMatter:{date:"2019-03-22T00:00:00.000Z",title:"dkron doc",slug:"dkron_doc",url:"/v1.2/cli/dkron_doc/"},sidebar:"tutorialSidebar",previous:{title:"dkron agent",permalink:"/docs/v1/cli/dkron_agent"},next:{title:"dkron keygen",permalink:"/docs/v1/cli/dkron_keygen"}},s={},u=[{value:"dkron doc",id:"dkron-doc",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 22-Mar-2019",id:"auto-generated-by-spf13cobra-on-22-mar-2019",level:6}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron-doc"},"dkron doc"),(0,i.kt)("p",null,"Generate Markdown documentation for the Dkron CLI."),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Generate Markdown documentation for the Dkron CLI.\nThis command is, mostly, used to create up-to-date documentation\nof Dkron's command-line interface for ",(0,i.kt)("a",{parentName:"p",href:"http://dkron.io/"},"http://dkron.io/"),".\nIt creates one Markdown file per command with front matter suitable\nfor rendering in Hugo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dkron doc [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --dir string   the directory to write the doc. (default "/tmp/dkrondoc/")\n  -h, --help         help for doc\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron/"},"dkron"),"\t - Open source distributed job scheduling system")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-22-mar-2019"},"Auto generated by spf13/cobra on 22-Mar-2019"))}f.isMDXComponent=!0}}]);