(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(8),s=a.n(o),u=(a(14),a(3)),i=a(4),l=a(2);var d=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("h1",{className:"header__title",children:"ToDoList"})})};var h=function(e){var t=e.addToDo,a=e.valueArray,c=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1],i=Object(n.useCallback)((function(e){r(e.target.value),u(e.target.validationMessage)}),[]);return{value:a,errorMessage:s,setErrorMessage:u,setValue:r,onChange:i}}();function o(){if(a.length<1)return 1;var e=a.map((function(e){return e.id}));return Math.max.apply(Math,Object(i.a)(e))+1}return Object(r.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),c.value?(t({keyword:c.value,id:o(),order:o(),"\u0441hecked":!1}),c.setValue("")):c.setErrorMessage("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443")},children:[Object(r.jsx)("input",{type:"text",className:"search-form__input",id:"search-form-input",name:"search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",value:c.value,onChange:c.onChange}),Object(r.jsx)("span",{id:"search-form-input-error",className:"search-form__input_error",children:c.errorMessage}),Object(r.jsx)("button",{type:"submit",className:"search-form__search-button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var j=function(e){var t=e.newValue,a=e.checkboxChange,n=e.dragStart,c=e.dragEnd,o=e.dragOver,s=e.dragDrop;return Object(r.jsxs)("section",{className:"todos",draggable:!0,onDragStart:function(e){return n(e,t)},onDragLeave:function(e){return c(e)},onDragEnd:function(e){return c(e)},onDragOver:function(e){return o(e)},onDrop:function(e){return s(e,t)},children:[Object(r.jsx)("input",{className:"todos__checkbox",type:"checkbox",id:"button",checked:t.\u0441hecked,onChange:function(){return a(t)}}),Object(r.jsx)("label",{className:"todos__value ".concat(t.\u0441hecked&&"todos__value_active"),htmlFor:"button",children:t.keyword})]})},b=a.p+"static/media/trash-button.6ef46592.svg";var f=function(e){var t=e.value,a=e.array,n=e.setValue;return Object(r.jsxs)("section",{className:"trash-place",onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e,t){e.preventDefault(),n((function(){var e=a.findIndex((function(e){return e.id===t.id}));return[].concat(Object(i.a)(a.slice(0,e)),Object(i.a)(a.slice(e+1)))}))}(e,t)},children:[Object(r.jsx)("img",{draggable:!1,className:"trash-place__icon",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",src:b}),Object(r.jsx)("p",{className:"trash-place__description",children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u0432 \u044d\u0442\u0443 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"})]})};var g=function(e){var t=e.value,a=e.setValue,n=e.show,o=e.onCheckboxChange,s=c.a.useState(null),i=Object(l.a)(s,2),d=i[0],h=i[1];function b(e,t){h(t)}function g(e){e.target.style.background="white"}function O(e){e.preventDefault(),e.target.style.background="lightgrey"}function v(e,r){e.preventDefault(),a(t.map((function(e){return e.id===r.id?Object(u.a)(Object(u.a)({},e),{},{order:d.order}):e.id===d.id?Object(u.a)(Object(u.a)({},e),{},{order:r.order}):e}))),e.target.style.background="white"}return Object(r.jsx)(r.Fragment,{children:n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"todos-container",children:t.sort((function(e,t){return e.order>t.order?1:-1})).map((function(e){return Object(r.jsx)(j,{newValue:e,checkboxChange:o,dragStart:b,dragEnd:g,dragOver:O,dragDrop:v},e.id)}))}),Object(r.jsx)(f,{value:d,array:t,setValue:a})]})})};var O=function(e){var t=e.onAddToDo,a=e.toDosValue,n=e.onCheckboxChange,c=e.setToDosValue,o=e.show;return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)(h,{valueArray:a,addToDo:t}),Object(r.jsx)(g,{value:a,setValue:c,show:o,onCheckboxChange:n})]})};var v=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 ToDoList"})})};var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(!1),h=Object(l.a)(s,2),j=h[0],b=h[1];function f(e,t){o(a.map((function(a){return a.id===t.id?Object(u.a)(Object(u.a)({},a),{},{"\u0441hecked":e}):a})))}return c.a.useEffect((function(){if(localStorage.getItem("value")){var e=localStorage.getItem("value"),t=JSON.parse(e);o(t)}}),[]),c.a.useEffect((function(){0===a.length?(localStorage.removeItem("value"),b(!1)):(localStorage.setItem("value",JSON.stringify(a)),b(!0))}),[a]),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(d,{}),Object(r.jsx)(O,{onAddToDo:function(e){o([].concat(Object(i.a)(a),[e]))},toDosValue:a,setToDosValue:o,onCheckboxChange:function(e){e.\u0441hecked?f(!1,e):f(!0,e)},show:j}),Object(r.jsx)(v,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.83a732e4.chunk.js.map