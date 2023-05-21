"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[804],{7950:function(n,e,a){a.d(e,{x:function(){return o}});var r,t=a(168),i=a(7691),s=a(5705),o=(0,i.ZP)(s.l0)(r||(r=(0,t.Z)(["\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 25px;\n"])))},4844:function(n,e,a){a.d(e,{t:function(){return i}});var r,t=a(168),i=a(7691).ZP.div(r||(r=(0,t.Z)(["\nheight: 38px;\n/* padding-bottom: 40px; */\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\ngap: 40px;\n"])))},9708:function(n,e,a){a.d(e,{x:function(){return i}});var r,t=a(168),i=a(7691).ZP.input(r||(r=(0,t.Z)(["\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 0 0 transparent;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n"])))},7872:function(n,e,a){a.d(e,{g:function(){return i}});var r,t=a(168),i=a(7691).ZP.label(r||(r=(0,t.Z)(["\nfont-weight: 700;\nfont-size: inherit;\nline-height: 1.5;\nwidth: 18%;\n\n"])))},474:function(n,e,a){a.d(e,{E:function(){return i}});var r,t=a(168),i=a(7691).ZP.div(r||(r=(0,t.Z)(["\n  /* position: relative; */\n  /* width: 100%; */\n  min-height: 100vh;\n  background-color: #fff;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n  margin-top: 30px;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 30px;\n  animation: pageAnime 1s ease 0s 1 normal forwards;\n"])))},756:function(n,e,a){a.d(e,{V:function(){return i}});var r,t=a(168),i=a(7691).ZP.h3(r||(r=(0,t.Z)(["\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 400;\n"])))},682:function(n,e,a){a.d(e,{$:function(){return i}});var r,t=a(168),i=a(7691).ZP.div(r||(r=(0,t.Z)(["\n  padding: 12px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n"])))},804:function(n,e,a){a.r(e);var r=a(1413),t=a(5861),i=a(4687),s=a.n(i),o=a(4844),l=a(9708),d=a(7872),u=a(7950),h=a(474),c=a(756),p=a(682),m=a(5705),x=a(2791),f=a(7692),g=a(9434),b=a(7689),v=a(5206),j=a(371),w=a(3622),Z=a(184);e.default=function(){var n=(0,g.I0)(),e=(0,b.TH)(),a=(0,g.v9)(j.R.Ug),i=(0,b.s0)(),y=e.state,C=y.title,k=y.btnTitle,B=y.prevPath,P=y.nickName,F=(0,g.v9)(j.R.c1),U=a.reduce((function(n,e){var a=e.id,r=e.value;return n[a]=r||"",n}),{});return(0,x.useEffect)((function(){F&&(v.Am.success("".concat(P," was updaded")),i(B))}),[F,i,P,B]),(0,Z.jsxs)(h.E,{children:[(0,Z.jsx)(p.$,{children:(0,Z.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,Z.jsx)(f.YiX,{style:{cursor:"pointer"},onClick:function(){i(B)}}),(0,Z.jsxs)(c.V,{children:[C," Update"]})]})}),(0,Z.jsxs)(p.$,{style:{borderBottom:"none"},children:[(0,Z.jsx)(m.J9,{initialValues:{firstname:U.firstname,lastname:U.lastname,email:U.email,phone:U.phone,password:U.password},enableReinitialize:!0,onSubmit:function(){var e=(0,t.Z)(s().mark((function e(a,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(j.e.userUpdate((0,r.Z)((0,r.Z)({},a),{},{nickName:P})));case 1:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),children:function(n){return(0,Z.jsxs)(u.x,{onSubmit:n.handleSubmit,id:"usersFormUpdate",children:[(0,Z.jsxs)(o.t,{children:[(0,Z.jsx)(d.g,{htmlFor:"firstname",children:"Firstname"}),(0,Z.jsx)(l.x,{type:"firstname",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.firstname,name:"firstname",placeholder:"firstname"})]}),(0,Z.jsxs)(o.t,{children:[(0,Z.jsx)(d.g,{htmlFor:"lastname",children:"Lastname"}),(0,Z.jsx)(l.x,{type:"lastname",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.lastname,name:"lastname",placeholder:"lastname"})]}),(0,Z.jsxs)(o.t,{children:[(0,Z.jsx)(d.g,{htmlFor:"email",children:"Email"}),(0,Z.jsx)(l.x,{type:"email",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.email,name:"email",placeholder:"email"})]}),(0,Z.jsxs)(o.t,{children:[(0,Z.jsx)(d.g,{htmlFor:"phone",children:"Phone"}),(0,Z.jsx)(l.x,{type:"text",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.phone,name:"phone",placeholder:"phone"})]}),(0,Z.jsxs)(o.t,{children:[(0,Z.jsx)(d.g,{htmlFor:"password",children:"Password"}),(0,Z.jsx)(l.x,{type:"text",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.password,name:"password",placeholder:"password"})]})]})}}),(0,Z.jsx)("button",{style:w.Z.btn.btnGreen,form:"usersFormUpdate",type:"submit",children:k})]})]})}}}]);
//# sourceMappingURL=804.98c02dec.chunk.js.map