(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[15],{152:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return l}));var i=n(7),c=function(e){return{type:i.c,payload:e}},a=function(e){return{type:i.A,payload:e}},s=function(e){return{type:i.I,payload:e}},l=function(e){return{type:i.b,payload:e}}},153:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return j}));var i=n(7),c=function(e){return{type:i.F,payload:e}},a=function(e){return{type:i.o,payload:e}},s=function(e){return{type:i.e,payload:e}},l=function(e){return{type:i.n,payload:e}},r=function(e){return{type:i.p,payload:e}},o=function(e){return{type:i.s,payload:e}},u=function(e){return{type:i.D,payload:e}},d=function(e){return{type:i.E,payload:e}},j=function(e){return{type:i.m,payload:e}}},205:function(e,t,n){"use strict";n.r(t);var i=n(26),c=n(1),a=n(19),s=n(0),l=function(e){var t,n,i,c;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"row universities-list-container",children:[Object(s.jsx)("div",{className:"d-flex flex-column align-items-center w-full",children:Object(s.jsxs)("p",{className:"heading",children:[0!=(null===(t=e.searchList)||void 0===t?void 0:t.length)?null===(n=e.searchList)||void 0===n?void 0:n.length:0," Universities found matching your search criteria"]})}),e.searchList&&(null===(i=e.searchList)||void 0===i?void 0:i.length)?null===(c=e.searchList)||void 0===c?void 0:c.map((function(t,n){var i,c;return Object(s.jsxs)("div",{className:"university-item d-flex justify-content-between align-items-center w-full",children:[Object(s.jsxs)("div",{className:"univ-item-container d-flex justify-content-start align-items-center",children:[Object(s.jsx)("div",{className:"univ-icon",children:Object(s.jsx)("i",{className:"fas fa-university"})}),Object(s.jsxs)("div",{className:"univ-basic-info d-flex flex-column align-items-start",children:[Object(s.jsx)("p",{className:"title",children:t.universityName}),Object(s.jsxs)("p",{className:"sub-title",children:[Object(s.jsx)("i",{className:"fas fa-map-marker-alt"})," ",t.locations]})]})]}),Object(s.jsx)("div",{className:"vertical-divider-2"}),Object(s.jsxs)("div",{className:"univ-info-item d-flex flex-column align-items-center",children:[Object(s.jsx)("p",{className:"title",children:"University ID"}),Object(s.jsx)("p",{className:"sub-title",children:t.universityID})]}),Object(s.jsx)("div",{className:"vertical-divider-2"}),Object(s.jsxs)("div",{className:"univ-info-item d-flex flex-column align-items-center",children:[Object(s.jsx)("p",{className:"title",children:"NIRF Ranking"}),Object(s.jsx)("p",{className:"sub-title",children:null===t||void 0===t||null===(i=t.ranking)||void 0===i?void 0:i.rank})]}),Object(s.jsx)("div",{className:"vertical-divider-2"}),Object(s.jsxs)("div",{className:"univ-info-item d-flex flex-column align-items-center",children:[Object(s.jsx)("p",{className:"title",children:"Accredations"}),Object(s.jsx)("p",{className:"sub-title",children:null===t||void 0===t||null===(c=t.accredations)||void 0===c?void 0:c.issuingAuthority})]}),Object(s.jsx)("div",{className:"vertical-divider-2"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e.viewMore(t.universityID)},className:"univ-view-more-btn",children:"View more"})]},n)})):null]})})},r=n(6),o=n(152),u=n(153),d=n(5),j=function(e){var t,n,i,c,a;return Object(s.jsx)("div",{className:"row universities-section",children:Object(s.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-center w-full",children:[Object(s.jsx)("h4",{className:"heading",children:"Subscribe to new University/Universities"}),Object(s.jsxs)("form",{className:"universities-filter-section d-flex align-items-center w-full",onSubmit:e.handleSubmit,children:[Object(s.jsxs)("div",{className:"filter-input-container d-flex flex-column align-items-center",children:[Object(s.jsx)("input",{type:"text",name:"universityName",onChange:e.handleChange,className:"form-control search-univ",placeholder:"Enter the name of any specific university"}),Object(s.jsxs)("div",{className:"drop-down-inputs-container d-flex justify-content-between align-items-center w-full",children:[Object(s.jsxs)("select",{name:"hcID",onChange:e.handleChange,disabled:e.hcEnable,className:"form-control select-filter",children:[Object(s.jsx)("option",{value:!0,children:"By Hiring Criteria"}),e.hiringCriteria&&(null===(t=e.hiringCriteria)||void 0===t?void 0:t.length)>=0?null===(n=e.hiringCriteria)||void 0===n?void 0:n.map((function(e,t){return Object(s.jsx)("option",{value:e.hiringCriteriaID,children:e.hiringCriteriaName},t)})):null]}),Object(s.jsx)("p",{className:"dividerWord",children:"Or"}),Object(s.jsxs)("select",{name:"locations",onChange:e.handleChange,className:"form-control select-filter",disabled:e.hcID,children:[Object(s.jsx)("option",{value:"",children:"By Location"}),Object(s.jsx)("option",{value:"Hyderabad",children:"Hyderabad"}),Object(s.jsx)("option",{value:"Delhi",children:"Delhi"}),Object(s.jsx)("option",{value:"Mumbai",children:"Mumbai"})]}),Object(s.jsxs)("select",{name:"skills",onChange:e.handleChange,disabled:e.hcID,className:"form-control select-filter",children:[Object(s.jsx)("option",{value:"",children:"By Skills"}),e.lookUpData&&(null===(i=e.lookUpData)||void 0===i||null===(c=i.skills)||void 0===c?void 0:c.length)>=0?null===(a=e.lookUpData)||void 0===a?void 0:a.skills.map((function(e,t){return Object(s.jsx)("option",{value:e.skillCode,children:e.skillName},t)})):null]}),Object(s.jsxs)("select",{className:"form-control select-filter",disabled:e.hcID,children:[Object(s.jsx)("option",{children:"By Average CGPA"}),Object(s.jsx)("option",{children:"8"}),Object(s.jsx)("option",{children:"9"}),Object(s.jsx)("option",{children:"10"})]})]})]}),Object(s.jsx)("div",{className:"filter-search-btn-container d-flex justify-content-center align-items-center",children:Object(s.jsxs)("button",{type:"submit",style:{cursor:"pointer"},className:"univ-search-btn d-flex justify-content-between align-items-center",children:["Search ",Object(s.jsx)("i",{className:"fas fa-search ml-2"})]})})]})]})})},b=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],l=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1],h=Object(c.useState)(""),f=Object(i.a)(h,2),m=f[0],v=f[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),O=x[0],y=x[1],g=O||u;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(j,{hcID:m,hcEnable:g,lookUpData:e.lookUpData,hiringCriteria:e.hiringCriteria,handleChange:function(e){var t=e.target,n=t.name,i=t.value;switch(n){case"universityName":l(i);break;case"locations":b(i),v("");break;case"skills":y(i),v("");break;case"hcID":v(i),b(""),y("")}},handleSubmit:function(t){if(t.preventDefault(),a||O||u||m){var n={hcID:m,skills:O,locations:u,universityName:a},i=Object.keys(n).map((function(e){if(n[e])return"".concat(e,"=").concat(n[e],"&")})).join("").replace(/&$/,"");e.getSeachData(i)}else d.a.warning("Select/Enter to search")}})})};t.default=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),d=n[0],j=n[1],h=Object(c.useState)([]),f=Object(i.a)(h,2),m=f[0],v=f[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),O=x[0],y=x[1],g=Object(a.a)();Object(c.useEffect)((function(){k(),g(Object(r.b)({apiPayloadRequest:["skills"],callback:N}))}),[]);var N=function(e){y(e)},k=function(){g(Object(o.b)({callback:D}))},D=function(e){v(e)},w=function(e){j(e)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{lookUpData:O,hiringCriteria:m,getSeachData:function(e){g(Object(u.f)({apiPayloadRequest:e,callback:w}))}}),Object(s.jsx)(l,{searchList:d,viewMore:function(t){e.history.push("/dashboard/subscribe/newuniversity/"+t)}})]})}}}]);