(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[29],{122:function(o,e,r){"use strict";r.r(e);var a=r(39),t=r(9),c=r(24),d=r(1),i=r(23),l=r(14),n=r(113),s=r(114),p=r(115),u=r(104),v=r(101),h=r(0);e.default=function(){var o=Object(l.g)(),e=Object(d.useState)(),r=Object(c.a)(e,2),b=r[0],j=r[1],m=Object(d.useState)(!1),A=Object(c.a)(m,2),O=A[0],f=A[1],y=Object(d.useState)(),C=Object(c.a)(y,2),L=C[0],k=C[1],H=Object(d.useState)({CIN:!1,corporateType:!1,corporateCategory:!1,corporateIndustry:!1,dateOfJoining:!1,corporateHeadQuarters:!1,corporateLocalAddress:!1,companyProfile:!1,attachment:!1}),Q=Object(c.a)(H,2),g=Q[0],B=Q[1],x=Object(d.useState)(!1),N=Object(c.a)(x,2),P=N[0],D=N[1],I=Object(i.a)(),S=function(o){k(null===o||void 0===o?void 0:o.attachment),j(Object(t.a)(Object(t.a)({},o),{},{profilePicture:void 0,attachment:void 0}))};Object(d.useEffect)((function(){I(Object(u.a)({callback:S}))}),[]);var J=function(o,e){B((function(r){return Object(t.a)(Object(t.a)({},r),{},Object(a.a)({},o,e))}))};return Object(h.jsxs)("div",{className:"main",style:{marginTop:0},children:[Object(h.jsx)("h3",{className:"main-title",children:"Corporate Profile"}),Object(h.jsx)("h4",{class:"d-profile-name text-center",children:"Select the profile information you want to publish"}),Object(h.jsx)(n.a,{profileData:b,checkData:g,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)(s.a,{profileData:b,checkData:g,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)(p.a,{profileData:b,attachment:L,checkData:g,handleCheckData:J,check:!0,disable:!0}),Object(h.jsx)("div",{className:"d-grp",children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)("input",{onChange:function(){D(!P)},checked:P,type:"checkbox",className:"custom-control-input",id:"accept",required:!0}),Object(h.jsx)("label",{className:"custom-control-label",htmlFor:"accept",children:"I hereby accept the Terms & Conditions of the Platform"})]})}),Object(h.jsxs)("div",{className:"w-100 text-center",children:[Object(h.jsx)("button",{type:"button",onClick:function(){o.goBack()},className:"btn mr-4",children:"Cancel"}),Object(h.jsx)("button",{type:"button",onClick:function(){var o={};(null===g||void 0===g?void 0:g.CIN)&&(o.CIN=null===b||void 0===b?void 0:b.CIN),(null===g||void 0===g?void 0:g.corporateType)&&(o.corporateType=null===b||void 0===b?void 0:b.corporateType),(null===g||void 0===g?void 0:g.corporateCategory)&&(o.corporateCategory=null===b||void 0===b?void 0:b.corporateCategory),(null===g||void 0===g?void 0:g.corporateIndustry)&&(o.corporateIndustry=null===b||void 0===b?void 0:b.corporateIndustry),(null===g||void 0===g?void 0:g.dateOfJoining)&&(o.dateOfJoining=null===b||void 0===b?void 0:b.dateOfJoining),(null===g||void 0===g?void 0:g.companyProfile)&&(o.companyProfile=null===b||void 0===b?void 0:b.companyProfile),(null===g||void 0===g?void 0:g.corporateHeadQuarters)&&(o.corporateHQAddressLine1=null===b||void 0===b?void 0:b.corporateHQAddressLine1,o.corporateHQAddressLine2=null===b||void 0===b?void 0:b.corporateHQAddressLine2,o.corporateHQAddressCountry=null===b||void 0===b?void 0:b.corporateHQAddressCountry,o.corporateHQAddressState=null===b||void 0===b?void 0:b.corporateHQAddressState,o.corporateHQAddressCity=null===b||void 0===b?void 0:b.corporateHQAddressCity,o.corporateHQAddressDistrict=null===b||void 0===b?void 0:b.corporateHQAddressDistrict,o.corporateHQAddressZipCode=null===b||void 0===b?void 0:b.corporateHQAddressZipCode,o.corporateHQAddressPhone=null===b||void 0===b?void 0:b.corporateHQAddressPhone,o.corporateHQAddressEmail=null===b||void 0===b?void 0:b.corporateHQAddressEmail),(null===g||void 0===g?void 0:g.corporateLocalAddress)&&(o.corporateLocalBranchAddressLine1=null===b||void 0===b?void 0:b.corporateLocalBranchAddressLine1,o.corporateLocalBranchAddressLine2=null===b||void 0===b?void 0:b.corporateLocalBranchAddressLine2,o.corporateLocalBranchAddressCountry=null===b||void 0===b?void 0:b.corporateLocalBranchAddressCountry,o.corporateLocalBranchAddressState=null===b||void 0===b?void 0:b.corporateLocalBranchAddressState,o.corporateLocalBranchAddressCity=null===b||void 0===b?void 0:b.corporateLocalBranchAddressCity,o.corporateLocalBranchAddressDistrict=null===b||void 0===b?void 0:b.corporateLocalBranchAddressDistrict,o.corporateLocalBranchAddressZipCode=null===b||void 0===b?void 0:b.corporateLocalBranchAddressZipCode,o.corporateLocalBranchAddressPhone=null===b||void 0===b?void 0:b.corporateLocalBranchAddressPhone,o.corporateLocalBranchAddressEmail=null===b||void 0===b?void 0:b.corporateLocalBranchAddressEmail),I(Object(u.c)({apiPayloadRequest:o,callback:function(o){f(!0)}}))},disabled:!(((null===g||void 0===g?void 0:g.CIN)||(null===g||void 0===g?void 0:g.corporateType)||(null===g||void 0===g?void 0:g.corporateCategory)||(null===g||void 0===g?void 0:g.corporateIndustry)||(null===g||void 0===g?void 0:g.dateOfJoining)||(null===g||void 0===g?void 0:g.corporateHeadQuarters)||(null===g||void 0===g?void 0:g.corporateLocalAddress)||(null===g||void 0===g?void 0:g.companyProfile)||(null===g||void 0===g?void 0:g.attachment))&&P),className:"btn",children:"Publish"})]}),Object(h.jsx)(v.a,{onClose:function(){f(!1)},show:O,iconNameClass:"fa-building",message:"Your profile (selected information) has been published successfully"})]})}}}]);