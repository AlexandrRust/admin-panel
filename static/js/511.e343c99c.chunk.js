"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[511],{4965:function(n,e,r){r.d(e,{j:function(){return c}});var i,t=r(168),c=r(7691).ZP.input(i||(i=(0,t.Z)(["\n  height: calc(1.7125rem);\n  /* padding: 0.25rem 0.5rem; */\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  border: 1px solid #ced4da;\n  &:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: inset 0 0 0 transparent;\n  }\n"])))},474:function(n,e,r){r.d(e,{E:function(){return c}});var i,t=r(168),c=r(7691).ZP.div(i||(i=(0,t.Z)(["\n  /* position: relative; */\n  /* width: 100%; */\n  min-height: 100vh;\n  background-color: #fff;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n  margin-top: 30px;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 30px;\n  animation: pageAnime 1s ease 0s 1 normal forwards;\n"])))},2861:function(n,e,r){r.d(e,{m:function(){return c}});var i,t=r(168),c=r(7691).ZP.div(i||(i=(0,t.Z)(["\n  display: flex;\n  align-items: center;\n  /* gap: 20px; */\n  justify-content: space-between;\n"])))},4041:function(n,e,r){r.d(e,{Z:function(){return f}});var i,t,c,d=r(4965),s=r(5705),l=r(371),a=r(9434),o=r(184),x=function(n){var e=n.placeholder,r=(0,a.I0)();return(0,o.jsx)(s.J9,{initialValues:{nickName:""},onSubmit:function(n,e){r(l.e.getUserByNickName(n)),e.resetForm()},children:function(n){return(0,o.jsxs)("form",{onSubmit:n.handleSubmit,id:"search-nickName",children:[(0,o.jsx)(d.j,{type:"text",placeholder:e,onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.nickName,name:"nickName"}),n.errors.name&&(0,o.jsx)("div",{id:"feedback",children:n.errors.name})]})}})},h=r(168),u=r(7691),m=u.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),j=u.ZP.ul(t||(t=(0,h.Z)(["\n  padding: 0;\n  list-style: none;\n  display: inline-flex;\n  align-items: center;\n  background-color: #6c757d;\n  border-color: #6c757d;\n  border-radius: 0.25rem;\n  color: #fff;\n"]))),p=u.ZP.li(c||(c=(0,h.Z)(["\n  padding: 6px 12px;\n"]))),f=function(){return(0,o.jsxs)(m,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(p,{children:"Copy"}),(0,o.jsx)(p,{children:"CSV"}),(0,o.jsx)(p,{children:"Excel"}),(0,o.jsx)(p,{children:"PDF"}),(0,o.jsx)(p,{children:"Print"}),(0,o.jsx)(p,{children:"Column visibility"})]}),(0,o.jsx)(x,{})]})}},7842:function(n,e,r){var i=r(1379),t=r(1075),c=r(208),d=r(5158),s=r(9434),l=r(371),a=r(7689),o=r(1087),x=r(3622),h=r(5206),u=r(184);e.Z=function(n){var e=n.list,r=n.title,m=n.btnTitle,j=(0,a.TH)(),p=(0,s.I0)(),f=function(n){var e=n.currentTarget.dataset.value;p(l.e.UserFormGet(e))};return(0,u.jsx)(u.Fragment,{children:0===e.length?(0,u.jsx)("div",{children:"\u041d\u0435\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}):(0,u.jsxs)(i.q,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Firstname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Lastname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Nickname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Email"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Phone"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Actions"})})]})}),(0,u.jsx)("tbody",{children:e.map((function(n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)(c.g,{children:n.firstname}),(0,u.jsx)(c.g,{children:n.lastname}),(0,u.jsx)(c.g,{children:n.nickname}),(0,u.jsx)(c.g,{children:n.email}),(0,u.jsx)(c.g,{children:n.phone}),(0,u.jsx)(c.g,{style:{width:"8%"},children:(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,u.jsx)(o.rU,{style:{textDecoration:"none",display:"flex",alignItems:"center"},to:"update/".concat(n.nickname),"data-value":n.nickname,onClick:f,state:{title:r,btnTitle:m,prevPath:j.pathname,nickName:n.nickname},children:(0,u.jsx)("button",{style:x.Z.btn.btnEdit,type:"button",children:"Update"})}),(0,u.jsx)(o.rU,{to:"/userShow/".concat(n.nickname),state:{prevPath:j.pathname,nickName:n.nickname},style:{display:"flex",alignItems:"center",textDecoration:"none"},children:(0,u.jsx)("button",{style:x.Z.btn.btnBlue,type:"button",children:"Show"})}),(0,u.jsx)("button",{style:x.Z.btn.btnRed,type:"button",onClick:function(){return e=n.nickname,void(confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(e))&&(p(l.e.UserDelete(e)),h.Am.success("".concat(e," has been removed"))));var e},children:"Delete"})]})})]},n.id)}))}),(0,u.jsx)("tfoot",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Firstname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Lastname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Email"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Phone"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Nickname"})}),(0,u.jsx)(t.c,{children:(0,u.jsx)(d.N,{children:"Actions"})})]})})]})})}},1379:function(n,e,r){r.d(e,{q:function(){return c}});var i,t=r(168),c=r(7691).ZP.table(i||(i=(0,t.Z)(["\n  /* display: block; */\n  width: 100%;\n  border: 1px solid #dee2e6;\n  border-collapse: collapse;\n  margin-top: 6px;\n  margin-bottom: 6px;\n"])))},208:function(n,e,r){r.d(e,{g:function(){return c}});var i,t=r(168),c=r(7691).ZP.td(i||(i=(0,t.Z)(["\n  padding: 12px;\n  border: 1px solid #dee2e6;\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: start;\n"])))},1075:function(n,e,r){r.d(e,{c:function(){return c}});var i,t=r(168),c=r(7691).ZP.th(i||(i=(0,t.Z)(["\n  padding: 8px;\n  border: 1px solid #dee2e6;\n  border-bottom: 2px solid #dee2e6;\n  text-align: start;\n"])))},5158:function(n,e,r){r.d(e,{N:function(){return c}});var i,t=r(168),c=r(7691).ZP.div(i||(i=(0,t.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))},756:function(n,e,r){r.d(e,{V:function(){return c}});var i,t=r(168),c=r(7691).ZP.h3(i||(i=(0,t.Z)(["\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 400;\n"])))},682:function(n,e,r){r.d(e,{$:function(){return c}});var i,t=r(168),c=r(7691).ZP.div(i||(i=(0,t.Z)(["\n  padding: 12px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n"])))},6511:function(n,e,r){r.r(e);var i=r(1087),t=r(7689),c=r(474),d=r(2861),s=r(4041),l=r(7842),a=r(756),o=r(682),x=r(3622),h=r(184);e.default=function(){return(0,h.jsxs)(c.E,{children:[(0,h.jsx)(o.$,{children:(0,h.jsxs)(d.m,{children:[(0,h.jsx)(a.V,{children:"Title Products Index"}),(0,h.jsx)(i.rU,{style:x.Z.btn.btnGreen,to:"/products/create",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})}),(0,h.jsxs)(o.$,{children:[(0,h.jsx)(s.Z,{}),(0,h.jsx)(l.Z,{}),(0,h.jsx)(t.j3,{})]})]})}}}]);
//# sourceMappingURL=511.e343c99c.chunk.js.map