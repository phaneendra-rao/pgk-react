(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[30],{129:function(e,a,t){"use strict";t.r(a);var s=t(24),r=t(1),l=t(5),i=t(9),c=t(23),o=t(12),n=t(0),d=function(e){var a=e.type,t=e.email,s=e.password,r=e.handlerChange,l=e.handleSubmit,i=e.errors,c=i.emailErr,d=i.passwordErr;return Object(n.jsxs)("form",{className:"login-form",onSubmit:l,children:[Object(n.jsxs)("div",{className:"login-grp",children:[Object(n.jsx)("label",{className:"login-label",children:"Corporate ID / Email"}),Object(n.jsx)("input",{type:"email",name:"email",onChange:r,className:"login-inp".concat(c?" login-inp-error":""),placeholder:"test@test.com",required:!0}),c?Object(n.jsx)("p",{className:"inp-errors",children:c}):null]}),Object(n.jsxs)("div",{className:"login-grp",children:[Object(n.jsx)("label",{className:"login-label",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",onChange:r,className:"login-inp".concat(d?" login-inp-error":""),placeholder:"**********",required:!0}),d?Object(n.jsx)("p",{className:"inp-errors",children:d}):null]}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{type:"submit",disabled:c||d||!t||!s,className:"login-btn",children:"Login"})}),Object(n.jsx)("p",{className:"login-register",children:"New here ?"}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)(o.b,{to:"Student"===a?"/register/studentRegister":"/register",className:"login-reg-link",children:Object(n.jsxs)("button",{type:"button",className:"btn",children:["Register as new ",a]})})})]})},m=function(e){var a=Object(r.useState)(""),t=Object(s.a)(a,2),o=t[0],m=t[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),g=b[0],u=b[1],p=Object(r.useState)({emailErr:"",passwordErr:""}),h=Object(s.a)(p,2),O=h[0],x=h[1],v=Object(c.a)(),N=(Object(c.b)((function(e){return e.CorporateReducer.apiStatus})),e.type||localStorage.getItem("type"));Object(r.useEffect)((function(){localStorage.removeItem("amount"),localStorage.removeItem("regStatus"),localStorage.removeItem("steps"),localStorage.removeItem("token"),localStorage.removeItem("orderID")}),[]);var f=function(a){"/dashboard"===a?e.history.push("/dashboard"):e.history.push("/register/payment")};return Object(n.jsx)(d,{email:o,type:N,password:g,handlerChange:function(e){var a=e.target,t=a.name,s=a.value;switch(t){case"email":var r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return void(s&&r.test(s)?(m(s),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{emailErr:""})}))):s&&r.test(s)||(m(s),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{emailErr:"Email error"})}))));case"password":return void(s&&s.length>=8?(u(s),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{passwordErr:""})}))):(u(s),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{passwordErr:"Password error"})}))))}},handleSubmit:function(e){e.preventDefault();var a=O.emailErr,t=O.passwordErr;o&&g&&!a&&!t?v({type:"LOGIN-REQUEST",payload:{apiPayloadRequest:{stakeholder:N,userID:o,password:g},callback:f}}):l.a.error("Please enter all input fields")},errors:O})},j=window.$;a.default=function(e){var a=Object(r.useState)(""),t=Object(s.a)(a,2),i=t[0],c=t[1];Object(r.useEffect)((function(){j("#role").modal({backdrop:"static",keyboard:!1}),j("#role").modal("show")}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("section",{className:"login",children:Object(n.jsxs)("div",{className:"row m-0",children:[Object(n.jsx)("div",{className:"col-md-5 p-0 bg-red",children:Object(n.jsxs)("div",{className:"login-box",children:[Object(n.jsx)("img",{src:"images/corporate/login-img.png",alt:"login-img",className:"login-img1"}),Object(n.jsx)("h2",{className:"login-heading",children:"PGK."}),"Corporate"===i?Object(n.jsxs)("h3",{className:"login-subheading",children:["for the perfect ",Object(n.jsx)("br",{})," recruitment solutions"]}):"University"===i?Object(n.jsxs)("h3",{className:"login-subheading",children:["open the door of ",Object(n.jsx)("br",{})," placement through us"]}):Object(n.jsxs)("h3",{className:"login-subheading",children:["a better way  ",Object(n.jsx)("br",{})," to get your dream job"]}),"Corporate"===i?Object(n.jsx)("img",{src:"images/corporate/login-img1.png",alt:"login-img",className:"login-img2"}):"University"===i?Object(n.jsx)("img",{src:"images/corporate/university-login.png",alt:"login-img",className:"login-img2 login-university-img"}):Object(n.jsx)("img",{src:"images/corporate/student-login.png",alt:"login-img",className:"login-img2 login-student-img"})]})}),Object(n.jsx)("div",{className:"col-md-7 p-0",children:Object(n.jsxs)("div",{className:"login-box login-box1",children:[Object(n.jsx)("img",{src:"images/corporate/login-img2.png",alt:"login-img",className:"login-img1 login-img3"}),Object(n.jsxs)("h4",{className:"login-title",children:["Login as ",Object(n.jsx)("span",{children:i})]}),Object(n.jsx)("div",{className:"line"}),Object(n.jsx)(m,{history:e.history,type:i})]})})]})}),Object(n.jsx)("div",{className:"modal fade show",style:{display:"block"},id:"role",tabIndex:-1,role:"dialog","data-keyboard":"false","data-backdrop":"static","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(n.jsx)("div",{className:"modal-content modal-form",children:Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsx)("h4",{className:"modal-title mb-1 mt-0",children:"You are a"}),Object(n.jsxs)("form",{className:"login-form mx-auto",onSubmit:function(e){e.preventDefault(),i?(j("#role").modal("hide"),localStorage.setItem("type",i)):l.a.error("Please select one")},children:[Object(n.jsxs)("div",{className:"login-grp mb-2 mx-auto",children:[Object(n.jsx)("span",{className:"modal-icon1",children:Object(n.jsx)("i",{className:"fas fa-envelope"})}),Object(n.jsxs)("select",{name:"type",defaultValue:"DEFAULT",onChange:function(e){var a=e.target,t=(a.name,a.value);c(t)},className:"modal-inp",required:!0,children:[Object(n.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select type"}),Object(n.jsx)("option",{value:"Corporate",children:"Corporate"}),Object(n.jsx)("option",{value:"University",children:"University"}),Object(n.jsx)("option",{value:"Student",children:"Student"})]})]}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{type:"submit",className:"login-btn mb-0",children:"Proceed"})})]})]})})})})]})}}}]);