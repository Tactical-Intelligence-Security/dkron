"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6416],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,k=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?t.createElement(k,a(a({ref:n},u),{},{components:r})):t.createElement(k,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74169:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={date:new Date("2019-01-21T00:00:00.000Z"),title:"dkron",slug:"dkron",url:"/v1.2/cli/dkron/"},c=void 0,s={unversionedId:"pro/cli/dkron",id:"version-v1/pro/cli/dkron",title:"dkron",description:"dkron",source:"@site/versioned_docs/version-v1/pro/cli/dkron.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron",permalink:"/docs/v1/pro/cli/dkron",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/cli/dkron.md",tags:[],version:"v1",frontMatter:{date:"2019-01-21T00:00:00.000Z",title:"dkron",slug:"dkron",url:"/v1.2/cli/dkron/"},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/v1/pro/auth"},next:{title:"dkron agent",permalink:"/docs/v1/pro/cli/dkron_agent"}},u={},d=[{value:"dkron",id:"dkron",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2019",id:"auto-generated-by-spf13cobra-on-21-jan-2019",level:6}],p={toc:d};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron"},"dkron"),(0,i.kt)("p",null,"Professional distributed job scheduling system"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Dkron is a system service that runs scheduled jobs at given intervals or times,\njust like the cron unix service but distributed in several machines in a cluster.\nIf a machine fails (the leader), a follower will take over and keep running the scheduled jobs without human intervention."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n  -h, --help            help for dkron\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron_agent/"},"dkron agent"),"\t - Start a dkron agent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron_doc/"},"dkron doc"),"\t - Generate Markdown documentation for the Dkron CLI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron_keygen/"},"dkron keygen"),"\t - Generates a new encryption key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron_version/"},"dkron version"),"\t - Show version")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2019"},"Auto generated by spf13/cobra on 21-Jan-2019"))}f.isMDXComponent=!0}}]);