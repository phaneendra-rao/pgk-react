(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[9],{149:function(e,a,i){"use strict";var t=i(8),l=i(1),n=i(150),s=i(0),o=window.$;a.a=function(e){return Object(l.useEffect)((function(){(null===e||void 0===e?void 0:e.show)?o("#customModal").modal("show"):o("#customModal").modal("hide"),o(".modal-backdrop").remove()})),(null===e||void 0===e?void 0:e.show)&&Object(s.jsx)(n.a,{children:Object(s.jsx)("div",{className:"modal portalModalChildren","data-backdrop":"static","data-keyboard":"false",id:"customModal",tabIndex:-1,children:Object(s.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",style:Object(t.a)({},null===e||void 0===e?void 0:e.modalStyles),children:Object(s.jsx)("div",{className:"modal-content",children:null===e||void 0===e?void 0:e.children})})})})}},150:function(e,a,i){"use strict";var t=i(29);a.a=function(e){var a=document.getElementById("portalModal");return Object(t.createPortal)(e.children,a)}},152:function(e,a,i){"use strict";i.d(a,"b",(function(){return l})),i.d(a,"a",(function(){return n})),i.d(a,"d",(function(){return s})),i.d(a,"c",(function(){return o}));var t=i(7),l=function(e){return{type:t.c,payload:e}},n=function(e){return{type:t.A,payload:e}},s=function(e){return{type:t.I,payload:e}},o=function(e){return{type:t.b,payload:e}}},155:function(e,a,i){"use strict";var t=i(29);a.a=function(e){var a=document.getElementById("modal");return Object(t.createPortal)(e.children,a)}},158:function(e,a,i){"use strict";i.d(a,"d",(function(){return l})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s})),i.d(a,"b",(function(){return o})),i.d(a,"e",(function(){return c}));var t=i(7),l=function(e){return{type:t.g,payload:e}},n=function(e){return{type:t.f,payload:e}},s=function(e){return{type:t.B,payload:e}},o=function(e){return{type:t.H,payload:e}},c=function(e){return{type:t.J,payload:e}}},204:function(e,a,i){"use strict";i.r(a);var t=i(26),l=i(1),n=i(19),s=i(48),o=i.n(s),c=i(0),d=function(e){var a,i;return Object(c.jsx)("div",{className:"row published-jobs-section",children:Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:[Object(c.jsx)("p",{className:"heading",children:"Jobs Created"}),e.allJobs&&(null===(a=e.allJobs)||void 0===a?void 0:a.length)>=0?null===(i=e.allJobs)||void 0===i?void 0:i.map((function(a,i){return Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center jobs-list-item w-full",children:[Object(c.jsxs)("div",{className:"item d-flex flex-row justify-content-between align-items-center w-full",children:[Object(c.jsx)("div",{className:"job-icon job-blue-icon d-flex justify-content-center align-items-center",children:Object(c.jsx)("i",{className:"fas fa-cube"})}),Object(c.jsx)("p",{className:"job-label",children:a.jobName}),Object(c.jsx)("select",{name:"",className:"form-control job-dropdown",children:Object(c.jsx)("option",{children:a.hiringCriteriaName})}),Object(c.jsxs)("select",{name:"status",defaultValue:a.status,className:"form-control job-dropdown",children:[Object(c.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Status"}),Object(c.jsx)("option",{value:"Open",children:"Open"}),Object(c.jsx)("option",{value:"Close",children:"Close"})]}),Object(c.jsxs)("p",{className:"job-published-date",children:["Created on ",(null===a||void 0===a?void 0:a.creationDate)?o()(null===a||void 0===a?void 0:a.creationDate).format("DD-MM-YYYY"):""]})]}),Object(c.jsx)("div",{className:"vertical-divider"}),Object(c.jsx)("div",{className:"job-list-item-details-container d-flex flex-row justify-content-center align-items-center",children:Object(c.jsxs)("button",{className:"btn d-flex flex-row justify-content-around align-items-center",style:{height:"30px",width:"100px",fontSize:".600rem",marginRight:"10px",borderRadius:"4px"},onClick:function(){return e.detailsModal(a.jobID)},children:[Object(c.jsx)("p",{children:"Details"}),Object(c.jsx)("i",{className:"fas fa-chevron-right"})]})})]},i)})):"No data",Object(c.jsx)("button",{type:"button",onClick:e.handleClick,className:"btn",children:" Add New Job"})]})})},r=(i(155),i(6)),b=i(152),j=i(158),u=i(49),m=i(8),h=i(5),A=i(165),v=function(e){var a,i,t,l,n;return Object(c.jsxs)("form",{className:"add-new-jobs-section",onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:Object(c.jsxs)("p",{className:"heading",children:[e.isEdit?"Update ":"Add New "," Job"]})}),Object(c.jsx)("div",{className:"job-details-form py-4",children:Object(c.jsxs)("div",{className:"row m-0",children:[Object(c.jsxs)("div",{className:"col-md-3",children:[Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsx)("input",{type:"text",name:"jobName",onChange:e.handleChange,value:e.addJobs.jobName,className:"d-inp bg-white",placeholder:"Name of the job",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Name of the job"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsxs)("select",{name:"jobType",onChange:e.handleChange,value:e.addJobs.jobType,className:"d-inp bg-white",required:!0,children:[Object(c.jsx)("option",{value:"",children:"Job Type"}),e.lookUpData&&(null===(a=e.lookUpData)||void 0===a||null===(i=a.jobType)||void 0===i?void 0:i.length)>=0?null===(t=e.lookUpData)||void 0===t?void 0:t.jobType.map((function(e,a){return Object(c.jsx)("option",{value:e.jobTypeCode,children:e.jobType},a)})):null]}),Object(c.jsx)("label",{className:"inp-caption",children:"Job Type"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsxs)("select",{name:"hiringCriteriaID",onChange:e.handleChange,value:e.addJobs.hiringCriteriaID+","+e.addJobs.hiringCriteriaName,className:"d-inp bg-white",children:[Object(c.jsx)("option",{value:"",children:"Select Hiring Criteria"}),e.hiringCriteria&&(null===(l=e.hiringCriteria)||void 0===l?void 0:l.length)>=0?null===(n=e.hiringCriteria)||void 0===n?void 0:n.map((function(e,a){return Object(c.jsx)("option",{value:e.hiringCriteriaID+","+e.hiringCriteriaName,children:e.hiringCriteriaName},a)})):null]}),Object(c.jsx)("label",{className:"inp-caption",children:"Hiring Criteria"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsx)("input",{type:"date",name:"monthOfHiring",onChange:e.handleChange,value:e.dateFormat(e.addJobs.monthOfHiring),className:"d-inp bg-white",placeholder:"Date of hiring",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Date of hiring"})]})]}),Object(c.jsxs)("div",{className:"col-md-3",children:[Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsxs)("select",{name:"status",onChange:e.handleChange,value:e.addJobs.status,className:"d-inp bg-white",required:!0,children:[Object(c.jsx)("option",{value:"",children:"Select Status"}),Object(c.jsx)("option",{value:"Open",children:"Open"}),Object(c.jsx)("option",{value:"Close",children:"Close"})]}),Object(c.jsx)("label",{className:"inp-caption",children:"Status"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsx)("input",{type:"number",name:"noOfPositions",onChange:e.handleChange,value:e.addJobs.noOfPositions,className:"d-inp bg-white",min:"1",placeholder:"No of positions",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"No of positions"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsxs)("select",{name:"location",onChange:e.handleChange,value:e.addJobs.location,className:"d-inp bg-white",required:!0,children:[Object(c.jsx)("option",{value:"",children:"Select the location"}),Object(c.jsx)("option",{value:"Hyderabad",children:"Hyderabad"}),Object(c.jsx)("option",{value:"Delhi",children:"Delhi"}),Object(c.jsx)("option",{value:"Mumbai",children:"Mumbai"})]}),Object(c.jsx)("label",{className:"inp-caption",children:"Location"})]})]}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("div",{className:"d-grp",children:Object(c.jsx)(A.a,{closeMenuOnSelect:!1,label:"Select Skills",placeholder:"Select Skill(s)",isMulti:!0,onChange:e.handleChangeSkills,defaultValue:e.defaultSkills,options:e.skillsList})})}),Object(c.jsxs)("div",{className:"col-md",children:[Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsx)("input",{type:"number",name:"salaryMinRange",onChange:e.handleChange,defaultValue:e.addJobs.salaryMaxRange,className:"d-inp bg-white",min:0,placeholder:"Salary Range",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Min Salary"})]}),Object(c.jsxs)("div",{className:"d-grp",children:[Object(c.jsx)("input",{type:"number",name:"salaryMaxRange",onChange:e.handleChange,defaultValue:e.addJobs.salaryMaxRange,className:"d-inp bg-white",min:0,placeholder:"Salary Range",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Max Salary"})]})]})]})}),Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center w-full mt-4",children:[Object(c.jsxs)("button",{type:"submit",className:"job-btn",children:[e.isEdit?"Update":"Save"," Job"]}),Object(c.jsx)("button",{type:"reset",onClick:e.handleClick,className:"job-btn",children:"Cancel"})]})]})},O=function(e){var a,i,n,s=Object(l.useState)({jobName:"",jobType:"",hiringCriteriaID:"",hiringCriteriaName:"",salaryMinRange:"",salaryMaxRange:"",monthOfHiring:"",remarks:"",attachment:"/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCADqATkDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACQQAQEBAAIBBAMBAQEBAAAAAAABESExQQISUXFhgZGxocHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AMriLyCKgg1gQwCgs4FTMOdutepjQak+FzMSVqgxZdRdPPIIvH5WzzGdBriphtTeAXg2ZjKA1pqKDUGZca3foBek8gFv8Ie3fKdA1qb8s7hoL6eLVt51FsAnql3Ut1M7AWbflLMDkEMX/F6/YjK/pADFQAUNA6alYagKk72m/j9p4Bq2fDDSYKLNXPNLoHE/NT6RYC31cJxZ3yWVM+aBYi/S2ZgiAsnYJx5D21vPmqrm3PTfpQQwyAC8JZvSKDni41ZrMuUVVl+Uz9w9v/1QWrZsZ5nFPHYH+JZyureQSF5M+fJ0CAfwRAVRBQA1DAWVUayoJUWoDpsxntPsueBV4+VxhdyAtv8AjOLGpIDMLbeGvbF4iozJfr/WukAVABAXAQXEAAASzVAZdO2WNordm+emFl7XcQSNZiFtv0C9w90nhJf4mA1u+GcJFwIyAqL/AOovwgGNfSRqdIrNa29M0gKCAojU9PAMjWXpckEJFNFEAAXEUBABYz6rZ0ureQc9vyt9XxDF2QAXtABcQAs0AZywkvluJbyipifas52DcyxjlZweAO0xri/hc+wZOEKIu6nSyeToVZyWXwvCg53gW81QQ7aTNAn5dGZJPs1UXURQAUEMCXQLZE93PRZ5hPTgNMrbIzKCm52LZwCs+2M8w2g3sjPuZAXb4IsMAUACzVUGM4/K+md6vEXUUyM5PDR0IxYe6ramih0VNBrS4xoqN8Q1BFQk3yqyAsioioAAKgDSJL4/jQIn5igLrPqtOuf6oOaxbMoAltUAhhIoJiiggrPu+AaOIxtAX3JbaAIaLwi4t9X4T3fg2AFtqcrUUarP20zUDAmqoE0WRBZPNVUVEAAAAVAC8kvih2DSKxOdBqs7Z0l0gI0mKAC4AuHE7ZtBriM+744QAAAAABAFsveIttBICyaikvy1+r/Cen5rWQHIBQa4rIDRqSl5qDWqziqgAAAATA7BpGdqXb2C2+J/UgAtRQBSQtkBWb6vhLbQAAAAAEBRAAAAAUbm+GZNdPxAP+ql2Tjwx7/wIgZ8iKvBk+CJoCXii9gaqZ/qqihAAAEVABGkBFUwBftNkZ3QW34QAAABFAQAVAAAAAARVkl8gs/43sk1jL45LvHArepk+E9XTG35oLqsmIKmLAEygKg0y1AFQBUXwgAAAoBC34S3UAAABAVAAAAAABAUQAVABdRQa1PcYyit2z58M8C4ouM2NXpOEGeWtNZUatiAIoAKIoCoAoG4C9MW6dgIoAIAAAAAAACKWAgL0CAAAALiANCKioNLgM1CrLihmTafkt1EF3SZ5ZVUW4mnIKvAi5fhEURVDWVQBRAAAAAAAAQFRVyAyulgAqCKlF8IqLsEgC9mGoC+IusqCrv5ZEUVOk1RuJfwSLOOkGFi4XPCoYYrNiKauosBGi9ICstM1UAAAAAAFQ0VcTBAXUGgIqGoKhKAzRRUQUAwxoSrGRpkQA/qiosOL9oJptMRRVZa0VUqSiChE6BqMgCwqKqIogAIAqKCKgKoogg0lBFuIKgAAAKNRlf2gqsftsEtZWoAAqAACKoMqAAeSoqp39kL2AqLOlE8rEBFQARYALhigrNC9gGmooLp4TweEQFFBFAECgIoAu0ifIAqAAA//9k=",attachmentName:"1kb.jpg",status:"",noOfPositions:"",location:""}),o=Object(t.a)(s,2),d=o[0],r=o[1],b=Object(l.useState)([]),j=Object(t.a)(b,2),A=j[0],O=j[1],p=Object(l.useState)([]),g=Object(t.a)(p,2),x=g[0],f=g[1];Object(l.useEffect)((function(){if(e.isAddJobEnable&&e.isEdit&&e.modelData){var a,i,t,l,n,s,o,c,d,b,j,u,m,h,A,v,O=null===(a=e.lookUpData)||void 0===a||null===(i=a.jobType)||void 0===i?void 0:i.find((function(a){return a.jobType===e.modelData.jobType})),p=null===(t=JSON.parse(null===(l=e.modelData)||void 0===l?void 0:l.skillsInString))||void 0===t?void 0:t.map((function(e){return{value:e.skillID,label:e.skillName}}));f(p),r({jobName:null===(n=e.modelData)||void 0===n?void 0:n.jobName,jobType:null===O||void 0===O?void 0:O.jobTypeCode,hiringCriteriaID:null===(s=e.modelData)||void 0===s?void 0:s.hiringCriteriaID,hiringCriteriaName:null===(o=e.modelData)||void 0===o?void 0:o.hiringCriteriaName,salaryMinRange:null===(c=e.modelData)||void 0===c?void 0:c.salaryMinRange,salaryMaxRange:null===(d=e.modelData)||void 0===d?void 0:d.salaryMaxRange,monthOfHiring:null===(b=e.modelData)||void 0===b?void 0:b.monthOfHiring,remarks:null===(j=e.modelData)||void 0===j?void 0:j.remarks,attachment:null===(u=e.modelData)||void 0===u?void 0:u.attachment,attachmentName:null===(m=e.modelData)||void 0===m?void 0:m.attachmentName,status:null===(h=e.modelData)||void 0===h?void 0:h.status,location:null===(A=e.modelData)||void 0===A?void 0:A.location,noOfPositions:null===(v=e.modelData)||void 0===v?void 0:v.noOfPositions})}}),[]);var N=null===(a=e.lookUpData)||void 0===a||null===(i=a.skills)||void 0===i?void 0:i.map((function(e){return{value:e.skillCode,label:e.skillName}}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v,(n={hiringCriteria:e.hiringCriteria,lookUpData:e.lookUpData,defaultSkills:x,handleChange:function(e){var a=e.target,i=a.name,t=a.value;if("monthOfHiring"===i)r((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},i,new Date(t).toISOString()))}));else if("noOfPositions"===i)r((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},i,parseInt(t)))}));else if("hiringCriteriaID"===i){var l=t.split(",");r((function(e){return Object(m.a)(Object(m.a)({},e),{},{hiringCriteriaID:l[0],hiringCriteriaName:l[1]})}))}else r((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},i,t))}))},handleChangeSkills:function(e){O(e)},skillsList:N,handleSubmit:function(a){if(a.preventDefault(),d.jobName&&d.hiringCriteriaID||d.hiringCriteriaName||d.jobType||d.monthOfHiring||d.salaryMaxRange||d.location||d.salaryMinRange||d.status||A.length>=0){var i=Object(m.a)(Object(m.a)({},d),{},{skills:null===A||void 0===A?void 0:A.map((function(e){return{skillID:e.value,skill:e.label}}))});e.addJobsForm(i)}else h.a.error("Please enter all required fields")},dateFormat:function(e){var a=new Date(e).toLocaleDateString().split("/");return a[2]+"-"+a[1]+"-"+a[0]},addskills:A,addJobs:d,isEdit:e.isEdit},Object(u.a)(n,"hiringCriteria",e.hiringCriteria),Object(u.a)(n,"lookUpData",e.lookUpData),Object(u.a)(n,"handleClick",e.handleClick),n))})},p=function(e){var a,i,t,l,n,s,o,d,r,b;return Object(c.jsxs)("div",{className:"job-publish-modal",children:[Object(c.jsxs)("div",{className:"modal-header job-publish-modal-header",children:[Object(c.jsx)("p",{className:"heading w-full",children:"Job Details"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.closeDetailsModal()},className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsxs)("div",{className:"modal-body job-publish-modal-body",children:[Object(c.jsxs)("div",{className:"d-job-details",children:[Object(c.jsx)("h4",{className:"d-job-detials-title",children:null===(a=e.modelData)||void 0===a?void 0:a.jobName}),Object(c.jsxs)("div",{className:"row m-0",children:[Object(c.jsxs)("div",{className:"col-md-9 p-0",children:[Object(c.jsxs)("div",{className:"row m-0",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"d-job-box d-flex",children:[Object(c.jsx)("label",{className:"d-job-label",children:"Status:"})," ",Object(c.jsx)("div",{className:"d-job-box-status",children:null===(i=e.modelData)||void 0===i?void 0:i.status})]})}),Object(c.jsx)("div",{className:"col-md",children:Object(c.jsxs)("div",{className:"d-job-box d-flex",children:[Object(c.jsx)("label",{className:"d-job-label w-100",children:"Hiring Criteria Mapped:"}),Object(c.jsx)("input",{type:"text",name:"",value:null===(t=e.modelData)||void 0===t?void 0:t.hiringCriteriaName,className:"form-control d-inp bg-white",readOnly:!0,disabled:!0,required:!0})]})})]}),Object(c.jsxs)("div",{className:"row m-0",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"d-job-box d-grp",children:[Object(c.jsx)("label",{className:"d-job-label",children:"Tentative Month of Hiring:"}),Object(c.jsx)("input",{type:"date",name:"",value:function(e){var a=new Date(e).toLocaleDateString().split("/");return a[2]+"-"+a[1]+"-"+a[0]}(null===(l=e.modelData)||void 0===l?void 0:l.monthOfHiring),className:"d-inp bg-white",required:!0})]})}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"d-job-box d-grp",children:[Object(c.jsx)("label",{className:"d-job-label",children:"No. of Positions:"}),Object(c.jsx)("input",{type:"number",name:"",value:null===(n=e.modelData)||void 0===n?void 0:n.noOfPositions,className:"d-inp bg-white",required:!0})]})}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"d-job-box d-grp",children:[Object(c.jsx)("label",{className:"d-job-label",children:"Location:"}),Object(c.jsx)("input",{type:"text",name:"",value:null===(s=e.modelData)||void 0===s?void 0:s.location,className:"d-inp bg-white",required:!0})]})})]}),Object(c.jsx)("div",{className:"row m-0",children:Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"d-job-box d-grp",children:[Object(c.jsx)("label",{className:"d-job-label",children:"Salary Range:"}),Object(c.jsxs)("div",{className:"d-flex align-items-end",children:[Object(c.jsx)("input",{type:"number",name:"",value:null===(o=e.modelData)||void 0===o?void 0:o.salaryMinRange,className:"d-inp bg-white",required:!0}),Object(c.jsx)("label",{className:"d-job-label mx-2",children:"To"}),Object(c.jsx)("input",{type:"number",name:"",value:null===(d=e.modelData)||void 0===d?void 0:d.salaryMaxRange,className:"d-inp bg-white",required:!0})]})]})})})]}),Object(c.jsx)("div",{className:"col-md p-0",children:Object(c.jsxs)("div",{className:"d-job-box d-flex",children:[Object(c.jsx)("label",{className:"d-job-label",children:"Skills:"}),Object(c.jsx)("ul",{className:"d-job-list mb-0",children:e.skills&&(null===(r=e.skills)||void 0===r?void 0:r.length)>=0?null===(b=e.skills)||void 0===b?void 0:b.map((function(e,a){return Object(c.jsx)("li",{children:e.skillName},a)})):null})]})})]})]}),Object(c.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center w-full mt-4",children:Object(c.jsx)("button",{type:"button","data-dismiss":"modal",onClick:e.editJobsBtn,className:"btn job-btn",children:"Edit Job"})})]})]})},g=i(149);a.default=function(){var e=Object(l.useState)([]),a=Object(t.a)(e,2),i=a[0],s=a[1],o=Object(l.useState)([]),u=Object(t.a)(o,2),m=u[0],h=u[1],A=Object(l.useState)([]),v=Object(t.a)(A,2),x=v[0],f=v[1],N=Object(l.useState)(!1),C=Object(t.a)(N,2),y=C[0],D=C[1],k=Object(l.useState)({}),w=Object(t.a)(k,2),S=w[0],M=w[1],q=Object(l.useState)(!1),I=Object(t.a)(q,2),B=I[0],E=I[1],Q=Object(l.useState)(!1),J=Object(t.a)(Q,2),R=J[0],U=J[1],F=Object(n.a)();Object(l.useEffect)((function(){L(),P(),F(Object(r.b)({apiPayloadRequest:["skills","jobType"],callback:V}))}),[]);var L=function(){F(Object(b.b)({callback:Z}))},P=function(){F(Object(j.d)({callback:T}))},Z=function(e){h(e)},T=function(e){s(e)},V=function(e){f(e)},K=function(){E(!B),U(!1)},H=function(e){K(),P(),U(!1)},X=function(e){M(e)},W=S&&(null===S||void 0===S?void 0:S.skillsInString)?JSON.parse(null===S||void 0===S?void 0:S.skillsInString):[];return Object(c.jsxs)(c.Fragment,{children:[B?Object(c.jsx)(O,{lookUpData:x,hiringCriteria:m,isAddJobEnable:B,modelData:S,jobSkills:W,isEdit:R,addJobsForm:function(e){if(R){var a={id:S.jobID,req:e};F(Object(j.b)({apiPayloadRequest:a,callback:H}))}else F(Object(j.a)({apiPayloadRequest:e,callback:H}))},handleClick:K}):Object(c.jsx)(d,{hiringCriteria:m,allJobs:i,detailsModal:function(e){var a;D(!y),a=e,F(Object(j.c)({apiPayloadRequest:a,callback:X}))},handleClick:K}),y?Object(c.jsx)(g.a,{show:y,modalStyles:{minWidth:"70%"},children:Object(c.jsx)(p,{hiringCriteria:m,modelData:S,skills:W,closeDetailsModal:function(){D(!1),M({})},editJobsBtn:function(){D(!1),E(!0),U(!0)}})}):null]})}}}]);