(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[32],{254:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return d})),r.d(t,"i",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return f})),r.d(t,"h",(function(){return v}));var n=r(9),a=r(5),o=r(35),s=function(){return function(e){e({type:o.h,payload:void 0})}},i=function(e){return function(t){t({type:o.a,payload:e})}},c=function(){return function(e){n.a.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(t){var r=t.data;e({type:o.d,payload:r})})).catch((function(e){var t=JSON.stringify(e);a.a.error(JSON.parse(t).message)}))}},l=function(e,t,r){return function(s){var c;"Corporate"===r?c="/o/signUp/Corporate":"University"===r&&(c="/o/signUp/University");var l=new FormData;for(var d in e)l.append(d,e[d]);s(i(!0)),s({type:o.c,payload:e}),n.a.post(c,l).then((function(e){var r=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(r)),sessionStorage.setItem("steps",3),s({type:o.i,payload:3}),s(i(!1)),a.a.success(r.message),t.push("/register/authentication")})).catch((function(e){e.response?a.a.error(e.response.data.errors[0].message):a.a.error("Something Wrong!",e.message),s(i(!1))}))}},d=function(e,t,r){return function(r){var s=new FormData;for(var c in e)s.append(c,e[c]);r(i(!0)),r({type:o.c,payload:e}),n.a.post("/o/signUp/Student",s).then((function(e){var n=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(n)),sessionStorage.setItem("steps",3),r({type:o.i,payload:3}),r(i(!1)),a.a.success(n.message),t.push("/register/studentAuthentication")})).catch((function(e){e.response?a.a.error(e.response.data.errors[0].message):a.a.error("Something Wrong!",e.message),r(i(!1))}))}},u=function(e,t){return function(r){var o=new FormData;for(var s in e)o.append(s,e[s]);r(i(!0)),n.a.post("/o/verifyOTP",o).then((function(e){var n=e.data;r(i(!1)),(null===n||void 0===n?void 0:n.MobileVerified)&&(null===n||void 0===n?void 0:n.emailVerified)?(sessionStorage.clear(),a.a.success(n.message),t.push("/register/completed")):a.a.error("OTP verification failed")})).catch((function(e){var t,n,o;(null===e||void 0===e?void 0:e.response)?a.a.error(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n||null===(o=n.errors[0])||void 0===o?void 0:o.message):a.a.error("Something Wrong!",null===e||void 0===e?void 0:e.message);r(i(!1))}))}},p=function(e){return function(t){var r=new FormData;for(var o in e)r.append(o,e[o]);t(i(!0)),n.a.post("/o/resendOtp",r).then((function(e){var r=e.data;a.a.success(r.message),t(i(!1))})).catch((function(e){e.response?a.a.error(e.response.data.errors[0].message):a.a.error("Something Wrong!",e.message),t(i(!1))}))}},m=function(e,t){return function(r){sessionStorage.setItem("steps",t),r({type:o.c,payload:e}),r({type:o.i,payload:t})}},f=function(e){return function(t){var r=new FormData;for(var s in e)r.append(s,e[s]);t(i(!0));var c=localStorage.getItem("token"),l={headers:{Authorization:"Bearer ".concat(c)}};n.a.post("/pg/createPayment",r,l).then((function(e){var r=e.data;sessionStorage.setItem("orderID",r.orderID),t({type:o.f,payload:r}),t(i(!1))})).catch((function(e){e.response?a.a.error(e.response.data):a.a.error("Something Wrong!",e.message),t(i(!1))}))}},v=function(e){return function(t){var r=new FormData;r.append("orderID",e);var s=localStorage.getItem("token"),c={headers:{Authorization:"Bearer ".concat(s)}};t(i(!0)),n.a.post("/pg/verifyPayment",r,c).then((function(e){var r,n=e.data;null===n||void 0===n||null===(r=n.messages)||void 0===r||r.forEach((function(e){a.a.success(e)})),t(i(!1)),t({type:o.g,payload:JSON.parse(null===n||void 0===n?void 0:n.referenceObject)})})).catch((function(e){e.response?a.a.error(e.response.data.errors[0].message):a.a.error("Something Wrong!",e.message),t(i(!1))}))}}},260:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var n=r(84),a=r.n(n),o=function(e){return null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},s=function(e){for(var t in e)if(""!==e[t]&&null!==e[t]&&void 0!==e[t])return!0;return!1},i=function(e,t){if(void 0===e)return!1;if(void 0===t)return!1;var r=a()(e),n=a()(t);return console.log("mStart ",r),console.log("mEnd ",n),console.log("mStart.isSame(mEnd) || mStart.isBefore(mEnd) ",r.isSame(n)||r.isBefore(n)),r.isSame(n)||r.isBefore(n)}},406:function(e,t,r){"use strict";r.r(t);var n=r(86),a=r(10),o=r(30),s=r(1),i=r(24),c=r(5),l=r(85),d=r(0),u=function(e){var t,r,n,a;return Object(d.jsx)("form",{className:"login-form reg-form",onSubmit:e.handleSubmit,children:Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsxs)("div",{className:"col-md-10",children:[Object(d.jsx)("div",{className:"reg-header justify-content-center",children:"Verify your Primary Email & Phone Number"}),Object(d.jsx)("div",{className:"row justify-content-center reg-center",children:Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsxs)("div",{className:"reg-media",children:[Object(d.jsx)("div",{className:"reg-media-icon",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),Object(d.jsx)("div",{className:"reg-media-grp",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("label",{className:"login-label",children:"Enter the OTP sent to Primary Contact Email"}),Object(d.jsx)(l.a,{type:"password",name:"emailOtp",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(t=e.otp)||void 0===t?void 0:t.emailOtp,label:"Email OTP",errorMessage:null===e||void 0===e||null===(r=e.errors)||void 0===r?void 0:r.emailOtp,required:!0,validations:["minLength_6","maxLength_6"]}),Object(d.jsx)("p",{className:"reg-resend",children:Object(d.jsx)("a",{href:"javascript:void(0)",onClick:function(){return e.resend("Email")},children:"Resend OTP"})})]})})]}),Object(d.jsxs)("div",{className:"reg-media",children:[Object(d.jsx)("div",{className:"reg-media-icon",children:Object(d.jsx)("i",{className:"far fa-comment-alt"})}),Object(d.jsx)("div",{className:"reg-media-grp",children:Object(d.jsxs)("div",{className:"login-grp",children:[Object(d.jsx)("label",{className:"login-label",children:"Enter the OTP sent to Primary Contact Mobile"}),Object(d.jsx)(l.a,{type:"password",name:"phoneOtp",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(n=e.otp)||void 0===n?void 0:n.phoneOtp,label:"Phone OTP",errorMessage:null===e||void 0===e||null===(a=e.errors)||void 0===a?void 0:a.phoneOtp,required:!0,validations:["minLength_6","maxLength_6"]}),Object(d.jsx)("p",{className:"reg-resend",children:Object(d.jsx)("a",{href:"javascript:void(0)",onClick:function(){return e.resend("Phone")},children:"Resend OTP"})})]})})]})]})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(d.jsx)("button",{type:"button",onClick:function(){e.history.push("/register/contactPersonnel")},className:"reg-btn",children:"Previous"}),Object(d.jsx)("button",{type:"submit",className:"reg-btn",disabled:e.isBtnDisabled,children:"Next"})]})]})})})},p=r(254),m=r(260);t.default=function(e){var t={phoneOtp:"",emailOtp:""},r=t,l=Object(s.useState)(t),f=Object(o.a)(l,2),v=f[0],g=f[1],h=Object(s.useState)(r),j=Object(o.a)(h,2),O=j[0],b=j[1],y=Object(s.useState)(!1),S=Object(o.a)(y,2),N=S[0],x=S[1],I=Object(i.a)();Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem("regStatus"));(null===t||void 0===t?void 0:t.stakeholder)||(null===t||void 0===t?void 0:t.platformUID)||e.history.push("/register/contactPersonnel")}),[]),Object(s.useEffect)((function(){var e=Object(m.a)(O);x(e)}),[O]);return Object(d.jsx)(u,{history:e.history,errors:O,otp:v,isBtnDisabled:N,resend:function(e){var t=JSON.parse(localStorage.getItem("regStatus")),r={stakeholder:null===t||void 0===t?void 0:t.stakeholder,platformUID:null===t||void 0===t?void 0:t.platformUID,otpType:e};I(Object(p.c)(r))},handleChange:function(e,t,r){g((function(r){return Object(a.a)(Object(a.a)({},r),{},Object(n.a)({},e,t))})),b((function(t){return Object(a.a)(Object(a.a)({},t),{},Object(n.a)({},e,r))}))},handleSubmit:function(t){t.preventDefault();var r=O.otpErr,n=O.otp2Err,a=v.phoneOtp,o=v.emailOtp,s=JSON.parse(localStorage.getItem("regStatus"));if(a&&o)if(r||n)c.a.error("Please enter Mobile & Email OTP");else{var i={stakeholder:null===s||void 0===s?void 0:s.stakeholder,platformUID:null===s||void 0===s?void 0:s.platformUID,email:null===s||void 0===s?void 0:s.email,phone:null===s||void 0===s?void 0:s.phoneNumber,phoneOtp:a,emailOtp:o};I(Object(p.i)(i,e.history))}}})}}}]);