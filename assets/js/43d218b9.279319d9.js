"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7168],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={date:new Date("2019-10-10T00:00:00.000Z"),title:"dkron agent",slug:"dkron_agent",url:"/v2.0/cli/dkron_agent/"},l=void 0,d={unversionedId:"cli/dkron_agent",id:"version-v2/cli/dkron_agent",title:"dkron agent",description:"dkron agent",source:"@site/versioned_docs/version-v2/cli/dkron_agent.md",sourceDirName:"cli",slug:"/cli/dkron_agent",permalink:"/docs/v2/cli/dkron_agent",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/cli/dkron_agent.md",tags:[],version:"v2",frontMatter:{date:"2019-10-10T00:00:00.000Z",title:"dkron agent",slug:"dkron_agent",url:"/v2.0/cli/dkron_agent/"},sidebar:"tutorialSidebar",previous:{title:"dkron",permalink:"/docs/v2/cli/dkron"},next:{title:"dkron doc",permalink:"/docs/v2/cli/dkron_doc"}},u={},c=[{value:"dkron agent",id:"dkron-agent",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 10-Oct-2019",id:"auto-generated-by-spf13cobra-on-10-oct-2019",level:6}],p={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron-agent"},"dkron agent"),(0,o.kt)("p",null,"Start a dkron agent"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Start a dkron agent that schedules jobs, listens for executions and runs executors.\nIt also runs a web UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dkron agent [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --advertise-addr string        Address used to advertise to other nodes in the cluster. By default, the bind address is advertised. The value supports go-sockaddr/template format.\n      --advertise-rpc-port int       Use the value of rpc-port by default\n      --bind-addr string             Specifies which address the agent should bind to for network services, including the internal gossip protocol and RPC mechanism. This should be specified in IP format, and can be used to easily bind all network services to the same address. The value supports go-sockaddr/template format. (default "0.0.0.0:8946")\n      --bootstrap-expect int         Provides the number of expected servers in the datacenter. Either this value should not be provided or the value must agree with other servers in the cluster. When provided, Dkron waits until the specified number of servers are available and then bootstraps the cluster. This allows an initial leader to be elected automatically. This flag requires server mode.\n      --data-dir string              Specifies the directory to use for server-specific data, including the replicated log. By default, this is the top-level data-dir, like [/var/lib/dkron] (default "dkron.data")\n      --datacenter string            Specifies the data center of the local agent. All members of a datacenter should share a local LAN connection. (default "dc1")\n      --dog-statsd-addr string       DataDog Agent address\n      --dog-statsd-tags strings      Datadog tags, specified as key:value\n      --encrypt string               Key for encrypting network traffic. Must be a base64-encoded 16-byte key\n  -h, --help                         help for agent\n      --http-addr string             Address to bind the UI web server to. Only used when server. The value supports go-sockaddr/template format. (default ":8080")\n      --join strings                 An initial agent to join with. This flag can be specified multiple times\n      --log-level string             Log level (debug|info|warn|error|fatal|panic) (default "info")\n      --mail-from string             From email address to use\n      --mail-host string             Mail server host address to use for notifications\n      --mail-password string         Mail server password to use\n      --mail-payload string          Notification mail payload\n      --mail-port uint16             Mail server port\n      --mail-subject-prefix string   Notification mail subject prefix (default "[Dkron]")\n      --mail-username string         Mail server username used for authentication\n      --node-name string             Name of this node. Must be unique in the cluster (default "pris.local")\n      --profile string               Profile is used to control the timing profiles used (default "lan")\n      --raft-multiplier int          An integer multiplier used by servers to scale key Raft timing parameters. Omitting this value or setting it to 0 uses default timing described below. Lower values are used to tighten timing and increase sensitivity while higher values relax timings and reduce sensitivity. Tuning this affects the time it takes to detect leader failures and to perform leader elections, at the expense of requiring more network and CPU resources for better performance. By default, Dkron will use a lower-performance timing that\'s suitable for minimal Dkron servers, currently equivalent to setting this to a value of 5 (this default may be changed in future versions of Dkron, depending if the target minimum server profile changes). Setting this to a value of 1 will configure Raft to its highest-performance mode is recommended for production Dkron servers. The maximum allowed value is 10. (default 1)\n      --region string                Specifies the region the Dkron agent is a member of. A region typically maps to a geographic region, for example us, with potentially multiple zones, which map to datacenters such as us-west and us-east (default "global")\n      --retry-interval string        Time to wait between join attempts. (default "30s")\n      --retry-join strings           Address of an agent to join at start time with retries enabled. Can be specified multiple times.\n      --retry-max int                Maximum number of join attempts. Defaults to 0, which will retry indefinitely.\n      --rpc-port int                 RPC Port used to communicate with clients. Only used when server. The RPC IP Address will be the same as the bind address (default 6868)\n      --server                       This node is running in server mode\n      --statsd-addr string           Statsd address\n      --tag strings                  Tag can be specified multiple times to attach multiple key/value tag pairs to the given node, specified as key=value\n      --webhook-header strings       Headers to use when calling the webhook URL. Can be specified multiple times\n      --webhook-payload string       Body of the POST request to send on webhook call\n      --webhook-url string           Webhook url to call for notifications\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v2/cli/dkron/"},"dkron"),"\t - Open source distributed job scheduling system")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-10-oct-2019"},"Auto generated by spf13/cobra on 10-Oct-2019"))}f.isMDXComponent=!0}}]);