(()=>{let e=[{id:1560865205317,text:"Buy eggs",completed:!1},{id:1560865205318,text:"Do 15 min exercise",completed:!1}];function t(){return e}function n(e){const t=e.map((function(e){const t=e.completed?"completed":"",n=e.completed?"checked":"";return`\n            <li data-id="${e.id}" class="${t}">\n                <span class="custom-checkbox">\n                    <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>\n                    <input class="real-checkbox" type="checkbox" ${n} />\n                </span>\n                <label>${e.text}</label>\n                <span class="delete"></span>\n            </li>\n        `}));document.querySelector(".todo-list").innerHTML=t.join("")}function c(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}window.addEventListener("load",(function(){n(t())})),document.addEventListener("change",(function(c){c.target.classList.contains("new-todo")&&function(c){let a=c.target.value;var o;o={id:Date.now(),text:a,completed:!1},e.push(o),n(t()),document.querySelector(".new-todo").value=""}(c)})),document.addEventListener("click",(function(a){a.target.classList.contains("delete")&&function(a){var o;o=c(a.target),e=e.filter((function(e){return e.id!==o})),n(t())}(a),a.target.classList.contains("real-checkbox")&&function(a){!function(t,n){const c=e.findIndex((function(e){return e.id===t}));e[c].completed=n}(c(a.target),a.target.checked),n(t())}(a)}))})();