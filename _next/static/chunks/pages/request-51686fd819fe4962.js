(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{1916:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return t(8)}])},8:function(n,r,t){"use strict";t.r(r);var e=t(5666),u=t.n(e),o=t(5893),c=t(1163),a=t(1664),i=t(7318),s=t(7294),f=t(8767),h=t(3907),d=t(8269),l=t(8764).Buffer;function p(n,r,t,e,u,o,c){try{var a=n[o](c),i=a.value}catch(s){return void t(s)}a.done?r(i):Promise.resolve(i).then(e,u)}function v(n){return function(){var r=this,t=arguments;return new Promise((function(e,u){var o=n.apply(r,t);function c(n){p(o,e,u,c,a,"next",n)}function a(n){p(o,e,u,c,a,"throw",n)}c(void 0)}))}}function w(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var c,a=n[Symbol.iterator]();!(e=(c=a.next()).done)&&(t.push(c.value),!r||t.length!==r);e=!0);}catch(i){u=!0,o=i}finally{try{e||null==a.return||a.return()}finally{if(u)throw o}}return t}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(n){var r=[];return new Promise((function(t,e){n.on("data",(function(n){return r.push(n)})),n.on("error",e),n.on("end",(function(){return t(l.concat(r).toString("base64"))}))}))};r.default=function(){var n=(0,c.useRouter)(),r=(0,s.useState)(),t=r[0],e=r[1],l=(0,s.useState)(!1),p=l[0],y=l[1],E=w((0,h.Z)("auth"),1)[0];(0,s.useEffect)((function(){setTimeout((function(){return y(!0)}),5e3)}),[]),(0,d.Z)(v(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,i.image)(JSON.stringify(E),{type:"png"}),n.next=3,x(r);case 3:t=n.sent,e(t);case 5:case"end":return n.stop()}}),n)}))));var b=(0,f.useQuery)("authres",v(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://webhook.site/79636c84-8cb0-4330-b84d-974786f39119");case 2:if(!(r=n.sent).ok){n.next=7;break}return n.abrupt("return",r.text());case 7:throw new Error("ERROR");case 8:case"end":return n.stop()}}),n)}))),{enabled:p,refetchInterval:6e4,onSuccess:function(){n.push("/success")}});return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["AUTHRES: ",E]}),(0,o.jsxs)("p",{children:[b.isLoading&&"loading...",b.isError&&"ERROR: ".concat(b.error),b.data]}),(0,o.jsx)("p",{children:t&&(0,o.jsx)("img",{src:"data:image/png;base64,".concat(t),style:{maxWidth:"300px"},alt:"qrcode"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.default,{href:"/",as:"/",children:(0,o.jsx)("a",{children:"INDEX"})})})]})}},2361:function(){},4616:function(){}},function(n){n.O(0,[784,774,888,179],(function(){return r=1916,n(n.s=r);var r}));var r=n.O();_N_E=r}]);