(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[42],{206:function(e,t,a){"use strict";a.r(t);var s=a(26),r=a(1),i=a(5),l=a(8),c=a(19),n=a(11),o=a(0),d=function(e){var t=e.type,a=e.email,s=e.password,r=e.handlerChange,i=e.handleSubmit,l=e.errors,c=l.emailErr,d=l.passwordErr;return Object(o.jsxs)("form",{className:"login-form",onSubmit:i,children:[Object(o.jsxs)("div",{className:"login-grp",children:[Object(o.jsx)("input",{type:"email",name:"email",onChange:r,className:"login-inp".concat(c?" login-inp-error":""),placeholder:"test@test.com",required:!0}),Object(o.jsx)("label",{className:"inp-caption",children:"Corporate ID / Email"}),c?Object(o.jsx)("p",{className:"inp-errors",children:c}):null]}),Object(o.jsxs)("div",{className:"login-grp",style:{marginTop:"30px"},children:[Object(o.jsx)("input",{type:"password",name:"password",onChange:r,className:"login-inp".concat(d?" login-inp-error":""),placeholder:"**********",required:!0}),Object(o.jsx)("label",{className:"inp-caption",children:"Password"}),d?Object(o.jsx)("p",{className:"inp-errors",children:d}):null]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{type:"submit",disabled:c||d||!a||!s,className:"login-btn",children:"Login"})}),Object(o.jsx)("p",{className:"login-register",children:"New here ?"}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)(n.b,{to:"Student"===t?"/register/studentRegister":"/register",className:"login-reg-link",children:Object(o.jsxs)("button",{type:"button",className:"btn",children:["Register as new ",t]})}),Object(o.jsx)(n.b,{to:"/c2hire",className:"login-reg-link",children:Object(o.jsx)("button",{type:"button",className:"btn",children:"C2Hire"})})]})]})},m=a(63),j=function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],j=a[1],b=Object(r.useState)(""),g=Object(s.a)(b,2),p=g[0],u=g[1],h=Object(r.useState)({emailErr:"",passwordErr:""}),O=Object(s.a)(h,2),x=O[0],v=O[1],N=Object(c.a)(),f=(Object(c.b)((function(e){return e.CorporateReducer.apiStatus})),e.type||localStorage.getItem("type"));Object(r.useEffect)((function(){localStorage.removeItem("amount"),localStorage.removeItem("regStatus"),localStorage.removeItem("steps"),localStorage.removeItem("token"),localStorage.removeItem("orderID")}),[]);var y=function(t){"/dashboard"===t?e.history.push("/dashboard"):e.history.push("/register/payment")};return Object(o.jsx)(d,{email:n,type:f,password:p,handlerChange:function(e){var t=e.target,a=t.name,s=t.value;switch(a){case"email":var r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return void(s&&r.test(s)?(j(s),v((function(e){return Object(l.a)(Object(l.a)({},e),{},{emailErr:""})}))):s&&r.test(s)||(j(s),v((function(e){return Object(l.a)(Object(l.a)({},e),{},{emailErr:"Email error"})}))));case"password":return void(s&&s.length>=8?(u(s),v((function(e){return Object(l.a)(Object(l.a)({},e),{},{passwordErr:""})}))):(u(s),v((function(e){return Object(l.a)(Object(l.a)({},e),{},{passwordErr:"Password error"})}))))}},handleSubmit:function(e){e.preventDefault();var t=x.emailErr,a=x.passwordErr;if(n&&p&&!t&&!a){var s={stakeholder:f,userID:n,password:p};N(Object(m.a)({apiPayloadRequest:s,callback:y}))}else i.a.error("Please enter all input fields")},errors:x})},b=window.$;t.default=function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1];Object(r.useEffect)((function(){b("#role").modal({backdrop:"static",keyboard:!1}),b("#role").modal("show")}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"login",children:Object(o.jsxs)("div",{className:"row m-0",children:[Object(o.jsx)("div",{className:"col-md-5 p-0 bg-red",children:Object(o.jsxs)("div",{className:"login-box",children:[Object(o.jsx)("img",{src:"images/corporate/login-img.png",alt:"login-img",className:"login-img1"}),Object(o.jsx)("h2",{className:"login-heading",children:"PGK."}),"Corporate"===l?Object(o.jsxs)("h3",{className:"login-subheading",children:["for the perfect ",Object(o.jsx)("br",{})," recruitment solutions"]}):"University"===l?Object(o.jsxs)("h3",{className:"login-subheading",children:["open the door of ",Object(o.jsx)("br",{})," placement through us"]}):Object(o.jsxs)("h3",{className:"login-subheading",children:["a better way  ",Object(o.jsx)("br",{})," to get your dream job"]}),"Corporate"===l?Object(o.jsx)("img",{src:"images/corporate/login-img1.png",alt:"login-img",className:"login-img2"}):"University"===l?Object(o.jsx)("img",{src:"images/corporate/university-login.png",alt:"login-img",className:"login-img2 login-university-img"}):Object(o.jsx)("img",{src:"images/corporate/student-login.png",alt:"login-img",className:"login-img2 login-student-img"})]})}),Object(o.jsx)("div",{className:"col-md-7 p-0",children:Object(o.jsxs)("div",{className:"login-box login-box1",children:[Object(o.jsx)("img",{src:"images/corporate/login-img2.png",alt:"login-img",className:"login-img1 login-img3"}),Object(o.jsxs)("h4",{className:"login-title",children:["Login as ",Object(o.jsx)("span",{children:l})]}),Object(o.jsx)("div",{className:"line"}),Object(o.jsx)(j,{history:e.history,type:l})]})})]})}),Object(o.jsx)("div",{className:"modal fade show",style:{display:"block"},id:"role",tabIndex:-1,role:"dialog","data-keyboard":"false","data-backdrop":"static","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(o.jsx)("div",{className:"modal-content modal-form",children:Object(o.jsxs)("div",{className:"modal-body",children:[Object(o.jsx)("h4",{className:"modal-title mb-1 mt-0",children:"You are a"}),Object(o.jsxs)("form",{className:"login-form mx-auto",onSubmit:function(e){e.preventDefault(),l?(b("#role").modal("hide"),localStorage.setItem("type",l)):i.a.error("Please select one")},children:[Object(o.jsxs)("div",{className:"login-grp mb-2 mx-auto",children:[Object(o.jsx)("span",{className:"modal-icon1",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),Object(o.jsxs)("select",{name:"type",defaultValue:"DEFAULT",onChange:function(e){var t=e.target,a=(t.name,t.value);c(a)},className:"modal-inp",required:!0,children:[Object(o.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select type"}),Object(o.jsx)("option",{value:"Corporate",children:"Corporate"}),Object(o.jsx)("option",{value:"University",children:"University"}),Object(o.jsx)("option",{value:"Student",children:"Student"})]})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{type:"submit",className:"login-btn mb-0",children:"Proceed"})})]})]})})})})]})}}}]);