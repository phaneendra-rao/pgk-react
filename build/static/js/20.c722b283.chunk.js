(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[20],{151:function(e,a,t){"use strict";t.d(a,"e",(function(){return s})),t.d(a,"c",(function(){return i})),t.d(a,"g",(function(){return l})),t.d(a,"h",(function(){return d})),t.d(a,"j",(function(){return m})),t.d(a,"d",(function(){return u})),t.d(a,"b",(function(){return p})),t.d(a,"f",(function(){return j})),t.d(a,"a",(function(){return b})),t.d(a,"i",(function(){return h}));var r=t(9),n=t(5),c=t(24),s=function(){return function(e){e({type:c.h,payload:void 0})}},o=function(e){return function(a){a({type:c.a,payload:e})}},i=function(){return function(e){r.a.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(a){var t=a.data;e({type:c.d,payload:t})})).catch((function(e){var a=JSON.stringify(e);n.a.error(JSON.parse(a).message)}))}},l=function(e,a,t){return function(s){var i;"Corporate"===t?i="/o/signUp/Corporate":"University"===t&&(i="/o/signUp/University");var l=new FormData;for(var d in e)l.append(d,e[d]);s(o(!0)),s({type:c.c,payload:e}),r.a.post(i,l).then((function(e){var t=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(t)),localStorage.setItem("steps",3),s({type:c.i,payload:3}),s(o(!1)),n.a.success(t.message),a.push("/register/authentication")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),s(o(!1))}))}},d=function(e,a,t){return function(t){var s=new FormData;for(var i in e)s.append(i,e[i]);t(o(!0)),t({type:c.c,payload:e}),r.a.post("/o/signUp/Student",s).then((function(e){var r=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(r)),localStorage.setItem("steps",3),t({type:c.i,payload:3}),t(o(!1)),n.a.success(r.message),a.push("/register/studentAuthentication")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),t(o(!1))}))}},m=function(e,a,t){return function(a){var c=new FormData;for(var s in e)c.append(s,e[s]);a(o(!0)),r.a.post("/o/verifyOTP",c).then((function(e){var r=e.data;a(o(!1)),(null===r||void 0===r?void 0:r.MobileVerified)&&(null===r||void 0===r?void 0:r.emailVerified)?(n.a.success("OTP verification successful"),t.push("/register/completed")):n.a.error("OTP verification failed")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),a(o(!1))}))}},u=function(e){return function(a){var t=new FormData;for(var c in e)t.append(c,e[c]);a(o(!0)),r.a.post("/o/resendOtp",t).then((function(e){var t=e.data;n.a.success(t.message),a(o(!1))})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),a(o(!1))}))}},p=function(e){return function(a){var t;"Corporate"===e?t="/u/lut/?lutList=corporateType&lutList=corporateCategory&lutList=corporateIndustry":"University"===e&&(t="/u/lut/?lutList=universityCategory"),r.a.get(t).then((function(e){var t=e.data;a({type:c.b,payload:t})})).catch((function(e){var a=JSON.stringify(e);n.a.error(JSON.parse(a).message)}))}},j=function(e,a){return function(t){localStorage.setItem("steps",a),t({type:c.c,payload:e}),t({type:c.i,payload:a})}},b=function(e){return function(a){var t=new FormData;for(var s in e)t.append(s,e[s]);a(o(!0));var i=localStorage.getItem("token"),l={headers:{Authorization:"Bearer ".concat(i)}};r.a.post("/pg/createPayment",t,l).then((function(e){var t=e.data;sessionStorage.setItem("orderID",t.orderID),a({type:c.f,payload:t}),a(o(!1))})).catch((function(e){e.response?n.a.error(e.response.data):n.a.error("Something Wrong!",e.message),a(o(!1))}))}},h=function(e){return function(a){var t=new FormData;t.append("orderID",e);var s=localStorage.getItem("token"),i={headers:{Authorization:"Bearer ".concat(s)}};a(o(!0)),r.a.post("/pg/verifyPayment",t,i).then((function(e){var t,r=e.data;null===r||void 0===r||null===(t=r.messages)||void 0===t||t.forEach((function(e){n.a.success(e)})),a(o(!1)),a({type:c.g,payload:JSON.parse(null===r||void 0===r?void 0:r.referenceObject)})})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),a(o(!1))}))}}},171:function(e,a,t){"use strict";t.r(a);var r=t(49),n=t(8),c=t(26),s=t(1),o=t(19),i=t(14),l=t(5),d=t(0),m=function(e){var a=e.paymentData,t=e.errors,r=e.handlerChange,n=e.handleSubmit,c=e.cancelPayment,s=t.emailErr,o=t.nameErr,i=t.mobileErr,l=t.amtErr;return Object(d.jsxs)("form",{className:"login-form reg-form",onSubmit:n,children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"text",name:"name",onChange:r,className:"login-inp".concat(o?" login-inp-error":""),placeholder:"Name",autoFocus:!0,required:!0}),Object(d.jsx)("label",{className:"inp-caption",children:"Name"}),o?Object(d.jsx)("p",{className:"inp-errors",children:o}):null]}),Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"tel",name:"contact",onChange:r,className:"login-inp".concat(i?" login-inp-error":""),placeholder:"Phone Number",required:!0}),Object(d.jsx)("label",{className:"inp-caption",children:"Phone Number"}),i?Object(d.jsx)("p",{className:"inp-errors",children:i}):null]}),Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"email",name:"email",onChange:r,className:"login-inp".concat(s?" login-inp-error":""),placeholder:"Email",required:!0}),Object(d.jsx)("label",{className:"inp-caption",children:"Email"}),s?Object(d.jsx)("p",{className:"inp-errors",children:s}):null]}),Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"number",name:"amount",onChange:r,className:"login-inp".concat(l?" login-inp-error":""),defaultValue:a.amount,placeholder:"Amount",readOnly:!0,required:!0}),Object(d.jsx)("label",{className:"inp-caption",children:"Amount"}),l?Object(d.jsx)("p",{className:"inp-errors",children:l}):null]})]})}),Object(d.jsxs)("div",{className:"reg-payment-btns reg-payment-btns2",children:[Object(d.jsxs)("button",{type:"reset",onClick:c,className:"reg-payment-btn",children:[Object(d.jsx)("i",{className:"fas fa-times-circle"})," Cancel Payment"]}),Object(d.jsxs)("button",{type:"submit",className:"reg-payment-btn",children:[Object(d.jsx)("i",{className:"fas fa-check-circle"})," Make Payment"]})]})]})},u=t(151),p=window.$;a.default=function(e){var a=Object(i.g)(),t=Object(s.useState)({name:"",email:"",contact:""}),j=Object(c.a)(t,2),b=j[0],h=j[1],f=Object(s.useState)({emailErr:"",passwordErr:"",nameErr:"",mobileErr:"",amtErr:""}),g=Object(c.a)(f,2),O=g[0],v=g[1],y=Object(s.useState)({total:0,gst:0,amount:0}),x=Object(c.a)(y,2),N=x[0],S=x[1],E=Object(o.b)((function(e){return e.CorporateReducer.paymentOrder})),I=Object(o.b)((function(e){return e.CorporateReducer.referenceObject})),C=Object(o.a)(),k=localStorage.getItem("tokensPurchase"),P=localStorage.getItem("pathname");Object(s.useEffect)((function(){var e;e=k?{payType:"ADD_TKN",tokensToAdd:k,referenceObject:JSON.stringify(P)}:{payType:"REG_FEE"},C(Object(u.a)(e));var a=document.createElement("script");return a.src="https://checkout.razorpay.com/v1/checkout.js",a.async=!0,document.body.appendChild(a),function(){localStorage.removeItem("tokensPurchase"),localStorage.removeItem("pathname"),C(Object(u.e)())}}),[]),Object(s.useEffect)((function(){var e=null===E||void 0===E?void 0:E.amount,a=e+.18*e;h({amount:e}),S({amount:e,gst:(.18*e).toFixed(2),total:a.toFixed(2)})}),[E]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"reg-payment",children:[Object(d.jsx)("h2",{className:"reg-payment-title",children:"Choose the Payment mode"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-7",children:[Object(d.jsxs)("ul",{className:"nav nav-pills nav-justified",id:"pills-tab",role:"tablist",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("a",{className:"nav-link active",id:"Credit-tab","data-toggle":"pill",href:"#Credit",role:"tab","aria-controls":"Credit","aria-selected":"true",children:[Object(d.jsx)("i",{className:"far fa-credit-card"})," Credit/Debit Card"]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("a",{className:"nav-link",id:"Net-tab","data-toggle":"pill",href:"#Net",role:"tab","aria-controls":"Net","aria-selected":"false",children:[Object(d.jsx)("i",{className:"fas fa-university"})," Net Banking"]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",id:"UPI-tab","data-toggle":"pill",href:"#UPI",role:"tab","aria-controls":"UPI","aria-selected":"false",children:"UPI/Wallets"})})]}),Object(d.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(d.jsx)("div",{className:"tab-pane fade show active",id:"Credit",role:"tabpanel","aria-labelledby":"Credit-tab",children:Object(d.jsx)(m,{paymentData:b,errors:O,handlerChange:function(e){var a=e.target,t=a.name,c=a.value;switch(h((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},t,c))})),t){case"name":return void(c?v((function(e){return Object(n.a)(Object(n.a)({},e),{},{nameErr:""})})):c||v((function(e){return Object(n.a)(Object(n.a)({},e),{},{lnameErr:"Last name error"})})));case"email":var s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return void(c&&s.test(c)?v((function(e){return Object(n.a)(Object(n.a)({},e),{},{email2Err:""})})):c&&s.test(c)||v((function(e){return Object(n.a)(Object(n.a)({},e),{},{email2Err:"Email error"})})));case"contact":return void(/^[+-]?[0-9\b]+$/.test(c)&&c.length>=10?v((function(e){return Object(n.a)(Object(n.a)({},e),{},{mobileErr:""})})):v((function(e){return Object(n.a)(Object(n.a)({},e),{},{mobileErr:"Invalid"})})));case"amount":var o=parseInt(c),i=o+.18*o;return S({amount:o,gst:(.18*o).toFixed(2),total:i.toFixed(2)}),void(c.length>=0?v((function(e){return Object(n.a)(Object(n.a)({},e),{},{amtErr:""})})):v((function(e){return Object(n.a)(Object(n.a)({},e),{},{amtErr:"Invalid"})})))}},handleSubmit:function(e){e.preventDefault();var a=b.name,t=b.email,r=b.contact,n=O.nameErr,c=O.mobileErr,s=(O.emailErr,O.amtErr);a&&t&&r&&!n&&!c&&!s?function(){var e={key:"rzp_test_lyrU2iFPbK6HDF",order_id:null===E||void 0===E?void 0:E.orderID,amount:100*N.total,name:"PGK",description:"PGK TECHNOLOGIES PRIVATE LIMITED",image:"https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",handler:function(e){C(Object(u.i)(E.orderID)),p("#paymentSuccess").modal({backdrop:"static",keyboard:!1}),p("#paymentSuccess").modal("show")},prefill:{name:b.name,contact:b.contact,email:b.email},notes:{address:""},theme:{color:"blue",hide_topbar:!1}};new window.Razorpay(e).open()}():l.a.error("Please enter required input fields")},cancelPayment:function(){P?a.replace(P):a.replace("/dashboard")}})})})]}),Object(d.jsx)("div",{className:"col-md-5",children:Object(d.jsxs)("div",{className:"payment-summary",children:[Object(d.jsx)("h5",{className:"payment-summary-header",children:"Fee Summary"}),Object(d.jsxs)("ul",{className:"payment-data",children:[Object(d.jsxs)("li",{className:"payment-data-li",children:[Object(d.jsx)("p",{className:"payment-data-name",children:"Registration Fee"}),Object(d.jsx)("span",{children:N.amount})]}),Object(d.jsxs)("li",{className:"payment-data-li",children:[Object(d.jsxs)("p",{className:"payment-data-name",children:["GST (18%) ",Object(d.jsx)("span",{children:"rounded"})]}),Object(d.jsx)("span",{children:N.gst})]}),Object(d.jsxs)("li",{className:"payment-data-li",children:[Object(d.jsx)("p",{className:"payment-data-name",children:"Total"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fas fa-rupee-sign",style:{fontSize:"12px"}}),N.total]})]})]})]})})]})]}),Object(d.jsx)("div",{className:"modal fade",id:"paymentSuccess",tabIndex:-1,role:"dialog","data-keyboard":"false","data-backdrop":"static","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(d.jsx)("div",{className:"modal-content modal-form",children:Object(d.jsxs)("div",{className:"modal-body",children:[Object(d.jsx)("h4",{className:"modal-title mb-1 mt-0",children:"Payment is successful"}),Object(d.jsxs)("form",{className:"login-form mx-auto",children:[Object(d.jsx)("div",{className:"login-grp mb-2 mx-auto text-center text-success",children:Object(d.jsx)("i",{className:"fas fa-check-circle",style:{fontSize:"70px"}})}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"button",onClick:function(){p("#paymentSuccess").modal("hide"),I?a.replace(I):a.replace("/dashboard")},className:"login-btn mb-0",children:"Proceed"})})]})]})})})})]})}}}]);