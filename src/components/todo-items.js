import { format } from "date-fns";
import { addClass, createEle } from "../dom.js"
import globalState from "../state.js";

//shows all todo items irrespective of project
function createTodoItem(todoList){
    todoList.innerHTML = "";

    for (let todo of globalState.getState().todoListItems){
        if (todo.projectId === globalState.getState().currentProjectId){
            let todoCompleteClass = ((todo.completed) ? ("finished") : ("unfinished"));

            const todoItem = createEle("li", null, todoList);
            addClass(todoItem, "todo-item", `${todo.priority}`);
            todoItem.id = todo.id;

            const todoCompleted = createEle("span", null, todoItem);
            addClass(todoCompleted, `todo-state`, `${todoCompleteClass}`);

            const todoLeft = createEle("div", null, todoItem);
            addClass(todoLeft, "todo-left");

            const todoTitle = createEle("h3", todo.title, todoLeft);
            addClass(todoTitle, "todo-title");

            const todoDesc = createEle("p", todo.desc, todoLeft);
            addClass(todoDesc, "todo-desc");

            const todoDueDate = createEle("p", `${format(todo.dueDate, "dd MMM yyyy")}`, todoItem);
            addClass(todoDueDate, "todo-due-date");

            const todoDelBtn = createEle("button", "🗑️", todoItem);
            addClass(todoDelBtn, "todo-del-btn");
        }
    }

    return (document.querySelectorAll(".todo-item"));
}

export { createTodoItem };