(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[9],{45:function(e,r,a){"use strict";a.d(r,"c",(function(){return d})),a.d(r,"g",(function(){return l})),a.d(r,"h",(function(){return p})),a.d(r,"d",(function(){return u})),a.d(r,"j",(function(){return h})),a.d(r,"e",(function(){return m})),a.d(r,"b",(function(){return j})),a.d(r,"f",(function(){return g})),a.d(r,"a",(function(){return b})),a.d(r,"i",(function(){return O}));var t=a(47),o=a.n(t).a.create({baseURL:"http://65.0.248.114:80/api/"});o.defaults.headers.common["Content-Type"]="multipart/form-data",o.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var c=o,s=a(18),n=a(10),i=function(e){return function(r){r({type:n.a,payload:e})}},d=function(){return function(e){c.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(r){var a=r.data;e({type:n.d,payload:a})})).catch((function(e){var r=JSON.stringify(e);s.a.error(JSON.parse(r).message)}))}},l=function(e,r,a){return function(t){var o;"Corporate"===a?o="/o/signUp/Corporate":"University"===a&&(o="/o/signUp/University");var d=new FormData;for(var l in e)d.append(l,e[l]);t(i(!0)),t({type:n.c,payload:e}),c.post(o,d).then((function(e){var a=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(a)),localStorage.setItem("steps",3),t({type:n.h,payload:3}),t(i(!1)),s.a.success(a.message),r.push("/register/authentication")})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),t(i(!1))}))}},p=function(e,r,a){return function(a){var t=new FormData;for(var o in e)t.append(o,e[o]);a(i(!0)),a({type:n.c,payload:e}),c.post("/o/signUp/Student",t).then((function(e){var t=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(t)),localStorage.setItem("steps",3),a({type:n.h,payload:3}),a(i(!1)),s.a.success(t.message),r.push("/register/studentAuthentication")})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),a(i(!1))}))}},u=function(e,r){return function(a){var t=new FormData;t.append("stakeholder",e.stakeholder),t.append("userID",e.userID),t.append("password",e.password),a(i(!0)),c.post("/o/login",t).then((function(e){var t=e.data;localStorage.setItem("token",t.token),a(i(!1)),s.a.success("Login successful"),"/dashboard"===t.redirectURL?r.push("/"):r.push("/register/payment")})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),a(i(!1))}))}},h=function(e,r,a){return function(t){var o;o=1===r?"/o/verifyMobile":"/o/verifyEmail";var n=new FormData;for(var d in e)n.append(d,e[d]);t(i(!0)),c.post(o,n).then((function(e){var r=e.data;t(i(!1)),s.a.success(r.message),a.push("/register/completed")})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),t(i(!1))}))}},m=function(e){return function(r){var a=new FormData;for(var t in e)a.append(t,e[t]);r(i(!0)),c.post("/o/resendOtp",a).then((function(e){var a=e.data;s.a.success(a.message),r(i(!1))})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),r(i(!1))}))}},j=function(e){return function(r){var a;"Corporate"===e?a="/u/lut/?lutList=corporateType&lutList=corporateCategory&lutList=corporateIndustry":"University"===e&&(a="/u/lut/?lutList=universityCategory"),c.get(a).then((function(e){var a=e.data;r({type:n.b,payload:a})})).catch((function(e){var r=JSON.stringify(e);s.a.error(JSON.parse(r).message)}))}},g=function(e,r){return function(a){localStorage.setItem("steps",r),a({type:n.c,payload:e}),a({type:n.h,payload:r})}},b=function(){return function(e){var r=new FormData;r.append("payType","REG_FEE"),e(i(!0));var a=localStorage.getItem("token"),t={headers:{Authorization:"Bearer ".concat(a)}};c.post("/pg/createPayment",r,t).then((function(r){var a=r.data;sessionStorage.setItem("orderID",a.orderID),e({type:n.f,payload:a}),e(i(!1))})).catch((function(r){r.response?s.a.error(r.response.data):s.a.error("Something Wrong!",r.message),e(i(!1))}))}},O=function(e){return function(r){var a=new FormData;a.append("orderID",e);var t=localStorage.getItem("token"),o={headers:{Authorization:"Bearer ".concat(t)}};r(i(!0)),c.post("/pg/verifyPayment",a,o).then((function(e){var a=e.data;r(i(!1)),s.a.success(a[0]),s.a.success(a[1]),s.a.success(a[2])})).catch((function(e){e.response?s.a.error(e.response.data.errors[0].message):s.a.error("Something Wrong!",e.message),r(i(!1))}))}}},79:function(e,r,a){"use strict";a.r(r);var t=a(24),o=a(2),c=a(16),s=a(0),n=a(11),i=a(18),d=a(1),l=function(e){e.history;var r=e.corporatePrimaryData,a=e.errors,t=e.saveData,o=e.handlerChange,c=e.handleSubmit,s=e.countryCodes,n=e.code,i=e.code2,l=localStorage.getItem("type"),p=a.emailErr,u=a.email2Err,h=a.mobileErr,m=a.mobile2Err;return Object(d.jsxs)("form",{onSubmit:c,className:"login-form reg-form",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateName",onChange:o,defaultValue:r.corporateName,className:"login-inp",placeholder:"".concat(l," Name"),autoFocus:!0,required:!0})}),Object(d.jsxs)("h6",{className:"reg-label",children:[l," Headquarters"]}),Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateHQAddressLine1",onChange:o,defaultValue:r.corporateHQAddressLine1,className:"login-inp",placeholder:"Address (Line 1)",required:!1})}),Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateHQAddressLine2",onChange:o,defaultValue:r.corporateHQAddressLine2,className:"login-inp",placeholder:"Address (Line 2)",required:!1})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 pr-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsxs)("select",{name:"corporateHQAddressCountry",onChange:o,defaultValue:r.corporateHQAddressCountry?r.corporateHQAddressCountry:"DEFAULT",className:"login-inp",required:!1,children:[Object(d.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Country"}),s&&s.length>=0?s.map((function(e,r){return Object(d.jsx)("option",{value:e.name,children:e.name},r)})):null]})})}),Object(d.jsx)("div",{className:"col-md-6 pl-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsxs)("select",{name:"corporateHQAddressState",onChange:o,defaultValue:r.corporateHQAddressState?r.corporateHQAddressState:"DEFAULT",className:"login-inp",required:!1,children:[Object(d.jsx)("option",{value:"DEFAULT",disabled:!0,children:"State"}),Object(d.jsx)("option",{value:"TS",children:"TS"}),Object(d.jsx)("option",{value:"AP",children:"AP"})]})})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4 pr-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateHQAddressCity",onChange:o,defaultValue:r.corporateHQAddressCity,className:"login-inp",placeholder:"City",required:!1})})}),Object(d.jsx)("div",{className:"col-md-4 px-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateHQAddressDistrict",onChange:o,defaultValue:r.corporateHQAddressDistrict,className:"login-inp",placeholder:"District",required:!1})})}),Object(d.jsx)("div",{className:"col-md-4 pl-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"number",name:"corporateHQAddressZipCode",onChange:o,defaultValue:r.corporateHQAddressZipCode,className:"login-inp",placeholder:"Zipcode",required:!1})})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 pr-1",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("input",{type:"tel",name:"code",onChange:o,value:n,className:"login-inp px-1 text-center",placeholder:"",style:{width:"50px"},readOnly:!0,disabled:!0,required:!0}),Object(d.jsx)("input",{type:"tel",name:"corporateHQAddressPhone",onChange:o,defaultValue:r.corporateHQAddressPhone,className:"login-inp".concat(h?" login-inp-error":""),placeholder:"Phone Number",required:!0})]}),h?Object(d.jsx)("p",{className:"inp-errors",children:h}):null]})}),Object(d.jsx)("div",{className:"col-md-6 pl-1",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"email",name:"corporateHQAddressEmail",onChange:o,defaultValue:r.corporateHQAddressEmail,className:"login-inp".concat(p?" login-inp-error":""),placeholder:"Office mail",required:!1}),p?Object(d.jsx)("p",{className:"inp-errors",children:p}):null]})})]})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"CIN",onChange:o,defaultValue:r.CIN,className:"login-inp",placeholder:"Corporate"===l?"CIN":"University/College ID",required:!0})}),Object(d.jsxs)("div",{className:"d-lg-flex",children:[Object(d.jsxs)("h6",{className:"reg-label",children:[l," Local Branch"]}),Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",onChange:t,className:"custom-control-input",id:"save"}),Object(d.jsxs)("label",{className:"custom-control-label",htmlFor:"save",children:["Same as ",l," Head Quarters"]})]})]}),Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateLocalBranchAddressLine1",onChange:o,defaultValue:r.corporateLocalBranchAddressLine1,className:"login-inp",placeholder:"Address (Line 1)",required:!1})}),Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateLocalBranchAddressLine2",onChange:o,defaultValue:r.corporateLocalBranchAddressLine2,className:"login-inp",placeholder:"Address (Line 2)",required:!1})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 pr-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsxs)("select",{name:"corporateLocalBranchAddressCountry",onChange:o,value:r.corporateLocalBranchAddressCountry?r.corporateLocalBranchAddressCountry:"DEFAULT",className:"login-inp",required:!1,children:[Object(d.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Country"}),s&&s.length>=0?s.map((function(e,r){return Object(d.jsx)("option",{value:e.name,children:e.name},r)})):null]})})}),Object(d.jsx)("div",{className:"col-md-6 pl-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsxs)("select",{name:"corporateLocalBranchAddressState",onChange:o,value:r.corporateLocalBranchAddressState?r.corporateLocalBranchAddressState:"DEFAULT",className:"login-inp",required:!1,children:[Object(d.jsx)("option",{value:"DEFAULT",disabled:!0,children:"State"}),Object(d.jsx)("option",{value:"TS",children:"TS"}),Object(d.jsx)("option",{value:"AP",children:"AP"})]})})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4 pr-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateLocalBranchAddressCity",onChange:o,defaultValue:r.corporateLocalBranchAddressCity,className:"login-inp",placeholder:"City",required:!1})})}),Object(d.jsx)("div",{className:"col-md-4 px-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"text",name:"corporateLocalBranchAddressDistrict",onChange:o,defaultValue:r.corporateLocalBranchAddressDistrict,className:"login-inp",placeholder:"District",required:!1})})}),Object(d.jsx)("div",{className:"col-md-4 pl-1",children:Object(d.jsx)("div",{className:"login-grp",children:Object(d.jsx)("input",{type:"number",name:"corporateLocalBranchAddressZipCode",onChange:o,defaultValue:r.corporateLocalBranchAddressZipCode,className:"login-inp",placeholder:"Zipcode",required:!1})})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 pr-1",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("input",{type:"tel",name:"code2",onChange:o,defaultValue:i,className:"login-inp px-1 text-center",placeholder:"",style:{width:"50px"},readOnly:!0,disabled:!0,required:!0}),Object(d.jsx)("input",{type:"tel",name:"corporateLocalBranchAddressPhone",onChange:o,defaultValue:r.corporateLocalBranchAddressPhone,className:"login-inp".concat(m?" login-inp-error":""),placeholder:"Phone Number",required:!1})]}),m?Object(d.jsx)("p",{className:"inp-errors",children:m}):null]})}),Object(d.jsx)("div",{className:"col-md-6 pl-1",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("input",{type:"email",name:"corporateLocalBranchAddressEmail",onChange:o,defaultValue:r.corporateLocalBranchAddressEmail,className:"login-inp".concat(u?" login-inp-error":""),placeholder:"Office mail",required:!1}),u?Object(d.jsx)("p",{className:"inp-errors",children:u}):null]})})]})]})]}),Object(d.jsx)("div",{className:"text-right",children:Object(d.jsx)("button",{type:"submit",className:"reg-btn",children:"Next"})})]})},p=a(45);r.default=function(e){var r=Object(s.useState)({corporateName:"",corporateHQAddressLine1:"",corporateHQAddressLine2:"",corporateHQAddressCountry:"",corporateHQAddressState:"",corporateHQAddressCity:"",corporateHQAddressDistrict:"",corporateHQAddressZipCode:"",corporateHQAddressPhone:"",corporateHQAddressEmail:"",CIN:"",corporateLocalBranchAddressLine1:"",corporateLocalBranchAddressLine2:"",corporateLocalBranchAddressCountry:"",corporateLocalBranchAddressState:"",corporateLocalBranchAddressCity:"",corporateLocalBranchAddressDistrict:"",corporateLocalBranchAddressZipCode:"",corporateLocalBranchAddressPhone:"",corporateLocalBranchAddressEmail:""}),a=Object(c.a)(r,2),u=a[0],h=a[1],m=Object(s.useState)({emailErr:"",email2Err:"",mobileErr:"",mobile2Err:""}),j=Object(c.a)(m,2),g=j[0],b=j[1],O=Object(s.useState)(""),f=Object(c.a)(O,2),v=f[0],A=f[1],x=Object(s.useState)(""),y=Object(c.a)(x,2),N=y[0],L=y[1],C=Object(n.b)(),B=Object(n.c)((function(e){return e.CorporateReducer.corporatePrimaryState})),S=Object(n.c)((function(e){return e.CorporateReducer.countryCodes}));Object(s.useEffect)((function(){if(C(Object(p.c)()),B){var e=function(e){h((function(r){return Object(o.a)(Object(o.a)({},r),{},Object(t.a)({},e,B[e]))}))};for(var r in B)e(r)}}),[]);return Object(d.jsx)(l,{corporatePrimaryData:u,errors:g,code:v,code2:N,countryCodes:S,history:e.history,saveData:function(e){e.target.checked?(h((function(e){return Object(o.a)(Object(o.a)({},e),{},{corporateLocalBranchAddressLine1:u.corporateHQAddressLine1,corporateLocalBranchAddressLine2:u.corporateHQAddressLine2,corporateLocalBranchAddressCountry:u.corporateHQAddressCountry,corporateLocalBranchAddressState:u.corporateHQAddressState,corporateLocalBranchAddressCity:u.corporateHQAddressCity,corporateLocalBranchAddressDistrict:u.corporateHQAddressDistrict,corporateLocalBranchAddressZipCode:u.corporateHQAddressZipCode,corporateLocalBranchAddressPhone:u.corporateHQAddressPhone,corporateLocalBranchAddressEmail:u.corporateHQAddressEmail})})),L(v)):(h((function(e){return Object(o.a)(Object(o.a)({},e),{},{corporateLocalBranchAddressLine1:"",corporateLocalBranchAddressLine2:"",corporateLocalBranchAddressCountry:"",corporateLocalBranchAddressState:"",corporateLocalBranchAddressCity:"",corporateLocalBranchAddressDistrict:"",corporateLocalBranchAddressZipCode:"",corporateLocalBranchAddressPhone:"",corporateLocalBranchAddressEmail:""})})),L(""))},handlerChange:function(e){var r=e.target,a=r.name,c=r.value;switch(h((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(t.a)({},a,c))})),a){case"corporateHQAddressEmail":var s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return void(c&&s.test(c)?b((function(e){return Object(o.a)(Object(o.a)({},e),{},{emailErr:""})})):c&&s.test(c)||b((function(e){return Object(o.a)(Object(o.a)({},e),{},{emailErr:"Email error"})})));case"corporateLocalBranchAddressEmail":var n=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return void(c&&n.test(c)?b((function(e){return Object(o.a)(Object(o.a)({},e),{},{email2Err:""})})):c&&n.test(c)||b((function(e){return Object(o.a)(Object(o.a)({},e),{},{email2Err:"Email error"})})));case"corporateHQAddressPhone":return void(/^[+-]?[0-9\b]+$/.test(c)&&10===c.length?b((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileErr:""})})):b((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileErr:"Invalid"})})));case"corporateLocalBranchAddressPhone":return void(/^[+-]?[0-9\b]+$/.test(c)&&10===c.length?b((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobile2Err:""})})):b((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobile2Err:"Invalid"})})));case"corporateHQAddressCountry":var i=S.find((function(e){return e.name===c}));return void A("+"+(null===i||void 0===i?void 0:i.callingCodes[0]));case"corporateLocalBranchAddressCountry":var d=S.find((function(e){return e.name===c}));return void L("+"+d.callingCodes[0])}},handleSubmit:function(r){r.preventDefault();var a=g.emailErr,t=g.mobileErr,o=u.corporateName,c=u.CIN,s=u.corporateHQAddressPhone,n=u.corporateLocalBranchAddressPhone;o&&c&&s&&!a&&!t?(u.corporateHQAddressPhone=v+s,u.corporateLocalBranchAddressPhone=N+n,C(Object(p.f)(u,1)),e.history.push("/register/CorporateSecondary")):i.a.error("Please enter all input fields")}})}}}]);