"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2529],{9058:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7294),n=a(6010),r=a(782),s=a(7524),i=a(9960),m=a(5999);const c="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=a(3102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return l.createElement(h.Zo,{component:b,props:e})}function f(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},390:(e,t,a)=>{a.d(t,{Z:()=>U});var l=a(7294),n=a(6010),r=a(9460),s=a(4996);function i(e){let{children:t,className:a}=e;const{frontMatter:n,assets:i}=(0,r.C)(),{withBaseUrl:m}=(0,s.C)(),c=i.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:m(c,{absolute:!0})}),t)}var m=a(9960);const c="title_f1Hy";function o(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:i,title:o}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(c,t),itemProp:"headline"},s?o:l.createElement(m.Z,{itemProp:"url",to:i},o))}var u=a(5999),d=a(8824);const g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:i,readingTime:m}=a;return l.createElement("div",{className:(0,n.Z)(g,"margin-vert--md",t)},l.createElement(E,{date:s,formattedDate:i}),void 0!==m&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(p,{readingTime:m})))}function v(e){return e.href?l.createElement(m.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:r,title:s,url:i,imageURL:m,email:c}=t,o=i||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},m&&l.createElement(v,{href:o,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:m,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const _="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",Z="imageOnlyAuthorCol_G86a";function P(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?N:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!i&&"col col--6",i?Z:_),key:t},l.createElement(f,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function k(){return l.createElement("header",null,l.createElement(o,null),l.createElement(b,null),l.createElement(P,null))}var T=a(8780),C=a(7770);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return l.createElement("div",{id:s?T.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(C.Z,null,t))}var y=a(4881),B=a(6233),I=a(7462);function L(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function x(e){const{blogPostTitle:t,...a}=e;return l.createElement(m.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(L,null))}const M="blogPostFooterDetailsFull_mRVl";function R(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:m}=e,c=!t&&m,o=a.length>0;return o||c||i?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&M)},o&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},l.createElement(B.Z,{tags:a})),t&&i&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:i})),c&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":o})},l.createElement(x,{blogPostTitle:s,to:e.permalink}))):null}function U(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,n.Z)(s,a)},l.createElement(k,null),l.createElement(w,null,t),l.createElement(R,null))}},4881:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(5999),r=a(5281),s=a(7462),i=a(6010);const m="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function o(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},6233:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7294),n=a(6010),r=a(5999),s=a(9960);const i="tag_zVej",m="tagRegular_sFm0",c="tagWithCount_h2kH";function o(e){let{permalink:t,label:a,count:r}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(i,r?c:m)},a,r&&l.createElement("span",null,r))}const u="tags_jXut",d="tag_QGVx";function g(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:d},l.createElement(o,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>s});var l=a(7294),n=a(902);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function i(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);