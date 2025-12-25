import { createEle, addClass } from "../dom.js";

function createTodoList(){
    const todoList = createEle("ul", null, document.querySelector(".todo-list__container"));
    addClass(todoList, "todo-list");
    return todoList;
}

export { createTodoList };