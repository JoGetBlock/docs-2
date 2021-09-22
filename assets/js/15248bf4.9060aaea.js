"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[660],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Installation",c={unversionedId:"create-store/installation",id:"create-store/installation",isDocsHomePage:!1,title:"Installation",description:"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline",source:"@site/docs/create-store/installation.md",sourceDirName:"create-store",slug:"/create-store/installation",permalink:"/docs/docs/create-store/installation",editUrl:"https://github.com/metaplex/docs/docs/create-store/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/docs/about/introduction"},next:{title:"Mint NFTs",permalink:"/docs/docs/create-store/mint"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Local setup",id:"local-setup",children:[{value:"Running store web server",id:"running-store-web-server",children:[]},{value:"Setting Up the Store ID",id:"setting-up-the-store-id",children:[]}]}],u={toc:p};function g(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline\nsteps you need to take to create your store."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 14.17.0 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn"),". Yarn is a performant package manager for JavaScript and replaces the ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," client.")),(0,o.kt)("h2",{id:"local-setup"},"Local setup"),(0,o.kt)("p",null,"Clone the repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/metaplex-foundation/metaplex.git\n")),(0,o.kt)("h3",{id:"running-store-web-server"},"Running store web server"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to spin up a web server locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd metaplex\n$ cd js\n$ yarn install\n$ yarn bootstrap\n$ yarn start\n")),(0,o.kt)("p",null,"After that you can open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," in the browser to see a storefront."),(0,o.kt)("h3",{id:"setting-up-the-store-id"},"Setting Up the Store ID"),(0,o.kt)("p",null,"When opening a store for the first time you should see a welcome screen with ",(0,o.kt)("strong",{parentName:"p"},"Init Store")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:n(1216).Z})),(0,o.kt)("p",null,"Click on this button to start the store initialization process, it is going to take some time (around 1-2 minutes)."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must have some SOL on your wallet to be able to pay a transaction fee. In the case of using devnet or testnet it's possible to airdrop SOL via ",(0,o.kt)("a",{parentName:"p",href:"https://solfaucet.com/"},"Sol Faucet"),"."))),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://phantom.app/"},"Phantom")," wallet, it will ask you to approve a transaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve transaction",src:n(5147).Z})),(0,o.kt)("p",null,"After the store initialization is done, you need to save addresses. In the ",(0,o.kt)("strong",{parentName:"p"},"Store configuration")," section on the store page click on the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button and paste in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"js/packages/web"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save env",src:n(5210).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set env",src:n(1192).Z})),(0,o.kt)("p",null,"Stop webserver (",(0,o.kt)("em",{parentName:"p"},"Ctrl + C"),") and run it again for ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," changes to take place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn start\n")))}g.isMDXComponent=!0},5147:function(e,t){t.Z="data:image/png;base64,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"},1216:function(e,t,n){t.Z=n.p+"assets/images/init-store-289347b9326794a2366f4d928af5513c.png"},5210:function(e,t,n){t.Z=n.p+"assets/images/save-env-0a361521b462fa53c57f76672000f95b.png"},1192:function(e,t,n){t.Z=n.p+"assets/images/set-env-2559e1176e7ee31d2f0cf3c5474c343c.png"}}]);