(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[14],{149:function(e,t,a){"use strict";var l=a(8),i=a(1),s=a(150),c=a(0),n=window.$;t.a=function(e){return Object(i.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?n("#customModal").modal("show"):n("#customModal").modal("hide"),n(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(c.jsx)(s.a,{children:Object(c.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customModal",tabIndex:-1,children:Object(c.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",style:Object(l.a)({},null===e||void 0===e?void 0:e.modalStyles),children:Object(c.jsx)("div",{className:"modal-content",children:null===e||void 0===e?void 0:e.children})})})})}},150:function(e,t,a){"use strict";var l=a(29);t.a=function(e){var t=document.getElementById("portalModal");return Object(l.createPortal)(e.children,t)}},154:function(e,t,a){"use strict";var l=a(1),i=a(150),s=a(0),c=window.$;t.a=function(e){return Object(l.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?c("#customToastModal").modal("show"):c("#customToastModal").modal("hide"),c(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(s.jsx)(i.a,{children:Object(s.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customToastModal",tabIndex:-1,children:Object(s.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:Object(s.jsx)("div",{className:"modal-content",children:Object(s.jsxs)("div",{className:"hiring-modal",children:[Object(s.jsx)("button",{type:"button",className:"close",onClick:null===e||void 0===e?void 0:e.onClose,children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(s.jsxs)("div",{className:"modal-success",children:[(null===e||void 0===e?void 0:e.iconNameClass)&&Object(s.jsx)("div",{className:"modal-icon",children:Object(s.jsx)("i",{className:"fas ".concat(null===e||void 0===e?void 0:e.iconNameClass," txt-lightgreen")})}),Object(s.jsx)("p",{className:"modal-success-txt",children:null===e||void 0===e?void 0:e.message})]})]})})})})})}},207:function(e,t,a){"use strict";a.r(t);var l=a(49),i=a(8),s=a(26),c=a(1),n=a(19),o=a(149),d=a(48),r=a.n(d),j=a(0),m=function(e){var t,a,l,i=Object(c.useState)(!1),n=Object(s.a)(i,2),d=n[0],m=n[1],b=Object(c.useState)(),u=Object(s.a)(b,2),h=u[0],v=u[1];return(null===e||void 0===e||null===(t=e.otherInformationList)||void 0===t?void 0:t.length)?Object(j.jsxs)(j.Fragment,{children:[null===e||void 0===e?void 0:e.otherInformationList.map((function(e){return t=e,Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center jobs-list-item w-full",children:[Object(j.jsxs)("div",{className:"item d-flex flex-row justify-content-between align-items-center w-full",children:[Object(j.jsx)("div",{className:"job-icon job-blue-icon d-flex justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-cube"})}),Object(j.jsx)("p",{className:"job-label",children:(null===t||void 0===t?void 0:t.publishID)?null===t||void 0===t?void 0:t.publishID:"-"}),Object(j.jsx)("p",{className:"job-published-date",style:{textOverflow:"ellipsis",fontWeight:"bold"},children:null===t||void 0===t?void 0:t.title}),Object(j.jsx)("p",{className:"job-published-date",children:(null===t||void 0===t?void 0:t.creationDate)&&"Published on ".concat(r()(t.creationDate).format("DD-MM-YYYY"))})]}),Object(j.jsx)("div",{className:"vertical-divider"}),Object(j.jsx)("div",{className:"job-list-item-details-container d-flex flex-row justify-content-center align-items-center",children:Object(j.jsxs)("div",{className:"job-details-btn d-flex flex-row justify-content-around align-items-center",style:{cursor:"pointer"},onClick:function(){v(t),m(!0)},children:[Object(j.jsx)("p",{children:"Details"}),Object(j.jsx)("i",{className:"fas fa-chevron-right"})]})})]},null===t||void 0===t?void 0:t.id);var t})),Object(j.jsx)(o.a,{show:d,children:Object(j.jsxs)("div",{className:"hiring-modal",children:[Object(j.jsxs)("div",{className:"modal-header hiring-modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",style:{fontSize:"1rem"},id:"exampleModalLabel",children:"Published Information Details"}),Object(j.jsx)("button",{type:"button",className:"close",style:{fontSize:"1rem"},onClick:function(){m(!1)},children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(j.jsx)("form",{className:"hiring-modal-form",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md",children:Object(j.jsxs)("div",{className:"modal-grp",children:[Object(j.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===h||void 0===h?void 0:h.publishID)?null===h||void 0===h?void 0:h.publishID:"",disabled:!0,required:!0}),Object(j.jsx)("label",{className:"inp-caption",children:"Publish ID"})]})}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsxs)("div",{className:"modal-grp",children:[Object(j.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===h||void 0===h?void 0:h.creationDate)?"Published on ".concat(r()(null===h||void 0===h?void 0:h.creationDate).format("DD-MM-YYYY")):"",disabled:!0,required:!0}),Object(j.jsx)("label",{className:"inp-caption",children:"Published Date & Time"})]})}),Object(j.jsx)("div",{className:"w-100"}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsxs)("div",{className:"modal-grp",children:[Object(j.jsx)("input",{type:"text",name:"",className:"modal-inp",value:(null===h||void 0===h?void 0:h.title)?null===h||void 0===h?void 0:h.title:"",disabled:!0,required:!0}),Object(j.jsx)("label",{className:"inp-caption",children:"Title"})]})}),Object(j.jsx)("div",{className:"w-100"}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsxs)("div",{className:"modal-grp",children:[Object(j.jsx)("textarea",{name:"",rows:"6",className:"modal-inp modal-textarea",placeholder:"Write in brief about the company",value:(null===h||void 0===h?void 0:h.information)?null===h||void 0===h?void 0:h.information:"",disabled:!0,required:!0}),Object(j.jsx)("label",{className:"inp-caption",children:"Content"})]})}),Object(j.jsx)("div",{className:"w-100"}),""!==(null===h||void 0===h||null===(a=h.attachment)||void 0===a?void 0:a.trim())&&""!==(null===h||void 0===h||null===(l=h.attachmentName)||void 0===l?void 0:l.trim())?Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center attachmentStripeContainer w-full",children:[Object(j.jsx)("p",{className:"label",children:"Attachment Present (if any)"}),Object(j.jsx)("a",{href:"data:application/pdf;base64,"+(null===h||void 0===h?void 0:h.attachment),target:"blank",style:{textDecoration:"none",outline:"none",width:"70%"},children:Object(j.jsxs)("div",{className:"attachmentStripe d-flex justify-content-between align-items-center",children:[Object(j.jsx)("p",{children:null===h||void 0===h?void 0:h.attachmentName}),Object(j.jsx)("i",{className:"fas fa-paperclip"})]})})]}):null]})})]})})]}):Object(j.jsx)("div",{className:"row jobs-saved-section-list",children:Object(j.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(j.jsx)("p",{className:"no-list-message w-full",children:"No other information publish history to display here"})})})},b=a(7),u=a(154);t.default=function(){var e,t=Object(c.useState)({title:"",information:"",attachment:void 0}),a=Object(s.a)(t,2),o=a[0],d=a[1],r=Object(c.useState)(!1),h=Object(s.a)(r,2),v=h[0],x=h[1],f=Object(c.useState)([]),O=Object(s.a)(f,2),p=O[0],N=O[1],g=Object(n.a)(),y=function(e){(null===e||void 0===e?void 0:e.length)&&N(e)},w=function(){var e;g((e={callback:y},{type:b.x,payload:e}))};Object(c.useEffect)((function(){w()}),[]);var k=function(e){e.preventDefault();var t=e.target,a=t.name,s=t.value;"attachment"===a?e.target.files&&d((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},a,e.target.files[0]))})):d((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},a,s))}))},D=function(){d({title:"",information:"",attachment:void 0})},C=function(){D(),w(),x(!0)},I=function(e){var t;(null===e||void 0===e?void 0:e.id)&&g((t={apiPayloadRequest:[e.id],callback:C},{type:b.L,payload:t}))};return Object(j.jsxs)("div",{className:"main",style:{marginTop:0},children:[Object(j.jsx)("h3",{className:"main-title",children:"Other Information"}),Object(j.jsxs)("div",{className:"gbl-profile-set other-info",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md",children:[Object(j.jsxs)("div",{className:"d-grp",children:[Object(j.jsx)("input",{type:"text",name:"title",className:"d-inp",placeholder:"Title",value:(null===o||void 0===o?void 0:o.title)?null===o||void 0===o?void 0:o.title:"",onChange:k,required:!0}),Object(j.jsxs)("label",{className:"inp-caption",children:["Title",Object(j.jsx)("sup",{children:"*"})]})]}),Object(j.jsxs)("div",{className:"d-grp",children:[Object(j.jsx)("textarea",{name:"information",rows:"6",value:(null===o||void 0===o?void 0:o.information)?null===o||void 0===o?void 0:o.information:"",className:"d-inp d-textarea",placeholder:"Information/Text",onChange:k,required:!0}),Object(j.jsxs)("label",{className:"inp-caption",children:["Information/Text",Object(j.jsx)("sup",{children:"*"})]})]}),Object(j.jsxs)("div",{className:"d-attach",children:[Object(j.jsx)("p",{className:"float-left mt-2 ml-2",children:null===o||void 0===o||null===(e=o.attachment)||void 0===e?void 0:e.name}),Object(j.jsx)("input",{type:"file",className:"d-inp",name:"attachment",id:"attachment",accept:".pdf",onChange:k}),Object(j.jsx)("label",{htmlFor:"attachment",className:"d-label",children:"Attachment"})]})]})}),Object(j.jsxs)("div",{className:"w-100 text-center mt-4",children:[Object(j.jsx)("button",{type:"button",onClick:D,className:"btn mr-1",children:"Reset"}),Object(j.jsx)("button",{type:"button",className:"btn ml-1",disabled:!((null===o||void 0===o?void 0:o.title)&&(null===o||void 0===o?void 0:o.information)),onClick:function(){var e;g((e={apiPayloadRequest:o,callback:I},{type:b.z,payload:e}))},children:"Publish"})]})]}),Object(j.jsx)("div",{className:"row jobs-saved-section",children:Object(j.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(j.jsx)("p",{className:"heading w-full",children:"Information Publish History"})})}),Object(j.jsx)(m,{otherInformationList:p}),Object(j.jsx)(u.a,{onClose:function(){x(!1)},show:v,iconNameClass:"fa-file",message:"Selected Information has been Published Successfully"})]})}}}]);