import globalState from "./state.js";

function projectToggleHandler(e){
    if (e.target && e.target.matches(".project-item")) {
        globalState.setState({currentProjectId: e.target.getAttribute("data-id")});
    }
}

export { projectToggleHandler };