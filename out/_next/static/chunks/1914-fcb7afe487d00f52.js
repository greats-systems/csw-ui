"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1914],{34519:function(e,t,n){n.r(t);var i=n(67294),r=n(2734),s=n(87357),a=n(86886),l=n(50135),o=n(11057),c=n(20714),d=n(20132),u=n(12686),m=n(83633),h=n(38617),x=n(94905),p=n(57677),j=n(75457),Z=n(85893),f=new c.Chance;t.default=function(e){var t=e.itemId,n=(0,r.Z)(),c=(0,m.I0)(),g=(0,d.Z)().borderRadius,v=(0,m.v9)((function(e){return e.kanban})),P=v.comments,b=v.items,y=(0,i.useState)(""),I=y[0],w=y[1],C=(0,i.useState)(!1),k=C[0],O=C[1],D=function(){if(I.length>0){var e={id:"".concat(f.integer({min:1e3,max:9999})),comment:I,profileId:"profile-1"};c((0,h.$B)(t,e,b,P)),c((0,u.ss)({open:!0,message:"Comment Add successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})),w("")}else O(!0)};return(0,Z.jsx)(s.Z,{sx:{p:2.5,border:"1px solid",borderColor:"dark"===n.palette.mode?n.palette.background.default:n.palette.primary[200]+75,borderRadius:"".concat(g,"px")},children:(0,Z.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:.5,children:[(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{fullWidth:!0,placeholder:"Add Comment",value:I,onChange:function(e){var t=e.target.value;w(t),t.length<=0?O(!0):O(!1)},sx:{mb:2,"& input":{bgcolor:"transparent",p:0,borderRadius:"0px"},"& fieldset":{display:"none"},"& .MuiFormHelperText-root":{ml:0},"& .MuiOutlinedInput-root":{bgcolor:"transparent"}},onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||D()},helperText:k?"Comment is required.":"",error:k})}),(0,Z.jsx)(a.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"text",color:"primary",sx:{p:.5,minWidth:32},children:(0,Z.jsx)(x.Z,{})})}),(0,Z.jsx)(a.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"text",color:"primary",sx:{p:.5,minWidth:32},children:(0,Z.jsx)(p.Z,{})})}),(0,Z.jsx)(a.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"text",color:"primary",sx:{p:.5,minWidth:32},children:(0,Z.jsx)(j.Z,{})})}),(0,Z.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0}),(0,Z.jsx)(a.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"contained",color:"primary",onClick:D,children:"Comment"})})]})})}},67265:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var i=n(64666),r=n(37645),s=n(31425),a=n(11057),l=n(85893);function o(e){var t=e.title,n=e.open,o=e.handleClose;return(0,l.jsx)(i.Z,{open:n,onClose:function(){return o(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"item-delete-title","aria-describedby":"item-delete-description",children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Z,{id:"item-delete-title",children:[t," - Are you sure you want to delete this item?"]}),(0,l.jsxs)(s.Z,{sx:{mr:2},children:[(0,l.jsx)(a.Z,{onClick:function(){return o(!1)},color:"error",children:"Cancel"}),(0,l.jsx)(a.Z,{variant:"contained",size:"small",onClick:function(){return o(!0)},autoFocus:!0,children:"Delete"})]})]})})}},30061:function(e,t,n){n.r(t);var i=n(59499),r=n(25675),s=n(86886),a=n(50135),l=n(15861),o=n(5306),c=n(87357),d=n(94054),u=n(68061),m=n(50480),h=n(36872),x=n(18360),p=n(18972),j=n(11057),Z=n(25613),f=n(52359),g=n(87664),v=n(74231),P=n(82175),b=n(74026),y=n(62055),I=n(12686),w=n(83633),C=n(38617),k=n(85893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=v.Ry({title:v.Z_().required("Task title is required"),dueDate:v.hT()});t.default=function(e){var t=e.item,n=e.profiles,i=e.userStory,v=e.columns,O=e.handleDrawerOpen,W=(0,w.I0)(),M=(0,w.v9)((function(e){return e.kanban})).items,z=i.filter((function(e){return e.itemIds.filter((function(e){return e===t.id}))[0]}))[0],T=v.filter((function(e){return e.itemIds.filter((function(e){return e===t.id}))[0]}))[0],E=(0,P.TA)({enableReinitialize:!0,initialValues:{id:t.id,title:t.title,assign:t.assign,priority:t.priority,dueDate:t.dueDate?new Date(t.dueDate):new Date,description:t.description,commentIds:t.commentIds,image:t.image,storyId:z?z.id:"",columnId:T?T.id:"",attachments:t.attachments},validationSchema:S,onSubmit:function(e){var t={id:e.id,title:e.title,assign:e.assign,priority:e.priority,dueDate:e.dueDate?new Date(e.dueDate):new Date,description:e.description,commentIds:e.commentIds,image:e.image,attachments:e.attachments};W((0,C.Ob)(e.columnId,v,t,M,e.storyId,i)),W((0,I.ss)({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})),O()}});return(0,k.jsx)("form",{onSubmit:E.handleSubmit,children:(0,k.jsx)(f._,{dateAdapter:Z.Z,children:(0,k.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(a.Z,{fullWidth:!0,id:"title",name:"title",label:"Title",value:E.values.title,onChange:E.handleChange,error:E.touched.title&&Boolean(E.errors.title),helperText:E.touched.title&&E.errors.title})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"Assign to:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(s.ZP,{container:!0,justifyContent:"flex-start",children:(0,k.jsx)(o.Z,{id:"assign",value:n.find((function(e){return e.id===E.values.assign})),onChange:function(e,t){E.setFieldValue("assign",t.id)},options:n,fullWidth:!0,autoHighlight:!0,getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e){return e.id===E.values.assign},renderOption:function(e,t){return(0,k.jsxs)(c.Z,D(D({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[(0,k.jsx)(r.default,{loading:"lazy",width:"20",height:"20",src:"".concat("/assets/images/users","/").concat(t.avatar),alt:""}),t.name]}))},renderInput:function(e){return(0,k.jsx)(a.Z,D(D({},e),{},{name:"assign",label:"Choose a assignee",inputProps:D(D({},e.inputProps),{},{autoComplete:"new-password"})}))}})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"Prioritize:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(d.Z,{children:(0,k.jsxs)(u.Z,{row:!0,"aria-label":"color",value:E.values.priority,onChange:E.handleChange,name:"priority",id:"priority",children:[(0,k.jsx)(m.Z,{value:"low",control:(0,k.jsx)(h.Z,{color:"primary",sx:{color:"primary.main"}}),label:"Low"}),(0,k.jsx)(m.Z,{value:"medium",control:(0,k.jsx)(h.Z,{color:"warning",sx:{color:"warning.main"}}),label:"Medium"}),(0,k.jsx)(m.Z,{value:"high",control:(0,k.jsx)(h.Z,{color:"error",sx:{color:"error.main"}}),label:"High"})]})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"Due date:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(g.$,{label:"Due Date",value:E.values.dueDate,inputFormat:"dd/MM/yyyy",onChange:function(e){E.setFieldValue("dueDate",e)},renderInput:function(e){return(0,k.jsx)(a.Z,D({fullWidth:!0},e))}})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"Description:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(a.Z,{fullWidth:!0,id:"description",name:"description",multiline:!0,rows:3,value:E.values.description,onChange:E.handleChange,error:E.touched.description&&Boolean(E.errors.description),helperText:E.touched.description&&E.errors.description})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"User Story:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(d.Z,{fullWidth:!0,children:(0,k.jsx)(x.Z,{id:"storyId",name:"storyId",displayEmpty:!0,value:E.values.storyId,onChange:E.handleChange,inputProps:{"aria-label":"Without label"},children:i.map((function(e,t){return(0,k.jsxs)(p.Z,{value:e.id,children:[e.id," - ",e.title]},t)}))})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"State:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(d.Z,{fullWidth:!0,children:(0,k.jsx)(x.Z,{id:"columnId",name:"columnId",displayEmpty:!0,value:E.values.columnId,onChange:E.handleChange,inputProps:{"aria-label":"Without label"},children:v.map((function(e,t){return(0,k.jsx)(p.Z,{value:e.id,children:e.title},t)}))})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(l.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(b.default,{attachments:E.values.attachments})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{children:(0,k.jsx)(j.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Save"})})})]})})})}},12253:function(e,t,n){n.r(t);var i=n(2734),r=n(66242),s=n(86886),a=n(15861),l=n(74202),o=n(82019),c=n(85893);t.default=function(e){var t=e.comment,n=e.profile,d=(0,i.Z)();return(0,c.jsx)(r.Z,{sx:{background:"dark"===d.palette.mode?d.palette.dark.main:d.palette.grey[50],p:1.5,mt:1.25},children:(0,c.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,c.jsx)(s.ZP,{item:!0,xs:12,children:(0,c.jsxs)(s.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,c.jsx)(s.ZP,{item:!0,children:(0,c.jsx)(l.Z,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:n&&n.avatar&&"".concat("/assets/images/users","/").concat(n.avatar)})}),(0,c.jsx)(s.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,c.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,c.jsx)(s.ZP,{item:!0,children:(0,c.jsx)(a.Z,{align:"left",variant:"h5",component:"div",children:n.name})}),(0,c.jsx)(s.ZP,{item:!0,children:(0,c.jsxs)(a.Z,{align:"left",variant:"caption",children:[(0,c.jsx)(o.Z,{sx:{width:10,height:10,opacity:.5,my:0,mx:.625}}),n.time]})})]})})]})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:1.5}},children:(0,c.jsx)(a.Z,{align:"left",variant:"body2",children:t.comment})})]})})}},61914:function(e,t,n){n.r(t);var i=n(27812),r=n(67294),s=n(58826),a=n(87357),l=n(86886),o=n(26447),c=n(11057),d=n(15861),u=n(67720),m=n(51964),h=n.n(m),x=n(12253),p=n(30061),j=n(34519),Z=n(67265),f=n(12686),g=n(83633),v=n(38617),P=n(52521),b=n(53592),y=n(85893);t.default=function(){var e,t=(0,y.jsx)(y.Fragment,{}),n=(0,g.I0)(),m=(0,g.v9)((function(e){return e.kanban})),I=m.columns,w=m.comments,C=m.profiles,k=m.items,O=m.selectedItem,D=m.userStory,S=(0,r.useState)(!1!==O),W=S[0],M=S[1],z=function(){M((function(e){return!e})),n((0,v.Gh)(!1))};(0,r.useEffect)((function(){!1!==O&&M(!0)}),[O]),!1!==O&&(e=k.filter((function(e){return e.id===O}))[0]).commentIds&&(t=(0,i.Z)(e.commentIds).reverse().map((function(e,t){var n=w.filter((function(t){return t.id===e}))[0],i=C.filter((function(e){return e.id===n.profileId}))[0];return(0,y.jsx)(x.default,{comment:n,profile:i},t)})));var T=(0,r.useState)(!1),E=T[0],F=T[1];return(0,y.jsx)(s.ZP,{sx:{ml:W?3:0,flexShrink:0,zIndex:1200,overflowX:"hidden",width:{xs:320,md:450},"& .MuiDrawer-paper":{height:"100vh",width:{xs:320,md:450},position:"fixed",border:"none",borderRadius:"0px"}},variant:"temporary",anchor:"right",open:W,ModalProps:{keepMounted:!0},onClose:z,children:W&&(0,y.jsxs)(y.Fragment,{children:[e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{sx:{p:3},children:(0,y.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:.5,justifyContent:"space-between",children:[(0,y.jsx)(l.ZP,{item:!0,sx:{width:"calc(100% - 50px)"},children:(0,y.jsxs)(o.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,y.jsx)(c.Z,{variant:"text",color:"error",sx:{p:.5,minWidth:32,display:{xs:"block",md:"none"}},onClick:z,children:(0,y.jsx)(b.Z,{})}),(0,y.jsx)(d.Z,{variant:"h4",sx:{display:"inline-block",width:"calc(100% - 34px)",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",verticalAlign:"middle"},children:e.title})]})}),(0,y.jsxs)(l.ZP,{item:!0,children:[(0,y.jsx)(c.Z,{variant:"text",color:"error",sx:{p:.5,minWidth:32},onClick:function(){return F(!0)},children:(0,y.jsx)(P.Z,{})}),(0,y.jsx)(Z.default,{title:e.title,open:E,handleClose:function(t){F(!1),t&&(z(),n((0,v.wz)(e.id,k,I,D)),n((0,f.ss)({open:!0,message:"Task Deleted successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})))}})]})]})}),(0,y.jsx)(u.Z,{}),(0,y.jsx)(h(),{component:"div",children:(0,y.jsx)(a.Z,{sx:{p:3},children:(0,y.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.default,{item:e,profiles:C,userStory:D,columns:I,handleDrawerOpen:z})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,children:t}),(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(j.default,{itemId:O})})]})})})]}),!e&&(0,y.jsx)(o.Z,{justifyContent:"center",alignItems:"center",sx:{height:"100vh"},children:(0,y.jsx)(d.Z,{variant:"h5",color:"error",children:"No item found"})})]})})}}}]);