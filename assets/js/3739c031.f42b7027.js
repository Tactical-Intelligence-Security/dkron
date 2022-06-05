"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1162],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={title:"Upgrade methods"},s=void 0,u={unversionedId:"usage/upgrade",id:"usage/upgrade",title:"Upgrade methods",description:"Use one of the following methods (depending on the changes) to upgrade a cluster to a newer version.",source:"@site/docs/usage/upgrade.md",sourceDirName:"usage",slug:"/usage/upgrade",permalink:"/docs/usage/upgrade",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrade methods"},sidebar:"tutorialSidebar",previous:{title:"Target nodes spec",permalink:"/docs/usage/target-nodes-spec"},next:{title:"dkron",permalink:"/docs/cli/dkron"}},c={},p=[{value:"Rolling upgrade",id:"rolling-upgrade",level:3},{value:"Backup &amp; Restore",id:"backup--restore",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use one of the following methods (depending on the changes) to upgrade a cluster to a newer version."),(0,a.kt)("h3",{id:"rolling-upgrade"},"Rolling upgrade"),(0,a.kt)("p",null,"Use the following procedure to rotate all cluster nodes, one server at a time:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a new server to the cluster with a configuration that joins them to the existing cluster."),(0,a.kt)("li",{parentName:"ol"},"Stop dkron service on one of the old servers, if it was the leader allow a new leader to be elected. Note that it is better to remove the current leader at the end, to ensure a leader is elected from the new nodes."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"dkron raft list-peers")," to list current cluster nodes."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"dkron raft remove-peer")," to forcefully remove the old server."),(0,a.kt)("li",{parentName:"ol"},"Repeat steps above until all old cluster nodes have been upgraded.")),(0,a.kt)("h3",{id:"backup--restore"},"Backup & Restore"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/restore")," API endpoint to restore a previously exported jobs file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl localhost:8080/v1/jobs > backup.json\ncurl localhost:8080/v1/restore --form 'file=@backup.json'\n")),(0,a.kt)("p",null,"This will restore all jobs and counters as they were in the export file."))}f.isMDXComponent=!0}}]);