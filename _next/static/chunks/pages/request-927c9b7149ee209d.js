(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{1916:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return e(8)}])},8:function(n,t,e){"use strict";e.r(t);var r=e(5666),u=e.n(r),c=e(5893),o=e(1163),i=e(7318),a=e(7294),s=e(8767),f=e(3907),l=e(8269),h=e(8527),p=e(2846),d=e(8764).Buffer;function v(n,t,e,r,u,c,o){try{var i=n[c](o),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,u)}function w(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var c=n.apply(t,e);function o(n){v(c,r,u,o,i,"next",n)}function i(n){v(c,r,u,o,i,"throw",n)}o(void 0)}))}}function x(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,u=!1,c=void 0;try{for(var o,i=n[Symbol.iterator]();!(r=(o=i.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(a){u=!0,c=a}finally{try{r||null==i.return||i.return()}finally{if(u)throw c}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(n){var t=[];return new Promise((function(e,r){n.on("data",(function(n){return t.push(n)})),n.on("error",r),n.on("end",(function(){return e(d.concat(t).toString("base64"))}))}))};t.default=function(){var n=(0,o.useRouter)(),t=(0,a.useState)(),e=t[0],r=t[1],d=(0,a.useState)(!1),v=d[0],b=d[1],g=x((0,f.Z)("auth"),1)[0];(0,a.useEffect)((function(){setTimeout((function(){return b(!0)}),2e4)}),[]),(0,l.Z)(w(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,i.image)(JSON.stringify(g),{type:"png"}),n.next=3,m(t);case 3:e=n.sent,r(e);case 5:case"end":return n.stop()}}),n)}))));var y;(0,s.useQuery)("authres",w(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://webhook.site/79636c84-8cb0-4330-b84d-974786f39119");case 2:if(!(t=n.sent).ok){n.next=7;break}return n.abrupt("return",t.text());case 7:throw new Error("ERROR");case 8:case"end":return n.stop()}}),n)}))),{enabled:v,refetchInterval:6e4,onSuccess:function(){n.push("/success")}});return(0,c.jsxs)(h.Kq,{spacing:10,direction:["column","column","column","row"],children:[(0,c.jsx)(h.gC,{pt:20,spacing:10,children:(0,c.jsx)(h.xu,{children:e&&(0,c.jsx)("img",{src:"data:image/png;base64,".concat(e),style:{maxWidth:"300px"},alt:"qrcode"})})}),(0,c.jsx)(h.xu,{children:(0,c.jsx)(p.m$.img,{src:"".concat(null!==(y="/ssi-poc-web")?y:"","/avis-sangue.jpeg"),borderRadius:"2xl"})})]})}},2361:function(){},4616:function(){}},function(n){n.O(0,[326,774,888,179],(function(){return t=1916,n(n.s=t);var t}));var t=n.O();_N_E=t}]);