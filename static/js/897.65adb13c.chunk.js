"use strict";(self.webpackChunklesson_redux_2=self.webpackChunklesson_redux_2||[]).push([[897],{7897:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(2791),s=t(6154),a=t(1087),c=t(5861),o=t(9439),u=t(4687),i=t.n(u),p=t(4390),l=t(2564),f={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},d=function(){var e=(0,n.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("posts")))&&void 0!==e?e:[]})),r=(0,o.Z)(e,2),t=r[0],s=r[1],a=(0,n.useState)(!1),u=(0,o.Z)(a,2),d=u[0],h=u[1],v=(0,n.useState)(null),m=(0,o.Z)(v,2),x=m[0],g=m[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,p.T6)();case 4:r=e.sent,s(r),l.Am.success("Your posts were successfully fetched!",f),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),g(e.t0.message),l.Am.error(e.t0.message,f);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{posts:t,isLoading:d,error:x}},h=t(184),v=function(){var e=d(),r=e.posts,t=e.isLoading,n=e.error;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"title-app",children:"React"}),null!==n&&(0,h.jsx)("p",{className:"c-error",children:" Oops, error."}),t&&(0,h.jsx)(s.Z1,{visible:!0,height:"100",width:"100",color:"#04e4f9",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""}),r.length>0&&r.map((function(e){return(0,h.jsxs)(a.rU,{className:"post",to:"/post/".concat(e.id),children:[(0,h.jsxs)("strong",{className:"post-id",children:["Id: ",e.id]}),(0,h.jsxs)("h4",{className:"post-title",children:[" ",e.title," "]}),(0,h.jsx)("p",{className:"post-body",children:e.body})]},e.id)}))]})}},4390:function(e,r,t){t.d(r,{DD:function(){return i},T6:function(){return u},tH:function(){return p}});var n=t(5861),s=t(4687),a=t.n(s),c=t(5294),o="https://jsonplaceholder.typicode.com",u=function(){var e=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/posts"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/posts/").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/posts/").concat(r,"/comments"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=897.65adb13c.chunk.js.map