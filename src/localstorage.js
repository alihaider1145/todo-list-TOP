import globalState from "./state"

function checkStorage(){
    globalState.setState({
        projectListItems: JSON.parse(localStorage.getItem("projectList")) || [],
        todoListItems: JSON.parse(localStorage.getItem("todoList")) || [],
        currentProjectId: JSON.parse(localStorage.getItem("currentProjectId")) || null
    });
}

function saveStorage(){
    localStorage.setItem("projectList", JSON.stringify(globalState.getState().projectListItems));
    localStorage.setItem("todoList", JSON.stringify(globalState.getState().todoListItems));
    localStorage.setItem("currentProjectId", JSON.stringify(globalState.getState().currentProjectId));
}

export { saveStorage, checkStorage };