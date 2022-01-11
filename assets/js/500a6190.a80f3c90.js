"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9619],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60063:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],s={},l="Customize",p={unversionedId:"create-store/customize",id:"create-store/customize",title:"Customize",description:"General info",source:"@site/docs/create-store/customize.md",sourceDirName:"create-store",slug:"/create-store/customize",permalink:"/create-store/customize",editUrl:"https://github.com/metaplex/docs/tree/main/docs/create-store/customize.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Deploy",permalink:"/create-store/deploy"},next:{title:"Introduction",permalink:"/candy-machine-v1/introduction"}},c=[{value:"General info",id:"general-info",children:[],level:2},{value:"Logo and Left menu",id:"logo-and-left-menu",children:[],level:2},{value:"Right menu",id:"right-menu",children:[],level:2},{value:"Auction View",id:"auction-view",children:[],level:2}],u={toc:c};function d(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize"},"Customize"),(0,o.kt)("h2",{id:"general-info"},"General info"),(0,o.kt)("p",null,"Components in the project have two ways for customization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding or editing classes in style file ",(0,o.kt)("inlineCode",{parentName:"li"},".less")," which located at the customized component;"),(0,o.kt)("li",{parentName:"ul"},"Changing already prepared props variables based on ",(0,o.kt)("inlineCode",{parentName:"li"},"Antd")," library;")),(0,o.kt)("h2",{id:"logo-and-left-menu"},"Logo and Left menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:t(86505).Z})),(0,o.kt)("p",null,"You can change logo in ",(0,o.kt)("inlineCode",{parentName:"p"},"Notifications")," component with path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/Notifications/index.tsx\n")),(0,o.kt)("p",null,"You can add Icon inside ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," tag in this function: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const justContent = (\n    <Popover\n      className="noty-popover"\n      placement="bottomLeft"\n      content={content}\n      trigger="click"\n    >\n      <h1 className="title">M</h1>\n    </Popover>\n);\n')),(0,o.kt)("p",null,"For customizing left menu items you need open ",(0,o.kt)("inlineCode",{parentName:"p"},"AppBar")," component with path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/AppBar/index.tsx\n")),(0,o.kt)("p",null,"Edit this ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultActions")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {\n  const { connected } = useWallet();\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: vertical ? 'column' : 'row',\n      }}\n    >\n      <Link to={`/`}>\n        <Button className=\"app-btn\">Explore</Button>\n      </Link>\n      <Link to={`/artworks`}>\n        <Button className=\"app-btn\">\n          {connected ? 'My Items' : 'Artworks'}\n        </Button>\n      </Link>\n      <Link to={`/artists`}>\n        <Button className=\"app-btn\">Creators</Button>\n      </Link>\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"or edit ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaplexMenu")," component for mobile version of menu, located inside this rule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," if (width < 768) {\n   '...component structure'\n }\n")),(0,o.kt)("p",null,"Pay attention that in project using ",(0,o.kt)("inlineCode",{parentName:"p"},"Antd")," library for styles, so you can customise menu buttons like: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"overriding styles in the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.less")," file with path (current directory)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/AppBar/index.less\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using prepared styles from ",(0,o.kt)("inlineCode",{parentName:"li"},"Antd")," library\nfind all variables for buttons you can on this link:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://ant.design/components/button/\n")),(0,o.kt)("h2",{id:"right-menu"},"Right menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:t(56836).Z})),(0,o.kt)("p",null,"For customizing right menu items you need open ",(0,o.kt)("inlineCode",{parentName:"p"},"AppBar")," component with path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/AppBar/index.tsx\n")),(0,o.kt)("p",null,"And edit this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<div className="app-right app-bar-box">\n  <UserActions />\n  <CurrentUserBadge\n    showBalance={false}\n    showAddress={false}\n    iconSize={24}\n  />\n</div>\n')),(0,o.kt)("h2",{id:"auction-view"},"Auction View"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:t(94600).Z})),(0,o.kt)("p",null,"You can change ",(0,o.kt)("inlineCode",{parentName:"p"},"PreSaleBanner")," component with path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/PreSaleBanner/index.tsx\n")),(0,o.kt)("p",null,"This component consists from two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Left - product view ",(0,o.kt)("inlineCode",{parentName:"li"},"ArtContent"),", here can be videos or images")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/ArtContent/index.tsx\n")),(0,o.kt)("p",null,"For demonstrate video uses ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloudflare/stream-react")," library and ",(0,o.kt)("inlineCode",{parentName:"p"},"Image Antd")," for images"),(0,o.kt)("p",null,"for changing styles need send ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," through props from parent component "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<ArtContent\n  pubkey={id}\n  className="artwork-image"\n  allowMeshRender={true}\n/>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Right - product info ",(0,o.kt)("inlineCode",{parentName:"li"},"AuctionCard"),", here main info about product")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/AuctionCard/index.tsx\n")),(0,o.kt)("p",null,"This component has a props ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," where you can change global styles\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<AuctionCard\n    style={{\n      background: 'transparent',\n      width: '100%',\n      padding: 0,\n      margin: 0,\n    }}\n/>\n")),(0,o.kt)("p",null,"This component has a local styles file for customization too"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"js/packages/web/src/components/AuctionCard/index.less\n")))}d.isMDXComponent=!0},94600:function(e,n,t){n.Z=t.p+"assets/images/auction-view-6eefb4b3fb66c48da00f449a4f2abe3a.png"},86505:function(e,n){n.Z="data:image/png;base64,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"},56836:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAACWCAMAAACxQ+EtAAACiFBMVEUSEhIAAAD////q5Pz19P3g4OBTRbtVI+7x7vwkJCT9/f51dXXm3/y3t7dTRL2rq6sSEhP39/dUNNX7+v3m3fzt6fxUHvVUIfBVN9AgICAEBAQ3NzcKCgr7+/v8/P3p4/zr6+tTSLazs7ORkZH08vzo4fxUPMcYGBjl3P1UP8Xu6vvk5OTOzs7v7Pv09PRUIPPc3NxUQcBTRrhSSbP39v3v7+9VKOVUOsy6urpWJOzY2NjIyMi/v79KSkpCQkI/Pz8yMjLz8PxVHfdVJulVK+JUQMKfn58uLi48PDzj2v349/zs6PzU1NTR0dEUFBTo6OhUL9zBwcGCgoJvb29RUVE0NDQrKysbGxsODg75+f3s5vxVJetVKOdULeBVNtKtra1ZWVlHR0f5+fne3t5UOM5UQMFUQ75dXV0VFRX49/7KwPNUMtcBAQFUM9PLy8uxsbGWlpaOjo5OTk5NTU2oqKiUlJSKiop5eXlTPsOqqqqjo6OGhoZVVVUoKCjm5ubi4uJVMNpUNdN/f39iYmLw7PvFxcW9vb2vr6+ampogFz4gHDYdHR3i2f319fXx8fF9fX1ycnJpaWllZWU5OTnl3fv29vZ8YuBUO8lVRL4bFC8aGCkUExrd1Pvf2fbt7e2Jc+J7e3tfX1+ypuvNzc06HZM4MnInG1QoI0nPxvN5UfOOce9eQNdVN9LMzMzJufvDt/NxTOqYid6Cat5zW9jHx8dEK6U7Gp2cnJw7LIEpFV0iFkeynPeiifbX0PWDY+1nO+1oR+B+cM91ZcxeScleTcRsbGxnOvDu7u5dM+lQG+Opn+FPL8ZEGcBTQb5DPIs3J3uJfNZpT9ZPMsFOMcBORaRNRKM3I4A3IoA3qJTRAAAM/UlEQVR42uzXsW2DQBiG4d8U7rBMe7rGK5jeI1AzgSsmuQkiXCPmIErtKtknQpEi2b8TTIOEv/dBJzHAKz7ONsAdogBRgChAFCAKjIgCDlHAIQo4RAGHKOAQBRyigEMUcIgCDlHAWS6KJsTa8KLqGJrZUYRoeHExzIuCJCTEGVEEdkNEHZ6NIhhkPKzCaEJbeCoKtkNKvfGMf0xxceMY46Eu+Cj4UKiLU1E0BjmNi4L1kBdcFKyHvOii4D4qr56IwiCIKEAUIAoQBYgCI6KAQxRwiAIOUcAhCueUF9kiivxkGlYfxanIFlOIVLH6KPJsQblJWH0URbagwiSsPopsUSaBKIiCKIiCKIiCKO4QxY+q7bvrV1l+Xru+rYiCKPapK290aU8U0lFUfXlwT9lXRKEbRSoPjyWiEI3i0h3/1F2IQjGK9rj9x7ElCr0o0nZCIgq1KNJuUiIKrSja8+789nveh2H4GN9vT0sU3+ybi29TVRzHz/nKTeidi62PhD1abxiu4GZTEzuXzq014jq13SyUTgxua6vpHLCxV+feurkHzr0Fo8IYjyABEREIxicRjUZjfCX673juPZe13aVsow9U+Jzc/e7t+UKycz+395y73NtJig9+efQa3/50GCIAcVPT+e8ejeOXD9IpRa2zon91yX+dFKIkBcH4QZrEMv7DUnz2yiuvPCpv334lxvDkT9/xz9Xts7RJYZ5uFgFYPEO1JNNgVRgNRhEJMAmCAYwiwfb/kWL/0yrHTMtY/9vTsexPkxRVdlxDWiQZZjVGSIJMjQHXZcHnKwZj1leZDimyurtIxql+7bUtcrt6+D4t53mf2qrTIYW+ywCxY8Zh7g/0TgG95GZwdXYG0iXFJBOiueWiVRB+wPUoojQbDB3NSoUUjWaZ6PE92EgyzodbFK6u36mKEFePbYnhw3RIMQRIPsLRnQVmyU1QDmSlSYqgMOLLp5TmVnULlgxI8QQ30Z7doL9lUuhfKyws3FJ49fCzO5/duZNty+r5QqWfwYo+9VL4J2H3R694CbbGf5cU0r5cmu8MOJkYs0UZkcI4NTUVBNi43Cop3ipUOPbsq3J79VVNvVAY5a3US9ECNJAoEaBttTpnRgpvPp2xAbD07qGtxkxIUSrf1P1ZNfDU3owU3welpJce7z7O2qePJeSU3K+2z1IuhQ8YITE4gH2s1Hq9XSRnutjG16nzraPSVHNPVVSIhuxQ0GKvdBGZbV4PYPV6veVEE09aij7aDk4X1YlQMNqkopoFQxqlYDgMGLoZKbbDluw083GFU+sSc+TxKNWplmIf4COxtLc52M8coNIZAtCvTkUVjJ0TPDTRDI5xjjA6oBImmnjSUuhoJzgDe2gIMhaBI4nplIJko+XWSPH+yzIX1t2Ar16O8n6qpfACOqIlB+iwQsreN6EMC4qGfG0zHqCDT9C9gLvA19drgcXJjsORHqA0EonkEU08aSkaaatkhEKZVwLDJjyx6Ot3zNULUlqlKMCgKoUzq8U62ltLOI1HN3pCI53+6JI1pj/cfRbB7u7uAB/Hrh5PceWM+i/7u7tdE3M99rEsNubm7aXW4/JXrZaTG2SObVq3ad2pT48cZvW5I5+eY0cx7fcNS5xMtRQSFsj1pQgap/nv0gCU5hCGvgBoUGcQZ4lMGzAeO6fQxpOXIkDLBaFIsgShYhR686nMnj7PgXRKMQ47l6LdABnBycfGAwWDjxBtfy84c4TRNwCFEL+v7gACZfwD/w47ZCb7iJZfN8gc3rRp011nNmw4yOoRfhzD+agUv6ZYCh3QnEAKRPiuOYQanXqJuDEo19ale44d3lgptPHkpeiktOGiwBhcMEFGmmGfjEjuAj1tq0mnFGXoUE663dI8PB/oNahvHY5gIVKuK78ISUe0/Xnhy7CEw2G/POUERsIu57AbYoMqhd02VOGYtqDFKva0zQ9bUVRLNFyqq6v76MyTjKa6j+rqWK1jtYnVKOfkDN8upViKADCWQIop89KVv42obOOTDKfDQTilkOKk0MaTlgINlO7pD0dGQ4IwCcZILuWXozuXVqZRimFgO78b3qMnjFkgjxUn0EUYOguGiaY/dk7Rb8PlRsIwt2Agh0th2cGj/P8mfgOrGv58Y+8bew+uZzTJe6zuZbVpfRTeo7Y/UiyFCxhJIEVx9Mw6iIpv+YK1HoiTQhtPXgpTj5/KkOFmIQiI7dQ/UKMwTKvENEjxhE6nc/oqTciuVk66IYevCQ4gzEpbS7dZ/SKJEE1/rBQ9GKhlhQtUwKWI8O9QEzzXrqpOomHvvQwuhbzHqlzipTh87xJ7UyyF/gAGEkjRTTgdgMmoYlo6967FnuyzbveURgpNPGkpANE9flRHKc3ftwAEzTRL4HRSczANUqiIYxP8pBcTjh1D8U947tH0x0kRQi9RuYyzXAp1ClGEcb5TiexEUry5/k0uBatnFCnejG1NjGMXFCtSPdH0QKy9vhSVhNOMOAoIo+o4VDRSaOJJSiGaRChIBWaa7wUWKHVVcHZQakuDFJNWq/X4WOuO5X/7KEaBOjpHFwsqK0Oo1/THSjEh4ihRycKkXpGiih9br91j96GMaPh5N+PgIzJn+M6R3bvPHGJVwxWW/DnVUtQDFfGr7MsF8VJkQ6zKi6KTJ9UWWHrCVf6cnI0aKTTxJKWwCUVQEV6gw0AzjaU4jRPNBFK4sg1QWEGKipgbaR/gWr0Ul17f/fruCw/LsCXpIVbeOXKwiRUtB1nyUqqlWFw206yW0BIvRSuQR+IZwGBegjmFJp6sFANlHhNUwnQeCFE6buXY3W5DxqVwSHAvVrjYBbGCFK6Y54KzMJlXL8Vfr8u888AquMKCf6daitpBiA4SpR2Yi5diDhgmcTiwdHP1aqTg8dRJMU11EjjBGaoDxHwaCUKhRhhAxqXYCC+/4Y6tIAWxYYaoRGAnq5fi5PMyx557ccV2Sg6m/OEVOQqMTETnEnYEc+Kl8B9AsZ5wwnZ7QFl+N/DjRktUisUE8SSlGKV7yvgTTctgOW0AkEd9gwcAiFOe+lIx01KYLZjjh56VpPBilHCq3ahfgxTvKVJ8fdfKnJaD76VcCuIFrFWEo/Py9TOXQmUI6OJ75uOQGpWHGz1EYfzaODuB7ATxJKUwTNA2QRgcGBgUNubTcQDdNLdUGKwpEoQAdSHjUhjU78Q8UwIpZmHka9S2pcXGdhgda5BC/5LCVys6cU7J6VMvhd8LGMZnq8yu9s4DQCdZLkWjG2gJ5JDavjJgWj7ZNtjKmf6OFogAvxRsmJzRufK08WSlQCml7WWCIIQ6zbTCBEY5re1gH3i2UVqQcSnYz2YzK4EQEkhRAWTpSbWyPDds17MR2WZCK1mDFOTEVnaut3794Aq8fUXOnSCpl4L/VVPFEqnWSEF0Y0oXGK1EpkEEbCEDy7QAPNMFmU5NPHkpUJBPaXVe3guUOmsgUxOg1Ozw76F0TpQPKR0Fo59OZ0KKdhOE+jE3PBcTSKEvBgS7vDvRAVjKjhsgjpvXJMX+rQrnHroxp5XU/lRLwZnvkMAwhlp1mucUCkfLLADE7HbCaSuT4+4sUg+oZmXZuASaeNJSQGjIYQLk+itFqIy7cilzpENE5qUgfR4AUk9tookmcY2K14Yi3GwALCNsINYkhZ6d65KSrT8euvtGnC4pKWFBfeql4OhdFW1O840Czva4fl1FxfK43+HSxJOXgmPwuIOIJehxW7B2SErQVfhXWNPNLw1F47xTT9bMyRKFTw7dfX+idug0z5y884bYjfnfvPehL9klN2bF/Qn4+BOeKNHfkeI2kYJ8/tSuXbvY9snHm9/ZvFm7fan27/r8zrukt40U5MRTnB+/2PwMsyB+++Kbp1RO3HnB+B/27hgFYSAIo/B0qYS1SY6R2ioQK28geKIFL7DE0kYLy0BUtBMED6WChixjLAM674NlL/DqfwxFUU0XL+fDLLI6nhdv04ooDEUhYdK6bHfLl93xNOkITBGYikJ80nXZPCUxz2iJsSjaKrK+3zNvZC4KCUn2TWAIzWAUUtV5r5rJRJtRiOyz9KNsz7iq2SjENXlapmn88sYxw2w4ChHn6zJSewbbrUfx4EKzvl3L8npbN8Fx2oEoOAITIwqiUIiCKBSisBkFx2ofiIKz1gpRxIohD+AXYsLPRyHFaKAsxiMjTfxBFCAKKEQBhSigEAUUooBCFFCIAgpRQCEKKENHMRfc269jG4hhGAiCYhuECnMR7j/+Ak6Go0/MmRoWOnGc6yWKvRhnv0TRi3H6JYp7Mc6dUdiP4XZlFPZjuD5E4amYbdcxClfpYFcdozAgk/UxClVM1nWMIrUFGeLqeo7Cb3OkXWerjloWn7e7XqIId28r8lnX7rserQJRIApEgSioEgVBFARREERBEAVBFARREERBEAVBFARREERBEAVBFARREERBEAX/9wOb6h8lysTS8gAAAABJRU5ErkJggg=="}}]);