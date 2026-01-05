import { createEle, addClass } from "../dom.js";

function createProjectItem(projectList, state){
    projectList.innerHTML = "";

    state.forEach(project => {
        const projectItem = createEle("li", `${project.name}`, projectList);
        addClass(projectItem, "project-item");
        projectItem.setAttribute("data-id", `${project.id}`);

        const projectDelBtn = createEle("button", "🗑️", projectItem);
        addClass(projectDelBtn, "project-del-btn");
    }); 

    return (document.querySelectorAll(".project-item"));
}

export { createProjectItem };