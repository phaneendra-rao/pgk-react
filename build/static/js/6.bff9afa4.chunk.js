(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(33);var l=n(41);function c(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},101:function(e,t,n){"use strict";var i=n(1),l=n(96),c=n(0),o=window.$;t.a=function(e){return Object(i.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?o("#customToastModal").modal("show"):o("#customToastModal").modal("hide"),o(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(c.jsx)(l.a,{children:Object(c.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customToastModal",tabIndex:-1,children:Object(c.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:Object(c.jsx)("div",{className:"modal-content",children:Object(c.jsxs)("div",{className:"hiring-modal",children:[Object(c.jsx)("button",{type:"button",className:"close",onClick:null===e||void 0===e?void 0:e.onClose,children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(c.jsxs)("div",{className:"modal-success",children:[(null===e||void 0===e?void 0:e.iconNameClass)&&Object(c.jsx)("div",{className:"modal-icon",children:Object(c.jsx)("i",{className:"fas ".concat(null===e||void 0===e?void 0:e.iconNameClass," txt-lightgreen")})}),Object(c.jsx)("p",{className:"modal-success-txt",children:null===e||void 0===e?void 0:e.message})]})]})})})})})}},106:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return s}));var i=n(7),l=function(e){return{type:i.g,payload:e}},c=function(e){return{type:i.f,payload:e}},o=function(e){return{type:i.z,payload:e}},a=function(e){return{type:i.F,payload:e}},s=function(e){return{type:i.H,payload:e}}},144:function(e,t,n){"use strict";n.r(t);var i=n(100),l=n(24),c=n(1),o=n(23),a=n(40),s=n.n(a),d=n(0),r=function(e){var t,n,i,l,c,o,a,r,u;return Object(d.jsxs)("div",{className:"w-full d-flex justify-content-center align-content-center publish-selected-btn-container",children:[(null===e||void 0===e?void 0:e.checkHandler)&&Object(d.jsx)("input",{type:"checkbox",className:"align-self-center",onChange:function(){var t;null===e||void 0===e||e.checkHandler(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.jobID)},checked:!!(null===e||void 0===e?void 0:e.isCheck)&&(null===e||void 0===e?void 0:e.isCheck),style:{marginRight:"10px"}}),Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center jobs-list-item w-full",children:[Object(d.jsxs)("div",{className:"item d-flex flex-row justify-content-between align-items-center w-full",children:[Object(d.jsx)("div",{className:"job-icon job-blue-icon d-flex justify-content-center align-items-center",children:Object(d.jsx)("i",{className:"fas fa-cube"})}),Object(d.jsx)("p",{className:"job-label",children:(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.jobName)?null===e||void 0===e||null===(n=e.item)||void 0===n?void 0:n.jobName:"-"}),Object(d.jsxs)("select",{name:"",onChange:function(){},className:"form-control job-dropdown",value:null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.hiringCriteriaID,children:[Object(d.jsx)("option",{value:"",children:"Select Hiring Criteria"}),null===e||void 0===e||null===(l=e.hiringCriteriaList)||void 0===l?void 0:l.map((function(e,t){return Object(d.jsx)("option",{value:null===e||void 0===e?void 0:e.hiringCriteriaID,children:null===e||void 0===e?void 0:e.hiringCriteriaName},t)}))]}),Object(d.jsx)("select",{name:"",className:"form-control job-dropdown",children:Object(d.jsx)("option",{value:"",children:"Open"})}),Object(d.jsx)("p",{className:"job-published-date",children:(null===e||void 0===e||null===(c=e.item)||void 0===c?void 0:c.creationDate)?(null===e||void 0===e||null===(o=e.item)||void 0===o?void 0:o.publishedFlag)?"Published on ".concat(s()(null===e||void 0===e||null===(a=e.item)||void 0===a?void 0:a.creationDate).format("DD/MM/YYYY")):"Created on ".concat(s()(null===e||void 0===e||null===(r=e.item)||void 0===r?void 0:r.creationDate).format("DD/MM/YYYY")):"-"})]}),Object(d.jsx)("div",{className:"vertical-divider"}),Object(d.jsxs)("div",{className:"job-list-item-details-container d-flex flex-row justify-content-center align-items-center",children:[(null===e||void 0===e?void 0:e.checkHandler)&&Object(d.jsx)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var t;null===e||void 0===e||e.onPublish(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.jobID)},children:Object(d.jsx)("p",{children:"Publish"})}),(null===e||void 0===e||null===(u=e.item)||void 0===u?void 0:u.publishedFlag)&&Object(d.jsx)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var t;null===e||void 0===e||e.onJobView(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.jobID)},children:Object(d.jsx)("p",{children:"Details"})})]})]})]})},u=n(106),b=n(98),j=n(95),h=n(101);t.default=function(){var e,t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],v=n[1],m=Object(c.useState)([]),f=Object(l.a)(m,2),x=f[0],O=f[1],p=Object(c.useState)(),g=Object(l.a)(p,2),y=g[0],N=g[1],w=Object(c.useState)(!1),k=Object(l.a)(w,2),C=k[0],D=k[1],I=Object(c.useState)(!1),S=Object(l.a)(I,2),M=S[0],P=S[1],Y=Object(c.useState)(!1),H=Object(l.a)(Y,2),R=H[0],F=H[1],J=Object(c.useState)(!1),L=Object(l.a)(J,2),E=L[0],z=L[1],A=Object(c.useState)([]),T=Object(l.a)(A,2),q=T[0],V=T[1],$=Object(o.a)(),B=function(e){(null===e||void 0===e?void 0:e.length)&&O(e)},G=function(){$(Object(u.d)({callback:B}))},W=function(e){N(e),F(!0)},K=function(e){$(Object(u.c)({apiPayloadRequest:e,callback:W}))},Q=function(e){(null===e||void 0===e?void 0:e.length)&&v(e)};Object(c.useEffect)((function(){G(),$(Object(b.b)({callback:Q}))}),[]);var U=function(e){var t=Object(i.a)(q);if(t.includes(e)){var n=t.indexOf(e);n>-1&&t.splice(n,1)}else t.push(e);V(t),P(t.length===x.length)},X=function(){G(),F(!1),z(!0)},Z=function(e){$(Object(u.e)({apiPayloadRequest:e,callback:X}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"row published-jobs-section",children:Object(d.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:[Object(d.jsx)("p",{className:"heading",children:"Publish Jobs"}),(null===x||void 0===x?void 0:x.length)&&x.some((function(e){return!e.publishedFlag}))?Object(d.jsxs)("div",{className:"w-full d-flex justify-content-start align-content-center publish-selected-btn-container",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(){!function(e){var t=Object(i.a)(q);"ALL"===e?(t=[],!1===M&&x.forEach((function(e){t.push(null===e||void 0===e?void 0:e.jobID)})),V(t),P(!M)):V(t)}("ALL")},checked:M,className:"align-self-center mr-2"}),Object(d.jsx)("button",{type:"button",className:"btn",style:{height:"35px",width:"100px",fontSize:".700rem"},onClick:function(){if(q.length){var e=x.map((function(e){if(q.includes(e.jobID))return{jobID:e.jobID}}));(null===e||void 0===e?void 0:e.length)&&Z(e)}},children:"Publish Selected"})]}):Object(d.jsx)("div",{className:"row jobs-saved-section-list",children:Object(d.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(d.jsx)("p",{className:"no-list-message w-full",children:"Create a new job to publish"})})}),(null===x||void 0===x?void 0:x.length)&&x.map((function(e,t){if(!e.publishedFlag)return Object(d.jsx)(r,{item:e,hiringCriteriaList:a,checkHandler:U,onPublish:function(){K(e.jobID)},isCheck:!!q.includes(null===e||void 0===e?void 0:e.jobID)},t)}))]})}),Object(d.jsx)("div",{className:"row jobs-saved-section",style:{margin:0},children:Object(d.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(d.jsx)("p",{className:"heading w-full",children:"Published Jobs History"})})}),Object(d.jsx)("div",{style:{padding:"12px"},children:(null===x||void 0===x?void 0:x.length)&&x.map((function(e,t){if(e.publishedFlag)return Object(d.jsx)(r,{item:e,hiringCriteriaList:a,onJobView:function(){K(e.jobID)}},t)}))}),Object(d.jsx)(j.a,{show:R,modalStyles:{minWidth:"65%"},children:Object(d.jsxs)("div",{className:"job-publish-modal",children:[Object(d.jsxs)("div",{className:"modal-header job-publish-modal-header",children:[Object(d.jsx)("p",{className:"heading w-full",children:"Job Details"}),Object(d.jsx)("button",{type:"button",className:"close",onClick:function(){F(!1)},children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(d.jsx)("div",{className:"modal-body job-publish-modal-body d-flex flex-column justify-content-center align-items-center",children:Object(d.jsxs)("div",{className:"heading-section d-flex justify-content-start align-items-start w-full",children:[!(null===y||void 0===y?void 0:y.publishedFlag)&&Object(d.jsx)("input",{type:"checkbox",name:"",className:"job-checkbox align-self-start"}),Object(d.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full body-section",children:[Object(d.jsxs)("div",{className:"header d-flex flex-row justify-content-between align-items-center w-full",children:[Object(d.jsx)("p",{className:"job-label",children:(null===y||void 0===y?void 0:y.jobID)?null===y||void 0===y?void 0:y.jobID:"-"}),Object(d.jsx)("div",{className:"job-heading-btn",children:"Open"}),Object(d.jsxs)("select",{name:"",onChange:function(){},className:"form-control job-dropdown",value:null===y||void 0===y?void 0:y.hiringCriteriaID,children:[Object(d.jsx)("option",{value:"",children:"Select Hiring Criteria"}),null===a||void 0===a?void 0:a.map((function(e,t){return Object(d.jsx)("option",{value:null===e||void 0===e?void 0:e.hiringCriteriaID,children:null===e||void 0===e?void 0:e.hiringCriteriaName},t)}))]}),Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",style:{cursor:"pointer"},onClick:function(){D(!C)},children:[Object(d.jsx)("p",{className:"label",children:"Details"}),Object(d.jsx)("i",{className:"fas ".concat(C?"fa-chevron-up":"fa-chevron-down")})]})]}),C&&Object(d.jsxs)("table",{className:"table table-borderless table-striped job-publish-table",children:[Object(d.jsx)("thead",{className:"job-publish-table-header",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"table-heading",children:"Skill Set"}),Object(d.jsx)("td",{className:"table-heading",children:"No of Positions"}),Object(d.jsx)("td",{className:"table-heading",children:"Location"}),Object(d.jsx)("td",{className:"table-heading",children:"Salary Range"}),Object(d.jsx)("td",{className:"table-heading",children:"Date of hiring"})]})}),Object(d.jsx)("tbody",{children:(null===y||void 0===y||null===(e=y.skills)||void 0===e?void 0:e.length)&&y.skills.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[!(null===y||void 0===y?void 0:y.publishedFlag)&&Object(d.jsx)("input",{type:"checkbox",name:"",className:"table-item-checkbox"})," "," ",(null===e||void 0===e?void 0:e.skillID)+(null===e||void 0===e?void 0:e.skill)]}),Object(d.jsx)("td",{children:(null===e||void 0===e?void 0:e.noOfPositions)?e.noOfPositions:"-"}),Object(d.jsx)("td",{children:(null===e||void 0===e?void 0:e.location)?e.location:"-"}),Object(d.jsx)("td",{children:(null===e||void 0===e?void 0:e.salaryRange)?e.salaryRange:"-"}),Object(d.jsx)("td",{children:(null===e||void 0===e?void 0:e.dateOfHiring)?s()(e.dateOfHiring).format("DD - MMM - YYYY"):"-"})]})}))})]}),!(null===y||void 0===y?void 0:y.publishedFlag)&&Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center w-full mt-4",children:[Object(d.jsx)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"40px",width:"100px",fontSize:".700rem",borderRadius:"4px",marginRight:"10px"},onClick:function(){F(!1)},children:Object(d.jsx)("p",{children:"Cancel"})}),Object(d.jsx)("button",{type:"button",className:"btn d-flex justify-content-around align-items-center",style:{height:"40px",width:"100px",fontSize:".700rem",borderRadius:"4px"},onClick:function(){!function(e){var t=[];x.forEach((function(n){n.jobID===e&&t.push({jobID:n.jobID})})),(null===t||void 0===t?void 0:t.length)&&Z(t)}(null===y||void 0===y?void 0:y.jobID)},children:Object(d.jsx)("p",{children:"Publish"})})]})]})]})})]})}),Object(d.jsx)(h.a,{onClose:function(){z(!1)},show:E,iconNameClass:"fa-briefcase",message:"Selected Job/Jobs Have been Published Successfully"})]})}},95:function(e,t,n){"use strict";var i=n(9),l=n(1),c=n(96),o=n(0),a=window.$;t.a=function(e){return Object(l.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?a("#customModal").modal("show"):a("#customModal").modal("hide"),a(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(o.jsx)(c.a,{children:Object(o.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customModal",tabIndex:-1,children:Object(o.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",style:Object(i.a)({},null===e||void 0===e?void 0:e.modalStyles),children:Object(o.jsx)("div",{className:"modal-content",children:null===e||void 0===e?void 0:e.children})})})})}},96:function(e,t,n){"use strict";var i=n(25);t.a=function(e){var t=document.getElementById("portalModal");return Object(i.createPortal)(e.children,t)}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return a}));var i=n(7),l=function(e){return{type:i.c,payload:e}},c=function(e){return{type:i.y,payload:e}},o=function(e){return{type:i.G,payload:e}},a=function(e){return{type:i.b,payload:e}}}}]);