(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[36],{260:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var s=i(86),a=i.n(s),n=function(e){return null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},r=function(e){for(var t in e)if(""!==e[t]&&null!==e[t]&&void 0!==e[t])return!0;return!1},o=function(e,t){if(void 0===e)return!1;if(void 0===t)return!1;var i=a()(e),s=a()(t);return console.log("mStart ",i),console.log("mEnd ",s),console.log("mStart.isSame(mEnd) || mStart.isBefore(mEnd) ",i.isSame(s)||i.isBefore(s)),i.isSame(s)||i.isBefore(s)}},396:function(e,t,i){"use strict";i.r(t);var s=i(30),a=i(1),n=i(5),r=i(88),o=i(10),l=i(24),c=i(13),g=i(87),d=i(0),m=function(e){var t,i,s,a;return Object(d.jsxs)("form",{className:"login-form",onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)(g.a,{name:"email",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(t=e.loginObj)||void 0===t?void 0:t.email,label:"Corporate ID / Email",errorMessage:null===e||void 0===e||null===(i=e.errors)||void 0===i?void 0:i.email,required:!0,validations:["isEmail"]})}),Object(d.jsx)("div",{className:"login-grp",style:{marginTop:"30px"},children:Object(d.jsx)(g.a,{type:"password",name:"password",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(s=e.loginObj)||void 0===s?void 0:s.password,label:"Password",errorMessage:null===e||void 0===e||null===(a=e.errors)||void 0===a?void 0:a.password,required:!0,validations:["minLength_8"]})}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",disabled:e.isBtnDisabled,className:"login-btn",children:"Login"})}),Object(d.jsx)("p",{className:"login-register",children:"New here ?"}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)(c.b,{to:"Student"===e.type?"/register/studentRegister":"/register",className:"login-reg-link",children:Object(d.jsxs)("button",{type:"button",className:"login-btn",children:["Register as new ",e.type]})}),Object(d.jsx)(c.b,{to:"/c2hire",className:"login-reg-link",children:Object(d.jsx)("button",{type:"button",className:"btn",children:"C2Hire"})})]})]})},b=i(99),j=i(260),u=function(e){var t={email:"",password:""},i=t,c=Object(a.useState)(t),g=Object(s.a)(c,2),u=g[0],h=g[1],p=Object(a.useState)(i),O=Object(s.a)(p,2),v=O[0],x=O[1],f=Object(a.useState)(!1),N=Object(s.a)(f,2),y=N[0],S=N[1],w=Object(l.a)(),C=(null===e||void 0===e?void 0:e.type)||localStorage.getItem("type");Object(a.useEffect)((function(){localStorage.removeItem("amount"),localStorage.removeItem("regStatus"),localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("orderID"),sessionStorage.clear()}),[]),Object(a.useEffect)((function(){var e=Object(j.a)(v);S(e)}),[v]);var k=function(t){"/dashboard"===t?e.history.push("/dashboard"):e.history.push("/register/payment")};return Object(d.jsx)(m,Object(r.a)({type:C,loginObj:u,errors:v,isBtnDisabled:y,handleChange:function(e,t,i){h((function(i){return Object(o.a)(Object(o.a)({},i),{},Object(r.a)({},e,t))})),x((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,i))}))},handleSubmit:function(e){e.preventDefault();var t=u.email,i=u.password;if(t&&i){var s={stakeholder:C,userID:t,password:i};w(Object(b.a)({apiPayloadRequest:s,callback:k}))}else n.a.error("Please enter all input fields")}},"errors",v))},h=window.$;t.default=function(e){var t=Object(a.useState)("Corporate"),i=Object(s.a)(t,2),n=i[0];i[1];Object(a.useEffect)((function(){h("#role").modal({backdrop:"static",keyboard:!1}),localStorage.setItem("type","Corporate")}),[]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:"login",children:Object(d.jsxs)("div",{className:"row m-0",children:[Object(d.jsx)("div",{className:"col-md-5 p-0 bg-red",children:Object(d.jsxs)("div",{className:"login-box",children:[Object(d.jsx)("img",{src:"/images/corporate/login-img.png",alt:"login-img",className:"login-img1"}),Object(d.jsx)("h2",{className:"login-heading",children:"PGK."}),"Corporate"===n?Object(d.jsxs)("h3",{className:"login-subheading",children:["for the perfect ",Object(d.jsx)("br",{})," recruitment solutions"]}):"University"===n?Object(d.jsxs)("h3",{className:"login-subheading",children:["open the door of ",Object(d.jsx)("br",{})," placement through us"]}):Object(d.jsxs)("h3",{className:"login-subheading",children:["a better way  ",Object(d.jsx)("br",{})," to get your dream job"]}),"Corporate"===n?Object(d.jsx)("img",{src:"/images/corporate/login-img1.png",alt:"login-img",className:"login-img2"}):"University"===n?Object(d.jsx)("img",{src:"/images/corporate/university-login.png",alt:"login-img",className:"login-img2 login-university-img"}):Object(d.jsx)("img",{src:"/images/corporate/student-login.png",alt:"login-img",className:"login-img2 login-student-img"})]})}),Object(d.jsx)("div",{className:"col-md-7 p-0",children:Object(d.jsxs)("div",{className:"login-box login-box1",children:[Object(d.jsx)("img",{src:"/images/corporate/login-img2.png",alt:"login-img",className:"login-img1 login-img3"}),Object(d.jsxs)("h4",{className:"login-title",children:["Login as ",Object(d.jsx)("span",{children:n})]}),Object(d.jsx)("div",{className:"line"}),Object(d.jsx)(u,{history:e.history,type:n})]})})]})})})}}}]);