(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[40],{186:function(o,e,t){"use strict";t.r(e);var r=t(49),a=t(8),c=t(26),d=t(1),i=t(19),n=t(14),l=t(166),s=t(167),p=t(168),u=t(28),v=t(154),h=t(0);e.default=function(){var o=Object(n.g)(),e=Object(d.useState)(),t=Object(c.a)(e,2),b=t[0],m=t[1],j=Object(d.useState)(!1),f=Object(c.a)(j,2),A=f[0],O=f[1],y=Object(d.useState)({attachment:void 0,attachmentName:void 0}),C=Object(c.a)(y,2),L=C[0],g=C[1],k=Object(d.useState)({CIN:!1,corporateType:!1,corporateCategory:!1,corporateIndustry:!1,dateOfJoining:!1,corporateHeadQuarters:!1,corporateLocalAddress:!1,companyProfile:!1,attachment:!1}),H=Object(c.a)(k,2),Q=H[0],x=H[1],B=Object(d.useState)(!1),N=Object(c.a)(B,2),P=N[0],D=N[1],S=Object(i.a)(),I=function(o){g({attachment:null===o||void 0===o?void 0:o.attachment,attachmentName:null===o||void 0===o?void 0:o.attachmentName}),m(Object(a.a)(Object(a.a)({},o),{},{profilePicture:void 0,attachment:void 0}))};Object(d.useEffect)((function(){S(Object(u.b)({callback:I}))}),[]);var J=function(o,e){x((function(t){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},o,e))}))};return Object(h.jsxs)("div",{className:"main",style:{marginTop:0},children:[Object(h.jsx)("h3",{style:{fontWeight:"500",textAlign:"center",fontSize:"1rem",marginBottom:"20px"},children:"Corporate Profile"}),Object(h.jsx)("h4",{class:"d-profile-name text-center",style:{fontSize:"1.2rem"},children:"Select the profile information you want to publish"}),Object(h.jsx)(l.a,{profileData:b,checkData:Q,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)(s.a,{profileData:b,checkData:Q,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)(p.a,{profileData:b,attachment:L,checkData:Q,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)("div",{className:"d-grp",children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)("input",{onChange:function(){D(!P)},checked:P,type:"checkbox",className:"custom-control-input",id:"accept",required:!0}),Object(h.jsx)("label",{className:"custom-control-label",htmlFor:"accept",children:"I hereby accept the Terms & Conditions of the Platform"})]})}),Object(h.jsxs)("div",{className:"w-100 text-center",children:[Object(h.jsx)("button",{type:"button",onClick:function(){o.goBack()},className:"btn mr-4",children:"Cancel"}),Object(h.jsx)("button",{type:"button",onClick:function(){var o={};(null===Q||void 0===Q?void 0:Q.CIN)&&(o.CIN=null===b||void 0===b?void 0:b.CIN),(null===Q||void 0===Q?void 0:Q.corporateType)&&(o.corporateType=null===b||void 0===b?void 0:b.corporateType),(null===Q||void 0===Q?void 0:Q.corporateCategory)&&(o.corporateCategory=null===b||void 0===b?void 0:b.corporateCategory),(null===Q||void 0===Q?void 0:Q.corporateIndustry)&&(o.corporateIndustry=null===b||void 0===b?void 0:b.corporateIndustry),(null===Q||void 0===Q?void 0:Q.dateOfJoining)&&(o.dateOfJoining=null===b||void 0===b?void 0:b.dateOfJoining),(null===Q||void 0===Q?void 0:Q.companyProfile)&&(o.companyProfile=null===b||void 0===b?void 0:b.companyProfile),(null===Q||void 0===Q?void 0:Q.corporateHeadQuarters)&&(o.corporateHQAddressLine1=null===b||void 0===b?void 0:b.corporateHQAddressLine1,o.corporateHQAddressLine2=null===b||void 0===b?void 0:b.corporateHQAddressLine2,o.corporateHQAddressCountry=null===b||void 0===b?void 0:b.corporateHQAddressCountry,o.corporateHQAddressState=null===b||void 0===b?void 0:b.corporateHQAddressState,o.corporateHQAddressCity=null===b||void 0===b?void 0:b.corporateHQAddressCity,o.corporateHQAddressDistrict=null===b||void 0===b?void 0:b.corporateHQAddressDistrict,o.corporateHQAddressZipCode=null===b||void 0===b?void 0:b.corporateHQAddressZipCode,o.corporateHQAddressPhone=null===b||void 0===b?void 0:b.corporateHQAddressPhone,o.corporateHQAddressEmail=null===b||void 0===b?void 0:b.corporateHQAddressEmail),(null===Q||void 0===Q?void 0:Q.corporateLocalAddress)&&(o.corporateLocalBranchAddressLine1=null===b||void 0===b?void 0:b.corporateLocalBranchAddressLine1,o.corporateLocalBranchAddressLine2=null===b||void 0===b?void 0:b.corporateLocalBranchAddressLine2,o.corporateLocalBranchAddressCountry=null===b||void 0===b?void 0:b.corporateLocalBranchAddressCountry,o.corporateLocalBranchAddressState=null===b||void 0===b?void 0:b.corporateLocalBranchAddressState,o.corporateLocalBranchAddressCity=null===b||void 0===b?void 0:b.corporateLocalBranchAddressCity,o.corporateLocalBranchAddressDistrict=null===b||void 0===b?void 0:b.corporateLocalBranchAddressDistrict,o.corporateLocalBranchAddressZipCode=null===b||void 0===b?void 0:b.corporateLocalBranchAddressZipCode,o.corporateLocalBranchAddressPhone=null===b||void 0===b?void 0:b.corporateLocalBranchAddressPhone,o.corporateLocalBranchAddressEmail=null===b||void 0===b?void 0:b.corporateLocalBranchAddressEmail),S(Object(u.d)({apiPayloadRequest:o,callback:function(o){O(!0)}}))},disabled:!(((null===Q||void 0===Q?void 0:Q.CIN)||(null===Q||void 0===Q?void 0:Q.corporateType)||(null===Q||void 0===Q?void 0:Q.corporateCategory)||(null===Q||void 0===Q?void 0:Q.corporateIndustry)||(null===Q||void 0===Q?void 0:Q.dateOfJoining)||(null===Q||void 0===Q?void 0:Q.corporateHeadQuarters)||(null===Q||void 0===Q?void 0:Q.corporateLocalAddress)||(null===Q||void 0===Q?void 0:Q.companyProfile)||(null===Q||void 0===Q?void 0:Q.attachment))&&P),className:"btn",children:"Publish"})]}),Object(h.jsx)(v.a,{onClose:function(){O(!1)},show:A,iconNameClass:"fa-building",message:"Your profile (selected information) has been published successfully"})]})}}}]);