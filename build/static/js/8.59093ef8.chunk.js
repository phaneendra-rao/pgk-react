(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[8],{149:function(e,i,l){"use strict";var a=l(8),t=l(1),n=l(150),c=l(0),s=window.$;i.a=function(e){return Object(t.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?s("#customModal").modal("show"):s("#customModal").modal("hide"),s(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(c.jsx)(n.a,{children:Object(c.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customModal",tabIndex:-1,children:Object(c.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",style:Object(a.a)({},null===e||void 0===e?void 0:e.modalStyles),children:Object(c.jsx)("div",{className:"modal-content",children:null===e||void 0===e?void 0:e.children})})})})}},150:function(e,i,l){"use strict";var a=l(29);i.a=function(e){var i=document.getElementById("portalModal");return Object(a.createPortal)(e.children,i)}},152:function(e,i,l){"use strict";l.d(i,"b",(function(){return t})),l.d(i,"a",(function(){return n})),l.d(i,"d",(function(){return c})),l.d(i,"c",(function(){return s}));var a=l(7),t=function(e){return{type:a.c,payload:e}},n=function(e){return{type:a.A,payload:e}},c=function(e){return{type:a.I,payload:e}},s=function(e){return{type:a.b,payload:e}}},154:function(e,i,l){"use strict";var a=l(1),t=l(150),n=l(0),c=window.$;i.a=function(e){return Object(a.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?c("#customToastModal").modal("show"):c("#customToastModal").modal("hide"),c(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(n.jsx)(t.a,{children:Object(n.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customToastModal",tabIndex:-1,children:Object(n.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsxs)("div",{className:"hiring-modal",children:[Object(n.jsx)("button",{type:"button",className:"close",onClick:null===e||void 0===e?void 0:e.onClose,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(n.jsxs)("div",{className:"modal-success",children:[(null===e||void 0===e?void 0:e.iconNameClass)&&Object(n.jsx)("div",{className:"modal-icon",children:Object(n.jsx)("i",{className:"fas ".concat(null===e||void 0===e?void 0:e.iconNameClass," txt-lightgreen")})}),Object(n.jsx)("p",{className:"modal-success-txt",children:null===e||void 0===e?void 0:e.message})]})]})})})})})}},157:function(e,i,l){"use strict";l.d(i,"a",(function(){return n}));var a=l(41);var t=l(50);function n(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(t.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},219:function(e,i,l){"use strict";l.r(i);var a=l(157),t=l(26),n=l(1),c=l(19),s=l(48),d=l.n(s),o=l(149),r=l(152),u=l(0),m=function(e){var i,l,a,s,m,j,b,v,h,p,x,O,f=Object(c.a)(),N=Object(n.useState)(!1),g=Object(t.a)(N,2),y=g[0],w=g[1],C=Object(n.useState)(),k=Object(t.a)(C,2),G=k[0],P=k[1],S=function(e){P(e),w(!0)},I=function(e,i){if(e&&i){var l=JSON.parse(e);return l.length>0&&void 0!==l[0][i]?l[0][i]:""}return"-"};return Object(u.jsxs)("div",{className:"w-full d-flex justify-content-center align-items-center",children:[(null===e||void 0===e?void 0:e.checkHandler)&&Object(u.jsx)("input",{type:"checkbox",onChange:function(){var i;null===e||void 0===e||e.checkHandler(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.hiringCriteriaID)},checked:!!(null===e||void 0===e?void 0:e.isCheck)&&(null===e||void 0===e?void 0:e.isCheck),style:{marginRight:"10px"}}),Object(u.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center jobs-list-item w-full",children:[Object(u.jsxs)("div",{className:"item d-flex flex-row justify-content-between align-items-center w-full",children:[Object(u.jsx)("div",{className:"job-icon job-blue-icon d-flex justify-content-center align-items-center",children:Object(u.jsx)("i",{className:"fas fa-cube"})}),Object(u.jsx)("p",{className:"job-label",children:(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.hiringCriteriaName)?null===e||void 0===e||null===(l=e.item)||void 0===l?void 0:l.hiringCriteriaName:"-"}),Object(u.jsx)("button",{className:"btn2",children:I(null===e||void 0===e||null===(a=e.item)||void 0===a?void 0:a.hcProgramsInString,"programID")}),Object(u.jsx)("p",{className:"job-published-date",children:I(null===e||void 0===e||null===(s=e.item)||void 0===s?void 0:s.hcProgramsInString,"branchName")}),Object(u.jsx)("p",{className:"job-published-date",children:(null===e||void 0===e||null===(m=e.item)||void 0===m?void 0:m.creationDate)?(null===e||void 0===e||null===(j=e.item)||void 0===j?void 0:j.publishedFlag)?"Published on ".concat(d()(null===e||void 0===e||null===(b=e.item)||void 0===b?void 0:b.creationDate).format("DD-MM-YYYY")):"Created on ".concat(d()(null===e||void 0===e||null===(v=e.item)||void 0===v?void 0:v.creationDate).format("DD-MM-YYYY")):"-"})]}),Object(u.jsx)("div",{className:"vertical-divider"}),Object(u.jsxs)("div",{className:"job-list-item-details-container d-flex flex-row justify-content-center align-items-center",children:[Object(u.jsxs)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".600rem",marginRight:"10px",borderRadius:"4px"},onClick:function(){var i,l;(l=null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.hiringCriteriaID)&&f(Object(r.c)({apiPayloadRequest:l,callback:S}))},children:[Object(u.jsx)("p",{children:"Details"}),Object(u.jsx)("i",{className:"fas fa-chevron-right"})]}),(null===e||void 0===e?void 0:e.checkHandler)&&Object(u.jsx)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i;null===e||void 0===e||e.onPublish(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.hiringCriteriaID)},children:Object(u.jsx)("p",{children:"Publish"})})]})]}),Object(u.jsx)(o.a,{show:y,modalStyles:{minWidth:"75%"},children:Object(u.jsxs)("div",{className:"hiring-modal",children:[Object(u.jsxs)("div",{className:"modal-header hiring-modal-header",children:[Object(u.jsxs)("h5",{className:"modal-title",id:"exampleModalLabel",children:["Hiring Criteria Details ",null===G||void 0===G?void 0:G.hiringCriteriaName]}),Object(u.jsx)("button",{type:"button",className:"close",onClick:function(){w(!1)},children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("form",{className:"hiring-modal-form",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===G||void 0===G?void 0:G.hiringCriteriaName)?null===G||void 0===G?void 0:G.hiringCriteriaName:"",readOnly:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Name of the Hiring Criteria"})]})}),Object(u.jsx)("div",{className:"col-md p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:I(null===G||void 0===G?void 0:G.hcProgramsInString,"programID"),disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Program"})]})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:I(null===G||void 0===G?void 0:G.hcProgramsInString,"branchName"),disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Branch"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:void 0!==(null===G||void 0===G?void 0:G.minimumCutoffPercentage10th)?null===G||void 0===G||null===(h=G.minimumCutoffPercentage10th)||void 0===h?void 0:h.toFixed(2):"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"X Percentage"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:void 0!==(null===G||void 0===G?void 0:G.minimumCutoffPercentage12th)?null===G||void 0===G||null===(p=G.minimumCutoffPercentage12th)||void 0===p?void 0:p.toFixed(2):"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"XII Percentage"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:void 0!==(null===G||void 0===G?void 0:G.minimumCutoffCGPAGrad)?null===G||void 0===G||null===(x=G.minimumCutoffCGPAGrad)||void 0===x?void 0:x.toFixed(2):"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"UG CGPA"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:void 0!==(null===G||void 0===G?void 0:G.minimumCutoffPercentageGrad)?null===G||void 0===G||null===(O=G.minimumCutoffPercentageGrad)||void 0===O?void 0:O.toFixed(2):"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"UG Percentage"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===G||void 0===G?void 0:G.yearOfPassing)?null===G||void 0===G?void 0:G.yearOfPassing:"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Year of Passing"})]})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:"".concat((null===G||void 0===G?void 0:G.allowActiveBacklogs)?"Yes ".concat(null===G||void 0===G?void 0:G.numberOfAllowedBacklogs," Backlogs"):"No"),disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Active Backlogs allowed"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",defaultValue:(null===G||void 0===G?void 0:G.eduGapsSchoolAllowed)||(null===G||void 0===G?void 0:G.eduGaps11N12Allowed)||(null===G||void 0===G?void 0:G.eduGaps12NGradAllowed)||(null===G||void 0===G?void 0:G.eduGapsGradAllowed)||(null===G||void 0===G?void 0:G.eduGapsGradNPGAllowed),disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Education Gaps allowed"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",defaultValue:(null===G||void 0===G?void 0:G.eduGapsSchoolAllowed)?"Yes - ".concat(null===G||void 0===G?void 0:G.eduGapsSchool," months"):"No",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"During Schooling"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",defaultValue:(null===G||void 0===G?void 0:G.eduGaps11N12Allowed)?"Yes - ".concat(null===G||void 0===G?void 0:G.eduGaps11N12," months"):"No",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"During XI - XII"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",defaultValue:(null===G||void 0===G?void 0:G.eduGaps12NGradAllowed)?"Yes - ".concat(null===G||void 0===G?void 0:G.eduGaps12NGrad," months"):"No",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Between XII - Grad"})]})}),Object(u.jsx)("div",{className:"col-md-2 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",defaultValue:(null===G||void 0===G?void 0:G.eduGapsGradAllowed)?"Yes - ".concat(null===G||void 0===G?void 0:G.eduGapsGrad," months"):"No",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"During Grad"})]})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12 p-1",children:Object(u.jsxs)("div",{className:"modal-grp",children:[Object(u.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===G||void 0===G?void 0:G.remarks)?null===G||void 0===G?void 0:G.remarks:"",disabled:!0,required:!0}),Object(u.jsx)("label",{className:"inp-caption",children:"Remarks"})]})})})]})]})})]})},j=l(154);i.default=function(e){var i=Object(c.a)(),l=Object(n.useState)([]),s=Object(t.a)(l,2),d=s[0],o=s[1],b=Object(n.useState)(!1),v=Object(t.a)(b,2),h=v[0],p=v[1],x=Object(n.useState)(!1),O=Object(t.a)(x,2),f=O[0],N=O[1],g=Object(n.useState)([]),y=Object(t.a)(g,2),w=y[0],C=y[1],k=Object(n.useState)([]),G=Object(t.a)(k,2),P=G[0],S=G[1],I=function(e){if(null===e||void 0===e?void 0:e.length){var i=[],l=[];e.forEach((function(e){!1===(null===e||void 0===e?void 0:e.publishedFlag)?i.push(e):!0===(null===e||void 0===e?void 0:e.publishedFlag)&&l.push(e)})),o(i),S(l)}},A=function(){i(Object(r.b)({callback:I}))};Object(n.useEffect)((function(){A()}),[]);var D=function(e){var i=Object(a.a)(w);if(i.includes(e)){var l=i.indexOf(e);l>-1&&i.splice(l,1)}else i.push(e);C(i),p(i.length===d.length)},q=function(){A(),N(!0)},M=function(e){i(Object(r.d)({apiPayloadRequest:e,callback:q}))},Y=function(e){M([e])};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"page-body",style:{marginTop:30},children:Object(u.jsx)("div",{className:"row published-jobs-section",style:{marginTop:0,paddingTop:0},children:Object(u.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",style:{marginTop:0,paddingTop:0},children:[Object(u.jsx)("p",{className:"heading",style:{fontWeight:"bold"},children:"Publish Hiring Criteria"}),(null===d||void 0===d?void 0:d.length)?Object(u.jsxs)("div",{className:"align-self-start d-flex justify-content-center align-items-center mb-3",children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(){!function(e){var i=Object(a.a)(w);"ALL"===e?(i=[],!1===h&&d.forEach((function(e){i.push(null===e||void 0===e?void 0:e.hiringCriteriaID)})),C(i),p(!h)):C(i)}("ALL")},checked:h,style:{marginRight:"10px"}}),Object(u.jsx)("button",{type:"button",className:"btn",style:{height:"35px",width:"100px",fontSize:".700rem"},onClick:function(){w.length&&M(w)},children:"Publish Selected"})]}):"",(null===d||void 0===d?void 0:d.length)?d.map((function(e,i){return Object(u.jsx)(m,{item:e,checkHandler:D,onPublish:Y,isCheck:!!w.includes(null===e||void 0===e?void 0:e.hiringCriteriaID)},i)})):"",0===(null===d||void 0===d?void 0:d.length)&&Object(u.jsx)("div",{className:"row jobs-saved-section-list",children:Object(u.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(u.jsx)("p",{className:"no-list-message w-full",children:"Nothing to display here"})})})]})})}),Object(u.jsx)("div",{className:"row jobs-saved-section",style:{margin:0},children:Object(u.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(u.jsx)("p",{className:"heading w-full",children:"Published Hiring Criteria History"})})}),P.length?Object(u.jsx)("div",{className:"p-2",children:P.map((function(e,i){return Object(u.jsx)(m,{item:e},i)}))}):Object(u.jsx)("div",{className:"row jobs-saved-section-list",children:Object(u.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(u.jsx)("p",{className:"no-list-message w-full",children:"Nothing to display here"})})}),Object(u.jsx)(j.a,{onClose:function(){N(!1)},show:f,iconNameClass:"fa-file",message:"Selected Hiring Criteria Have been Published Successfully"})]})}}}]);