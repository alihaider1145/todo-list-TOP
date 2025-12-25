import "./index.css"
import globalState from "./state.js";
import { createTodoList } from "./components/todo-list.js";
import { createTodoItem } from "./components/todo-items.js";
import { createProjectList } from "./components/project-list.js";
import { createProjectItem } from "./components/project-item.js";
import { showTodoForm, showProjectForm, hideProjectForm, hideTodoForm } from "./formPopup.js";
import { projectFormHandler, todoFormHandler } from "./formInput.js";

(function init(){
    const todoList = createTodoList();
    let todoItems = createTodoItem(todoList, globalState.getState().todoListItems);
    const projectList = createProjectList();
    let projectItems = createProjectItem(projectList, globalState.getState().projectListItems);

    globalState.subscribe(() => {
        todoItems = createTodoItem(todoList, globalState.getState().todoListItems);
        projectItems = createProjectItem(projectList, globalState.getState().projectListItems);
    })
})();

document.querySelector(".todo-list__btn").addEventListener("click", showTodoForm);
document.querySelector(".project-list__btn").addEventListener("click", showProjectForm);
document.querySelector(".project-back-btn").addEventListener("click", hideProjectForm);
document.querySelector(".todo-back-btn").addEventListener("click", hideTodoForm);
document.querySelector(".project-form").addEventListener("submit", projectFormHandler);
document.querySelector(".todo-form").addEventListener("submit", todoFormHandler);