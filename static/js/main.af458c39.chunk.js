(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{12:function(t,e,o){t.exports={arcTodo:"ArcTodo_arcTodo__R7ODD",arcTodo__btn:"ArcTodo_arcTodo__btn__H38Lb"}},17:function(t,e,o){t.exports={allTodos:"AllTodos_allTodos__3CqHT"}},18:function(t,e,o){t.exports={archivedTodos:"ArchivedTodos_archivedTodos__3waDG"}},23:function(t,e,o){},3:function(t,e,o){t.exports={todoCard:"Todo_todoCard__cVDRR",todoCard__title:"Todo_todoCard__title__3kK3C",todoCard__form:"Todo_todoCard__form__2vvhO",todoCard__actions:"Todo_todoCard__actions__2SjUt",hide:"Todo_hide__1eR2k",todoCard__changeBtn:"Todo_todoCard__changeBtn__Eo5q9",todoCard__input:"Todo_todoCard__input__1wrRn",todoCard__completed:"Todo_todoCard__completed__1eQK6",todoCard__compText:"Todo_todoCard__compText__1hdMt",hiddenHeader:"Todo_hiddenHeader__IzdOT"}},30:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(8),c=o.n(a),r=(o(23),o(6)),d=o.n(r),s=o(11),i=o(5),l=o(4),u=o.n(l),p=o(2),h=o(17),j=o.n(h),_=o(3),b=o.n(_),f=o(16),m=o(10),T=function(t){fetch("https://react-http-9bce5-default-rtdb.firebaseio.com/tasks.json",{method:"PUT",body:JSON.stringify(t)}).then((function(t){return t})).then((function(t){return t.json()}))},O=Object(m.b)({name:"todos",initialState:{allTodos:[]},reducers:{addTodo:function(t,e){t.allTodos=[].concat(Object(f.a)(t.allTodos),[e.payload])},removeTodo:function(t,e){t.allTodos=t.allTodos.filter((function(t){return t.id!==e.payload.id})),T(t.allTodos.filter((function(t){return t.id!==e.payload.id})))},deleteAllTasks:function(t){t.allTodos=[],T([])},setAllTasks:function(t,e){t.allTodos=e.payload},changeTask:function(t,e){var o=t.allTodos.filter((function(t){return t.id!==e.payload.id})),n=t.allTodos.find((function(t){return e.payload.id===t.id}));n[e.payload.property]=e.payload.title,T([n].concat(Object(f.a)(o)))}}}),v=O.actions,x=O,C=o(1);var k=function(t){var e=t.title,o=t.id,a=Object(p.b)(),c=Object(n.useState)(""),r=Object(i.a)(c,2),d=r[0],s=r[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),h=u[0],j=u[1],_=Object(n.useState)(!1),f=Object(i.a)(_,2),m=f[0],T=f[1],O=Object(p.c)((function(t){return t.todos.allTodos})).find((function(t){return t.id===o})),x=function(){T((function(t){return!t}))};return m?Object(C.jsxs)("div",{className:b.a.todoCard,children:[Object(C.jsx)("h1",{className:b.a.hiddenHeader,children:"Task hidden"}),Object(C.jsx)("button",{onClick:x,className:b.a.hide,children:"Show"})]}):Object(C.jsxs)("div",{id:o,className:O.completed?"".concat(b.a.todoCard," ").concat(b.a.todoCard__completed):b.a.todoCard,children:[Object(C.jsx)("button",{onClick:x,className:b.a.hide,children:"Hide"}),Object(C.jsx)("h2",{className:b.a.todoCard__title,children:e}),h&&Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(v.changeTask({id:o,title:d,property:"title"})),j(!1),s("")},className:b.a.todoCard__form,children:[Object(C.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)},value:d,className:b.a.todoCard__input}),Object(C.jsx)("button",{type:"submit",className:b.a.todoCard__changeBtn,children:"Change Task"})]}),Object(C.jsxs)("div",{className:b.a.todoCard__actions,children:[Object(C.jsx)("button",{onClick:function(){a(v.removeTodo({id:o}))},children:"Delete"}),Object(C.jsxs)("button",{onClick:function(){a(v.changeTask({id:o,title:!O.completed,property:"completed"}))},children:[O.completed?"Uncomplete":" Complete"," Task"]}),Object(C.jsx)("button",{onClick:function(){j((function(t){return!t}))},children:"Edit Task"}),Object(C.jsx)("button",{onClick:function(){a(v.changeTask({id:o,title:!0,property:"archived"}))},children:"Archive"})]}),O.completed&&Object(C.jsx)("p",{className:b.a.todoCard__compText,children:"Task Completed!"})]})};var y=function(){var t=Object(p.c)((function(t){return t.todos.allTodos})),e="";return e=0===(null===t||void 0===t?void 0:t.length)&&Object(C.jsx)("h1",{children:"No tasks yet!"}),(null===t||void 0===t?void 0:t.length)>0&&(e=t.map((function(t){if(!t.archived)return Object(C.jsx)(k,{id:t.id,title:t.title},t.id)}))),Object(C.jsx)("div",{className:j.a.allTodos,children:e})},N=o(18),g=o.n(N),A=o(12),S=o.n(A);var w=function(t){var e=t.title,o=t.id,n=Object(p.b)();return Object(C.jsxs)("div",{className:S.a.arcTodo,children:[Object(C.jsx)("h2",{className:S.a.todoCard__title,children:e}),Object(C.jsx)("button",{className:S.a.arcTodo__btn,onClick:function(){n(v.changeTask({id:o,title:!1,property:"archived"}))},children:"Unarchive"})]})};var B=function(){var t=Object(p.c)((function(t){return t.todos.allTodos}));return Object(C.jsx)("div",{className:g.a.archivedTodos,children:t.map((function(t){if(t.archived)return Object(C.jsx)(w,{id:t.id,title:t.title},t.id)}))})};var D=function(){var t=Object(p.b)(),e=Object(n.useState)(""),o=Object(i.a)(e,2),a=o[0],c=o[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),h=l[0],j=l[1],_=Object(n.useState)(!1),b=Object(i.a)(_,2),f=b[0],m=b[1],T=Object(p.c)((function(t){return t.todos.allTodos}));Object(n.useEffect)(Object(s.a)(d.a.mark((function e(){var o,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-9bce5-default-rtdb.firebaseio.com/tasks.json");case 2:return o=e.sent,e.next=5,o.json();case 5:for(c in n=e.sent,a=[],n)a.push({title:n[c].title,id:c,archived:n[c].archived,completed:n[c].completed});t(v.setAllTasks(a));case 9:case"end":return e.stop()}}),e)}))),[v]);var O=function(){var e=Object(s.a)(d.a.mark((function e(o){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.preventDefault(),t(v.addTodo({title:a,id:Math.random(),completed:!1,archived:!1})),e.next=4,fetch("https://react-http-9bce5-default-rtdb.firebaseio.com/tasks.json",{method:"POST",body:JSON.stringify({title:a,id:Math.random(),completed:!1,archived:!1}),headers:{"Content-Type":"application/json"}});case 4:e.sent,c("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(d.a.mark((function e(){var o,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-9bce5-default-rtdb.firebaseio.com/tasks.json");case 2:return o=e.sent,e.next=5,o.json();case 5:for(c in n=e.sent,a=[],n)a.push({title:n[c].title,id:c,archived:n[c].archived,completed:n[c].completed});t(v.setAllTasks(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:u.a.app,children:[Object(C.jsx)("h1",{children:"Todo Task Manager"}),f&&Object(C.jsx)(B,{}),Object(C.jsxs)("form",{onSubmit:O,className:u.a.inputForm,children:[Object(C.jsx)("input",{type:"text",value:a,placeholder:"Add a new Task...",onChange:function(t){return c(t.target.value)}}),Object(C.jsx)("button",{type:"submit",className:u.a.formBtn,children:"Add Task"})]}),Object(C.jsxs)("form",{className:"".concat(u.a.inputForm," ").concat(u.a.inputFormSecond),onClick:function(e){e.preventDefault();var o=T.filter((function(t){return t.title.toLowerCase().includes(h.toLowerCase())}));t(v.setAllTasks(o)),j("")},children:[Object(C.jsx)("input",{type:"text",value:h,placeholder:"Search Tasks...",onChange:function(t){return j(t.target.value)}}),Object(C.jsx)("button",{type:"submit",className:u.a.formBtn,children:"Search"}),Object(C.jsx)("button",{type:"button",onClick:x,className:"".concat(u.a.formBtn," ").concat(u.a.formBtnShowAll),children:"Show All Tasks"})]}),Object(C.jsx)(y,{}),Object(C.jsx)("button",{className:u.a.deleteButton,onClick:function(){t(v.deleteAllTasks())},children:"Delete all Tasks"}),Object(C.jsx)("button",{className:u.a.archiveButton,onClick:function(){m((function(t){return!t}))},children:"Archived Tasks"})]})},F=Object(m.a)({reducer:{todos:x.reducer}});c.a.render(Object(C.jsx)(p.a,{store:F,children:Object(C.jsx)(D,{})}),document.getElementById("root"))},4:function(t,e,o){t.exports={app:"App_app__msViL",inputForm:"App_inputForm__2i15e",deleteButton:"App_deleteButton__2O-l8",archiveButton:"App_archiveButton__1cJvO",formBtn:"App_formBtn__2uf6W",inputFormSecond:"App_inputFormSecond__xgv9q"}}},[[30,1,2]]]);
//# sourceMappingURL=main.af458c39.chunk.js.map