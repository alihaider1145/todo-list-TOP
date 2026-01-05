import { showProjectForm } from "./formPopup.js";
import globalState from "./state";

function editProjectHandler(e) {
    const projectId = e.target.closest("li").dataset.id;

    if(e.target.classList.contains("project-del-btn"))
    {
        globalState.setState({projectListItems: globalState.getState().projectListItems.filter(project => project.id !== projectId)});
        globalState.setState({todoListItems: globalState.getState().todoListItems.filter(todo => todo.projectId !== projectId)});
    }
    if(e.target.classList.contains("todo-item"))
    {
        showProjectForm();

        const project = globalState.getState().projectListItems.find(project => project.id === projectId);
        document.querySelector("#project-title").value = project.name;

        document.querySelector(".project-submit-btn").textContent = "Update";
        globalState.setState({currentProjectId: `${projectId}`});
        globalState.setState({submitAction: "update"});
    }
}

export { editProjectHandler };