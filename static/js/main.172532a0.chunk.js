(this["webpackJsonpreactjs-firebase-authentication-with-private-routes"]=this["webpackJsonpreactjs-firebase-authentication-with-private-routes"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c(29),r=c.n(a),s=c(28),i=c(8),j=c(24),b=c(26),o=c(11),u=c(17),l=c(30),O=c(7),p=(Object(l.a)({apiKey:"AIzaSyC9l1t-l55GCkR71kt_xhB-Npa5E6sOIUs",authDomain:"testfirebase-5d3b6.firebaseapp.com",databaseURL:"https://testfirebase-5d3b6.firebaseio.com",projectId:"testfirebase-5d3b6",storageBucket:"testfirebase-5d3b6.appspot.com",messagingSenderId:"799266533322",appId:"1:799266533322:web:e6f1c2292b346cc098e933",measurementId:"G-H9NLL1YNME"}),Object(n.createContext)()),d=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),i=Object(o.a)(s,2);i[0],i[1];return console.log("datauser",a),Object(n.useEffect)((function(){var e=Object(u.c)(Object(u.b)(),r);return function(){return e}}),[]),Object(O.jsx)(p.Provider,Object(b.a)({value:a},e))},h=function(){var e=Object(n.useContext)(p);return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:null!=e})},x=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Welcome "}),Object(O.jsx)("button",{onClick:function(){return Object(u.e)(Object(u.b)())},children:" SignOut "})]})},m=c(1),f=c(0),v=c.n(f),g=function(){var e=Object(n.useCallback)(function(){var e=Object(m.a)(v.a.mark((function e(t){var c,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=Object(o.a)(t.target.elements,2),n=c[0],a=c[1],r=Object(u.b)(),e.prev=3,e.next=6,Object(u.d)(r,n.value,a.value);case 6:console.log("login succes"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:e,children:[Object(O.jsx)("input",{name:"email",placeholder:"email",type:"email"}),Object(O.jsx)("input",{name:"password",placeholder:"password",type:"password"}),Object(O.jsx)("button",{type:"submit",children:" Login "})]})]})},w=function(){var e=Object(n.useCallback)(function(){var e=Object(m.a)(v.a.mark((function e(t){var c,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=Object(o.a)(t.target.elements,2),n=c[0],a=c[1],r=Object(u.b)();try{Object(u.a)(r,n.value,a.value)}catch(t){alert(t.message)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"SignUp"}),Object(O.jsxs)("form",{onSubmit:e,children:[Object(O.jsx)("input",{name:"email",placeholder:"email",type:"email"}),Object(O.jsx)("input",{name:"password",placeholder:"password",type:"password"}),Object(O.jsx)("button",{type:"submit",children:" SignUp "})]})]})},y=["component"],k=["component"],S=function(e){e.component,Object(s.a)(e,y);var t=h().isAuthenticated;return console.log(t),t?Object(O.jsx)(i.b,{}):Object(O.jsx)(i.a,{to:"/login"})},C=function(e){e.component,Object(s.a)(e,k);return h().isAuthenticated?Object(O.jsx)(i.a,{to:"/"}):Object(O.jsx)(i.b,{})};function I(){return Object(O.jsx)(d,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(j.b,{to:"/",children:" Home "})," | ",Object(O.jsx)(j.b,{to:"/login",children:" Login "})," |",Object(O.jsx)(j.b,{to:"/signup",children:" Signin "})]}),Object(O.jsxs)(i.e,{children:[Object(O.jsx)(i.c,{element:Object(O.jsx)(S,{}),children:Object(O.jsx)(i.c,{exact:!0,path:"/",element:Object(O.jsx)(x,{})})}),Object(O.jsxs)(i.c,{element:Object(O.jsx)(C,{}),children:[Object(O.jsx)(i.c,{exact:!0,path:"/login",element:Object(O.jsx)(g,{})}),Object(O.jsx)(i.c,{exact:!0,path:"/signup",element:Object(O.jsx)(w,{})})]})]})]})})}var L=document.getElementById("root");r.a.render(Object(O.jsx)(n.StrictMode,{children:Object(O.jsx)(I,{})}),L)}},[[39,1,2]]]);
//# sourceMappingURL=main.172532a0.chunk.js.map