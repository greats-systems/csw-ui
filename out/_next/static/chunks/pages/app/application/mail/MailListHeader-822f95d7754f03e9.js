(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2260],{23365:function(e,n,t){"use strict";var i=t(95318);n.Z=void 0;var a=i(t(64938)),o=t(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"}),"Height");n.Z=r},69750:function(e,n,t){"use strict";var i=t(95318);n.Z=void 0;var a=i(t(64938)),o=t(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}),"MenuRounded");n.Z=r},87135:function(e,n,t){"use strict";var i=t(95318);n.Z=void 0;var a=i(t(64938)),o=t(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHorizTwoTone");n.Z=r},42761:function(e,n,t){"use strict";var i=t(95318);n.Z=void 0;var a=i(t(64938)),o=t(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=r},31618:function(e,n,t){"use strict";const i=t(67294).createContext();n.Z=i},44063:function(e,n,t){"use strict";const i=t(67294).createContext();n.Z=i},98102:function(e,n,t){"use strict";var i=t(63366),a=t(87462),o=t(67294),r=t(86010),s=t(94780),l=t(41796),c=t(98216),d=t(31618),p=t(44063),g=t(71657),u=t(90948),h=t(89755),x=t(85893);const f=["align","className","component","padding","scope","size","sortDirection","variant"],Z=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`size${(0,c.Z)(t.size)}`],"normal"!==t.padding&&n[`padding${(0,c.Z)(t.padding)}`],"inherit"!==t.align&&n[`align${(0,c.Z)(t.align)}`],t.stickyHeader&&n.stickyHeader]}})((({theme:e,ownerState:n})=>(0,a.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===n.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===n.variant&&{color:e.palette.text.primary},"footer"===n.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===n.size&&{padding:"6px 16px",[`&.${h.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}))),m=o.forwardRef((function(e,n){const t=(0,g.Z)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:u,component:m,padding:v,scope:j,size:y,sortDirection:z,variant:C}=t,k=(0,i.Z)(t,f),w=o.useContext(d.Z),b=o.useContext(p.Z),P=b&&"head"===b.variant;let M;M=m||(P?"th":"td");let H=j;!H&&P&&(H="col");const S=C||b&&b.variant,T=(0,a.Z)({},t,{align:l,component:M,padding:v||(w&&w.padding?w.padding:"normal"),size:y||(w&&w.size?w.size:"medium"),sortDirection:z,stickyHeader:"head"===S&&w&&w.stickyHeader,variant:S}),_=(e=>{const{classes:n,variant:t,align:i,padding:a,size:o,stickyHeader:r}=e,l={root:["root",t,r&&"stickyHeader","inherit"!==i&&`align${(0,c.Z)(i)}`,"normal"!==a&&`padding${(0,c.Z)(a)}`,`size${(0,c.Z)(o)}`]};return(0,s.Z)(l,h.U,n)})(T);let R=null;return z&&(R="asc"===z?"ascending":"descending"),(0,x.jsx)(Z,(0,a.Z)({as:M,ref:n,className:(0,r.Z)(_.root,u),"aria-sort":R,scope:H,ownerState:T},k))}));n.Z=m},89755:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var i=t(34867);function a(e){return(0,i.Z)("MuiTableCell",e)}const o=(0,t(1588).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);n.Z=o},58466:function(e,n,t){"use strict";t.r(n);var i=t(67294),a=t(98396),o=t(86886),r=t(26447),s=t(93946),l=t(38333),c=t(18972),d=t(50135),p=t(87109),g=t(36125),u=t(69750),h=t(23365),x=t(87135),f=t(42761),Z=t(85893);n.default=function(e){var n=e.search,t=e.handleSearch,m=e.length,v=e.rowsPerPage,j=e.page,y=e.handleChangePage,z=e.handleChangeRowsPerPage,C=e.handleDrawerOpen,k=e.handleDenseTable,w=(0,a.Z)((function(e){return e.breakpoints.down("md")})),b=(0,i.useState)(null),P=b[0],M=b[1],H=function(){M(null)};return(0,Z.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(o.ZP,{item:!0,xs:!0,children:(0,Z.jsxs)(r.Z,{direction:"row",alignItems:"center",justifyContent:"flex-start",spacing:1.5,children:[(0,Z.jsx)(s.Z,{onClick:C,size:"small",children:(0,Z.jsx)(u.Z,{fontSize:"small"})}),(0,Z.jsx)(s.Z,{onClick:k,size:"small",children:(0,Z.jsx)(h.Z,{fontSize:"small"})}),(0,Z.jsx)(s.Z,{onClick:function(e){M(e.currentTarget)},size:"small",children:(0,Z.jsx)(x.Z,{fontSize:"small"})}),(0,Z.jsxs)(l.Z,{id:"simple-menu",anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:H,children:[(0,Z.jsx)(c.Z,{onClick:H,children:"Name"}),(0,Z.jsx)(c.Z,{onClick:H,children:"Date"}),(0,Z.jsx)(c.Z,{onClick:H,children:"Ratting"}),(0,Z.jsx)(c.Z,{onClick:H,children:"Unread"})]}),(0,Z.jsx)(d.Z,{sx:{display:{xs:"block",sm:"none"}},fullWidth:w,InputProps:{startAdornment:(0,Z.jsx)(p.Z,{position:"start",children:(0,Z.jsx)(f.Z,{fontSize:"small"})})},onChange:t,placeholder:"Search Mail",value:n,size:"small"})]})}),(0,Z.jsx)(o.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,Z.jsxs)(r.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1.5,children:[(0,Z.jsx)(d.Z,{InputProps:{startAdornment:(0,Z.jsx)(p.Z,{position:"start",children:(0,Z.jsx)(f.Z,{fontSize:"small"})})},onChange:t,placeholder:"Search Mail",value:n,size:"small"}),(0,Z.jsx)(g.Z,{sx:{"& .MuiToolbar-root":{pl:1}},rowsPerPageOptions:[],component:"div",count:m,rowsPerPage:v,page:j,onPageChange:y,onRowsPerPageChange:z})]})})]})}},97108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/application/mail/MailListHeader",function(){return t(58466)}])}},function(e){e.O(0,[6125,9774,2888,179],(function(){return n=97108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);