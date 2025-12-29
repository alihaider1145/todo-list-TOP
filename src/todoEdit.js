import { showTodoForm } from "./formPopup";
import globalState from "./state";

function editTodoHandler(e) {
    const todoId = e.target.closest("li").id;

    if(e.target.classList.contains("todo-del-btn"))
    {
        globalState.setState({todoListItems: globalState.getState().todoListItems.filter(todo => todo.id !== todoId)});
    }
    if(e.target.classList.contains("todo-item"))
    {
        showTodoForm();

        const todo = globalState.getState().todoListItems.find(todo => todo.id === todoId);
        document.querySelector("#todo-title").value = todo.title;
        document.querySelector("#todo-desc").value = todo.desc;
        document.querySelector("#todo-due-date").value = todo.dueDate.toISOString().split("T")[0];
        document.querySelector("#todo-priority").value = todo.priority;

        document.querySelector(".todo-submit-btn").textContent = "Update";
        globalState.setState({currentTodoId: `${todoId}`});
        globalState.setState({submitAction: "update"});
    }
}

export { editTodoHandler };