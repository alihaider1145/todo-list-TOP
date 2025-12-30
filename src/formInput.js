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

    document.querySelector("#project-title").value = "";
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
    
    if(todoTitleValue === ""){
        alert("Title is required");
        return;
    }

    if(todoDueDateValue !== "" && !/\d{4}-\d{2}-\d{2}/.test(todoDueDateValue)){
        alert("Invalid date format. Please use YYYY-MM-DD format.");
        return;
    }

    if(!globalState.getState().currentTodoId){
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
    }
    else if(globalState.getState().currentProjectId){
        const todo = globalState.getState().todoListItems.find(todo => todo.id === globalState.getState().currentTodoId);
        todo.title = todoTitleValue;
        todo.desc = todoDescValue;
        todo.dueDate = new Date(todoDueDateValue);
        todo.priority = todoPriorityValue;

        globalState.setState({todoListItems: [...globalState.getState().todoListItems.filter(todo => todo.id !== globalState.getState().currentTodoId), todo]});
        console.log(globalState.getState().todoListItems);
    }

    todoTitleInput.value = "";
    todoDescInput.value = "";
    todoDueDateInput.value = "";
    todoPriorityInput.value = "";
}

export {  projectFormHandler, todoFormHandler };