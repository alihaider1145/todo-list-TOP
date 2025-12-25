import { createEle, addClass } from "../dom.js";

function createProjectList(){
    const projectList = createEle("ul", null, document.querySelector(".project-list__container"));
    addClass(projectList, "project-list");
    return projectList;
}

export { createProjectList };