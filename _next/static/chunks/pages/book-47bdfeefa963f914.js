(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{5468:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book",function(){return e(2001)}])},2001:function(n,t,e){"use strict";e.r(t);var r=e(5666),o=e.n(r),a=e(5893),c=e(8767),i=e(8527),u=e(2846),s=e(8288),f=e(7318),h=e(7294),d=e(8764).Buffer;function l(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,o)}t.default=function(){var n,t=(0,h.useState)(),e=t[0],r=t[1];(0,c.useQuery)("authres",(n=o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://43arh28uwa.execute-api.eu-south-1.amazonaws.com/test/signup");case 2:if(200!==(t=n.sent).status){n.next=7;break}return n.abrupt("return",t.json().then((function(n){return n.authenticationRequest})));case 7:throw new Error("ERR: ".concat(t.status.toString()));case 8:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){l(a,r,o,c,i,"next",n)}function i(n){l(a,r,o,c,i,"throw",n)}c(void 0)}))}),{onSuccess:function(n){(function(n){var t=[];return new Promise((function(e,r){n.on("data",(function(n){return t.push(n)})),n.on("error",r),n.on("end",(function(){return e(d.concat(t).toString("base64"))}))}))})((0,f.image)(JSON.stringify(n),{type:"png"})).then((function(n){return r(n)})).catch(console.error)}});return(0,a.jsxs)(i.Kq,{spacing:10,direction:["column","column","column","row"],children:[(0,a.jsx)(i.gC,{spacing:10,children:(0,a.jsxs)(i.W2,{centerContent:!0,children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.X6,{as:"h3",size:"xl",fontWeight:"bold",maxWidth:"container.sm",children:"Prenota la tua donazione."})}),(0,a.jsx)(i.xv,{as:"p",mb:5,mt:5,size:"m",fontWeight:"bold",children:"Inquadra il QRCode per autorizzare la richiesta con IO Wallet."}),e&&(0,a.jsx)("img",{src:"data:image/png;base64,".concat(e),style:{maxWidth:"300px"},alt:"qrcode"})]})}),(0,a.jsx)(i.xu,{children:(0,a.jsx)(u.m$.img,{src:"".concat(s.V,"/avis-sangue.jpeg"),borderRadius:"2xl"})})]})}},2361:function(){},4616:function(){}},function(n){n.O(0,[318,774,888,179],(function(){return t=5468,n(n.s=t);var t}));var t=n.O();_N_E=t}]);