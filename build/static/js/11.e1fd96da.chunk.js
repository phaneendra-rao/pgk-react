(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[11],{149:function(e,i,t){"use strict";var n=t(8),c=t(1),s=t(150),o=t(0),a=window.$;i.a=function(e){return Object(c.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?a("#customModal").modal("show"):a("#customModal").modal("hide"),a(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(o.jsx)(s.a,{children:Object(o.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customModal",tabIndex:-1,children:Object(o.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",style:Object(n.a)({},null===e||void 0===e?void 0:e.modalStyles),children:Object(o.jsx)("div",{className:"modal-content",children:null===e||void 0===e?void 0:e.children})})})})}},150:function(e,i,t){"use strict";var n=t(29);i.a=function(e){var i=document.getElementById("portalModal");return Object(n.createPortal)(e.children,i)}},156:function(e,i,t){"use strict";t.d(i,"a",(function(){return c})),t.d(i,"b",(function(){return s}));var n=t(7),c=function(e){return{type:n.h,payload:e}},s=function(e){return{type:n.l,payload:e}}},157:function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));var n=t(41);var c=t(50);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},221:function(e,i,t){"use strict";t.r(i);var n=t(157),c=t(8),s=t(26),o=t(1),a=t(19),l=t(48),r=t.n(l),d=(t(149),t(0)),u=function(e){var i,t,n,c,a,l,u,j,b,h,v,m,f,O,p,x,y,N,g,C=Object(o.useState)(),k=Object(s.a)(C,2),P=k[0],S=k[1],I=function(e){switch(null===e||void 0===e?void 0:e.notificationType){case"HiringCriteria":return"HiringCriteria";case"OtherInformation":return"OtherInformation";case"CorporateProfile":return"CorporateProfile";case"JobPublish":return"JobPublish";case"UniversityProfile":return"UniversityProfile";case"UniversityOtherInformation":return(null===e||void 0===e?void 0:e.senderName)+" University";case"RequestVerification":return"RequestVerification";case"ProcessVerification":return"ProcessVerification";case"CampusHiring Request":case"CampusHiring Response":return(null===e||void 0===e?void 0:e.senderName)+" University"}},w=function(e){switch(null===e||void 0===e?void 0:e.notificationType){case"HiringCriteria":return"HiringCriteria";case"OtherInformation":return"OtherInformation";case"CorporateProfile":return"CorporateProfile";case"JobPublish":return"JobPublish";case"UniversityProfile":return"UniversityProfile";case"UniversityOtherInformation":return(null===e||void 0===e?void 0:e.senderName)+" University";case"RequestVerification":return"RequestVerification";case"ProcessVerification":return"ProcessVerification";case"CampusHiring Request":return"has requested for Campus hiring";case"CampusHiring Response":return""}};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"main mt-0 pr-0 pt-0",children:Object(d.jsxs)("div",{className:"row m-0 p-0",children:[Object(d.jsxs)("div",{className:"col-md-7 p-0 pt-4 m-0",children:[Object(d.jsx)("h4",{className:"notification-title",children:"Notifications"}),Object(d.jsx)("div",{className:"table-responsive mb-4",children:Object(d.jsxs)("table",{className:"table table-data mb-0",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",onChange:e.selectAll,checked:!!(null===e||void 0===e?void 0:e.isSelectAll),className:"custom-control-input",id:"selectALl"}),Object(d.jsx)("label",{className:"custom-control-label mt-1",htmlFor:"selectALl"})]})}),Object(d.jsxs)("th",{scope:"col",children:[Object(d.jsx)("button",{className:"btn3 btn-lightgreen",children:"Mark as Read"}),Object(d.jsx)("button",{className:"btn3 btn-lightgreen","data-toggle":"modal","data-target":"#accept",children:"Delete"})]}),Object(d.jsx)("th",{colSpan:2,scope:"col",children:Object(d.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(d.jsx)("div",{className:"d-grp mb-0 mr-1",style:{flex:1},children:Object(d.jsxs)("select",{name:!0,className:"d-inp",required:!0,children:[Object(d.jsx)("option",{value:!0,children:"Filter All"}),Object(d.jsx)("option",{value:!0,children:"Program"}),Object(d.jsx)("option",{value:!0,children:"Program"})]})}),Object(d.jsx)("div",{className:"d-grp mb-0",children:Object(d.jsxs)("select",{name:!0,className:"d-inp",required:!0,children:[Object(d.jsx)("option",{value:!0,children:"Sort by Relevance"}),Object(d.jsx)("option",{value:!0,children:"Program"}),Object(d.jsx)("option",{value:!0,children:"Program"})]})})]})})]})}),Object(d.jsx)("tbody",{children:(null===e||void 0===e?void 0:e.notificationsList)&&(null===e||void 0===e||null===(i=e.notificationsList)||void 0===i?void 0:i.length)>0?null===e||void 0===e||null===(t=e.notificationsList)||void 0===t?void 0:t.map((function(i,t){if("OtherInformation"!==i.notificationType&&"CampusHiring Response"!==i.notificationType&&"UniversityOtherInformation"!==i.notificationType)return Object(d.jsxs)("tr",{onClick:function(){S(t)},children:[Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",name:i.isChecked,onChange:e.handleChange,className:"custom-control-input",checked:!!(null===i||void 0===i?void 0:i.isChecked),value:null===i||void 0===i?void 0:i.notificationID,id:null===i||void 0===i?void 0:i.notificationID}),Object(d.jsx)("label",{className:"custom-control-label mt-1",htmlFor:null===i||void 0===i?void 0:i.notificationID})]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"basic-info",children:[Object(d.jsx)("div",{className:"basic-img",children:Object(d.jsx)("p",{className:"basic-name",children:Object(d.jsx)("i",{className:"fas fa-building"})})}),Object(d.jsxs)("div",{className:"basic-content",children:[Object(d.jsx)("h5",{className:"basic-title",children:I(i)}),Object(d.jsx)("p",{className:"basic-subtitle",children:w(i)})]})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"btn action",style:{backgroundColor:"#5473E8",fontWeight:"700",fontSize:".600rem"},children:null===i||void 0===i?void 0:i.senderUserRole}),Object(d.jsx)("button",{className:"btn action",style:{backgroundColor:"#FE4394",fontWeight:"700",fontSize:".600rem"},children:"Action required"})]}),Object(d.jsx)("td",{className:"time",style:{fontSize:".600rem"},children:r()(null===i||void 0===i?void 0:i.dateofNotification).fromNow()})]},t)})):Object(d.jsx)("td",{colSpan:"3",children:"No data"})})]})})]}),void 0!==P&&Object(d.jsx)("div",{className:"col-md-5 p-0 m-0",children:Object(d.jsx)("div",{className:"info",style:{minHeight:"100vh",padding:15},children:Object(d.jsxs)("div",{style:{border:"1px solid #cacaca",padding:"20px 40px",margin:0},children:[Object(d.jsxs)("h6",{className:"info-title",children:["Notification from ",Object(d.jsx)("br",{})," ",null===(n=JSON.parse(null===e||void 0===e||null===(a=e.notificationsList[P])||void 0===a?void 0:a.content))||void 0===n||null===(c=n.universityDetails)||void 0===c?void 0:c.universityName," University"]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{className:"info-data",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"University Name"}),Object(d.jsx)("span",{children:null===(l=JSON.parse(null===e||void 0===e||null===(j=e.notificationsList[P])||void 0===j?void 0:j.content))||void 0===l||null===(u=l.universityDetails)||void 0===u?void 0:u.universityName})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Location"}),Object(d.jsx)("span",{children:null===(b=JSON.parse(null===e||void 0===e||null===(v=e.notificationsList[P])||void 0===v?void 0:v.content))||void 0===b||null===(h=b.universityDetails)||void 0===h?void 0:h.location})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Year of Establishment"}),Object(d.jsx)("span",{children:null===(m=JSON.parse(null===e||void 0===e||null===(O=e.notificationsList[P])||void 0===O?void 0:O.content))||void 0===m||null===(f=m.universityDetails)||void 0===f?void 0:f.yearOfEstablishment})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"University ID"}),Object(d.jsx)("span",{children:null===e||void 0===e||null===(p=e.notificationsList[P])||void 0===p?void 0:p.senderID})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Accredition"}),Object(d.jsx)("span",{children:null===(x=JSON.parse(null===e||void 0===e||null===(N=e.notificationsList[P])||void 0===N?void 0:N.content))||void 0===x||null===(y=x.universityDetails)||void 0===y?void 0:y.accredations})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Type of Request"}),Object(d.jsx)("span",{children:function(e){switch(null===e||void 0===e?void 0:e.notificationType){case"CampusHiring Request":return"Campus Hiring From University"}}(null===e||void 0===e?void 0:e.notificationsList[P])})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Request made on"}),Object(d.jsx)("span",{children:r()(null===e||void 0===e||null===(g=e.notificationsList[P])||void 0===g?void 0:g.dateofNotification).format("DD - MMM - YYYY")})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center info-space",children:[Object(d.jsx)("button",{className:"btn3",children:"View more Info"}),Object(d.jsx)("button",{className:"btn3 btn-lightgreen",onClick:function(){},children:"Accept"}),Object(d.jsx)("button",{className:"btn3 btn-yellow",children:"Reject"})]})]})})})]})})})},j=t(156);i.default=function(){var e=Object(o.useState)([]),i=Object(s.a)(e,2),t=i[0],l=i[1],r=Object(o.useState)(!1),b=Object(s.a)(r,2),h=b[0],v=b[1],m=Object(a.a)();Object(o.useEffect)((function(){m(Object(j.a)({callback:f}))}),[]);var f=function(e){e.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{isChecked:!1})}));l(e)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{notificationsList:t,isSelectAll:h,handleChange:function(e){var i=e.target,c=i.checked,s=i.value,o=Object(n.a)(t);o.forEach((function(e){e.notificationID===s&&(e.isChecked=c)})),v(!1),l(o)},selectAll:function(e){var i=e.target.checked,c=Object(n.a)(t);c.forEach((function(e){return e.isChecked=i})),v(i),l(c)}})})}}}]);