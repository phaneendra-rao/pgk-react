(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[18],{105:function(e,t,r){"use strict";function a(e,t,r,a,n,s,o){try{var c=e[s](o),i=c.value}catch(l){return void r(l)}c.done?t(i):Promise.resolve(i).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function c(e){a(o,n,s,c,i,"next",e)}function i(e){a(o,n,s,c,i,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return n}))},138:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r.n(a),s=r(105),o=r(39),c=r(9),i=r(24),l=r(1),u=r(23),d=r(5),p=r(97),f=r(0),m=function(e){var t=e.history,r=e.errors,a=(e.attachment,e.path),n=e.studentSecondary,s=e.handleChangeImg,o=e.handlerChange,c=e.handleSubmit,i=r.passwordErr,l=r.repeatPasswordErr,u=r.addrErr,d="data:image/png;base64,"+a;return Object(f.jsx)("form",{onSubmit:c,className:"login-form reg-form",children:Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsxs)("div",{className:"col-md-10",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-6 pr-1",children:Object(f.jsx)("div",{className:"login-grp",children:Object(f.jsxs)("select",{name:"gender",onChange:o,value:n.gender?n.gender:"DEFAULT",className:"login-inp",required:!1,children:[Object(f.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Gender"}),Object(f.jsx)("option",{value:"Male",children:"Male"}),Object(f.jsx)("option",{value:"Female",children:"Female"}),Object(f.jsx)("option",{value:"Other",children:"Other"})]})})}),Object(f.jsx)("div",{className:"col-md-6 pl-1",children:Object(f.jsx)("div",{className:"login-grp",children:Object(f.jsx)("input",{type:"date",name:"dateOfBirth",onChange:o,className:"login-inp",title:"date Of Birth",placeholder:"dateOfBirth",required:!0})})})]}),Object(f.jsxs)("div",{className:"login-grp",children:[Object(f.jsx)("input",{type:"number",name:"aadharNumber",onChange:o,defaultValue:n.aadharNumber,className:"login-inp".concat(u?" login-inp-error":""),placeholder:"Aadhar Number",required:!1}),u?Object(f.jsx)("p",{className:"inp-errors",children:u}):null]}),Object(f.jsx)("div",{className:"login-grp",children:Object(f.jsx)("textarea",{name:"studentProfile",onChange:o,defaultValue:n.studentProfile,rows:6,className:"login-inp login-txtarea",placeholder:"Company Profile (in Brief)",required:!1})}),Object(f.jsxs)("div",{className:"reg-attach",children:[n.attachment?Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fas fa-check-circle"})}):null,Object(f.jsx)("input",{type:"file",name:"attachment",onChange:s,accept:"image/*",className:"reg-inp",id:"attachment",required:!1}),Object(f.jsx)("label",{htmlFor:"attachment",className:"reg-label",children:"Attach"})]}),d?Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)("img",{src:d,alt:"please select image",className:"img-thumbnail mb-3 w-50"})}):null,Object(f.jsxs)("div",{className:"reg-header",children:[Object(f.jsx)("i",{className:"fas fa-unlock-alt"}),"Password"]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-6 pr-1",children:Object(f.jsxs)("div",{className:"login-grp",children:[Object(f.jsx)("input",{type:"password",name:"password",onChange:o,defaultValue:n.password,className:"login-inp".concat(i?" login-inp-error":""),placeholder:"Choose your login password (Min 8 digits)",required:!0}),i?Object(f.jsx)("p",{className:"inp-errors",children:i}):null]})}),Object(f.jsx)("div",{className:"col-md-6 pl-1",children:Object(f.jsxs)("div",{className:"login-grp",children:[Object(f.jsx)("input",{type:"password",name:"repeatPassword",onChange:o,className:"login-inp".concat(l?" login-inp-error":""),placeholder:"Repeat the password",required:!0}),l?Object(f.jsx)("p",{className:"inp-errors",children:l}):null]})})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(f.jsx)("button",{type:"button",className:"reg-btn",onClick:function(){t.push("/register/studentRegister")},children:"Previous"}),Object(f.jsx)("button",{type:"submit",className:"reg-btn",children:"Next"})]})]})})})};t.default=function(e){var t={gender:"",dateOfBirth:"",aadharNumber:"",studentProfile:"",attachment:"",password:""},r=Object(l.useState)(t),a=Object(i.a)(r,2),h=a[0],g=a[1],j=Object(l.useState)(""),b=Object(i.a)(j,2),v=b[0],O=b[1],y=Object(l.useState)({passwordErr:"",repeatPasswordErr:"",addrErr:""}),x=Object(i.a)(y,2),N=x[0],w=x[1],S=Object(l.useState)(""),P=Object(i.a)(S,2),C=P[0],I=P[1],E=Object(u.b)((function(e){return e.CorporateReducer.corporatePrimaryState})),D=Object(u.b)((function(e){return e.CorporateReducer.categoryList})),k=localStorage.getItem("type"),F=Object(u.a)();Object(l.useEffect)((function(){E&&Object.keys(t).map((function(e){var t=function(t){e===t&&g((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},t,E[t]))}))};for(var r in E)t(r)}))}),[]);var J=function(){var t=Object(s.a)(n.a.mark((function t(r){var a,s,o,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=N.passwordErr,s=N.repeatPasswordErr,!(o=h.password)||s||a||o!==v){t.next=11;break}return c=Object.assign(E,h),t.next=7,F(Object(p.f)(c,2));case 7:return t.next=9,F(Object(p.h)(c,e.history,k));case 9:t.next=12;break;case 11:d.a.error("Please enter required input fields");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)(m,{history:e.history,errors:N,selectedName:k,path:C,studentSecondary:h,attachment:h.attachment,categoryList:D,handleChangeImg:function(e){if(e.preventDefault(),e.target.files){g((function(t){return Object(c.a)(Object(c.a)({},t),{},{attachment:e.target.files[0]})}));for(var t=e.target.files.length,r=0;r<t;r++){var a=new FileReader;a.onload=function(e){I(e.target.result.split(",")[1])}.bind(undefined),a.readAsDataURL(e.target.files[r])}}},handlerChange:function(e){var t=e.target,r=t.name,a=t.value;switch("repeatPassword"===r?O(a):g((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},r,a))})),r){case"password":return void(a&&a.length>=8?w((function(e){return Object(c.a)(Object(c.a)({},e),{},{passwordErr:""})})):w((function(e){return Object(c.a)(Object(c.a)({},e),{},{passwordErr:"Password error"})})));case"repeatPassword":return void(a===h.password?w((function(e){return Object(c.a)(Object(c.a)({},e),{},{repeatPasswordErr:""})})):w((function(e){return Object(c.a)(Object(c.a)({},e),{},{repeatPasswordErr:"Password does not match"})})))}},handleSubmit:J})}},97:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return u})),r.d(t,"j",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return g}));var a=r(10),n=r(5),s=r(21),o=function(){return function(e){e({type:s.h,payload:void 0})}},c=function(e){return function(t){t({type:s.a,payload:e})}},i=function(){return function(e){a.a.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(t){var r=t.data;e({type:s.d,payload:r})})).catch((function(e){var t=JSON.stringify(e);n.a.error(JSON.parse(t).message)}))}},l=function(e,t,r){return function(o){var i;"Corporate"===r?i="/o/signUp/Corporate":"University"===r&&(i="/o/signUp/University");var l=new FormData;for(var u in e)l.append(u,e[u]);o(c(!0)),o({type:s.c,payload:e}),a.a.post(i,l).then((function(e){var r=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(r)),localStorage.setItem("steps",3),o({type:s.i,payload:3}),o(c(!1)),n.a.success(r.message),t.push("/register/authentication")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),o(c(!1))}))}},u=function(e,t,r){return function(r){var o=new FormData;for(var i in e)o.append(i,e[i]);r(c(!0)),r({type:s.c,payload:e}),a.a.post("/o/signUp/Student",o).then((function(e){var a=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(a)),localStorage.setItem("steps",3),r({type:s.i,payload:3}),r(c(!1)),n.a.success(a.message),t.push("/register/studentAuthentication")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),r(c(!1))}))}},d=function(e,t,r){return function(t){var s=new FormData;for(var o in e)s.append(o,e[o]);t(c(!0)),a.a.post("/o/verifyOTP",s).then((function(e){var a=e.data;t(c(!1)),(null===a||void 0===a?void 0:a.MobileVerified)&&(null===a||void 0===a?void 0:a.emailVerified)?(n.a.success("OTP verification successful"),r.push("/register/completed")):n.a.error("OTP verification failed")})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),t(c(!1))}))}},p=function(e){return function(t){var r=new FormData;for(var s in e)r.append(s,e[s]);t(c(!0)),a.a.post("/o/resendOtp",r).then((function(e){var r=e.data;n.a.success(r.message),t(c(!1))})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),t(c(!1))}))}},f=function(e){return function(t){var r;"Corporate"===e?r="/u/lut/?lutList=corporateType&lutList=corporateCategory&lutList=corporateIndustry":"University"===e&&(r="/u/lut/?lutList=universityCategory"),a.a.get(r).then((function(e){var r=e.data;t({type:s.b,payload:r})})).catch((function(e){var t=JSON.stringify(e);n.a.error(JSON.parse(t).message)}))}},m=function(e,t){return function(r){localStorage.setItem("steps",t),r({type:s.c,payload:e}),r({type:s.i,payload:t})}},h=function(e){return function(t){var r=new FormData;for(var o in e)r.append(o,e[o]);t(c(!0));var i=localStorage.getItem("token"),l={headers:{Authorization:"Bearer ".concat(i)}};a.a.post("/pg/createPayment",r,l).then((function(e){var r=e.data;sessionStorage.setItem("orderID",r.orderID),t({type:s.f,payload:r}),t(c(!1))})).catch((function(e){e.response?n.a.error(e.response.data):n.a.error("Something Wrong!",e.message),t(c(!1))}))}},g=function(e){return function(t){var r=new FormData;r.append("orderID",e);var o=localStorage.getItem("token"),i={headers:{Authorization:"Bearer ".concat(o)}};t(c(!0)),a.a.post("/pg/verifyPayment",r,i).then((function(e){var r,a=e.data;null===a||void 0===a||null===(r=a.messages)||void 0===r||r.forEach((function(e){n.a.success(e)})),t(c(!1)),t({type:s.g,payload:JSON.parse(null===a||void 0===a?void 0:a.referenceObject)})})).catch((function(e){e.response?n.a.error(e.response.data.errors[0].message):n.a.error("Something Wrong!",e.message),t(c(!1))}))}}}}]);