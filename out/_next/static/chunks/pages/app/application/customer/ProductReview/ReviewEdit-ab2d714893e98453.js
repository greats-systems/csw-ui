(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2961],{18972:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var a=i(63366),n=i(87462),r=i(67294),o=i(86010),s=i(94780),l=i(41796),d=i(90948),c=i(71657),u=i(59773),p=i(49990),v=i(58974),m=i(51705),h=i(35097),b=i(84592),f=i(26336),g=i(34867);function x(e){return(0,g.Z)("MuiMenuItem",e)}var Z=(0,i(1588).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=i(85893);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.dense&&t.dense,i.divider&&t.divider,!i.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${f.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${f.Z.inset}`]:{paddingLeft:36},[`& .${b.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.Z.root} svg`]:{fontSize:"1.25rem"}}))));var j=r.forwardRef((function(e,t){const i=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:p=!1,divider:h=!1,disableGutters:b=!1,focusVisibleClassName:f,role:g="menuitem",tabIndex:Z}=i,j=(0,a.Z)(i,w),$=r.useContext(u.Z),k={dense:p||$.dense||!1,disableGutters:b},O=r.useRef(null);(0,v.Z)((()=>{l&&O.current&&O.current.focus()}),[l]);const P=(0,n.Z)({},i,{dense:k.dense,divider:h,disableGutters:b}),S=(e=>{const{disabled:t,dense:i,divider:a,disableGutters:r,selected:o,classes:l}=e,d={root:["root",i&&"dense",t&&"disabled",!r&&"gutters",a&&"divider",o&&"selected"]},c=(0,s.Z)(d,x,l);return(0,n.Z)({},l,c)})(i),_=(0,m.Z)(O,t);let I;return i.disabled||(I=void 0!==Z?Z:-1),(0,y.jsx)(u.Z.Provider,{value:k,children:(0,y.jsx)(C,(0,n.Z)({ref:_,role:g,tabIndex:I,component:d,focusVisibleClassName:(0,o.Z)(S.focusVisible,f)},j,{ownerState:P,classes:S}))})}))},13113:function(e,t){"use strict";t.Z={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},82162:function(e,t,i){"use strict";i.r(t);var a=i(67294),n=i(64666),r=i(37645),o=i(6514),s=i(86886),l=i(50135),d=i(15861),c=i(91440),u=i(18972),p=i(31425),v=i(11057),m=i(49514),h=i(62055),b=i(85893),f=[{value:"1",label:"Published"},{value:"2",label:"Pending"},{value:"3",label:"confirm"}];t.default=function(e){var t=e.open,i=e.handleCloseDialog,g=(0,a.useState)("1"),x=g[0],Z=g[1],y=(0,a.useState)(2),w=y[0],C=y[1];return(0,b.jsx)(n.Z,{open:t,onClose:i,sx:{"&>div:nth-of-type(3)":{"&>div":{maxWidth:400}}},children:t&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.Z,{children:"Edit Review"}),(0,b.jsx)(o.Z,{children:(0,b.jsxs)(s.ZP,{container:!0,spacing:m.dv,sx:{my:0},children:[(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{id:"outlined-basic-review-product",fullWidth:!0,label:"Product ",defaultValue:"Apple Watch Series 4"})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{id:"outlined-basic-review-author",fullWidth:!0,label:"Author ",defaultValue:"Joseph William"})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{id:"outlined-basic-review",fullWidth:!0,multiline:!0,rows:4,label:"Text of review",defaultValue:"If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."})}),(0,b.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,b.jsx)(d.Z,{align:"left",variant:"body2",children:"Rating"}),(0,b.jsx)(c.Z,{name:"simple-controlled",value:w,precision:.5,onChange:function(e,t){C(t)}})]}),(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{id:"standard-select-currency",select:!0,label:"Status",value:x,fullWidth:!0,onChange:function(e){Z(e.target.value)},children:f.map((function(e){return(0,b.jsx)(u.Z,{value:e.value,children:e.label},e.value)}))})})]})}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(h.Z,{children:(0,b.jsx)(v.Z,{variant:"contained",children:"Create"})}),(0,b.jsx)(v.Z,{variant:"text",onClick:i,children:"Close"})]})]})})}},63446:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/application/customer/ProductReview/ReviewEdit",function(){return i(82162)}])}},function(e){e.O(0,[9803,9774,2888,179],(function(){return t=63446,e(e.s=t);var t}));var t=e.O();_N_E=t}]);