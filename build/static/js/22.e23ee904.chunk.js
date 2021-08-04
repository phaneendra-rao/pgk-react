(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[22],{249:function(e,r,o){"use strict";var a=o(73),t=(o(1),o(209)),n=o(294),s=o(207),d=o(206),i=o(208),c=o(0);var l=function(e,r){var o;if(r&&r.length){var a=!0;r.forEach((function(r){a&&("string"===typeof r?"isRequired"===r&&(o=function(e){var r;null!=e&&void 0!=e&&""!==e.toString().trim()||(r="Required");return r}(e)):"function"===typeof r&&(o=r(e)),void 0!==o&&(a=!1))}))}return o};r.a=function(e){var r=e.label,o=void 0===r?"":r,u=(e.variant,e.size),v=void 0===u?"small":u,p=e.name,m=void 0===p?"":p,h=e.value,b=void 0===h?"":h,j=e.onChange,g=void 0===j?function(){}:j,f=e.disabled,O=void 0!==f&&f,y=(e.className,e.required),A=void 0!==y&&y,C=e.errorMessage,x=void 0===C?"":C,L=e.styles,S=void 0===L?{width:"100%"}:L,N=e.validations,B=void 0===N?[]:N,H=e.options,Q=void 0===H?[]:H,w=e.labelStyles,I=void 0===w?{}:w,P=e.selectStyles,D=void 0===P?{}:P,E=e.menuStyles,q=void 0===E?{}:E;return Object(c.jsxs)(d.a,{size:v,variant:"outlined",style:S,disabled:O,required:A,error:void 0!==x&&""!==(null===x||void 0===x?void 0:x.trim()),children:[Object(c.jsx)(t.a,{style:I,children:o}),Object(c.jsxs)(i.a,{value:b,onChange:function(e){var r,o,t=[];A&&(t=["isRequired"].concat(Object(a.a)(B)));var n=l(null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value,t);g(m,null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.value,n)},label:o,autoWidth:!0,style:D,children:[Object(c.jsx)(n.a,{style:q,value:"",children:"Select ".concat(o)}),(null===Q||void 0===Q?void 0:Q.length)?Q.map((function(e){if(e&&e.value&&e.label)return Object(c.jsxs)(n.a,{style:q,value:null===e||void 0===e?void 0:e.value,children:[(null===e||void 0===e?void 0:e.iconName)?Object(c.jsx)("span",{style:{marginRight:"12px"},children:Object(c.jsx)("i",{className:"fas "+e.iconName})}):void 0,null===e||void 0===e?void 0:e.label]})})):null]}),Object(c.jsx)(s.a,{error:void 0!==x&&""!==(null===x||void 0===x?void 0:x.trim()),children:void 0!==x&&""!==(null===x||void 0===x?void 0:x.trim())?x:""})]})}},254:function(e,r,o){"use strict";o.d(r,"d",(function(){return s})),o.d(r,"b",(function(){return i})),o.d(r,"f",(function(){return c})),o.d(r,"g",(function(){return l})),o.d(r,"i",(function(){return u})),o.d(r,"c",(function(){return v})),o.d(r,"e",(function(){return p})),o.d(r,"a",(function(){return m})),o.d(r,"h",(function(){return h}));var a=o(9),t=o(5),n=o(35),s=function(){return function(e){e({type:n.h,payload:void 0})}},d=function(e){return function(r){r({type:n.a,payload:e})}},i=function(){return function(e){a.a.get("http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;").then((function(r){var o=r.data;e({type:n.d,payload:o})})).catch((function(e){var r=JSON.stringify(e);t.a.error(JSON.parse(r).message)}))}},c=function(e,r,o){return function(s){var i;"Corporate"===o?i="/o/signUp/Corporate":"University"===o&&(i="/o/signUp/University");var c=new FormData;for(var l in e)c.append(l,e[l]);s(d(!0)),s({type:n.c,payload:e}),a.a.post(i,c).then((function(e){var o=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(o)),sessionStorage.setItem("steps",3),s({type:n.i,payload:3}),s(d(!1)),t.a.success(o.message),r.push("/register/authentication")})).catch((function(e){e.response?t.a.error(e.response.data.errors[0].message):t.a.error("Something Wrong!",e.message),s(d(!1))}))}},l=function(e,r,o){return function(o){var s=new FormData;for(var i in e)s.append(i,e[i]);o(d(!0)),o({type:n.c,payload:e}),a.a.post("/o/signUp/Student",s).then((function(e){var a=e.data;localStorage.removeItem("imgpath"),localStorage.setItem("regStatus",JSON.stringify(a)),sessionStorage.setItem("steps",3),o({type:n.i,payload:3}),o(d(!1)),t.a.success(a.message),r.push("/register/studentAuthentication")})).catch((function(e){e.response?t.a.error(e.response.data.errors[0].message):t.a.error("Something Wrong!",e.message),o(d(!1))}))}},u=function(e,r){return function(o){var n=new FormData;for(var s in e)n.append(s,e[s]);o(d(!0)),a.a.post("/o/verifyOTP",n).then((function(e){var a=e.data;o(d(!1)),(null===a||void 0===a?void 0:a.MobileVerified)&&(null===a||void 0===a?void 0:a.emailVerified)?(sessionStorage.clear(),t.a.success(a.message),r.push("/register/completed")):t.a.error("OTP verification failed")})).catch((function(e){var r,a,n;(null===e||void 0===e?void 0:e.response)?t.a.error(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(a=r.data)||void 0===a||null===(n=a.errors[0])||void 0===n?void 0:n.message):t.a.error("Something Wrong!",null===e||void 0===e?void 0:e.message);o(d(!1))}))}},v=function(e){return function(r){var o=new FormData;for(var n in e)o.append(n,e[n]);r(d(!0)),a.a.post("/o/resendOtp",o).then((function(e){var o=e.data;t.a.success(o.message),r(d(!1))})).catch((function(e){e.response?t.a.error(e.response.data.errors[0].message):t.a.error("Something Wrong!",e.message),r(d(!1))}))}},p=function(e,r){return function(o){sessionStorage.setItem("steps",r),o({type:n.c,payload:e}),o({type:n.i,payload:r})}},m=function(e){return function(r){var o=new FormData;for(var s in e)o.append(s,e[s]);r(d(!0));var i=localStorage.getItem("token"),c={headers:{Authorization:"Bearer ".concat(i)}};a.a.post("/pg/createPayment",o,c).then((function(e){var o=e.data;sessionStorage.setItem("orderID",o.orderID),r({type:n.f,payload:o}),r(d(!1))})).catch((function(e){e.response?t.a.error(e.response.data):t.a.error("Something Wrong!",e.message),r(d(!1))}))}},h=function(e){return function(r){var o=new FormData;o.append("orderID",e);var s=localStorage.getItem("token"),i={headers:{Authorization:"Bearer ".concat(s)}};r(d(!0)),a.a.post("/pg/verifyPayment",o,i).then((function(e){var o,a=e.data;null===a||void 0===a||null===(o=a.messages)||void 0===o||o.forEach((function(e){t.a.success(e)})),r(d(!1)),r({type:n.g,payload:JSON.parse(null===a||void 0===a?void 0:a.referenceObject)})})).catch((function(e){e.response?t.a.error(e.response.data.errors[0].message):t.a.error("Something Wrong!",e.message),r(d(!1))}))}}},260:function(e,r,o){"use strict";o.d(r,"c",(function(){return n})),o.d(r,"a",(function(){return s})),o.d(r,"b",(function(){return d}));var a=o(84),t=o.n(a),n=function(e){return null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},s=function(e){for(var r in e)if(""!==e[r]&&null!==e[r]&&void 0!==e[r])return!0;return!1},d=function(e,r){if(void 0===e)return!1;if(void 0===r)return!1;var o=t()(e),a=t()(r);return console.log("mStart ",o),console.log("mEnd ",a),console.log("mStart.isSame(mEnd) || mStart.isBefore(mEnd) ",o.isSame(a)||o.isBefore(a)),o.isSame(a)||o.isBefore(a)}},284:function(e,r,o){"use strict";o(1);var a=o(0);r.a=function(e){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"reg-header",children:[Object(a.jsx)("h4",{className:"reg-header-title",children:null===e||void 0===e?void 0:e.title}),Object(a.jsx)("hr",{className:"reg-header-hr"})]})})})}},294:function(e,r,o){"use strict";var a=o(11),t=o(40),n=o(4),s=o(1),d=(o(15),o(13)),i=o(17),c=o(394),l=o(60),u=o(22),v=o(93),p=o(20),m="undefined"===typeof window?s.useEffect:s.useLayoutEffect,h=s.forwardRef((function(e,r){var o=e.alignItems,t=void 0===o?"center":o,i=e.autoFocus,h=void 0!==i&&i,b=e.button,j=void 0!==b&&b,g=e.children,f=e.classes,O=e.className,y=e.component,A=e.ContainerComponent,C=void 0===A?"li":A,x=e.ContainerProps,L=(x=void 0===x?{}:x).className,S=Object(a.a)(x,["className"]),N=e.dense,B=void 0!==N&&N,H=e.disabled,Q=void 0!==H&&H,w=e.disableGutters,I=void 0!==w&&w,P=e.divider,D=void 0!==P&&P,E=e.focusVisibleClassName,q=e.selected,k=void 0!==q&&q,M=Object(a.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),R=s.useContext(v.a),F={dense:B||R.dense||!1,alignItems:t},Z=s.useRef(null);m((function(){h&&Z.current&&Z.current.focus()}),[h]);var _=s.Children.toArray(g),J=_.length&&Object(l.a)(_[_.length-1],["ListItemSecondaryAction"]),U=s.useCallback((function(e){Z.current=p.findDOMNode(e)}),[]),z=Object(u.a)(U,r),V=Object(n.a)({className:Object(d.a)(f.root,O,F.dense&&f.dense,!I&&f.gutters,D&&f.divider,Q&&f.disabled,j&&f.button,"center"!==t&&f.alignItemsFlexStart,J&&f.secondaryAction,k&&f.selected),disabled:Q},M),W=y||"li";return j&&(V.component=y||"div",V.focusVisibleClassName=Object(d.a)(f.focusVisible,E),W=c.a),J?(W=V.component||y?W:"div","li"===C&&("li"===W?W="div":"li"===V.component&&(V.component="div")),s.createElement(v.a.Provider,{value:F},s.createElement(C,Object(n.a)({className:Object(d.a)(f.container,L),ref:z},S),s.createElement(W,V,_),_.pop()))):s.createElement(v.a.Provider,{value:F},s.createElement(W,Object(n.a)({ref:z},V),_))})),b=Object(i.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(h),j=s.forwardRef((function(e,r){var o,t=e.classes,i=e.className,c=e.component,l=void 0===c?"li":c,u=e.disableGutters,v=void 0!==u&&u,p=e.ListItemClasses,m=e.role,h=void 0===m?"menuitem":m,j=e.selected,g=e.tabIndex,f=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(o=void 0!==g?g:-1),s.createElement(b,Object(n.a)({button:!0,role:h,tabIndex:o,component:l,selected:j,disableGutters:v,classes:Object(n.a)({dense:t.dense},p),className:Object(d.a)(t.root,i,j&&t.selected,!v&&t.gutters),ref:r},f))}));r.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.body1,Object(t.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(j)},404:function(e,r,o){"use strict";o.r(r);var a=o(86),t=o(10),n=o(3),s=o.n(n),d=o(95),i=o(30),c=o(1),l=o(24),u=o(5),v=o(18),p=o(249),m=o(85),h=o(284),b=o(0),j=function(e){var r,o,a,t,n,s,d,i,c,u,j,g,f,O,y,A,C,x,L,S,N,B,H,Q,w,I,P,D,E,q,k,M,R,F,Z,_,J,U,z,V,W,T,G,$=localStorage.getItem("type"),K=e.countryCodes&&e.countryCodes.length>=0?null===(r=e.countryCodes)||void 0===r?void 0:r.map((function(e,r){return{value:e.value,label:e.label}})):null,X=Object(v.g)(),Y=Object(l.b)((function(e){return e.DashboardReducer.apiStatus}));return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,className:"login-form reg-form position-relative",children:[0!==Y&&Object(b.jsx)("span",{className:"text-warning position-absolute",style:{top:"-10px"},children:"Loading countries..."}),Object(b.jsx)(h.a,{title:"Address"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsxs)("h6",{className:"reg-label",children:[$," Headquarters"]}),Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateHQAddressLine1",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(o=e.corporateSecondary)||void 0===o?void 0:o.corporateHQAddressLine1,label:"Address (Line 1)",errorMessage:null===e||void 0===e||null===(a=e.errors)||void 0===a?void 0:a.corporateHQAddressLine1,required:!0})}),Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateHQAddressLine2",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(t=e.corporateSecondary)||void 0===t?void 0:t.corporateHQAddressLine2,label:"Address (Line 2)",errorMessage:null===e||void 0===e||null===(n=e.errors)||void 0===n?void 0:n.corporateHQAddressLine2,required:!0})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateHQAddressCountry",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(s=e.corporateSecondary)||void 0===s?void 0:s.corporateHQAddressCountry,disabled:0!==Y,label:"Country",options:K,errorMessage:null===e||void 0===e||null===(d=e.errors)||void 0===d?void 0:d.corporateHQAddressCountry,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateHQAddressState",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(i=e.corporateSecondary)||void 0===i?void 0:i.corporateHQAddressState,disabled:!(null===e||void 0===e||null===(c=e.corporateSecondary)||void 0===c?void 0:c.corporateHQAddressCountry),label:"State",options:e.stateList,errorMessage:null===e||void 0===e||null===(u=e.errors)||void 0===u?void 0:u.corporateHQAddressState,required:!0})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateHQAddressCity",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(j=e.corporateSecondary)||void 0===j?void 0:j.corporateHQAddressCity,disabled:!(null===e||void 0===e||null===(g=e.corporateSecondary)||void 0===g?void 0:g.corporateHQAddressState),label:"City",options:e.citylist,errorMessage:null===e||void 0===e||null===(f=e.errors)||void 0===f?void 0:f.corporateHQAddressCity,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateHQAddressDistrict",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(O=e.corporateSecondary)||void 0===O?void 0:O.corporateHQAddressDistrict,label:"District",errorMessage:null===e||void 0===e||null===(y=e.errors)||void 0===y?void 0:y.corporateHQAddressDistrict,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{type:"number",name:"corporateHQAddressZipCode",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(A=e.corporateSecondary)||void 0===A?void 0:A.corporateHQAddressZipCode,label:"Zipcode",errorMessage:null===e||void 0===e||null===(C=e.errors)||void 0===C?void 0:C.corporateHQAddressZipCode,required:!0,validations:["minLength_6","maxLength_6"]})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{type:"number",name:"corporateHQAddressPhone",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(x=e.corporateSecondary)||void 0===x?void 0:x.corporateHQAddressPhone,label:"Phone Number",errorMessage:null===e||void 0===e||null===(L=e.errors)||void 0===L?void 0:L.corporateHQAddressPhone,required:!0,validations:["minLength_10","maxLength_10"]})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateHQAddressEmail",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(S=e.corporateSecondary)||void 0===S?void 0:S.corporateHQAddressEmail,label:"Office mail",errorMessage:null===e||void 0===e||null===(N=e.errors)||void 0===N?void 0:N.corporateHQAddressEmail,required:!0,validations:["isEmail"]})})})]})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsxs)("div",{className:"d-lg-flex",children:[Object(b.jsxs)("h6",{className:"reg-label",children:[e.type," Local Branch"]}),Object(b.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(b.jsx)("input",{type:"checkbox",onChange:e.saveData,className:"custom-control-input",id:"save"}),Object(b.jsxs)("label",{className:"custom-control-label",htmlFor:"save",children:["Same as ",e.type," Head Quarters"]})]})]}),Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateLocalBranchAddressLine1",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(B=e.corporateSecondary)||void 0===B?void 0:B.corporateLocalBranchAddressLine1,label:"Address (Line 1)",errorMessage:null===e||void 0===e||null===(H=e.errors)||void 0===H?void 0:H.corporateLocalBranchAddressLine1,required:!0})}),Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateLocalBranchAddressLine2",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(Q=e.corporateSecondary)||void 0===Q?void 0:Q.corporateLocalBranchAddressLine2,label:"Address (Line 2)",errorMessage:null===e||void 0===e||null===(w=e.errors)||void 0===w?void 0:w.corporateLocalBranchAddressLine2,required:!0})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateLocalBranchAddressCountry",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(I=e.corporateSecondary)||void 0===I?void 0:I.corporateLocalBranchAddressCountry,disabled:0!==Y,label:"Country",options:K,errorMessage:null===e||void 0===e||null===(P=e.errors)||void 0===P?void 0:P.corporateLocalBranchAddressCountry,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateLocalBranchAddressState",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(D=e.corporateSecondary)||void 0===D?void 0:D.corporateLocalBranchAddressState,disabled:!(null===e||void 0===e||null===(E=e.corporateSecondary)||void 0===E?void 0:E.corporateLocalBranchAddressCountry),label:"State",options:e.stateListLocal,errorMessage:null===e||void 0===e||null===(q=e.errors)||void 0===q?void 0:q.corporateLocalBranchAddressState,required:!0})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(p.a,{name:"corporateLocalBranchAddressCity",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(k=e.corporateSecondary)||void 0===k?void 0:k.corporateLocalBranchAddressCity,disabled:!(null===e||void 0===e||null===(M=e.corporateSecondary)||void 0===M?void 0:M.corporateLocalBranchAddressState),label:"City",options:e.citylistLocal,errorMessage:null===e||void 0===e||null===(R=e.errors)||void 0===R?void 0:R.corporateLocalBranchAddressCity,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateLocalBranchAddressDistrict",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(F=e.corporateSecondary)||void 0===F?void 0:F.corporateLocalBranchAddressDistrict,label:"District",errorMessage:null===e||void 0===e||null===(Z=e.errors)||void 0===Z?void 0:Z.corporateLocalBranchAddressDistrict,required:!0})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{type:"number",name:"corporateLocalBranchAddressZipCode",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(_=e.corporateSecondary)||void 0===_?void 0:_.corporateLocalBranchAddressZipCode,label:"Zipcode",errorMessage:null===e||void 0===e||null===(J=e.errors)||void 0===J?void 0:J.corporateLocalBranchAddressZipCode,required:!0,validations:["minLength_6","maxLength_6"]})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{type:"number",name:"corporateLocalBranchAddressPhone",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(U=e.corporateSecondary)||void 0===U?void 0:U.corporateLocalBranchAddressPhone,label:"Phone Number",errorMessage:null===e||void 0===e||null===(z=e.errors)||void 0===z?void 0:z.corporateLocalBranchAddressPhone,required:!0,validations:["minLength_10","maxLength_10"]})})}),Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"corporateLocalBranchAddressEmail",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(V=e.corporateSecondary)||void 0===V?void 0:V.corporateLocalBranchAddressEmail,label:"Office mail",errorMessage:null===e||void 0===e||null===(W=e.errors)||void 0===W?void 0:W.corporateLocalBranchAddressEmail,required:!0,validations:["isEmail"]})})})]})]})]}),Object(b.jsx)(h.a,{title:"Profile"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("div",{className:"mb-15",children:Object(b.jsx)(m.a,{name:"companyProfile",onChange:null===e||void 0===e?void 0:e.handleChange,value:null===e||void 0===e||null===(T=e.corporateSecondary)||void 0===T?void 0:T.companyProfile,label:"Company Profile (in Brief)",multiline:!0,minRows:8,errorMessage:null===e||void 0===e||null===(G=e.errors)||void 0===G?void 0:G.companyProfile,required:!0})})}),Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsxs)("div",{className:"reg-attach",children:[(null===e||void 0===e?void 0:e.filename)?Object(b.jsx)("span",{style:{fontSize:14,top:10,color:"grey"},children:e.filename}):Object(b.jsx)("span",{style:{fontSize:14,top:10,color:"grey"},children:"Attachment for profile"}),Object(b.jsx)("input",{type:"file",onChange:e.handleChangeImg,accept:"image/*",className:"reg-inp",name:"attachment",id:"attachment",required:!1}),Object(b.jsx)("label",{htmlFor:"attachment",className:"reg-label",children:"Attach"})]}),e.path?Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("img",{src:e.path,alt:"please select image",className:"img-thumbnail mb-3 w-50"})}):null]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(b.jsx)("button",{type:"button",className:"reg-btn",onClick:function(){return X.push("/register")},children:"Previous"}),Object(b.jsx)("button",{type:"submit",className:"reg-btn",disabled:e.isBtnDisabled||0!==Y,children:"Next"})]})]})},g=o(254),f=o(6),O=o(260),y=void 0;r.default=function(e){var r={corporateHQAddressLine1:"",corporateHQAddressLine2:"",corporateHQAddressCountry:"",corporateHQAddressState:"",corporateHQAddressCity:"",corporateHQAddressDistrict:"",corporateHQAddressZipCode:"",corporateHQAddressPhone:"",corporateHQAddressEmail:"",corporateLocalBranchAddressLine1:"",corporateLocalBranchAddressLine2:"",corporateLocalBranchAddressCountry:"",corporateLocalBranchAddressState:"",corporateLocalBranchAddressCity:"",corporateLocalBranchAddressDistrict:"",corporateLocalBranchAddressZipCode:"",corporateLocalBranchAddressPhone:"",corporateLocalBranchAddressEmail:"",companyProfile:"",attachment2:""},o=r,n={corporateName:"",CIN:"",corporateType:"",corporateCategory:"",corporateIndustry:"",attachment:"",yearOfEstablishment:""},v=Object(c.useState)(r),p=Object(i.a)(v,2),m=p[0],h=p[1],A=Object(c.useState)(o),C=Object(i.a)(A,2),x=C[0],L=C[1],S=Object(c.useState)(""),N=Object(i.a)(S,2),B=N[0],H=N[1],Q=Object(c.useState)(""),w=Object(i.a)(Q,2),I=w[0],P=(w[1],Object(c.useState)("")),D=Object(i.a)(P,2),E=(D[0],D[1]),q=Object(c.useState)([]),k=Object(i.a)(q,2),M=k[0],R=k[1],F=Object(c.useState)([]),Z=Object(i.a)(F,2),_=Z[0],J=Z[1],U=Object(c.useState)([]),z=Object(i.a)(U,2),V=z[0],W=z[1],T=Object(c.useState)([]),G=Object(i.a)(T,2),$=G[0],K=G[1],X=Object(c.useState)([]),Y=Object(i.a)(X,2),ee=Y[0],re=Y[1],oe=Object(c.useState)(!1),ae=Object(i.a)(oe,2),te=ae[0],ne=ae[1],se=Object(c.useState)({}),de=Object(i.a)(se,2),ie=(de[0],de[1]),ce=Object(c.useState)(""),le=Object(i.a)(ce,2),ue=le[0],ve=le[1],pe=Object(l.b)((function(e){return e.CorporateReducer.corporatePrimaryState})),me=(Object(l.b)((function(e){return e.CorporateReducer.countryCodes})),localStorage.getItem("type")),he=Object(l.a)();Object(c.useEffect)(Object(d.a)(s.a.mark((function o(){var a,t,d,i,c,l,u,v;return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(t in a=!1,pe)for(d in n)t===d&&(""===pe[t]&&null===pe[t]&&void 0===pe[t]||(a=!0));if(a){o.next=4;break}return o.abrupt("return",e.history.push("/register"));case 4:he(Object(f.c)({callback:be})),JSON.parse(sessionStorage.getItem("secondary")),i=!!(pe&&Object.keys(pe).length>9),pe&&i&&(l=pe,u={},Object.keys(l).map((function(e){for(var o in r)e===o&&(u[o]=l[o])})),h(u),(null===pe||void 0===pe?void 0:pe.corporateHQAddressCountry)&&je(null===pe||void 0===pe?void 0:pe.corporateHQAddressCountry,"HQ"),pe.corporateHQAddressState&&ge(null===pe||void 0===pe?void 0:pe.corporateHQAddressState,"HQ"),ve(null===pe||void 0===pe||null===(c=pe.attachment)||void 0===c?void 0:c.name),(v=new FileReader).onload=function(e){H(e.target.result.split(",")[1])}.bind(y),v.readAsDataURL(pe.attachment2));case 8:case"end":return o.stop()}}),o)}))),[]),Object(c.useEffect)((function(){var e=Object(O.a)(x);ne(e)}),[x]);var be=function(e){if(null===e||void 0===e?void 0:e.length){var r=e.map((function(e){return{value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name,callingCodes:null===e||void 0===e?void 0:e.callingCodes}}));(null===pe||void 0===pe?void 0:pe.corporateLocalBranchAddressCountry)&&je(null===pe||void 0===pe?void 0:pe.corporateLocalBranchAddressCountry,"LOCAL"),(null===pe||void 0===pe?void 0:pe.corporateLocalBranchAddressState)&&ge(null===pe||void 0===pe?void 0:pe.corporateLocalBranchAddressState,"LOCAL"),R(r)}},je=function(e,r){he(Object(f.e)({countryName:e,callback:function(e){return fe(e,r)}}))},ge=function(e,r){he(Object(f.a)({stateName:e,callback:function(e){return Oe(e,r)}}))},fe=function(e,r){var o=e&&e.length>=0?null===e||void 0===e?void 0:e.map((function(e,r){return{value:null===e||void 0===e?void 0:e.state_name,label:null===e||void 0===e?void 0:e.state_name}})):null;"HQ"===r?J(o):K(o)},Oe=function(e,r){var o=e&&e.length>=0?null===e||void 0===e?void 0:e.map((function(e,r){return{value:null===e||void 0===e?void 0:e.city_name,label:null===e||void 0===e?void 0:e.city_name}})):null;"HQ"===r?W(o):re(o)};return Object(b.jsx)(j,{history:e.history,selectedName:me,path:"data:image/png;base64,"+B,corporateSecondary:m,errors:x,isBtnDisabled:te,attachment:m.attachment2,countryCodes:M,stateList:_,citylist:V,stateListLocal:$,citylistLocal:ee,filename:ue,saveData:function(e){e.target.checked?(E(I),K(_),re(V),h((function(e){return Object(t.a)(Object(t.a)({},e),{},{corporateLocalBranchAddressLine1:m.corporateHQAddressLine1,corporateLocalBranchAddressLine2:m.corporateHQAddressLine2,corporateLocalBranchAddressCountry:m.corporateHQAddressCountry,corporateLocalBranchAddressState:m.corporateHQAddressState,corporateLocalBranchAddressCity:m.corporateHQAddressCity,corporateLocalBranchAddressDistrict:m.corporateHQAddressDistrict,corporateLocalBranchAddressZipCode:m.corporateHQAddressZipCode,corporateLocalBranchAddressPhone:m.corporateHQAddressPhone,corporateLocalBranchAddressEmail:m.corporateHQAddressEmail})}))):(E(""),K([]),re([]),h((function(e){return Object(t.a)(Object(t.a)({},e),{},{corporateLocalBranchAddressLine1:"",corporateLocalBranchAddressLine2:"",corporateLocalBranchAddressCountry:"",corporateLocalBranchAddressState:"",corporateLocalBranchAddressCity:"",corporateLocalBranchAddressDistrict:"",corporateLocalBranchAddressZipCode:"",corporateLocalBranchAddressPhone:"",corporateLocalBranchAddressEmail:""})})))},handleChangeImg:function(e){e.preventDefault();var r=e.target.files[0];if(e.target.files){h((function(e){return Object(t.a)(Object(t.a)({},e),{},{attachment2:r})}));var o={};for(var a in r)o[a]=r[a];ie(o),ve(r.name);for(var n=e.target.files.length,s=0;s<n;s++){var d=new FileReader;d.onload=function(e){H(e.target.result.split(",")[1])}.bind(y),d.readAsDataURL(e.target.files[s])}}},handleChange:function(e,r,o){h((function(o){return Object(t.a)(Object(t.a)({},o),{},Object(a.a)({},e,r))})),L((function(r){return Object(t.a)(Object(t.a)({},r),{},Object(a.a)({},e,o))})),"corporateHQAddressCountry"===e?je(r,"HQ"):"corporateLocalBranchAddressCountry"===e&&je(r,"LOCAL"),"corporateHQAddressState"===e?ge(r,"HQ"):"corporateLocalBranchAddressState"===e&&ge(r,"LOCAL")},handleSubmit:function(r){r.preventDefault();x.profileErr;var o=m.corporateHQAddressLine1,a=m.corporateHQAddressLine2,t=m.corporateHQAddressCountry,n=m.corporateHQAddressState,s=m.corporateHQAddressCity,d=m.corporateHQAddressDistrict,i=m.corporateHQAddressZipCode,c=m.corporateHQAddressPhone,l=m.corporateHQAddressEmail,v=m.companyProfile;m.corporateLocalBranchAddressPhone;if("Corporate"===me)if(o&&a&&t&&n&&s&&d&&i&&c&&l&&v){null===M||void 0===M||M.find((function(e){return(null===e||void 0===e?void 0:e.value)===(null===m||void 0===m?void 0:m.corporateHQAddressCountry)})),null===M||void 0===M||M.find((function(e){return(null===e||void 0===e?void 0:e.value)===(null===m||void 0===m?void 0:m.corporateLocalBranchAddressCountry)}));m.countryCode="",m.countryCode2="",sessionStorage.setItem("secondary",JSON.stringify(m)),he(Object(g.e)(m,2)),e.history.push("/register/contactPersonnel")}else u.a.error("Please enter required input fields");else"University"===me&&(o&&a&&t&&n&&s&&d&&i&&c&&l&&v?(he(Object(g.e)(m,2)),e.history.push("/register/contactPersonnel")):u.a.error("Please enter required input fields"))}})}}}]);