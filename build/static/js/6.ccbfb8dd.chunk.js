(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[6],{249:function(e,i,t){"use strict";var l=t(74),a=(t(1),t(209)),s=t(294),n=t(207),d=t(206),c=t(208),o=t(0);var r=function(e,i){var t;if(i&&i.length){var l=!0;i.forEach((function(i){l&&("string"===typeof i?"isRequired"===i&&(t=function(e){var i;null!=e&&void 0!=e&&""!==e.toString().trim()||(i="Required");return i}(e)):"function"===typeof i&&(t=i(e)),void 0!==t&&(l=!1))}))}return t};i.a=function(e){var i=e.label,t=void 0===i?"":i,u=(e.variant,e.size),b=void 0===u?"small":u,m=e.name,v=void 0===m?"":m,j=e.value,p=void 0===j?"":j,x=e.onChange,h=void 0===x?function(){}:x,f=e.disabled,O=void 0!==f&&f,N=(e.className,e.required),g=void 0!==N&&N,y=e.errorMessage,C=void 0===y?"":y,S=e.styles,k=void 0===S?{width:"100%"}:S,w=e.validations,D=void 0===w?[]:w,I=e.options,P=void 0===I?[]:I,R=e.labelStyles,z=void 0===R?{}:R,W=e.selectStyles,A=void 0===W?{}:W,q=e.menuStyles,F=void 0===q?{}:q;return Object(o.jsxs)(d.a,{size:b,variant:"outlined",style:k,disabled:O,required:g,error:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim()),children:[Object(o.jsx)(a.a,{style:z,children:t}),Object(o.jsxs)(c.a,{value:p,onChange:function(e){var i,t,a=[];g&&(a=["isRequired"].concat(Object(l.a)(D)));var s=r(null===e||void 0===e||null===(i=e.target)||void 0===i?void 0:i.value,a);h(v,null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value,s)},label:t,autoWidth:!0,style:A,children:[Object(o.jsx)(s.a,{style:F,value:"",children:"Select ".concat(t)}),(null===P||void 0===P?void 0:P.length)?P.map((function(e){if(e&&e.value&&e.label)return Object(o.jsxs)(s.a,{style:F,value:null===e||void 0===e?void 0:e.value,children:[(null===e||void 0===e?void 0:e.iconName)?Object(o.jsx)("span",{style:{marginRight:"12px"},children:Object(o.jsx)("i",{className:"fas "+e.iconName})}):void 0,null===e||void 0===e?void 0:e.label]})})):null]}),Object(o.jsx)(n.a,{error:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim()),children:void 0!==C&&""!==(null===C||void 0===C?void 0:C.trim())?C:""})]})}},265:function(e,i,t){"use strict";t(1);var l=t(367),a=t(401),s=t(366),n=t(364),d=t(365),c=t(363),o=t(362),r=t(50),u=t(0);i.a=function(e){var i=e.isOpenDialog,t=void 0!==i&&i,b=e.dialogTitle,m=void 0===b?void 0:b,v=e.dialogDescription,j=void 0===v?void 0:v,p=e.isCancelBtnRequired,x=void 0===p||p,h=e.isConfirmBtnRequired,f=void 0===h||h,O=e.isCancelBtnDisabled,N=void 0!==O&&O,g=e.isConfirmBtnDisabled,y=void 0!==g&&g,C=e.cancelbtnText,S=void 0===C?"Cancel":C,k=e.confirmbtnText,w=void 0===k?"Confirm":k,D=e.closeDialogHandler,I=void 0===D?void 0:D,P=e.confirmDialogHandler,R=void 0===P?void 0:P,z=e.disableBackdropClick,W=void 0!==z&&z,A=e.dialogContent,q=void 0===A?void 0:A,F=e.maxWidth,H=void 0===F?"md":F,T=(e.rootStyles,e.contentStyles),V=void 0===T?{padding:"0px"}:T,B=Object(r.a)(),L=Object(o.a)(B.breakpoints.down("sm"));return Object(u.jsx)("div",{children:Object(u.jsxs)(a.a,{fullScreen:L,open:t,onClose:I,"aria-labelledby":"responsive-dialog-title",disableBackdropClick:W,fullWidth:!0,maxWidth:H,children:[m&&Object(u.jsx)(c.a,{id:"responsive-dialog-title",children:m}),Object(u.jsxs)(n.a,{className:"".concat(null===e||void 0===e?void 0:e.contentClasses),dividers:!0,style:V,children:[j&&Object(u.jsx)(d.a,{children:j}),q]}),(x||f)&&Object(u.jsxs)(s.a,{children:[x&&Object(u.jsx)(l.a,{autoFocus:!0,onClick:I,disabled:N,color:"primary",children:S}),f&&Object(u.jsx)(l.a,{onClick:R,disabled:y,color:"primary",children:w})]})]})})}},269:function(e,i,t){"use strict";t.d(i,"f",(function(){return a})),t.d(i,"c",(function(){return s})),t.d(i,"b",(function(){return n})),t.d(i,"a",(function(){return d})),t.d(i,"g",(function(){return c})),t.d(i,"i",(function(){return o})),t.d(i,"e",(function(){return r})),t.d(i,"d",(function(){return u})),t.d(i,"h",(function(){return b}));var l=t(8),a=function(e){return{type:l.jb,payload:e}},s=function(e){return{type:l.F,payload:e}},n=function(e){return{type:l.v,payload:e}},d=function(e){return{type:l.E,payload:e}},c=function(e){return{type:l.G,payload:e}},o=function(e){return{type:l.J,payload:e}},r=function(e){return{type:l.hb,payload:e}},u=function(e){return{type:l.ib,payload:e}},b=function(e){return{type:l.D,payload:e}}},286:function(e,i,t){"use strict";t.d(i,"a",(function(){return a})),t.d(i,"b",(function(){return s}));var l=t(8),a=function(e){return{type:l.y,payload:e}},s=function(e){return{type:l.C,payload:e}}},294:function(e,i,t){"use strict";var l=t(11),a=t(40),s=t(4),n=t(1),d=(t(15),t(14)),c=t(17),o=t(394),r=t(61),u=t(22),b=t(94),m=t(20),v="undefined"===typeof window?n.useEffect:n.useLayoutEffect,j=n.forwardRef((function(e,i){var t=e.alignItems,a=void 0===t?"center":t,c=e.autoFocus,j=void 0!==c&&c,p=e.button,x=void 0!==p&&p,h=e.children,f=e.classes,O=e.className,N=e.component,g=e.ContainerComponent,y=void 0===g?"li":g,C=e.ContainerProps,S=(C=void 0===C?{}:C).className,k=Object(l.a)(C,["className"]),w=e.dense,D=void 0!==w&&w,I=e.disabled,P=void 0!==I&&I,R=e.disableGutters,z=void 0!==R&&R,W=e.divider,A=void 0!==W&&W,q=e.focusVisibleClassName,F=e.selected,H=void 0!==F&&F,T=Object(l.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=n.useContext(b.a),B={dense:D||V.dense||!1,alignItems:a},L=n.useRef(null);v((function(){j&&L.current&&L.current.focus()}),[j]);var M=n.Children.toArray(h),E=M.length&&Object(r.a)(M[M.length-1],["ListItemSecondaryAction"]),G=n.useCallback((function(e){L.current=m.findDOMNode(e)}),[]),Y=Object(u.a)(G,i),U=Object(s.a)({className:Object(d.a)(f.root,O,B.dense&&f.dense,!z&&f.gutters,A&&f.divider,P&&f.disabled,x&&f.button,"center"!==a&&f.alignItemsFlexStart,E&&f.secondaryAction,H&&f.selected),disabled:P},T),J=N||"li";return x&&(U.component=N||"div",U.focusVisibleClassName=Object(d.a)(f.focusVisible,q),J=o.a),E?(J=U.component||N?J:"div","li"===y&&("li"===J?J="div":"li"===U.component&&(U.component="div")),n.createElement(b.a.Provider,{value:B},n.createElement(y,Object(s.a)({className:Object(d.a)(f.container,S),ref:Y},k),n.createElement(J,U,M),M.pop()))):n.createElement(b.a.Provider,{value:B},n.createElement(J,Object(s.a)({ref:Y},U),M))})),p=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(j),x=n.forwardRef((function(e,i){var t,a=e.classes,c=e.className,o=e.component,r=void 0===o?"li":o,u=e.disableGutters,b=void 0!==u&&u,m=e.ListItemClasses,v=e.role,j=void 0===v?"menuitem":v,x=e.selected,h=e.tabIndex,f=Object(l.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==h?h:-1),n.createElement(p,Object(s.a)({button:!0,role:j,tabIndex:t,component:r,selected:x,disableGutters:b,classes:Object(s.a)({dense:a.dense},m),className:Object(d.a)(a.root,c,x&&a.selected,!b&&a.gutters),ref:i},f))}));i.a=Object(c.a)((function(e){return{root:Object(s.a)({},e.typography.body1,Object(a.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(s.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(x)},308:function(e,i,t){"use strict";var l=t(30),a=t(1),s=t(86),n=t.n(s),d=t(24),c=t(89),o=t(87),r=t(269),u=t(0);i.a=function(e){var i,t,s,b,m,v,j,p,x,h,f=Object(d.a)(),O=Object(a.useState)(!1),N=Object(l.a)(O,2),g=N[0],y=N[1],C=Object(a.useState)(),S=Object(l.a)(C,2),k=S[0],w=S[1],D=function(e){f(Object(r.h)({apiPayloadRequest:{type:"OTHER_INFORMATION",id:e},callback:function(e){w(e),y(!0)}}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"univ-sub-item d-flex justify-content-between align-items-center",style:{padding:15},children:[Object(u.jsxs)("div",{className:"sub-type-container d-flex",children:[Object(u.jsx)("i",{className:"far fa-file-alt icon"}),Object(u.jsx)("p",{className:"sub-label",style:{fontWeight:"bold"},children:null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.generalNote})]}),Object(u.jsx)("div",{className:"vertical-border"}),Object(u.jsxs)("div",{className:"name-address d-flex flex-column align-items-start",children:[Object(u.jsx)("p",{className:"title",children:null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.publisherName}),""!==(null===e||void 0===e||null===(s=e.item)||void 0===s||null===(b=s.location)||void 0===b?void 0:b.trim())&&Object(u.jsxs)("p",{className:"sub-title",children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt"})," ",null===e||void 0===e||null===(m=e.item)||void 0===m?void 0:m.location]})]}),Object(u.jsx)("div",{className:"vertical-border"}),Object(u.jsx)("div",{className:"sub-item-container d-flex flex-column align-items-center",children:Object(u.jsx)("p",{className:"sub-title",children:null===e||void 0===e||null===(v=e.item)||void 0===v||null===(j=v.info)||void 0===j?void 0:j.Title})}),Object(u.jsx)("div",{className:"vertical-border"}),Object(u.jsx)("button",{type:"button",className:"view-info-btn btn d-flex justify-content-around align-items-center",style:{height:"20px",maxWidth:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i,t;if(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.isSubscribed)D(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.publishID);else if(null===e||void 0===e?void 0:e.getDetails){var l,a,s;D((null===e||void 0===e||null===(l=e.item)||void 0===l?void 0:l.publishID)?null===e||void 0===e||null===(a=e.item)||void 0===a?void 0:a.publishID:null===e||void 0===e||null===(s=e.item)||void 0===s?void 0:s.publishId)}else(null===e||void 0===e?void 0:e.subscribeHandler)&&e.subscribeHandler()},children:"Details"})]},null===e||void 0===e?void 0:e.index),g&&Object(u.jsx)(c.a,{show:g,children:Object(u.jsxs)("div",{className:"hiring-modal",children:[Object(u.jsxs)("div",{className:"modal-header hiring-modal-header",children:[Object(u.jsxs)("h5",{className:"modal-title",style:{fontSize:"1rem"},id:"exampleModalLabel",children:["Other Information : ",null===e||void 0===e||null===(p=e.item)||void 0===p?void 0:p.publisherName]}),Object(u.jsx)("button",{type:"button",className:"close",style:{fontSize:"1rem"},onClick:function(){y(!1)},children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsx)("form",{className:"hiring-modal-form",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md",children:Object(u.jsx)("div",{className:"modal-grp",children:Object(u.jsx)(o.a,{value:null===k||void 0===k?void 0:k.publishID,label:"Publish ID",inputLabelProps:{style:{fontSize:".800rem"}},inputProps:{style:{fontSize:".800rem"}},disabled:!0})})}),Object(u.jsx)("div",{className:"col-md",children:Object(u.jsx)("div",{className:"modal-grp",children:Object(u.jsx)(o.a,{value:(null===k||void 0===k?void 0:k.dateOfPublish)?"Published on ".concat(n()(null===k||void 0===k?void 0:k.dateOfPublish).format("DD-MM-YYYY")):"",label:"Published Date & Time",inputLabelProps:{style:{fontSize:".800rem"}},inputProps:{style:{fontSize:".800rem"}},disabled:!0})})}),Object(u.jsx)("div",{className:"w-100"}),Object(u.jsx)("div",{className:"col-md",children:Object(u.jsx)("div",{className:"modal-grp",children:Object(u.jsx)(o.a,{value:(null===k||void 0===k?void 0:k.title)?null===k||void 0===k?void 0:k.title:"",label:"Title",inputLabelProps:{style:{fontSize:".800rem"}},inputProps:{style:{fontSize:".800rem"}},disabled:!0})})}),Object(u.jsx)("div",{className:"w-100"}),Object(u.jsx)("div",{className:"col-md",children:Object(u.jsx)("div",{className:"modal-grp",children:Object(u.jsx)(o.a,{value:(null===k||void 0===k?void 0:k.information)?null===k||void 0===k?void 0:k.information:"",label:"Content",disabled:!0,multiline:!0,minRows:6,inputLabelProps:{style:{fontSize:".800rem"}},inputProps:{style:{fontSize:".800rem"}}})})}),Object(u.jsx)("div",{className:"w-100"}),(null===k||void 0===k?void 0:k.attachment)&&""!==(null===k||void 0===k||null===(x=k.attachment)||void 0===x?void 0:x.trim())&&""!==(null===k||void 0===k||null===(h=k.attachmentName)||void 0===h?void 0:h.trim())?Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center attachmentStripeContainer w-full",children:[Object(u.jsx)("p",{className:"label",children:"Attachment Present (if any)"}),Object(u.jsx)("a",{href:"data:application/pdf;base64,"+(null===k||void 0===k?void 0:k.attachment),style:{textDecoration:"none",outline:"none",width:"70%"},download:!0,children:Object(u.jsxs)("div",{className:"attachmentStripe d-flex justify-content-between align-items-center",children:[Object(u.jsx)("p",{children:null===k||void 0===k?void 0:k.attachmentName}),Object(u.jsx)("i",{className:"fas fa-paperclip"})]})})]}):null]})})]})})]})}},309:function(e,i,t){"use strict";var l=t(30),a=t(1),s=t(24),n=(t(89),t(265)),d=t(269),c=t(0);i.a=function(e){var i,t,o,r,u,b,m,v,j,p=Object(s.a)(),x=Object(a.useState)(!1),h=Object(l.a)(x,2),f=h[0],O=h[1],N=Object(a.useState)(),g=Object(l.a)(N,2),y=g[0],C=g[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"univ-sub-item d-flex justify-content-between align-items-center",style:{padding:15},children:[Object(c.jsxs)("div",{className:"sub-type-container d-flex",children:[Object(c.jsx)("i",{className:"far fa-file icon"}),Object(c.jsx)("p",{className:"sub-label",style:{fontWeight:"bold"},children:null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.generalNote})]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsxs)("div",{className:"name-address d-flex flex-column align-items-start",children:[Object(c.jsx)("p",{className:"title",children:null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.publisherName}),""!==(null===e||void 0===e||null===(o=e.item)||void 0===o||null===(r=o.location)||void 0===r?void 0:r.trim())&&Object(c.jsxs)("p",{className:"sub-title",children:[Object(c.jsx)("i",{className:"fas fa-map-marker-alt"})," ",null===e||void 0===e||null===(u=e.item)||void 0===u?void 0:u.location]})]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsxs)("div",{className:"sub-item-container d-flex flex-column align-items-center",children:[Object(c.jsx)("p",{className:"title",children:"University ID"}),Object(c.jsx)("p",{className:"sub-title",children:null===e||void 0===e||null===(b=e.item)||void 0===b?void 0:b.publisher})]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsx)("button",{type:"button",className:"view-info-btn btn d-flex justify-content-around align-items-center",style:{height:"20px",maxWidth:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i,t;t=null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.subscriptionID,p(Object(d.h)({apiPayloadRequest:{type:"UNIVERSITY_INFO",id:t},callback:function(e){C(e),O(!0)}}))},children:"View Information"})]},null===e||void 0===e?void 0:e.index),f?Object(c.jsx)(n.a,{isOpenDialog:f,isCancelBtnRequired:!1,isConfirmBtnRequired:!1,disableBackdropClick:!0,contentStyles:{backgroundColor:"#fff",padding:"0px",paddingBottom:"12px"},dialogContent:Object(c.jsxs)("div",{className:"viewInsight-modal",id:"viewInsight",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsxs)("h4",{className:"modal-title",children:["Insights : ",null===e||void 0===e||null===(m=e.item)||void 0===m?void 0:m.publisherName]}),Object(c.jsx)("i",{className:"far fa-times-circle close-icon",onClick:function(){O(!1)},"data-dismiss":"modal"})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-4",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.averageCGPA,placeholder:"Average CGPA recorded last year *",required:!0,readOnly:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Average CGPA recorded last year"})]})}),Object(c.jsx)("div",{className:"col-4 p-0",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.highestCGPA,placeholder:"Highest CGPA recorded last year *",required:!0,readOnly:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Highest CGPA recorded last year"})]})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.highestPackage,placeholder:"Highest Package received during last CH *",required:!0,readOnly:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Highest Package received during last CH"})]})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("label",{className:"textarea-caption",children:"Top Skills offered by this University"}),Object(c.jsx)("div",{className:"modal-inp inp-textarea",value:"7.5",children:Object(c.jsx)("ul",{children:null===y||void 0===y||null===(v=y.top5Skills)||void 0===v?void 0:v.map((function(e,i){return Object(c.jsx)("li",{children:e})}))})})]})}),Object(c.jsx)("div",{className:"col-6 p-0",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("label",{className:"textarea-caption",children:"Top Recruiting Corporates Last year"}),Object(c.jsx)("div",{className:"modal-inp inp-textarea",children:Object(c.jsx)("ul",{children:null===y||void 0===y||null===(j=y.top5Recruiters)||void 0===j?void 0:j.map((function(e,i){return Object(c.jsx)("li",{children:e})}))})})]})})]})}),Object(c.jsxs)("div",{className:"col-4",children:[Object(c.jsx)("div",{className:"col-12 p-0",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.averagePackage,placeholder:"Average Package received during last CH *",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Average Package received during last CH"})]})}),Object(c.jsx)("div",{className:"col-12 p-0",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.universityConvertionRatio,placeholder:"Average CGPA recorded last year *",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"University Conversion Rate Last year"})]})}),Object(c.jsx)("div",{className:"col-12 p-0",children:Object(c.jsxs)("div",{className:"modal-grp",children:[Object(c.jsx)("input",{type:"text",className:"modal-inp",defaultValue:null===y||void 0===y?void 0:y.tentativeMonthOfPassing,placeholder:"Average CGPA recorded last year *",required:!0}),Object(c.jsx)("label",{className:"inp-caption",children:"Tentative Passing Month"})]})})]})]})]})]})}):null]})}},310:function(e,i,t){"use strict";t(1);var l=t(18),a=t(0);i.a=function(e){var i,t,s,n,d,c=Object(l.g)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"univ-sub-item d-flex justify-content-between align-items-center",style:{padding:15},children:[Object(a.jsxs)("div",{className:"sub-type-container d-flex",children:[Object(a.jsx)("i",{className:"far fa-user-circle icon"}),Object(a.jsx)("p",{className:"sub-label",style:{fontWeight:"bold"},children:"Student List"})]}),Object(a.jsx)("div",{className:"vertical-border"}),Object(a.jsxs)("div",{className:"name-address d-flex flex-column align-items-start",children:[Object(a.jsx)("p",{className:"title",children:null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.publisherName}),""!==(null===e||void 0===e||null===(t=e.item)||void 0===t||null===(s=t.location)||void 0===s?void 0:s.trim())&&Object(a.jsxs)("p",{className:"sub-title",children:[Object(a.jsx)("i",{className:"fas fa-map-marker-alt"})," ",null===e||void 0===e||null===(n=e.item)||void 0===n?void 0:n.location]})]}),Object(a.jsx)("div",{className:"vertical-border"}),Object(a.jsxs)("div",{className:"sub-item-container d-flex flex-column align-items-start",children:[Object(a.jsx)("p",{className:"title",children:"Search Filters"}),Object(a.jsx)("p",{className:"sub-title",style:{fontWeight:"700"},children:null===e||void 0===e||null===(d=e.item)||void 0===d?void 0:d.searchCriteria})]}),Object(a.jsx)("div",{className:"vertical-border"}),Object(a.jsx)("button",{type:"button",className:"view-info-btn btn d-flex justify-content-around align-items-center",style:{height:"20px",maxWidth:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i,t,l,a;return l=null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.publisher,a=null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.subscriptionID,void c.push("/dashboard/subscribe/students/"+l+"?sub="+a)},children:"View List"})]},null===e||void 0===e?void 0:e.index)})}},311:function(e,i,t){"use strict";var l=t(30),a=t(1),s=t(24),n=(t(86),t(89)),d=t(286),c=t(0);i.a=function(e){var i,t,o,r,u,b,m,v,j=Object(s.a)(),p=Object(a.useState)(!1),x=Object(l.a)(p,2),h=x[0],f=x[1],O=Object(a.useState)(),N=Object(l.a)(O,2),g=N[0],y=N[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"univ-sub-item d-flex justify-content-between align-items-center",style:{padding:15},children:[Object(c.jsxs)("div",{className:"sub-type-container d-flex",children:[Object(c.jsx)("i",{className:"far fa-file-alt icon"}),Object(c.jsx)("p",{className:"sub-label",style:{fontWeight:"bold"},children:"Campus Drive Request"})]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsxs)("div",{className:"name-address d-flex flex-column align-items-start",children:[Object(c.jsx)("p",{className:"title",children:null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.publisherName}),""!==(null===e||void 0===e||null===(t=e.item)||void 0===t||null===(o=t.location)||void 0===o?void 0:o.trim())&&Object(c.jsxs)("p",{className:"sub-title",children:[Object(c.jsx)("i",{className:"fas fa-map-marker-alt"})," ",null===e||void 0===e||null===(r=e.item)||void 0===r?void 0:r.location]})]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsxs)("div",{className:"sub-item-container d-flex justify-content-around align-items-center",children:[Object(c.jsx)("p",{className:"sub-title",children:"Status"}),"Accepted"===(null===e||void 0===e||null===(u=e.item)||void 0===u?void 0:u.campusDriveStatus)?Object(c.jsx)("span",{className:"badge badge-md",style:{backgroundColor:"#20BDC9",color:"white",padding:"6px 15px",fontWeight:"500",marginLeft:10,borderRadius:"20px"},children:"Accepted"}):"Pending"===(null===e||void 0===e||null===(b=e.item)||void 0===b?void 0:b.campusDriveStatus)?Object(c.jsx)("span",{className:"badge badge-md",style:{backgroundColor:"#FEAD43",color:"white",padding:"6px 15px",fontWeight:"500",marginLeft:10,borderRadius:"20px"},children:"Sent"}):"Rejected"===(null===e||void 0===e||null===(m=e.item)||void 0===m?void 0:m.campusDriveStatus)?Object(c.jsx)("span",{className:"badge badge-md",style:{backgroundColor:"#F70D0D",color:"white",padding:"6px 15px",fontWeight:"500",marginLeft:10,borderRadius:"20px"},children:"Rejected"}):void 0]}),Object(c.jsx)("div",{className:"vertical-border"}),Object(c.jsx)("button",{type:"button",className:"view-info-btn btn d-flex justify-content-around align-items-center",style:{height:"20px",maxWidth:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i,t;t=null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.nftID,j(Object(d.b)({apiPayloadRequest:{type:"NOTIFICATION",notificationId:t},callback:function(e){var i=JSON.parse(null===e||void 0===e?void 0:e.content);y((null===i||void 0===i?void 0:i.requestContent)?null===i||void 0===i?void 0:i.requestContent:i),f(!0)}}))},children:"View More"})]},null===e||void 0===e?void 0:e.index),h&&Object(c.jsx)(n.a,{show:h,modalStyles:{minWidth:"70%"},children:Object(c.jsxs)("div",{className:"mail-modal",children:[Object(c.jsxs)("div",{className:"modal-header d-block",style:{padding:"26px"},children:[Object(c.jsxs)("span",{className:"modal-title",style:{fontSize:"1.1rem",padding:0},children:["Mail sent to ",null===e||void 0===e||null===(v=e.item)||void 0===v?void 0:v.publisherName," University requesting Campus Placement Drive"]}),Object(c.jsx)("i",{className:"far fa-times-circle close-icon",onClick:function(){f(!1)},"data-dismiss":"modal"})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("div",{className:"card d-none",children:[Object(c.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"From\xa0:"}),Object(c.jsx)("input",{type:"email",name:"emailFrom",style:{fontSize:"1rem"},defaultValue:null===g||void 0===g?void 0:g.emailFrom,readOnly:!0})]}),Object(c.jsxs)("div",{className:"card d-none",children:[Object(c.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"To\xa0:"}),Object(c.jsx)("input",{type:"email",name:"emailTo",style:{fontSize:"1rem"},defaultValue:null===g||void 0===g?void 0:g.emailTo,readOnly:!0})]}),Object(c.jsxs)("div",{className:"card",style:{padding:"12px 20px"},children:[Object(c.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"Subject\xa0:"}),Object(c.jsx)("input",{type:"text",name:"emailSubject",style:{fontSize:"1rem"},defaultValue:null===g||void 0===g?void 0:g.emailSubject,readOnly:!0})]}),Object(c.jsx)("div",{className:"card",style:{minWidth:"100%",padding:"20px"},children:Object(c.jsx)("textarea",{name:"emailBody",style:{fontSize:".850rem",minWidth:"100%",minHeight:"400px"},defaultValue:null===g||void 0===g?void 0:g.emailBody,readOnly:!0})})]})]})})]})}},312:function(e,i,t){"use strict";var l=t(30),a=t(1),s=t(24),n=t(86),d=t.n(n),c=t(89),o=t(269),r=t(0);i.a=function(e){var i,t,n,u,b=Object(s.a)(),m=Object(a.useState)(!1),v=Object(l.a)(m,2),j=v[0],p=v[1],x=Object(a.useState)(),h=Object(l.a)(x,2),f=h[0],O=h[1],N=function(e){b(Object(o.h)({apiPayloadRequest:{type:"PROFILE",id:e},callback:function(e){var i;O(null===(i=JSON.parse(e))||void 0===i?void 0:i.programs),p(!0)}}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"univ-sub-item d-flex justify-content-between align-items-center",style:{padding:15},children:[Object(r.jsxs)("div",{className:"sub-type-container d-flex",children:[Object(r.jsx)("i",{className:"far fa-address-card icon"}),Object(r.jsx)("p",{className:"sub-label",style:{fontWeight:"bold"},children:"Profile"})]}),Object(r.jsx)("div",{className:"vertical-border"}),Object(r.jsxs)("div",{className:"name-address d-flex flex-column align-items-start",children:[Object(r.jsx)("p",{className:"title",children:"JNTU University"}),""!==(null===e||void 0===e||null===(i=e.item)||void 0===i||null===(t=i.location)||void 0===t?void 0:t.trim())&&Object(r.jsxs)("p",{className:"sub-title",children:[Object(r.jsx)("i",{className:"fas fa-map-marker-alt"})," Hyderabad"]})]}),Object(r.jsx)("div",{className:"vertical-border"}),Object(r.jsx)("div",{className:"sub-item-container d-flex justify-content-around align-items-center",children:Object(r.jsx)("p",{className:"sub-title",children:null===e||void 0===e||null===(n=e.item)||void 0===n||null===(u=n.info)||void 0===u?void 0:u.PublishedData})}),Object(r.jsx)("div",{className:"vertical-border"}),Object(r.jsx)("button",{type:"button",className:"view-info-btn btn d-flex justify-content-around align-items-center",style:{height:"20px",maxWidth:"100px",fontSize:".600rem",borderRadius:"4px"},onClick:function(){var i,t;if(null===e||void 0===e||null===(i=e.item)||void 0===i?void 0:i.isSubscribed)N(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.publishID);else if(null===e||void 0===e?void 0:e.getDetails){var l,a,s;N((null===e||void 0===e||null===(l=e.item)||void 0===l?void 0:l.publishID)?null===e||void 0===e||null===(a=e.item)||void 0===a?void 0:a.publishID:null===e||void 0===e||null===(s=e.item)||void 0===s?void 0:s.publishId)}else(null===e||void 0===e?void 0:e.subscribeHandler)&&e.subscribeHandler()},children:"Details"})]},null===e||void 0===e?void 0:e.index),j&&Object(r.jsx)(c.a,{show:j,modalStyles:{minWidth:"70%"},children:Object(r.jsxs)("div",{className:"mail-modal",children:[Object(r.jsxs)("div",{className:"modal-header d-block",children:[Object(r.jsx)("span",{className:"modal-title",style:{fontSize:"1.1rem",padding:6},children:"Profile Publish of Jntu University"}),Object(r.jsx)("i",{className:"far fa-times-circle close-icon",onClick:function(){p(!1)},"data-dismiss":"modal"})]}),Object(r.jsxs)("div",{className:"modal-body d-flex flex-column align-items-center pb-5",children:[Object(r.jsx)("div",{className:"circle-block d-flex justify-content-center align-items-center m-3",style:{height:"70px",width:"70px",borderRadius:"50%",backgroundColor:"rgba(135, 139, 166, 0.31)"},children:Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)("i",{className:"fas fa-university",style:{color:"#253AA3",fontSize:"2rem"}})})}),Object(r.jsx)("p",{style:{fontWeight:"bolder",fontSize:".900rem"},className:"mb-2",children:"PUBLISH REVIEW"}),Object(r.jsx)("div",{style:{backgroundColor:"rgba(135, 139, 166, 0.31)",padding:"10px"},className:"w-full text-center",children:Object(r.jsx)("p",{children:"Branches Offered"})}),(null===f||void 0===f?void 0:f.length)?f.map((function(e){return Object(r.jsx)("div",{style:{padding:"12px",width:"100%"},children:Object(r.jsxs)("div",{style:{padding:"6px",border:"1px solid #cacaca",borderRadius:"3px"},className:"w-full d-flex justify-content-between flex-wrap align-items-center",children:[Object(r.jsx)("div",{className:"job-icon d-flex justify-content-center align-items-center",style:{backgroundColor:"#20BDC9",padding:"6px",color:"white",borderRadius:"6px",fontSize:"1rem"},children:Object(r.jsx)("i",{className:"fas fa-cube"})}),Object(r.jsx)("p",{style:{fontSize:".800rem",maxWidth:"200px"},className:"text-ellipsis px-2",children:null===e||void 0===e?void 0:e.programID}),Object(r.jsx)("p",{style:{fontSize:".800rem",maxWidth:"200px"},className:"text-ellipsis px-2",children:null===e||void 0===e?void 0:e.programName}),Object(r.jsxs)("p",{style:{fontSize:".800rem",maxWidth:"200px"},className:"text-ellipsis px-2",children:["Start Date - ",d()(null===e||void 0===e?void 0:e.startDate).format("DD-MMM-YYYY")]}),Object(r.jsxs)("p",{style:{fontSize:".800rem",maxWidth:"200px"},className:"text-ellipsis px-2",children:["End Date - ",d()(null===e||void 0===e?void 0:e.endDate).format("DD-MM-YYYY")]})]})})})):"No information found!"]})]})})]})}}}]);