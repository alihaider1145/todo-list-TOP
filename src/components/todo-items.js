import { format } from "date-fns";
import { addClass, createEle } from "../dom.js"

//shows all todo items irrespective of project
function createTodoItem(todoList, state){
    todoList.innerHTML = "";

    for (let todo of state){
        let todoCompleteText = ((todo.completed) ? ("Finished") : ("Unfinished"));

        const todoItem = createEle("li", null, todoList);
        addClass(todoItem, "todo-item", `${todo.priority}`);

        const todoTitle = createEle("h3", todo.title, todoItem);
        addClass(todoTitle, "todo-title");

        const todoDesc = createEle("p", todo.desc, todoItem);
        addClass(todoDesc, "todo-desc");

        const todoDueDate = createEle("p", `${format(todo.dueDate, "dd MMMM yyyy")}`, todoItem);
        addClass(todoDueDate, "todo-due-date");

        const todoCompleted = createEle("p", todoCompleteText, todoItem);
        addClass(todoCompleted, "todo-completed");
    }

    return (document.querySelectorAll(".todo-item"));
}

export { createTodoItem };