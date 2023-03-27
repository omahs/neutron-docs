"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5009],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>c});var m=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,m)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,m,n=function(a,e){if(null==a)return{};var t,m,n={},r=Object.keys(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var o=m.createContext({}),i=function(a){var e=m.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},N=function(a){var e=i(a.components);return m.createElement(o.Provider,{value:e},a.children)},l={inlineCode:"code",wrapper:function(a){var e=a.children;return m.createElement(m.Fragment,{},e)}},k=m.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,o=a.parentName,N=p(a,["components","mdxType","originalType","parentName"]),k=i(t),c=n,h=k["".concat(o,".").concat(c)]||k[c]||l[c]||r;return t?m.createElement(h,s(s({ref:e},N),{},{components:t})):m.createElement(h,s({ref:e},N))}));function c(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,s=new Array(r);s[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:n,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return m.createElement.apply(null,s)}return m.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2985:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var m=t(7462),n=(t(7294),t(3905));const r={},s="Overview",p={unversionedId:"neutron/tokenomics/treasury/overview",id:"neutron/tokenomics/treasury/overview",title:"Overview",description:"This document describes the Treasury contract for the Neutron network.",source:"@site/docs/neutron/tokenomics/treasury/overview.md",sourceDirName:"neutron/tokenomics/treasury",slug:"/neutron/tokenomics/treasury/overview",permalink:"/neutron/tokenomics/treasury/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/tokenomics/overview"},next:{title:"Messages",permalink:"/neutron/tokenomics/treasury/messages"}},o={},i=[{value:"Deployment",id:"deployment",level:2}],N={toc:i};function l(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,m.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This document describes the Treasury contract for the Neutron network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The Treasury")," contract holds the vested NTRNs, and sends them to the ",(0,n.kt)("a",{parentName:"p",href:"/neutron/tokenomics/reserve/overview"},"Reserve")," and ",(0,n.kt)("a",{parentName:"p",href:"/neutron/tokenomics/distribution/overview"},"Distribution")," contracts. This contract is owned by the ",(0,n.kt)("a",{parentName:"p",href:"/neutron/dao/overview#neutron-dao"},"Neutron DAO")," and is instantiated at genesis. It is responsible for the first step of tokens\ndistribution."),(0,n.kt)("p",null,"Treasury contract can be configured only by the ",(0,n.kt)("a",{parentName:"p",href:"/neutron/dao/overview#neutron-dao"},"Neutron DAO"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"distribute")," call is permissionless and can be called by anybody."),(0,n.kt)("p",null,"Treasury coins are vested based on on-chain activity: the more NTRN coins are burned while processing block fees (see above), the more tokens distributed from the Treasury."),(0,n.kt)("p",null,"In order to distribute coins any address can execute ",(0,n.kt)("inlineCode",{parentName:"p"},"distribute")," call, this method is triggered by a transaction and distributes coins from a treasure.\nIt starts by loading configuration parameters such as the denomination of the currency, minimum period between distributions, and the distribution rate."),(0,n.kt)("p",null,"The function checks if the time since the last distribution is less than the minimum period. If it is, then the function returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"ContractError::TooSoonToDistribute")," error indicating that it is too soon to distribute. The time of the last distribution is saved for future reference. The current balance of the contract is retrieved from the interchain querier. If there are no funds, then the function returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"ContractError::NoFundsToDistribute")," error indicating that there are no funds to distribute."),(0,n.kt)("p",null,"Also it calculates the amount of burned coins for the period and adjusts it using the ",(0,n.kt)("inlineCode",{parentName:"p"},"safe_burned_coins_for_period")," function to prevent arithmetic overflow. If there are no burned coins, then the function returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"ContractError::NoBurnedCoins")," error indicating that there are no burned coins. The balance to distribute is calculated using the ",(0,n.kt)("inlineCode",{parentName:"p"},"vesting_function"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"vesting_function")," calculates the amount of coins to be distributed (released)we use following expression: ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"k"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"r")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"burnt\\_tokens \\times multiplier")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"lt"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"pl"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er")))))," based on the formula ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"))),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msup",stretchy:"false"},")"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"k"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"s"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"multiplier = (\\frac{configurable\\_denominator-1}{configurable\\_denominator})^{burnt\\_tokens} * x")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"lt"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"pl"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.5751em",verticalAlign:"-0.562em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0131em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"co"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"gu"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ab"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"mina"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"or")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.527em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"co"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"gu"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ab"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"mina"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"or"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.562em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", where ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is the current balance in the treasure and ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"k"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"s")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{burnt\\_tokens}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))))," is the number of burned coins in a period of time. The original formula ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mfrac"},"x"),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"multiplier = \\frac{x}{configurable\\_denominator}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"lt"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"pl"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2574em",verticalAlign:"-0.562em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"co"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"gu"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ab"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"mina"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"or")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.562em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," was optimized and current formula was used in order to make the calculation more efficient and faster. Otherwise it will be required to calculate released coins on every burned coin but this is may be time and resource consuming."),(0,n.kt)("p",null,"The ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"b"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"configurable\\_denominator")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"gu"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"mina"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or")))))," should be\nset based on coins burning rate and preferred total duration of vesting. Take into account that while initially one\nburnt tokens equals multiple NTRN tokens made liquid, the flow of new tokens into the Treasury progressively slows down\nuntil the tokens supply is exhausted and the tokenomics becomes deflationary."),(0,n.kt)("p",null,"The final result is rounded up to the nearest integer and returned as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint128")," type."),(0,n.kt)("p",null,'The amount of coins to distribute and the amount of coins to reserve are then calculated. The distribution stats are updated and a response is created indicating the amount of coins distributed, the amount of coins reserved, and a tag indicating the action as "neutron/treasury/distribute".'),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"This is one of the contracts that are initialized at Neutron genesis. ",(0,n.kt)("a",{parentName:"p",href:"/neutron/tokenomics/treasury/messages"},"Initialization message")," contains The Neutron DAO and\nSecurity DAO addresses."))}l.isMDXComponent=!0}}]);