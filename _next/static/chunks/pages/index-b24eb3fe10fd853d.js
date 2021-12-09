(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9276)}])},9276:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var r=t(5666),a=t.n(r),i=t(5893),o=t(8767),s=t(1163),l=t(3907),c=t(8527),u=t(7375),d=t(2846),p=t(5031),f=t(8554),m=t.n(f),h=t(7294),v=t(6450),g=t(917),b={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},y=(0,d.m$)("span",{baseStyle:b});p.Ts&&(y.displayName="VisuallyHidden");var x=(0,d.m$)("input",{baseStyle:b});p.Ts&&(x.displayName="VisuallyHiddenInput");function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var N=["label","thickness","speed","emptyColor","className"],w=(0,g.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),_=(0,d.Gp)((function(e,n){var t=(0,d.mq)("Spinner",e),r=(0,d.Lr)(e),a=r.label,i=void 0===a?"Loading...":a,o=r.thickness,s=void 0===o?"2px":o,l=r.speed,c=void 0===l?"0.45s":l,u=r.emptyColor,f=void 0===u?"transparent":u,m=r.className,v=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(r,N),g=(0,p.cx)("chakra-spinner",m),b=S({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:f,borderLeftColor:f,animation:w+" "+c+" linear infinite"},t);return h.createElement(d.m$.div,S({ref:n,__css:b,className:g},v),i&&h.createElement(y,null,i))}));function E(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}p.Ts&&(_.displayName="Spinner");var I=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],C=(0,v.kr)({strict:!1,name:"ButtonGroupContext"}),O=C[0],j=C[1],T=(0,d.Gp)((function(e,n){var t=e.size,r=e.colorScheme,a=e.variant,i=e.className,o=e.spacing,s=void 0===o?"0.5rem":o,l=e.isAttached,c=e.isDisabled,u=E(e,I),f=(0,p.cx)("chakra-button__group",i),m=h.useMemo((function(){return{size:t,colorScheme:r,variant:a,isDisabled:c}}),[t,r,a,c]),v={display:"inline-flex"};return v=k({},v,l?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:s}}),h.createElement(O,{value:m},h.createElement(d.m$.div,k({ref:n,role:"group",__css:v,className:f},u)))}));p.Ts&&(T.displayName="ButtonGroup");var R=["label","placement","spacing","children","className","__css"],z=function(e){var n=e.label,t=e.placement;e.spacing;var r=e.children,a=void 0===r?h.createElement(_,{color:"currentColor",width:"1em",height:"1em"}):r,i=e.className,o=e.__css,s=E(e,R),l=(0,p.cx)("chakra-button__spinner",i),c="start"===t?"marginEnd":"marginStart",u=h.useMemo((function(){var e;return k(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[c]=n?"0.5rem":0,e.fontSize="1em",e.lineHeight="normal",e),o)}),[o,n,c]);return h.createElement(d.m$.div,k({className:l},s,{__css:u}),a)};p.Ts&&(z.displayName="ButtonSpinner");var B=["children","className"],P=function(e){var n=e.children,t=e.className,r=E(e,B),a=h.isValidElement(n)?h.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,i=(0,p.cx)("chakra-button__icon",t);return h.createElement(d.m$.span,k({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:i}),a)};p.Ts&&(P.displayName="ButtonIcon");var A=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],L=(0,d.Gp)((function(e,n){var t=j(),r=(0,d.mq)("Button",k({},t,e)),a=(0,d.Lr)(e),i=a.isDisabled,o=void 0===i?null==t?void 0:t.isDisabled:i,s=a.isLoading,l=a.isActive,c=a.isFullWidth,f=a.children,v=a.leftIcon,g=a.rightIcon,b=a.loadingText,y=a.iconSpacing,x=void 0===y?"0.5rem":y,S=a.type,N=a.spinner,w=a.spinnerPlacement,_=void 0===w?"start":w,I=a.className,C=a.as,O=E(a,A),T=h.useMemo((function(){var e,n=m()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return k({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:c?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,c]),R=function(e){var n=h.useState(!e),t=n[0],r=n[1];return{ref:h.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(C),B=R.ref,P=R.type,L={rightIcon:g,leftIcon:v,iconSpacing:x,children:f};return h.createElement(d.m$.button,k({disabled:o||s,ref:(0,u.qq)(n,B),as:C,type:null!=S?S:P,"data-active":(0,p.PB)(l),"data-loading":(0,p.PB)(s),__css:T,className:(0,p.cx)("chakra-button",I)},O),s&&"start"===_&&h.createElement(z,{className:"chakra-button__spinner--start",label:b,placement:"start"},N),s?b||h.createElement(d.m$.span,{opacity:0},h.createElement($,L)):h.createElement($,L),s&&"end"===_&&h.createElement(z,{className:"chakra-button__spinner--end",label:b,placement:"end"},N))}));function $(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return h.createElement(h.Fragment,null,n&&h.createElement(P,{marginEnd:a},n),r,t&&h.createElement(P,{marginStart:a},t))}p.Ts&&(L.displayName="Button");var D=["icon","children","isRound","aria-label"],q=(0,d.Gp)((function(e,n){var t=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],o=E(e,D),s=t||r,l=h.isValidElement(s)?h.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return h.createElement(L,k({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},o),l)}));function G(e,n,t,r,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function W(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}p.Ts&&(q.displayName="IconButton");var J=function(){var e,n=(0,s.useRouter)(),t=W((0,l.Z)("auth"),2)[1],r=(0,o.useMutation)("authres",(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://css8dhhvhg.execute-api.eu-south-1.amazonaws.com/test/signup ");case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e.authenticationRequest})));case 7:throw new Error("ERR: ".concat(n.status.toString()));case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){G(i,r,a,o,s,"next",e)}function s(e){G(i,r,a,o,s,"throw",e)}o(void 0)}))}),{onSuccess:function(e){t(e),n.push("/request")}});return(0,i.jsxs)(c.Kq,{spacing:10,direction:["column","column","column","row"],children:[(0,i.jsxs)(c.gC,{pt:20,spacing:10,children:[(0,i.jsxs)(c.X6,{as:"h3",size:"xl",fontWeight:"bold",maxWidth:500,children:["Donare il sangue \xe8 un gesto semplice che pu\xf2"," ",(0,i.jsx)(c.xv,{as:"span",color:"avis.strong",children:"salvare la vita"})," ","di molte persone"]}),(0,i.jsxs)(c.xu,{children:[!r.isIdle&&(0,i.jsx)(_,{}),r.isIdle&&(0,i.jsx)(L,{backgroundColor:"transparent",color:"black",borderWidth:"3px",borderStyle:"solid",borderColor:"black",fontWeight:"700",onClick:function(){r.mutate()},borderRadius:"2xl",w:"l",_hover:{backgroundColor:"blue.300",color:"white"},_pressed:{backgroundColor:"blue.700",color:"white"},children:"DONACI IL TUO SANGUE"})]})]}),(0,i.jsx)(c.xu,{children:(0,i.jsx)(d.m$.img,{src:"".concat("/ssi-poc-web","/avis-sangue.jpeg"),borderRadius:"2xl"})})]})}},1163:function(e,n,t){e.exports=t(387)},3907:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),a=function(){};var i="undefined"!==typeof window,o=function(e,n,t){if(!i)return[n,a,a];if(!e)throw new Error("useLocalStorage key may not be falsy");var o=t?t.raw?function(e){return e}:t.deserializer:JSON.parse,s=(0,r.useRef)((function(e){try{var r=t?t.raw?String:t.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?o(a):(n&&localStorage.setItem(e,r(n)),n)}catch(l){return n}})),l=(0,r.useState)((function(){return s.current(e)})),c=l[0],u=l[1];(0,r.useLayoutEffect)((function(){return u(s.current(e))}),[e]);var d=(0,r.useCallback)((function(n){try{var r="function"===typeof n?n(c):n;if("undefined"===typeof r)return;var a=void 0;a=t?t.raw?"string"===typeof r?r:JSON.stringify(r):t.serializer?t.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,a),u(o(a))}catch(l){}}),[e,u]),p=(0,r.useCallback)((function(){try{localStorage.removeItem(e),u(void 0)}catch(l){}}),[e,u]);return[c,d,p]}}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);