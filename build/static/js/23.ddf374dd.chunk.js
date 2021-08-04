(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[23],{249:function(e,t,a){"use strict";var r=a(73),o=(a(1),a(209)),n=a(294),i=a(207),s=a(206),l=a(208),c=a(0);var d=function(e,t){var a;if(t&&t.length){var r=!0;t.forEach((function(t){r&&("string"===typeof t?"isRequired"===t&&(a=function(e){var t;null!=e&&void 0!=e&&""!==e.toString().trim()||(t="Required");return t}(e)):"function"===typeof t&&(a=t(e)),void 0!==a&&(r=!1))}))}return a};t.a=function(e){var t=e.label,a=void 0===t?"":t,u=(e.variant,e.size),v=void 0===u?"small":u,m=e.name,p=void 0===m?"":m,b=e.value,f=void 0===b?"":b,g=e.onChange,h=void 0===g?function(){}:g,j=e.disabled,y=void 0!==j&&j,O=(e.className,e.required),x=void 0!==O&&O,N=e.errorMessage,C=void 0===N?"":N,S=e.styles,I=void 0===S?{width:"100%"}:S,D=e.validations,w=void 0===D?[]:D,E=e.options,P=void 0===E?[]:E,k=e.labelStyles,T=void 0===k?{}:k,q=e.selectStyles,R=void 0===q?{}:q,M=e.menuStyles,F=void 0===M?{}:M;return Object(c.jsxs)(s.a,{size:v,variant:"outlined",style:I,disabled:y,required:x,error:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim()),children:[Object(c.jsx)(o.a,{style:T,children:a}),Object(c.jsxs)(l.a,{value:f,onChange:function(e){var t,a,o=[];x&&(o=["isRequired"].concat(Object(r.a)(w)));var n=d(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value,o);h(p,null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value,n)},label:a,autoWidth:!0,style:R,children:[Object(c.jsx)(n.a,{style:F,value:"",children:"Select ".concat(a)}),(null===P||void 0===P?void 0:P.length)?P.map((function(e){if(e&&e.value&&e.label)return Object(c.jsxs)(n.a,{style:F,value:null===e||void 0===e?void 0:e.value,children:[(null===e||void 0===e?void 0:e.iconName)?Object(c.jsx)("span",{style:{marginRight:"12px"},children:Object(c.jsx)("i",{className:"fas "+e.iconName})}):void 0,null===e||void 0===e?void 0:e.label]})})):null]}),Object(c.jsx)(i.a,{error:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim()),children:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim())?C:""})]})}},254:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return d})),a.d(t,"i",(function(){return u})),a.d(t,"c",(function(){return v})),a.d(t,"e",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"h",(function(){return b}));var r=a(9),o=a(5),n=a(35),i=function(){return function(e){e({type:n.h,payload:void 0})}},s=function(e){return function(t){t({type:n.a,payload:e})}},l=function(){return function(e){r.a.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(t){var a=t.data;e({type:n.d,payload:a})})).catch((function(e){var t=JSON.stringify(e);o.a.error(JSON.parse(t).message)}))}},c=function(e,t,a){return function(i){var l;"Corporate"===a?l="/o/signUp/Corporate":"University"===a&&(l="/o/signUp/University");var c=new FormData;for(var d in e)c.append(d,e[d]);i(s(!0)),i({type:n.c,payload:e}),r.a.post(l,c).then((function(e){var a=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(a)),sessionStorage.setItem("steps",3),i({type:n.i,payload:3}),i(s(!1)),o.a.success(a.message),t.push("/register/authentication")})).catch((function(e){e.response?o.a.error(e.response.data.errors[0].message):o.a.error("Something Wrong!",e.message),i(s(!1))}))}},d=function(e,t,a){return function(a){var i=new FormData;for(var l in e)i.append(l,e[l]);a(s(!0)),a({type:n.c,payload:e}),r.a.post("/o/signUp/Student",i).then((function(e){var r=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(r)),sessionStorage.setItem("steps",3),a({type:n.i,payload:3}),a(s(!1)),o.a.success(r.message),t.push("/register/studentAuthentication")})).catch((function(e){e.response?o.a.error(e.response.data.errors[0].message):o.a.error("Something Wrong!",e.message),a(s(!1))}))}},u=function(e,t){return function(a){var n=new FormData;for(var i in e)n.append(i,e[i]);a(s(!0)),r.a.post("/o/verifyOTP",n).then((function(e){var r=e.data;a(s(!1)),(null===r||void 0===r?void 0:r.MobileVerified)&&(null===r||void 0===r?void 0:r.emailVerified)?(sessionStorage.clear(),o.a.success(r.message),t.push("/register/completed")):o.a.error("OTP verification failed")})).catch((function(e){var t,r,n;(null===e||void 0===e?void 0:e.response)?o.a.error(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r||null===(n=r.errors[0])||void 0===n?void 0:n.message):o.a.error("Something Wrong!",null===e||void 0===e?void 0:e.message);a(s(!1))}))}},v=function(e){return function(t){var a=new FormData;for(var n in e)a.append(n,e[n]);t(s(!0)),r.a.post("/o/resendOtp",a).then((function(e){var a=e.data;o.a.success(a.message),t(s(!1))})).catch((function(e){e.response?o.a.error(e.response.data.errors[0].message):o.a.error("Something Wrong!",e.message),t(s(!1))}))}},m=function(e,t){return function(a){sessionStorage.setItem("steps",t),a({type:n.c,payload:e}),a({type:n.i,payload:t})}},p=function(e){return function(t){var a=new FormData;for(var i in e)a.append(i,e[i]);t(s(!0));var l=localStorage.getItem("token"),c={headers:{Authorization:"Bearer ".concat(l)}};r.a.post("/pg/createPayment",a,c).then((function(e){var a=e.data;sessionStorage.setItem("orderID",a.orderID),t({type:n.f,payload:a}),t(s(!1))})).catch((function(e){e.response?o.a.error(e.response.data):o.a.error("Something Wrong!",e.message),t(s(!1))}))}},b=function(e){return function(t){var a=new FormData;a.append("orderID",e);var i=localStorage.getItem("token"),l={headers:{Authorization:"Bearer ".concat(i)}};t(s(!0)),r.a.post("/pg/verifyPayment",a,l).then((function(e){var a,r=e.data;null===r||void 0===r||null===(a=r.messages)||void 0===a||a.forEach((function(e){o.a.success(e)})),t(s(!1)),t({type:n.g,payload:JSON.parse(null===r||void 0===r?void 0:r.referenceObject)})})).catch((function(e){e.response?o.a.error(e.response.data.errors[0].message):o.a.error("Something Wrong!",e.message),t(s(!1))}))}}},260:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var r=a(84),o=a.n(r),n=function(e){return null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},i=function(e){for(var t in e)if(""!==e[t]&&null!==e[t]&&void 0!==e[t])return!0;return!1},s=function(e,t){if(void 0===e)return!1;if(void 0===t)return!1;var a=o()(e),r=o()(t);return console.log("mStart ",a),console.log("mEnd ",r),console.log("mStart.isSame(mEnd) || mStart.isBefore(mEnd) ",a.isSame(r)||a.isBefore(r)),a.isSame(r)||a.isBefore(r)}},284:function(e,t,a){"use strict";a(1);var r=a(0);t.a=function(e){return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsxs)("div",{className:"reg-header",children:[Object(r.jsx)("h4",{className:"reg-header-title",children:null===e||void 0===e?void 0:e.title}),Object(r.jsx)("hr",{className:"reg-header-hr"})]})})})}},294:function(e,t,a){"use strict";var r=a(11),o=a(40),n=a(4),i=a(1),s=(a(15),a(13)),l=a(17),c=a(394),d=a(60),u=a(22),v=a(93),m=a(20),p="undefined"===typeof window?i.useEffect:i.useLayoutEffect,b=i.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,l=e.autoFocus,b=void 0!==l&&l,f=e.button,g=void 0!==f&&f,h=e.children,j=e.classes,y=e.className,O=e.component,x=e.ContainerComponent,N=void 0===x?"li":x,C=e.ContainerProps,S=(C=void 0===C?{}:C).className,I=Object(r.a)(C,["className"]),D=e.dense,w=void 0!==D&&D,E=e.disabled,P=void 0!==E&&E,k=e.disableGutters,T=void 0!==k&&k,q=e.divider,R=void 0!==q&&q,M=e.focusVisibleClassName,F=e.selected,B=void 0!==F&&F,J=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),U=i.useContext(v.a),A={dense:w||U.dense||!1,alignItems:o},L=i.useRef(null);p((function(){b&&L.current&&L.current.focus()}),[b]);var z=i.Children.toArray(h),V=z.length&&Object(d.a)(z[z.length-1],["ListItemSecondaryAction"]),W=i.useCallback((function(e){L.current=m.findDOMNode(e)}),[]),G=Object(u.a)(W,t),$=Object(n.a)({className:Object(s.a)(j.root,y,A.dense&&j.dense,!T&&j.gutters,R&&j.divider,P&&j.disabled,g&&j.button,"center"!==o&&j.alignItemsFlexStart,V&&j.secondaryAction,B&&j.selected),disabled:P},J),H=O||"li";return g&&($.component=O||"div",$.focusVisibleClassName=Object(s.a)(j.focusVisible,M),H=c.a),V?(H=$.component||O?H:"div","li"===N&&("li"===H?H="div":"li"===$.component&&($.component="div")),i.createElement(v.a.Provider,{value:A},i.createElement(N,Object(n.a)({className:Object(s.a)(j.container,S),ref:G},I),i.createElement(H,$,z),z.pop()))):i.createElement(v.a.Provider,{value:A},i.createElement(H,Object(n.a)({ref:G},$),z))})),f=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b),g=i.forwardRef((function(e,t){var a,o=e.classes,l=e.className,c=e.component,d=void 0===c?"li":c,u=e.disableGutters,v=void 0!==u&&u,m=e.ListItemClasses,p=e.role,b=void 0===p?"menuitem":p,g=e.selected,h=e.tabIndex,j=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),i.createElement(f,Object(n.a)({button:!0,role:b,tabIndex:a,component:d,selected:g,disableGutters:v,classes:Object(n.a)({dense:o.dense},m),className:Object(s.a)(o.root,l,g&&o.selected,!v&&o.gutters),ref:t},j))}));t.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(g)},403:function(e,t,a){"use strict";a.r(t);var r=a(86),o=a(10),n=a(30),i=a(1),s=a(24),l=a(5),c=a(18),d=a(249),u=a(85),v=a(284),m=a(0),p=function(e){var t,a,r,o,n,i,s,l,p,b,f,g,h,j,y=localStorage.getItem("type"),O=e.lookUpData,x=O.corporateCategory,N=O.corporateIndustry,C=O.corporateType,S=x&&x.length>=0?null===x||void 0===x?void 0:x.map((function(e,t){return{value:e.categoryCode,label:e.categoryName}})):null,I=N&&N.length>=0?null===N||void 0===N?void 0:N.map((function(e,t){return{value:e.industryCode,label:e.industryName}})):null,D=C&&C.length>=0?null===C||void 0===C?void 0:C.map((function(e,t){return{value:e.corporateTypeCode,label:e.corporateTypeName}})):null,w=Object(c.g)();return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,className:"login-form reg-form",children:[e.showError?Object(m.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Please check all inputs "}):null,Object(m.jsx)(v.a,{title:"Primary Details"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(u.a,{name:"corporateName",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(t=e.corporatePrimaryData)||void 0===t?void 0:t.corporateName,label:"".concat(y," Name"),errorMessage:null===e||void 0===e||null===(a=e.errors)||void 0===a?void 0:a.corporateName,required:!0})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(u.a,{type:"number",name:"CIN",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(r=e.corporatePrimaryData)||void 0===r?void 0:r.CIN,label:"Corporate"===y?"CIN":"University/College ID",errorMessage:null===e||void 0===e||null===(o=e.errors)||void 0===o?void 0:o.CIN,required:!0})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(d.a,{name:"corporateType",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(n=e.corporatePrimaryData)||void 0===n?void 0:n.corporateType,label:"Corporate Type",options:D,errorMessage:null===e||void 0===e||null===(i=e.errors)||void 0===i?void 0:i.corporateType,required:!0})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(d.a,{name:"corporateCategory",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(s=e.corporatePrimaryData)||void 0===s?void 0:s.corporateCategory,label:"Corporate Category",options:S,errorMessage:null===e||void 0===e||null===(l=e.errors)||void 0===l?void 0:l.corporateCategory,required:!0})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(d.a,{name:"corporateIndustry",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(p=e.corporatePrimaryData)||void 0===p?void 0:p.corporateIndustry,label:"".concat(y," Industry"),options:I,errorMessage:null===e||void 0===e||null===(b=e.errors)||void 0===b?void 0:b.corporateIndustry,required:!0})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(u.a,{name:"yearOfEstablishment",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(f=e.corporatePrimaryData)||void 0===f?void 0:f.yearOfEstablishment,label:"Year of Establishment",errorMessage:null===e||void 0===e||null===(g=e.errors)||void 0===g?void 0:g.yearOfEstablishment,required:!0,validations:["minLength_4","maxLength_4","isNumeric"]})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsxs)("div",{className:"reg-attach",children:[(null===e||void 0===e?void 0:e.filename)?Object(m.jsx)("span",{style:{fontSize:14,top:10,color:"grey"},children:e.filename}):Object(m.jsx)("span",{style:{fontSize:14,top:10,color:"grey"},children:"Upload attachment"}),Object(m.jsx)("input",{type:"file",onChange:e.handleChangeImg,accept:"application/pdf",className:"reg-inp d-none",name:"attachment",id:"attachment",required:!1}),Object(m.jsx)("label",{htmlFor:"attachment",className:"reg-label",children:"Upload"})]})})]}),Object(m.jsx)(v.a,{title:"Referral Code"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"mb-15",children:Object(m.jsx)(u.a,{type:"text",name:"referral",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(h=e.corporatePrimaryData)||void 0===h?void 0:h.referral,label:"Referral Code",errorMessage:null===e||void 0===e||null===(j=e.errors)||void 0===j?void 0:j.referral,required:!1})})})}),Object(m.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(m.jsx)("button",{type:"button",className:"reg-btn",onClick:function(){return w.push("/")},children:"Go to login"}),Object(m.jsx)("button",{type:"submit",className:"reg-btn",disabled:e.isBtnDisabled,children:"Next"})]})]})},b=a(254),f=a(6),g=a(260),h=a(98);t.default=function(e){var t={corporateName:"",CIN:"",corporateType:"",corporateCategory:"",corporateIndustry:"",attachment:"",yearOfEstablishment:"",referral:""},a=t,c=Object(i.useState)(t),d=Object(n.a)(c,2),u=d[0],v=d[1],j=Object(i.useState)(a),y=Object(n.a)(j,2),O=y[0],x=y[1],N=Object(i.useState)(""),C=Object(n.a)(N,2),S=C[0],I=C[1],D=Object(i.useState)([]),w=Object(n.a)(D,2),E=w[0],P=w[1],k=Object(i.useState)({}),T=Object(n.a)(k,2),q=(T[0],T[1]),R=Object(i.useState)(""),M=Object(n.a)(R,2),F=M[0],B=M[1],J=Object(i.useState)(!1),U=Object(n.a)(J,2),A=U[0],L=U[1],z=Object(i.useState)(!1),V=Object(n.a)(z,2),W=V[0],G=V[1],$=Object(s.a)(),H=Object(s.b)((function(e){return e.CorporateReducer.corporatePrimaryState}));Object(i.useEffect)((function(){$(Object(f.d)({apiPayloadRequest:["corporateCategory","corporateIndustry","corporateType"],callback:_}));JSON.parse(sessionStorage.getItem("image1"));var e=sessionStorage.getItem("base64Img"),a=(JSON.parse(sessionStorage.getItem("primary")),!!(H&&Object.keys(H).length>5));if(I(e),H&&a){var r,o=H,n={};Object.keys(o).map((function(e){for(var a in t)e===a&&(n[a]=o[a])})),v(n),B(null===H||void 0===H||null===(r=H.attachment)||void 0===r?void 0:r.name)}}),[]),Object(i.useEffect)((function(){var e=Object(g.a)(O);L(e),W&&setTimeout((function(){G(!1)}),2e3)}),[O,W]);var _=function(e){P(e)},Y=function(e){$(Object(h.c)({apiPayloadRequest:e,callback:K}))},K=function(t){t.length>0?x((function(e){return Object(o.a)(Object(o.a)({},e),{},{referral:t})})):($(Object(b.e)(u,1)),e.history.push("/register/CorporateSecondary"))};return Object(m.jsx)(p,{corporatePrimaryData:u,errors:O,actualPath:S,filename:F,lookUpData:E,isBtnDisabled:A,showError:W,handleChange:function(e,t,a){v((function(a){return Object(o.a)(Object(o.a)({},a),{},Object(r.a)({},e,t))})),x((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,a))}))},handleChangeImg:function(e){if(e.preventDefault(),e.target.files)if("application/pdf"===e.target.files[0].type){var t=e.target.files[0],a={};for(var r in t)a[r]=t[r];q(a),B(t.name),sessionStorage.setItem("image1",JSON.stringify(a)),v((function(t){return Object(o.a)(Object(o.a)({},t),{},{attachment:e.target.files[0]})}))}else l.a.error("PDF only")},handleSubmit:function(t){if(t.preventDefault(),u.referral.length>0)Y(u.referral);else{var a=u.corporateName,r=u.CIN,o=u.corporateType,n=u.corporateCategory,i=u.corporateIndustry,s=u.attachment,l=u.yearOfEstablishment;a&&r&&o&&n&&i&&s&&l?(sessionStorage.setItem("primary",JSON.stringify(u)),G(!1),$(Object(b.e)(u,1)),e.history.push("/register/CorporateSecondary")):G(!0)}}})}}}]);