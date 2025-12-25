function showTodoForm(){
    document.querySelector(".todo-form").classList.remove("hidden");
    document.querySelector("main").classList.add("hidden")
}

function showProjectForm(){
    document.querySelector(".project-form").classList.remove("hidden");
    document.querySelector("main").classList.add("hidden");
}

function hideTodoForm(){
    document.querySelector(".todo-form").classList.add("hidden");
    document.querySelector("main").classList.remove("hidden")
}

function hideProjectForm(){
    document.querySelector(".project-form").classList.add("hidden");
    document.querySelector("main").classList.remove("hidden");
}

export { showTodoForm, showProjectForm, hideTodoForm, hideProjectForm };