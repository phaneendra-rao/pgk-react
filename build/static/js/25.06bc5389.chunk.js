(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[25],{255:function(e,i,a){"use strict";var s=a(1),r=a(93),t=a(0),o=window.$;i.a=function(e){return Object(s.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?o("#customToastModal").modal("show"):o("#customToastModal").modal("hide"),o(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(t.jsx)(r.a,{children:Object(t.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customToastModal",tabIndex:-1,children:Object(t.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:Object(t.jsx)("div",{className:"modal-content",children:Object(t.jsxs)("div",{className:"hiring-modal",children:[Object(t.jsx)("button",{type:"button",className:"close",onClick:null===e||void 0===e?void 0:e.onClose,children:Object(t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(t.jsxs)("div",{className:"modal-success",children:[(null===e||void 0===e?void 0:e.iconNameClass)&&Object(t.jsx)("div",{className:"modal-icon",children:Object(t.jsx)("i",{className:"fas ".concat(null===e||void 0===e?void 0:e.iconNameClass," txt-lightgreen")})}),Object(t.jsx)("p",{className:"modal-success-txt",children:null===e||void 0===e?void 0:e.message})]})]})})})})})}},262:function(e,i,a){"use strict";a.d(i,"b",(function(){return r})),a.d(i,"a",(function(){return t})),a.d(i,"f",(function(){return o})),a.d(i,"d",(function(){return d})),a.d(i,"e",(function(){return l})),a.d(i,"c",(function(){return n}));var s=a(8),r=function(e){return{type:s.t,payload:e}},t=function(e){return{type:s.eb,payload:e}},o=function(e){return{type:s.ob,payload:e}},d=function(e){return{type:s.s,payload:e}},l=function(e){return{type:s.W,payload:e}},n=function(e){return{type:s.a,payload:e}}},265:function(e,i,a){"use strict";a(1);var s=a(367),r=a(401),t=a(366),o=a(364),d=a(365),l=a(363),n=a(362),c=a(50),u=a(0);i.a=function(e){var i=e.isOpenDialog,a=void 0!==i&&i,b=e.dialogTitle,v=void 0===b?void 0:b,m=e.dialogDescription,j=void 0===m?void 0:m,p=e.isCancelBtnRequired,g=void 0===p||p,f=e.isConfirmBtnRequired,h=void 0===f||f,O=e.isCancelBtnDisabled,x=void 0!==O&&O,N=e.isConfirmBtnDisabled,C=void 0!==N&&N,G=e.cancelbtnText,D=void 0===G?"Cancel":G,w=e.confirmbtnText,y=void 0===w?"Confirm":w,k=e.closeDialogHandler,M=void 0===k?void 0:k,R=e.confirmDialogHandler,q=void 0===R?void 0:R,A=e.disableBackdropClick,P=void 0!==A&&A,S=e.dialogContent,B=void 0===S?void 0:S,I=e.maxWidth,H=void 0===I?"md":I,E=(e.rootStyles,e.contentStyles),T=void 0===E?{padding:"0px"}:E,W=Object(c.a)(),z=Object(n.a)(W.breakpoints.down("sm"));return Object(u.jsx)("div",{children:Object(u.jsxs)(r.a,{fullScreen:z,open:a,onClose:M,"aria-labelledby":"responsive-dialog-title",disableBackdropClick:P,fullWidth:!0,maxWidth:H,children:[v&&Object(u.jsx)(l.a,{id:"responsive-dialog-title",children:v}),Object(u.jsxs)(o.a,{className:"".concat(null===e||void 0===e?void 0:e.contentClasses),dividers:!0,style:T,children:[j&&Object(u.jsx)(d.a,{children:j}),B]}),(g||h)&&Object(u.jsxs)(t.a,{children:[g&&Object(u.jsx)(s.a,{autoFocus:!0,onClick:M,disabled:x,color:"primary",children:D}),h&&Object(u.jsx)(s.a,{onClick:q,disabled:C,color:"primary",children:y})]})]})})}},326:function(e,i,a){"use strict";var s=a(248);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=s(a(1)),t=(0,s(a(250)).default)(r.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");i.default=t},413:function(e,i,a){"use strict";a.r(i);var s=a(30),r=a(1),t=a(24),o=a(86),d=a.n(o),l=a(306),n=a(326),c=a.n(n),u=a(0),b=function(e){var i,a,s=Object(t.b)((function(e){return e.DashboardReducer.apiStatus})),r=function(e,i){if(e&&i){var a=JSON.parse(e);return a.length>0&&void 0!==a[0][i]?a[0][i]:""}return"-"};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"row published-jobs-section",children:Object(u.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:[Object(u.jsx)("p",{className:"heading",children:"Hiring Criteria Created"}),(null===(i=e.hiringCriteria)||void 0===i?void 0:i.length)?null===(a=e.hiringCriteria)||void 0===a?void 0:a.map((function(i,a){return Object(u.jsxs)("div",{className:"row align-items-center jobs-list-item w-full p-0",children:[Object(u.jsxs)("div",{className:"col-md-2 row align-items-center p-0",children:[Object(u.jsx)("div",{className:"job-icon job-blue-icon d-flex justify-content-center align-items-center",children:Object(u.jsx)("i",{className:"fas fa-file-alt"})}),Object(u.jsx)("p",{className:"job-label text-ellipsis",style:{marginLeft:"14px",textTransform:"capitalize",fontWeight:"bold"},children:i.hiringCriteriaName})]}),Object(u.jsx)("div",{className:"col-md-1 align-items-center",children:Object(u.jsx)("button",{className:"btn2 text-ellipsis",style:{width:"100%"},children:r(i.hcProgramsInString,"programID")})}),Object(u.jsx)("div",{className:"col-md-4 item align-items-center",style:{minWidth:"320px"},children:Object(u.jsx)("p",{className:"job-published-date text-ellipsis",style:{color:"#919191",textAlign:"left",marginLeft:"12px"},children:r(i.hcProgramsInString,"branchName")})}),Object(u.jsxs)("div",{className:"col-md-3 item align-items-center",children:[Object(u.jsx)("p",{className:"job-published-date",style:{color:"#454545"},children:"Created On"}),Object(u.jsx)("p",{className:"job-published-date",style:{color:"#454545"},children:(null===i||void 0===i?void 0:i.creationDate)?"".concat(d()(null===i||void 0===i?void 0:i.creationDate).format("DD-MMM-YYYY")):"-"})]}),Object(u.jsxs)("div",{className:"col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full",children:[Object(u.jsx)("div",{className:"vertical-divider"}),Object(u.jsxs)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".700rem",marginRight:"10px",borderRadius:"4px",textTransform:"uppercase",fontWeight:"bolder"},onClick:function(){return e.detailsModal(i)},children:[Object(u.jsx)("p",{children:"Details"}),Object(u.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(u.jsx)(l.a,{"aria-label":"copy",onClick:function(){e.cloneHiringCriteria(null===i||void 0===i?void 0:i.hiringCriteriaID)},children:Object(u.jsx)(c.a,{fontSize:"small",color:"primary"})})]})]},a)})):s?"Loading...":"No hiring criteria records found, Please add to continue.",Object(u.jsx)("button",{type:"button",onClick:e.openCloseModal,className:"btn add-job-btn",style:{height:"20px"},children:"Add New Hiring Criteria"})]})})})},v=a(6),m=a(262),j=a(274),p=a(255),g=a(265);window.$,i.default=function(){var e={programID:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},hiringCriteriaName:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},minimumCutoffPercentage10th:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},minimumCutoffPercentage12th:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},minimumCutoffCGPAGrad:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},minimumCutoffPercentageGrad:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},eduGapsAllowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!1},eduGapsSchoolAllowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGaps11N12Allowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGaps12NGradAllowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGapsGradAllowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGapsGradNPGAllowed:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!0},allowActiveBacklogs:{value:!1,errorMessage:void 0,isRequired:!0,isDisabled:!1},numberOfAllowedBacklogs:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGapsSchool:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGaps11N12:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGaps12NGrad:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGapsGrad:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},eduGapsGradNPG:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!0},yearOfPassing:{value:void 0,errorMessage:void 0,isRequired:!0,isDisabled:!1},remarks:{value:void 0,errorMessage:void 0,isRequired:!1,isDisabled:!1},hcPrograms:{value:[],errorMessage:void 0,isRequired:!0,isDisabled:!1}},i=Object(r.useState)(!1),a=Object(s.a)(i,2),o=a[0],d=a[1],l=Object(r.useState)(),n=Object(s.a)(l,2),c=n[0],f=n[1],h=Object(r.useState)([]),O=Object(s.a)(h,2),x=O[0],N=O[1],C=Object(r.useState)(!0),G=Object(s.a)(C,2),D=G[0],w=G[1],y=Object(r.useState)(!1),k=Object(s.a)(y,2),M=k[0],R=k[1],q=Object(r.useState)(void 0),A=Object(s.a)(q,2),P=A[0],S=A[1],B=Object(r.useState)(e),I=Object(s.a)(B,2),H=I[0],E=I[1],T=Object(r.useState)([]),W=Object(s.a)(T,2),z=W[0],F=W[1],J=Object(t.a)(),L=function(){J(Object(m.b)({callback:U}))};Object(r.useEffect)((function(){L(),J(Object(v.d)({apiPayloadRequest:["branchCatalog","programCatalog"],callback:Y}))}),[]);var U=function(e){F(e)},Y=function(e){N(e)},V=function(){L(),d(!1),S(),E()},$=function(){E(e),w(!0),R(!1),d(!o),S()},_=function(i){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=["allowActiveBacklogs","eduGaps11N12Allowed","eduGaps12NGradAllowed","eduGapsAllowed","eduGapsGradAllowed","eduGapsGradNPGAllowed","eduGapsSchoolAllowed","hiringCriteriaName","remarks","minimumCutoffCGPAGrad","minimumCutoffPercentage10th","minimumCutoffPercentage12th","minimumCutoffPercentageGrad","yearOfPassing","numberOfAllowedBacklogs","eduGaps11N12","eduGaps12NGrad","eduGapsGrad","eduGapsGradNPG","eduGapsSchool"],r=e;s.forEach((function(e){r[e].value=i[e],r[e].isDisabled=!a})),s.forEach((function(e){"allowActiveBacklogs"===e?(r.numberOfAllowedBacklogs.isDisabled=!a||!i[e],r.numberOfAllowedBacklogs.value=i.numberOfAllowedBacklogs.toString()):["eduGapsSchool","eduGapsGradNPG","eduGapsGrad","eduGaps12NGrad","eduGaps11N12"].includes(e)&&(r[e+"Allowed"].isDisabled=!a||!i[e],r[e].isDisabled=!a||!i[e+"Allowed"],r[e].value=i[e].toString())})),r.eduGapsAllowed.value=["eduGapsSchool","eduGapsGradNPG","eduGapsGrad","eduGaps12NGrad","eduGaps11N12"].some((function(e){return!0===i[e+"Allowed"]}));var t=JSON.parse(i.hcProgramsInString),o=t.map((function(e){return{value:e.branchID,label:e.branchName,programID:e.programID,programName:e.programName}}));r.hcPrograms.value=o,r.hcPrograms.isDisabled=!a,r.programID.value=t[0].programID,r.programID.isDisabled=!a,E(r),w(!1),R(a),d(!0),S(i)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{openCloseModal:$,detailsModal:function(e){_(e)},cloneHiringCriteria:function(e){J(Object(m.c)({apiPayloadRequest:{hiringCriteriaId:e},callback:function(e){console.log("response ",e),L()}}))},hiringCriteria:z}),o&&Object(u.jsx)(g.a,{isOpenDialog:o,isCancelBtnRequired:!1,isConfirmBtnRequired:!1,disableBackdropClick:!0,dialogContent:Object(u.jsx)(j.a,{openCloseModal:$,addHiringCriteria:function(e){M&&(null===P||void 0===P?void 0:P.hiringCriteriaID)?J(Object(m.e)({apiPayloadRequest:{id:null===P||void 0===P?void 0:P.hiringCriteriaID,body:e},callback:function(){V(),w(!0),S(),R(!1),f(D?"NEW":"UPDATE")}})):J(Object(m.a)({apiPayloadRequest:e,callback:function(){V(),w(!0),S(),R(!1),f(D?"NEW":"UPDATE")}}))},editHc:function(){_(P,!0)},lookUpData:x,isNew:D,editable:M,hiringCriteriaData:H})}),c&&Object(u.jsx)(p.a,{onClose:function(){f()},show:!!c,iconNameClass:"fa-briefcase",message:"NEW"===c?"Hiring Criteria Saved Successfully!":"Hiring Criteria Updated Successfully!"})]})}}}]);