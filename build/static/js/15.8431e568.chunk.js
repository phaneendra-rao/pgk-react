(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[15],{104:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return s})),c.d(t,"c",(function(){return r}));var a=c(7),n=function(e){return{type:a.i,payload:e}},s=function(e){return{type:a.w,payload:e}},r=function(e){return{type:a.I,payload:e}}},107:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n}));var a=function(e){return null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},n=function(e){return e&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}},147:function(e,t,c){"use strict";c.r(t);var a=c(39),n=c(9),s=c(24),r=c(1),l=c(23),o=c(7),i=c(104),d=c(5),u=c(107),j=c(0),b={stakeholderId:"",contactPerson:"",contactEmail:"",contactPhone:"",queryOrIssue:""};t.default=function(){var e=Object(r.useState)(Object(n.a)({},b)),t=Object(s.a)(e,2),c=t[0],m=t[1],h=Object(r.useState)(!1),p=Object(s.a)(h,2),O=p[0],f=p[1],x=Object(l.a)(),v=function(){x(Object(i.a)({callback:function(e){m(Object(n.a)(Object(n.a)({},b),{},{stakeholderId:null===e||void 0===e?void 0:e.stakeholderID}))}}))};Object(r.useEffect)((function(){v()}),[]);var y=function(e){var t=e.target,c=t.name,s=t.value;m((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(a.a)({},c,s))}))},N=function(e){console.log("response ",e),f(!0)},g=function(){var e,t=[];""===c.contactPerson.trim()&&t.push("Please enter name.."),""!==c.contactEmail.trim()&&Object(u.a)(c.contactEmail)||t.push("Invalid Email"),(""===c.contactPhone.trim()||c.contactPhone.length<10)&&t.push("Invalid Contact Number"),""===c.queryOrIssue.trim()&&t.push("Please enter query.."),t.length?t.forEach((function(e){d.a.error(e)})):x((e={apiPayloadRequest:c,callback:N},{type:o.E,payload:e}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main",style:{marginTop:30},children:[Object(j.jsx)("h3",{className:"main-title",children:"Support"}),!O&&Object(j.jsx)("div",{className:"gbl-profile-set other-info",children:Object(j.jsxs)("form",{onSubmit:g,onReset:v,children:[Object(j.jsx)("p",{className:"support-formtitle",children:"Kindly write to us for any issue/query and we will try to contact you back at soonest possible"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md",children:Object(j.jsx)("div",{className:"d-grp",children:Object(j.jsx)("input",{type:"text",name:"stakeholderId",className:"d-inp",value:c.stakeholderId,placeholder:"Stakeholder ID",readOnly:!0})})}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsx)("div",{className:"d-grp",children:Object(j.jsx)("input",{type:"text",name:"contactPerson",className:"d-inp",placeholder:"Name of the Contact Person",onChange:y,value:c.contactPerson})})}),Object(j.jsx)("div",{className:"w-100"}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsx)("div",{className:"d-grp",children:Object(j.jsx)("input",{type:"text",name:"contactEmail",className:"d-inp",placeholder:"Email ID",onChange:y,value:c.contactEmail})})}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsx)("div",{className:"d-grp",children:Object(j.jsx)("input",{type:"number",min:0,name:"contactPhone",className:"d-inp",placeholder:"Phone Number",onChange:y,value:c.contactPhone})})}),Object(j.jsx)("div",{className:"w-100"}),Object(j.jsx)("div",{className:"col-md",children:Object(j.jsx)("div",{className:"d-grp",children:Object(j.jsx)("textarea",{name:"queryOrIssue",rows:"6",className:"d-inp d-textarea",placeholder:"Your issue/query in brief",onChange:y,value:c.queryOrIssue})})})]}),Object(j.jsx)("div",{className:"w-100 text-center mt-4",children:Object(j.jsx)("button",{type:"button",onClick:g,className:"btn",children:"Send"})})]})}),O&&Object(j.jsx)("div",{className:"gbl-profile-set other-info",children:Object(j.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",style:{minHeight:400},children:[Object(j.jsx)("div",{className:"modal-icon btn-blue",style:{backgroundColor:"#004FD0"},children:Object(j.jsx)("i",{className:"fas fa-check text-white"})}),Object(j.jsxs)("p",{className:"support-formtitle",style:{color:"black"},children:["Your message has been sent successfully.",Object(j.jsx)("br",{}),"We will try to contact you back at soonest possible"]})]})})]})})}}}]);