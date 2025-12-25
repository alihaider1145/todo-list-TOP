import globalState from "./state.js";

function projectFormHandler(e){
    e.preventDefault();

    const projectTitleInput = document.querySelector("#project-title");
    let projectTitleValue = projectTitleInput.value;

    globalState.setState({projectListItems: [...globalState.getState().projectListItems, 
        {
            id: `p${globalState.state.projectListItems.length + 1}`, 
            name: `${projectTitleValue}`
        }]
    });

    projectTitleValue = "";
}

function todoFormHandler(e){
    e.preventDefault();
    
    const todoTitleInput = document.querySelector("#todo-title");
    const todoDescInput = document.querySelector("#todo-desc");
    const todoDueDateInput = document.querySelector("#todo-due-date");
    const todoPriorityInput = document.querySelector("#todo-priority");
    
    let todoTitleValue = todoTitleInput.value;
    let todoDescValue = todoDescInput.value;
    let todoDueDateValue = todoDueDateInput.value;
    let todoPriorityValue = todoPriorityInput.value;
    
    globalState.setState({todoListItems: [...globalState.getState().todoListItems, 
        {
            id: crypto.randomUUID(), 
            projectId: globalState.getState().currentProjectId, 
            title: todoTitleValue, 
            desc: todoDescValue, 
            dueDate: new Date(todoDueDateValue), 
            priority: todoPriorityValue, 
            completed: false
        }]
    });
    
    todoTitleInput.value = "";
    todoDescInput.value = "";
    todoDueDateInput.value = "";
    todoPriorityInput.value = "";
}

export {  projectFormHandler, todoFormHandler };