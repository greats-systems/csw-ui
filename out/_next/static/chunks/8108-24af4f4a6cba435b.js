"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8108],{9610:function(e,t,r){var n=r(95318);t.Z=void 0;var i=n(r(64938)),o=r(85893),a=(0,i.default)([(0,o.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"},"0"),(0,o.jsx)("path",{d:"M4 5.01h16V8H4z",opacity:".3"},"1")],"CalendarTodayTwoTone");t.Z=a},38544:function(e,t,r){var n=r(95318);t.Z=void 0;var i=n(r(64938)),o=r(85893),a=(0,i.default)([(0,o.jsx)("circle",{cx:"9",cy:"8",r:"2",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2z",opacity:".3"},"1"),(0,o.jsx)("path",{d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"},"2")],"PeopleAltTwoTone");t.Z=a},83965:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(67294),a=r(86010),s=r(94780),c=r(71657),l=r(90948),d=r(34867);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,r(1588).Z)("MuiCardMedia",["root","media","img"]);var p=r(85893);const m=["children","className","component","image","src","style"],f=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:n,isImageComponent:i}=r;return[t.root,n&&t.media,i&&t.img]}})((({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),h=["video","audio","picture","iframe","img"],g=["picture","img"];var x=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:l,component:d="div",image:x,src:b,style:j}=r,v=(0,n.Z)(r,m),y=-1!==h.indexOf(d),Z=!y&&x?(0,i.Z)({backgroundImage:`url("${x}")`},j):j,k=(0,i.Z)({},r,{component:d,isMediaComponent:y,isImageComponent:-1!==g.indexOf(d)}),O=(e=>{const{classes:t,isMediaComponent:r,isImageComponent:n}=e,i={root:["root",r&&"media",n&&"img"]};return(0,s.Z)(i,u,t)})(k);return(0,p.jsx)(f,(0,i.Z)({className:(0,a.Z)(O.root,l),as:d,role:!y&&x?"img":void 0,ref:t,style:Z,ownerState:k,src:y?x||b:void 0},v,{children:o}))}))},22278:function(e,t,r){var n=r(59499),i=r(4730),o=r(67294),a=r(2734),s=r(66242),c=r(78445),l=r(15861),d=r(67720),u=r(44267),p=r(85893),m=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=o.forwardRef((function(e,t){var r=e.children,n=e.content,o=e.contentClass,f=e.darkTitle,g=e.secondary,x=e.sx,b=void 0===x?{}:x,j=e.contentSX,v=void 0===j?{}:j,y=e.title,Z=(0,i.Z)(e,m),k=(0,a.Z)();return(0,p.jsxs)(s.Z,h(h({ref:t,sx:h({border:"1px solid",borderColor:"dark"===k.palette.mode?k.palette.dark.light+15:k.palette.primary.light,":hover":{boxShadow:"dark"===k.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},b)},Z),{},{children:[!f&&y&&(0,p.jsx)(c.Z,{sx:{p:2.5},title:(0,p.jsx)(l.Z,{variant:"h5",children:y}),action:g}),f&&y&&(0,p.jsx)(c.Z,{sx:{p:2.5},title:(0,p.jsx)(l.Z,{variant:"h4",children:y}),action:g}),y&&(0,p.jsx)(d.Z,{sx:{opacity:1,borderColor:"dark"===k.palette.mode?k.palette.dark.light+15:k.palette.primary.light}}),n&&(0,p.jsx)(u.Z,{sx:h({p:2.5},v),className:o||"",children:r}),!n&&r]}))}));g.defaultProps={content:!0},t.Z=g},80569:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(67294),i=r(86886),o=r(50135),a=r(11057),s=r(26447),c=r(93946),l=r(83946),d=r(77349),u=r(13882);function p(e,t){(0,u.Z)(2,arguments);var r=(0,l.Z)(t);return(0,d.Z)(e,-r)}var m=r(11640);function f(e,t){(0,u.Z)(2,arguments);var r=(0,l.Z)(t);return(0,m.Z)(e,-r)}function h(e,t){if((0,u.Z)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var r=t.years?(0,l.Z)(t.years):0,n=t.months?(0,l.Z)(t.months):0,i=t.weeks?(0,l.Z)(t.weeks):0,o=t.days?(0,l.Z)(t.days):0,a=t.hours?(0,l.Z)(t.hours):0,s=t.minutes?(0,l.Z)(t.minutes):0,c=t.seconds?(0,l.Z)(t.seconds):0,d=f(e,n+12*r),m=p(d,o+7*i),h=s+60*a,g=c+60*h,x=1e3*g,b=new Date(m.getTime()-x);return b}var g=r(20714),x=r(12686),b=r(22278),j=r(83633),v=r(38617),y=r(9610),Z=r(38544),k=r(50594),O=r(85893),w=new g.Chance,C=function(e){var t=e.columnId,r=(0,j.I0)(),l=(0,n.useState)(!1),d=l[0],u=l[1],p=(0,j.v9)((function(e){return e.kanban})),m=p.columns,f=p.items,g=p.userStory,C=function(){u((function(e){return!e}))},P=(0,n.useState)(""),S=P[0],z=P[1],I=(0,n.useState)(!1),M=I[0],D=I[1],R=function(){if(S.length>0){var e={id:"".concat(w.integer({min:1e3,max:9999})),title:S,dueDate:h(new Date,{days:0,hours:1,minutes:45}),image:!1,assign:"",description:"",priority:"low",attachments:[]};r((0,v.jX)(t,m,e,f,"0",g)),r((0,x.ss)({open:!0,message:"Task Add successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})),C(),z("")}else D(!0)};return(0,O.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:1,sx:{marginTop:1},children:[d&&(0,O.jsx)(i.ZP,{item:!0,xs:12,children:(0,O.jsx)(b.Z,{contentSX:{p:2,transition:"background-color 0.25s ease-out"},children:(0,O.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:.5,children:[(0,O.jsx)(i.ZP,{item:!0,xs:12,children:(0,O.jsx)(o.Z,{fullWidth:!0,placeholder:"Add Task",value:S,onChange:function(e){var t=e.target.value;z(t),t.length<=0?D(!0):D(!1)},sx:{mb:2,"& input":{bgcolor:"transparent",p:0,borderRadius:"0px"},"& fieldset":{display:"none"},"& .MuiFormHelperText-root":{ml:0},"& .MuiOutlinedInput-root":{bgcolor:"transparent"}},onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||R()},helperText:M?"Task title is required.":"",error:M})}),(0,O.jsx)(i.ZP,{item:!0,children:(0,O.jsx)(a.Z,{variant:"text",size:"small",color:"primary",sx:{p:.5,minWidth:32},children:(0,O.jsx)(Z.Z,{fontSize:"small"})})}),(0,O.jsx)(i.ZP,{item:!0,children:(0,O.jsx)(a.Z,{variant:"text",size:"small",color:"primary",sx:{p:.5,minWidth:32},children:(0,O.jsx)(y.Z,{fontSize:"small"})})}),(0,O.jsx)(i.ZP,{item:!0,xs:!0,zeroMinWidth:!0}),(0,O.jsx)(i.ZP,{item:!0,children:(0,O.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:.5,children:[(0,O.jsx)(c.Z,{size:"small",color:"error",onClick:C,children:(0,O.jsx)(k.Z,{fontSize:"small"})}),(0,O.jsx)(a.Z,{variant:"contained",color:"primary",onClick:R,size:"small",children:"Add"})]})})]})})}),!d&&(0,O.jsx)(i.ZP,{item:!0,xs:12,children:(0,O.jsx)(a.Z,{variant:"text",color:"primary",sx:{width:"100%"},onClick:C,children:"Add Task"})})]})}},50753:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(64666),i=r(37645),o=r(6514),a=r(58951),s=r(31425),c=r(11057),l=r(85893);function d(e){var t=e.title,r=e.open,d=e.handleClose;return(0,l.jsx)(n.Z,{open:r,onClose:function(){return d(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Z,{id:"column-delete-title",children:[t," - Are you sure you want to delete?"]}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(a.Z,{id:"column-delete-description",children:"By deleting column, all task inside that column will also be deleted."})}),(0,l.jsxs)(s.Z,{sx:{mr:2},children:[(0,l.jsx)(c.Z,{onClick:function(){return d(!1)},color:"error",children:"Cancel"}),(0,l.jsx)(c.Z,{variant:"contained",size:"small",onClick:function(){return d(!0)},autoFocus:!0,children:"Delete"})]})]})})}},18108:function(e,t,r){r.r(t);var n=r(59499),i=r(67294),o=r(2734),a=r(86886),s=r(93946),c=r(15948),l=r(20132),d=r(16231),u=r(32115),p=r(80569),m=r(50753),f=r(49514),h=r(12686),g=r(83633),x=r(38617),b=r(52521),j=r(85893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e,t,r,n){var i="dark"===r.palette.mode?r.palette.background.default:r.palette.primary.light;return y({minWidth:250,border:"1px solid",borderColor:"dark"===r.palette.mode?r.palette.background.default:r.palette.primary[200]+75,backgroundColor:e?r.palette.grey[50]:i,borderRadius:n,userSelect:"none",margin:"0 ".concat(16,"px 0 0"),height:"100%"},t)},k=function(e,t,r){var n="dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,i="dark"===t.palette.mode?t.palette.text.disabled:t.palette.primary[200];return{background:e?i:n,padding:"8px 16px 14px",width:"auto",borderRadius:r}};t.default=function(e){var t=e.column,r=e.index,n=(0,o.Z)(),v=(0,g.I0)(),O=(0,l.Z)().borderRadius,w=(0,g.v9)((function(e){return e.kanban})),C=w.items,P=w.columns,S=w.columnsOrder,z=t&&t.itemIds&&t.itemIds.map((function(e){return C.filter((function(t){return t.id===e}))[0]})),I=(0,i.useState)(!1),M=I[0],D=I[1],R=function(){D(!0)},T=function(e){D(!1),e&&(v((0,x.eA)(t.id,S,P)),v((0,h.ss)({open:!0,message:"Column deleted successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})))};return(0,j.jsx)(c._l,{draggableId:t.id,index:r,children:function(e,r){return(0,j.jsx)("div",y(y(y({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:Z(r.isDragging,e.draggableProps.style,n,"".concat(O,"px")),children:(0,j.jsx)(c.bK,{droppableId:t.id,type:"item",children:function(e,r){return(0,j.jsxs)("div",y(y({ref:e.innerRef},e.droppableProps),{},{style:k(r.isDraggingOver,n,"".concat(O,"px")),children:[(0,j.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:f.dv,children:[(0,j.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(d.default,{column:t})}),(0,j.jsxs)(a.ZP,{item:!0,sx:{mb:1.5},children:[(0,j.jsx)(s.Z,{onClick:R,size:"large",children:(0,j.jsx)(b.Z,{fontSize:"small","aria-controls":"menu-simple-card","aria-haspopup":"true"})}),M&&(0,j.jsx)(m.default,{title:t.title,open:M,handleClose:T})]})]}),z.map((function(e,t){return(0,j.jsx)(u.default,{item:e,index:t},t)})),e.placeholder,(0,j.jsx)(p.default,{columnId:t.id})]}))}})}))}})}},16231:function(e,t,r){r.r(t);var n=r(2734),i=r(57709),o=r(83633),a=r(38617),s=r(85893);t.default=function(e){var t=e.column,r=(0,n.Z)(),c=(0,o.I0)(),l=(0,o.v9)((function(e){return e.kanban})).columns;return(0,s.jsx)(i.Z,{fullWidth:!0,value:t.title,onChange:function(e){c((0,a.L9)({id:t.id,title:e.target.value,itemIds:t.itemIds},l))},sx:{mb:1.5,"& input:focus":{bgcolor:"dark"===r.palette.mode?r.palette.dark[800]:r.palette.grey[50]},"& input:hover":{bgcolor:"dark"===r.palette.mode?r.palette.dark[800]:r.palette.grey[50]},"& input:hover + fieldset":{display:"block"},"&, & input":{bgcolor:"transparent"},"& fieldset":{display:"none"},"& input:focus + fieldset":{display:"block"}}})}},32115:function(e,t,r){r.r(t);var n=r(59499),i=r(67294),o=r(2734),a=r(26447),s=r(15861),c=r(49990),l=r(93946),d=r(38333),u=r(18972),p=r(21023),m=r(50122),f=r(83965),h=r(15948),g=r(20132),x=r(67826),b=r(67265),j=r(12686),v=r(83633),y=r(38617),Z=r(82864),k=r(88126),O=r(85893);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e,t,r,n){var i="dark"===r.palette.mode?r.palette.background.paper+90:r.palette.grey[50];return C({userSelect:"none",margin:"0 0 ".concat(8,"px 0"),padding:16,border:"1px solid",borderColor:"dark"===r.palette.mode?r.palette.background.default:r.palette.primary[200]+75,backgroundColor:e?i:r.palette.background.paper,borderRadius:n},t)};t.default=function(e){var t=e.item,r=e.index,n=(0,o.Z)(),w=(0,v.I0)(),S=t&&t.image&&"".concat("/assets/images/profile","/").concat(t.image),z=(0,g.Z)().borderRadius,I=(0,v.v9)((function(e){return e.kanban})),M=I.userStory,D=I.items,R=I.columns,T=M.filter((function(e){return e.itemIds.filter((function(e){return e===t.id}))[0]}))[0],E=function(e){w((0,y.Gh)(e))},H=(0,i.useState)(null),A=H[0],N=H[1],W=function(e){N(e.currentTarget)},V=function(){N(null)},F=(0,i.useState)(!1),_=F[0],X=F[1],U=function(e){X(!1),e&&(w((0,y.wz)(t.id,D,R,M)),w((0,j.ss)({open:!0,message:"Task Deleted successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})))},B=(0,i.useState)(!1),K=B[0],q=B[1],G=function(){q((function(e){return!e}))},L=function(){q((function(e){return!e}))};return(0,O.jsx)(O.Fragment,{children:t&&(0,O.jsx)(h._l,{draggableId:t.id,index:r,children:function(e,r){return(0,O.jsxs)("div",C(C(C({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:P(r.isDragging,e.draggableProps.style,n,"".concat(z,"px")),children:[(0,O.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:T?-.75:0},children:[(0,O.jsx)(s.Z,{onClick:function(){return E(t.id)},variant:"subtitle1",sx:{display:"inline-block",width:"calc(100% - 34px)",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",verticalAlign:"middle",cursor:"pointer"},children:t.title}),(0,O.jsx)(c.Z,{sx:{borderRadius:"12px"},onClick:W,"aria-controls":"menu-comment","aria-haspopup":"true",children:(0,O.jsx)(l.Z,{component:"span",size:"small",disableRipple:!0,children:(0,O.jsx)(Z.Z,{fontSize:"inherit"})})}),(0,O.jsxs)(d.Z,{id:"menu-comment",anchorEl:A,keepMounted:!0,open:Boolean(A),onClose:V,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,O.jsx)(u.Z,{onClick:function(){V(),E(t.id)},children:"Edit"}),(0,O.jsx)(u.Z,{onClick:function(){V(),X(!0)},children:"Delete"})]}),_&&(0,O.jsx)(b.default,{title:t.title,open:_,handleClose:U})]}),T&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(a.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,O.jsx)(p.Z,{title:"User Story",children:(0,O.jsx)(k.Z,{color:"secondary",sx:{fontSize:"0.875rem"}})}),(0,O.jsx)(p.Z,{title:T.title,children:(0,O.jsxs)(m.Z,{variant:"caption",color:"secondary",underline:"hover",onClick:L,sx:{cursor:"pointer",pt:.5},children:["User Story #",T.id]})})]}),K&&(0,O.jsx)(x.default,{story:T,open:K,handleDrawerOpen:G})]}),S&&(0,O.jsx)(f.Z,{component:"img",image:S,sx:{width:"100%",borderRadius:1,mt:1.5},title:"Slider5 image"})]}))}},t.id)})}}}]);