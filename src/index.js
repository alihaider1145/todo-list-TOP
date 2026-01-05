import "./index.css"
import globalState from "./state.js";
import { createTodoList } from "./components/todo-list.js";
import { createTodoItem } from "./components/todo-items.js";
import { createProjectList } from "./components/project-list.js";
import { createProjectItem } from "./components/project-item.js";
import { showTodoForm, showProjectForm, hideProjectForm, hideTodoForm } from "./formPopup.js";
import { projectFormHandler, todoFormHandler } from "./formInput.js";
import { projectToggleHandler } from "./projectToggle.js";
import { editTodoHandler } from "./todoEdit.js";
import { checkStorage } from "./localstorage.js";

(function init(){
    try{
        checkStorage()
    }
    catch{
        console.log("storage not found");
    }

    const todoList = createTodoList();
    let todoItems = createTodoItem(todoList);
    const projectList = createProjectList();              
    let projectItems = createProjectItem(projectList, globalState.getState().projectListItems);

    globalState.subscribe(() => {
        todoItems = createTodoItem(todoList, globalState.getState().todoListItems);
        projectItems = createProjectItem(projectList, globalState.getState().projectListItems);
    })
})();

document.querySelector(".todo-list").addEventListener("click", editTodoHandler);
document.querySelector(".project-list").addEventListener("click", projectToggleHandler);
document.querySelector(".todo-list__btn").addEventListener("click", showTodoForm);
document.querySelector(".project-list__btn").addEventListener("click", showProjectForm);
document.querySelector(".project-back-btn").addEventListener("click", hideProjectForm);
document.querySelector(".todo-back-btn").addEventListener("click", hideTodoForm);
document.querySelector(".project-form").addEventListener("submit", projectFormHandler);
document.querySelector(".todo-form").addEventListener("submit", todoFormHandler);