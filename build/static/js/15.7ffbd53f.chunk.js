(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[15],{88:function(e,t,s){"use strict";s.r(t);var r=s(16),a=s(0),c=s(1),n=function(e){var t=e.history,s=e.data;return Object(c.jsx)("form",{className:"login-form reg-form",children:Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsxs)("div",{className:"col-md-10",children:[Object(c.jsx)("div",{className:"reg-header justify-content-center",children:"Your Registration is Complete !"}),Object(c.jsx)("div",{className:"row justify-content-center reg-center",children:Object(c.jsxs)("div",{className:"col-md-10",children:[Object(c.jsx)("h6",{className:"reg-label text-center",children:"Your Corporate ID is"}),Object(c.jsx)("div",{className:"login-grp text-center mb-1",children:Object(c.jsx)("input",{type:"text",name:"addr",className:"login-inp reg-inp2",value:s,readOnly:!0,placeholder:"Address (Line 1)",required:!0})}),Object(c.jsx)("p",{className:"reg-inp-info",children:"Preserve this Corporate ID for all your future references"}),Object(c.jsx)("div",{className:"reg-like",children:Object(c.jsx)("i",{className:"far fa-thumbs-up"})}),Object(c.jsx)("p",{className:"reg-para",children:"A detailed welcome mail has been sent to your primary email. You have to pay the registration fee in order to access full Dashboard features. You can chose to pay now or pay later at your convenience"}),Object(c.jsxs)("div",{className:"reg-payment-btns",children:[Object(c.jsxs)("button",{type:"button",onClick:function(){t.push("/register/CorporateSecondary")},className:"reg-payment-btn",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-rupee-sign"})})," Pay the fee now"]}),Object(c.jsxs)("button",{type:"button",onClick:function(){t.push("/")},className:"reg-payment-btn",children:["Proceed lo Login page ",Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"far fa-user"})})]})]})]})})]})})})};t.default=function(e){var t=Object(a.useState)(""),s=Object(r.a)(t,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("regStatus"));o(e.platformUID)}),[]),Object(c.jsx)(n,{data:i,history:e.history})}}}]);