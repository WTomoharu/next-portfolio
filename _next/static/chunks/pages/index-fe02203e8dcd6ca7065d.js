(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},s=n(1063),o=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),d=i.default.useMemo((function(){var t=s.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],o=n[1];return{href:i,as:e.as?s.resolveHref(a,e.as):o||i}}),[a,e.href,e.as]),f=d.href,m=d.as,x=e.children,h=e.replace,p=e.shallow,v=e.scroll,b=e.locale;"string"===typeof x&&(x=i.default.createElement("a",null,x));var g=(t=i.default.Children.only(x))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),y=r(j,2),w=y[0],N=y[1],k=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=N&&n&&s.isLocalURL(f),t="undefined"!==typeof b?b:a&&a.locale,r=l[f+"%"+m+(t?"%"+t:"")];e&&!r&&u(a,f,m,{locale:t})}),[m,f,N,b,n,a]);var O={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:o}))}(e,a,f,m,h,p,v,b)},onMouseEnter:function(e){s.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:a&&a.locale,C=a&&a.isLocaleDomain&&s.getDomainLocale(m,S,a&&a.locales,a&&a.domainLocales);O.href=C||s.addBasePath(s.addLocale(m,S,a&&a.defaultLocale))}return i.default.cloneElement(t,O)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=a.useRef(),l=a.useState(!1),u=r(l,2),d=u[0],f=u[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,s=r.elements;return s.set(e,t),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[m,d]};var a=n(7294),i=n(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},3950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=[{name:"TypeScript",text:"\u73fe\u5728\u3001\u79c1\u304c\u30e1\u30a4\u30f3\u3067\u66f8\u3044\u3066\u3044\u308b\u8a00\u8a9e\u3002\u578b\u306e\u8868\u73fe\u529b\u306e\u9ad8\u304f\u3001\u4f7f\u3044\u5fc3\u5730\u304c\u826f\u304f\u3066\u597d\u304d\u3002"},{name:"JavaScript",text:"HTML\u306e\u30a4\u30f3\u30e9\u30a4\u30f3\u3084\u3001\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\u306e\u74b0\u5883\u304c\u4f5c\u308c\u306a\u3044\u969b\u306b\u306f\u4f7f\u3046\u3053\u3068\u3082\u3042\u308b\u3002\u306a\u308b\u3079\u304f\u306a\u3089TS\u306b\u3057\u305f\u3044\u3002"},{name:"React",text:"\u73fe\u5728\u3001\u79c1\u304c\u30e1\u30a4\u30f3\u3067\u5229\u7528\u3057\u3066\u3044\u308bWeb\u30d5\u30ed\u30f3\u30c8FW\u3002webpack\u30fbesbuild\u30fbtsc\u306a\u3069\u3092\u4f7f\u3044\u3001\u81ea\u529b\u3067\u74b0\u5883\u69cb\u7bc9\u3082\u53ef\u80fd\u3002"},{name:"Vue",text:"\u79c1\u306e\u521d\u3081\u3066\u306eWeb\u30d5\u30ed\u30f3\u30c8FW\u3002\u73fe\u5728\u3082\u3055\u304f\u3063\u3068\u30d5\u30ed\u30f3\u30c8\u3092\u4f5c\u308b\u3068\u304d\u306a\u3069\u306b\u3001CDN\u3092\u901a\u3057\u3066\u4f7f\u3046\u3053\u3068\u3082\u3042\u308b\u3002"},{name:"NodeJS\u30fbTS",text:"JS\u30fbTS\u3092Web\u4ee5\u5916\u3067\u52d5\u4f5c\u3055\u305b\u308b\u305f\u3081\u306e\u74b0\u5883\u3001\u30d5\u30ed\u30f3\u30c8\u306e\u74b0\u5883\u69cb\u7bc9\u304b\u3089\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u4f5c\u6210\u307e\u3067\u5e45\u5e83\u304f\u4f7f\u3046"},{name:"Express",text:"\u30b7\u30f3\u30d7\u30eb\u306a\u69cb\u9020\u304c\u597d\u304d\u3067\u3001RestAPI\u4f5c\u6210\u3067\u306f\u597d\u3093\u3067\u4f7f\u3063\u3066\u3044\u308b"},{name:"Python",text:"\u79c1\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3067\u306e\u7b2c\u4e00\u8a00\u8a9e\u3001\u73fe\u5728\u306f\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044"},{name:"Fast API",text:"Python\xd7RestAPI\u306e\u5b9f\u88c5\u306b\u5229\u7528\u3002\u6614\u306fFlask\u3092\u4f7f\u3063\u3066\u3044\u305f\u304c\u6700\u8fd1\u306f\u3053\u3061\u3089\u3002\u7d14\u7c8b\u306b\u4f7f\u3044\u5fc3\u5730\u304c\u3044\u3044\u3002"}],a=[{name:"Next-Portfolio",id:void 0,text:"\u3053\u306e\u30b5\u30a4\u30c8\u306e\u3053\u3068\u3002\u6280\u8853\u9078\u5b9a\u306f\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u3001\u304b\u3064\u7121\u96e3\u306a\u3082\u306e\u3092\u63a1\u7528\u3002CICD\u306e\u5b9f\u8df5\u904b\u7528\u306b\u3082\u521d\u6311\u6226\u3002",tags:["TypeScript","React","Next.JS","Tailwind.css","GitHub Actions"],links:[{icon:"Site",link:"https://wtomoharu.github.io/next-portfolio/"},{icon:"GitHub",link:"https://github.com/WTomoharu/next-portfolio"}]},{name:"Git-Commit-Viewer",id:void 0,text:"Git\u306eCommit\u3092\u65e5\u4ed8\u9806\u306b\u8868\u793a\u3059\u308b\u30de\u30af\u30ed\u3002\u590f\u306e\u7d42\u308f\u308a\u306b\u3001\u81ea\u5206\u304c\u3057\u305f\u3053\u3068\u3092\u632f\u308a\u8fd4\u308a\u305f\u304f\u3066\u4f5c\u3063\u305f\u3002",tags:["Node.js","git","git-log","Vue","Vue v3"],links:[{icon:"Qiita",link:"https://qiita.com/watatomo1216/items/0afb61471e93faa88ffe"},{icon:"GitHub",link:"https://github.com/WTomoharu/git-commit-viewer"}]},{name:"\u304a\u9762\u5c4b",id:"omenya",text:"\u304a\u76c6de\u30cf\u30c3\u30ab\u30bd\u30f3\u306e\u5171\u540c\u5236\u4f5c\u4f5c\u54c1\u3002\u8ab2\u984c\u306f\u5c4b\u53f0\u3067\u3001\u304a\u9762\u3092\u30c6\u30fc\u30de\u306b\u4f5c\u6210\u3057\u305f\u3002",tags:["TypeScript","React","Next.JS","Vercel","Tailwind.css","Firebase"],links:[{icon:"Site",link:"https://obon-de-hackathon.vercel.app"},{icon:"GitHub",link:"https://github.com/Ossamoon/obon-de-hackathon"}]},{name:"Vue-Original-Calendar",id:void 0,text:"VueCDN\u3092\u4f7f\u3063\u3066\u3001\u3055\u304f\u3063\u3068\u81ea\u5206\u304c\u4f7f\u3046\u7528\u306e\u30ab\u30ec\u30f3\u30c0\u30fc\u3092\u4f5c\u3063\u305f\u3002PC\u306e\u6a2a\u9577\u753b\u9762\u3092\u6700\u5927\u9650\u751f\u304b\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8",tags:["Vue","CSS-Animation"],links:[{icon:"Site",link:"https://wtomoharu.github.io/vue-original-calendar"},{icon:"GitHub",link:"https://github.com/WTomoharu/vue-original-calendar"}]},{name:"\u6620\u753b\u304b\u3089\u306e\u8131\u51fa",id:"escape-from-beverly-hills",text:"\u6a2a\u30b9\u30af\u30ed\u30fc\u30eb\u3092\u57fa\u8abf\u3068\u3057\u305f\u3001\u8131\u51fa\u30b2\u30fc\u30e0\u3002N\u9ad8\u306e\u6388\u696d\u6210\u679c\u7269\u3002\u4ed6\u306e\u751f\u5f92\u3068\u306e\u5171\u540c\u5236\u4f5c\u4f5c\u54c1\u3002",tags:["TypeScript","React","Next.JS","Tailwind.css","GitHub Actions"],links:[{icon:"Site",link:"https://n-tomoharu-watanabe.github.io/alpha-yokohama-D-17/"},{icon:"GitHub",link:"https://github.com/n-tomoharu-watanabe/alpha-yokohama-D-17"}]}],i=[{name:"Vue Dashed Border Card",id:void 0,text:"\u7834\u7dda\u3092\u67a0\u3092\u57fa\u8abf\u3068\u3057\u305f\u3001\u753b\u50cf\u306e\u30c6\u30ad\u30b9\u30c8\u304c\u30bb\u30c3\u30c8\u306b\u306a\u3063\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",tags:["Vue","Vue3"],links:[{icon:"Site",link:"https://wtomoharu.github.io/vue-dashed-border-card/"},{icon:"GitHub",link:"https://github.com/WTomoharu/vue-dashed-border-card"}]},{name:"Vue Img in Info",id:void 0,text:"\u753b\u50cf\u306e\u4e2d\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u57cb\u3081\u8fbc\u3080\u3053\u3068\u3092\u7279\u5fb4\u3068\u3057\u305f\u3001\u753b\u50cf\u306e\u30c6\u30ad\u30b9\u30c8\u304c\u30bb\u30c3\u30c8\u306b\u306a\u3063\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",tags:["Vue","Vue3"],links:[{icon:"Site",link:"https://wtomoharu.github.io/vue-img-in-info/"},{icon:"GitHub",link:"https://github.com/WTomoharu/vue-img-in-info"}]}];function s(e){return e.replace(/(\u30fb|\.)/gm,"-").replace(/(?<=([a-z]))\s*?[A-Z]/gm,(function(e){return"-".concat(e.trim().toLowerCase())})).replace(/[A-Z]/gm,(function(e){return"".concat(e.toLowerCase())}))}var o=n(5893),c=function(e){var t=e.title,n=e.text;return(0,o.jsx)("div",{className:"xl:w-1/2 w-full p-2",id:"tag-".concat(s(t)),children:(0,o.jsx)("div",{className:"bg-gray-100 p-4 rounded",children:(0,o.jsxs)("div",{className:"flex flex-nowrap items-center",children:[(0,o.jsx)("div",{className:"hidden sm:block",children:(0,o.jsx)("i",{className:"tech-icon-".concat(s(t)," text-8xl text-gray-600 align-middle")})}),(0,o.jsxs)("div",{className:"sm:ml-4",children:[(0,o.jsx)("h4",{className:"text-2xl",children:t}),(0,o.jsx)("p",{className:"mb-2 xl:h-18",children:n})]})]})})})},l=n(1664),u=n(4942);function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=["src"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){e.src;var t=d(e,f);try{return(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()).srcSet,type:"image/webp"}),(0,o.jsx)("source",{srcSet:Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()),type:"image/jpeg"}),(0,o.jsx)("img",x({src:Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}())},t))]})}catch(n){return null}}var p=function(e){var t=e.work,n=t.name,a=t.id,i=t.text,c=t.tags,u=t.links;return(0,o.jsx)("div",{className:"xl:w-1/3 md:w-1/2 w-full p-2 flex",id:"woek-".concat(null!==a&&void 0!==a?a:s(n)),children:(0,o.jsxs)("div",{className:"bg-gray-100 p-4 rounded flex-grow",children:[(0,o.jsx)("div",{children:(0,o.jsx)(h,{src:"works/".concat(s(null!==a&&void 0!==a?a:n),".png"),className:"max-w-full h-56 m-auto"})}),(0,o.jsxs)("h4",{className:"py-2 text-3xl",children:[(0,o.jsx)("span",{className:"text-".concat(n.length<20?3:2,"xl"),children:n}),u.map((function(e,t){var n,r=e.link,a=e.icon;return(0,o.jsx)("a",{href:r,className:"text-blue-700",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"tech-icon-".concat(s(null!==(n={Site:"OpenInNew"}[a])&&void 0!==n?n:a)," align-middle ml-1 -mt-1")})},t)}))]}),(0,o.jsx)("p",{className:"pb-2",children:i}),(0,o.jsx)("div",{className:"flex flex-wrap",children:c.map((function(e,t){return r.map((function(e){return e.name})).includes(e)?(0,o.jsx)("span",{className:"px-2 py-0.5 mr-1 mb-1 text-gray-800 bg-gray-200 rounded underline",children:(0,o.jsx)(l.default,{href:"#tag-".concat(s(e)),children:"#".concat(e)})},t):(0,o.jsx)("span",{className:"px-2 py-0.5 mr-1 mb-1 text-gray-800 bg-gray-200 rounded",children:"#".concat(e)},t)}))})]})})},v=function(){return(0,o.jsx)("div",{style:{minWidth:"400px"},children:(0,o.jsxs)("main",{children:[(0,o.jsx)("section",{className:"max-w-6xl py-4 mx-auto",children:(0,o.jsxs)("div",{className:"flex flex-nowrap justify-center text-center md:text-left",children:[(0,o.jsx)("div",{className:"pr-4 hidden md:block",children:(0,o.jsx)("div",{className:"w-2 h-full bg-green-500 rounded"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-4xl md:text-6xl text-green-500 my-2",style:{fontFamily:"\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 ProN"},children:"Tomoharu Watanabe"}),(0,o.jsxs)("h2",{className:"text-xl md:text-2xl",children:["\u4e3b\u306bWeb\u30d5\u30ed\u30f3\u30c8\u3092\u66f8\u3044\u3066\u3044\u308b\u3001",(0,o.jsx)("br",{className:"md:hidden"}),"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u597d\u304d\u306e\u4eba\u3002",(0,o.jsx)("br",{}),"2004\u5e74\u751f\u307e\u308c\u3001\u73fe\u572816\u6b73\u3002",(0,o.jsx)("br",{className:"md:hidden"}),"N\u9ad8\u7b49\u5b66\u6821\u5728\u7c4d\u30015\u671f\u751f\uff082\u5e74\u751f\uff09"]})]})]})}),(0,o.jsxs)("section",{className:"max-w-6xl p-2 mx-auto",children:[(0,o.jsx)("div",{className:"flex",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-4xl",children:"Works"}),(0,o.jsx)("div",{className:"w-full h-1 bg-green-500 rounded"})]})}),(0,o.jsx)("div",{className:"flex flex-wrap pt-4 justify-center md:justify-start",children:a.map((function(e,t){return(0,o.jsx)(p,{work:e},t)}))})]}),(0,o.jsxs)("section",{className:"max-w-6xl p-2 mx-auto",children:[(0,o.jsx)("div",{className:"flex",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-3xl md:text-4xl",children:"Mini-Works & Components"}),(0,o.jsx)("div",{className:"w-full h-1 bg-green-500 rounded"})]})}),(0,o.jsx)("div",{className:"flex flex-wrap pt-4 justify-center md:justify-start",children:i.map((function(e,t){return(0,o.jsx)(p,{work:e},t)}))})]}),(0,o.jsxs)("section",{className:"max-w-6xl p-2 mx-auto",children:[(0,o.jsx)("div",{className:"flex",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-3xl md:text-4xl",children:"Languages & Frameworks"}),(0,o.jsx)("div",{className:"w-full h-1 bg-green-500 rounded"})]})}),(0,o.jsx)("div",{className:"flex flex-wrap pt-4 justify-center md:justify-start",children:r.map((function(e,t){return(0,o.jsx)(c,{title:e.name,text:e.text},t)}))})]})]})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3950)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);