"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5586],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={},u="Quick Start",l={unversionedId:"sugar/quick-start",id:"sugar/quick-start",title:"Quick Start",description:"Set up your Solana CLI config with an RPC url and a keypair:",source:"@site/docs/sugar/02-quick-start.md",sourceDirName:"sugar",slug:"/sugar/quick-start",permalink:"/sugar/quick-start",editUrl:"https://github.com/metaplex/docs/tree/main/docs/sugar/02-quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/sugar/installation"},next:{title:"Working with Sugar",permalink:"/sugar/working-with-sugar"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Set up your Solana CLI config with an RPC url and a keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url <rpc url> --keypair <path to keypair file>\n")),(0,o.kt)("p",null,"Sugar will then use these settings by default if you don't specify them as CLI options, allowing commands to be much simpler. If you need help setting up Solana CLI and creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, check the ",(0,o.kt)("a",{parentName:"p",href:"http://docs.metaplex.com/candy-machine-v2/getting-started#solana-wallet"},"Candy Machine v2 documentation"),"."),(0,o.kt)("p",null,"Create a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," to store your json and media file pairs with the naming convention 0.json, 0.png, 1.json, 1.png, etc., where the extension is ",(0,o.kt)("inlineCode",{parentName:"p"},".png"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".jpg"),", etc. This is the same format described in the ",(0,o.kt)("a",{parentName:"p",href:"http://docs.metaplex.com/candy-machine-v2/preparing-assets"},"Candy Machine v2 documentation"),"."),(0,o.kt)("p",null,"You can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch")," command to start an interative process to create your config file and deploy a Candy Machine to Solana:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar launch\n")),(0,o.kt)("p",null,"At the end of the execution of the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch")," command, the Candy Machine will be deployed on-chain."))}d.isMDXComponent=!0}}]);