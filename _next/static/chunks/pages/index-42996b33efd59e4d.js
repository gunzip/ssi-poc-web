(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7899)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),l=n(387),c=n(7190);var s={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),w=x[0],E=x[1],S=o.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);o.default.useEffect((function(){var e=E&&n&&i.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,d,p,{locale:t})}),[p,d,E,g,n,a]);var _={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l}))}(e,a,d,p,m,h,y,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof g?g:a&&a.locale,k=a&&a.isLocaleDomain&&i.getDomainLocale(p,N,a&&a.locales,a&&a.domainLocales);_.href=k||i.addBasePath(i.addLocale(p,N,a&&a.defaultLocale))}return o.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),s=r(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(7294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},7899:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(5666),a=n.n(r),o=n(5893),i=n(8767),l=n(1163),c=n(3907),s=n(8527),u=n(7375),f=n(2846),d=n(5031),p=n(8554),v=n.n(p),m=n(7294),h=n(6450),y=n(917),g={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},b=(0,f.m$)("span",{baseStyle:g});d.Ts&&(b.displayName="VisuallyHidden");var x=(0,f.m$)("input",{baseStyle:g});d.Ts&&(x.displayName="VisuallyHiddenInput");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=["label","thickness","speed","emptyColor","className"],S=(0,y.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),_=(0,f.Gp)((function(e,t){var n=(0,f.mq)("Spinner",e),r=(0,f.Lr)(e),a=r.label,o=void 0===a?"Loading...":a,i=r.thickness,l=void 0===i?"2px":i,c=r.speed,s=void 0===c?"0.45s":c,u=r.emptyColor,p=void 0===u?"transparent":u,v=r.className,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,E),y=(0,d.cx)("chakra-spinner",v),g=w({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:l,borderBottomColor:p,borderLeftColor:p,animation:S+" "+s+" linear infinite"},n);return m.createElement(f.m$.div,w({ref:t,__css:g,className:y},h),o&&m.createElement(b,null,o))}));function N(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}d.Ts&&(_.displayName="Spinner");var I=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],C=(0,h.kr)({strict:!1,name:"ButtonGroupContext"}),j=C[0],O=C[1],R=(0,f.Gp)((function(e,t){var n=e.size,r=e.colorScheme,a=e.variant,o=e.className,i=e.spacing,l=void 0===i?"0.5rem":i,c=e.isAttached,s=e.isDisabled,u=N(e,I),p=(0,d.cx)("chakra-button__group",o),v=m.useMemo((function(){return{size:n,colorScheme:r,variant:a,isDisabled:s}}),[n,r,a,s]),h={display:"inline-flex"};return h=k({},h,c?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:l}}),m.createElement(j,{value:v},m.createElement(f.m$.div,k({ref:t,role:"group",__css:h,className:p},u)))}));d.Ts&&(R.displayName="ButtonGroup");var L=["label","placement","spacing","children","className","__css"],T=function(e){var t=e.label,n=e.placement;e.spacing;var r=e.children,a=void 0===r?m.createElement(_,{color:"currentColor",width:"1em",height:"1em"}):r,o=e.className,i=e.__css,l=N(e,L),c=(0,d.cx)("chakra-button__spinner",o),s="start"===n?"marginEnd":"marginStart",u=m.useMemo((function(){var e;return k(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[s]=t?"0.5rem":0,e.fontSize="1em",e.lineHeight="normal",e),i)}),[i,t,s]);return m.createElement(f.m$.div,k({className:c},l,{__css:u}),a)};d.Ts&&(T.displayName="ButtonSpinner");var A=["children","className"],M=function(e){var t=e.children,n=e.className,r=N(e,A),a=m.isValidElement(t)?m.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,d.cx)("chakra-button__icon",n);return m.createElement(f.m$.span,k({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:o}),a)};d.Ts&&(M.displayName="ButtonIcon");var z=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],B=(0,f.Gp)((function(e,t){var n=O(),r=(0,f.mq)("Button",k({},n,e)),a=(0,f.Lr)(e),o=a.isDisabled,i=void 0===o?null==n?void 0:n.isDisabled:o,l=a.isLoading,c=a.isActive,s=a.isFullWidth,p=a.children,h=a.leftIcon,y=a.rightIcon,g=a.loadingText,b=a.iconSpacing,x=void 0===b?"0.5rem":b,w=a.type,E=a.spinner,S=a.spinnerPlacement,_=void 0===S?"start":S,I=a.className,C=a.as,j=N(a,z),R=m.useMemo((function(){var e,t=v()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return k({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:s?"100%":"auto"},r,!!n&&{_focus:t})}),[r,n,s]),L=function(e){var t=m.useState(!e),n=t[0],r=t[1];return{ref:m.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(C),A=L.ref,M=L.type,B={rightIcon:y,leftIcon:h,iconSpacing:x,children:p};return m.createElement(f.m$.button,k({disabled:i||l,ref:(0,u.qq)(t,A),as:C,type:null!=w?w:M,"data-active":(0,d.PB)(c),"data-loading":(0,d.PB)(l),__css:R,className:(0,d.cx)("chakra-button",I)},j),l&&"start"===_&&m.createElement(T,{className:"chakra-button__spinner--start",label:g,placement:"start"},E),l?g||m.createElement(f.m$.span,{opacity:0},m.createElement(D,B)):m.createElement(D,B),l&&"end"===_&&m.createElement(T,{className:"chakra-button__spinner--end",label:g,placement:"end"},E))}));function D(e){var t=e.leftIcon,n=e.rightIcon,r=e.children,a=e.iconSpacing;return m.createElement(m.Fragment,null,t&&m.createElement(M,{marginEnd:a},t),r,n&&m.createElement(M,{marginStart:a},n))}d.Ts&&(B.displayName="Button");var P=["icon","children","isRound","aria-label"],W=(0,f.Gp)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,o=e["aria-label"],i=N(e,P),l=n||r,c=m.isValidElement(l)?m.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return m.createElement(B,k({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":o},i),c)}));d.Ts&&(W.displayName="IconButton");var $=n(8288);var q=n(1664);function G(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,a)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=function(){var e,t=(0,l.useRouter)(),n=H((0,c.Z)("auth"),2)[1],r=H((0,c.Z)("state"),2)[1],u=(0,i.useMutation)("authres",(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://43arh28uwa.execute-api.eu-south-1.amazonaws.com/test/signup");case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.json().then((function(e){return e.authenticationRequest})));case 7:throw new Error("ERR: ".concat(t.status.toString()));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){G(o,r,a,i,l,"next",e)}function l(e){G(o,r,a,i,l,"throw",e)}i(void 0)}))}),{onSuccess:function(e){n(e);try{var a=function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}(e);console.log(a),r(a.state)}catch(o){console.error("Error parsing auth res",o)}t.push("/request")}});return(0,o.jsxs)(s.Kq,{spacing:10,direction:["column","column","column","row"],children:[(0,o.jsxs)(s.gC,{pt:20,spacing:10,children:[(0,o.jsxs)(s.X6,{as:"h3",size:"xl",fontWeight:"bold",maxWidth:"container.sm",children:["Donare il sangue \xe8 un gesto semplice che pu\xf2"," ",(0,o.jsx)(s.xv,{as:"span",color:"avis.strong",children:"salvare la vita"})," ","di molte persone"]}),(0,o.jsxs)(s.W2,{centerContent:!0,children:[!u.isIdle&&(0,o.jsx)(_,{}),u.isIdle&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B,{marginBottom:2,backgroundColor:"transparent",color:"black",borderWidth:"3px",borderStyle:"solid",borderColor:"black",fontWeight:"700",onClick:function(){u.mutate()},borderRadius:"2xl",w:"l",_hover:{backgroundColor:"blue.300",color:"white"},_pressed:{backgroundColor:"blue.700",color:"white"},children:"DIVENTA DONATORE"}),(0,o.jsx)(s.xv,{as:"small",textAlign:"center",children:"con IO Wallet"}),(0,o.jsx)(s.xv,{as:"small",textAlign:"center",children:"o"}),(0,o.jsx)(s.xv,{as:"small",textAlign:"center",color:"avis.strong",textDecoration:"underline",fontWeight:"700",children:(0,o.jsx)(q.default,{href:"/book",children:"prenota la tua donazione"})})]})]})]}),(0,o.jsx)(s.xu,{children:(0,o.jsx)(f.m$.img,{src:"".concat($.V,"/avis-sangue.jpeg"),borderRadius:"2xl"})})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},3907:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=function(){};var o="undefined"!==typeof window,i=function(e,t,n){if(!o)return[t,a,a];if(!e)throw new Error("useLocalStorage key may not be falsy");var i=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,l=(0,r.useRef)((function(e){try{var r=n?n.raw?String:n.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?i(a):(t&&localStorage.setItem(e,r(t)),t)}catch(c){return t}})),c=(0,r.useState)((function(){return l.current(e)})),s=c[0],u=c[1];(0,r.useLayoutEffect)((function(){return u(l.current(e))}),[e]);var f=(0,r.useCallback)((function(t){try{var r="function"===typeof t?t(s):t;if("undefined"===typeof r)return;var a=void 0;a=n?n.raw?"string"===typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,a),u(i(a))}catch(c){}}),[e,u]),d=(0,r.useCallback)((function(){try{localStorage.removeItem(e),u(void 0)}catch(c){}}),[e,u]);return[s,f,d]}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);