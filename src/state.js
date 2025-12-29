class GlobalState {
    constructor(){
        this.state = {
            projectListItems: [
                { id: "p1", name: "Home" },
                { id: "p2", name: "Health" },
            ],
            todoListItems: [
                {
                    id: crypto.randomUUID(),
                    projectId: "p1",
                    title: "Buy Food",
                    desc: "From the grocery store",
                    completed: false,
                    dueDate: new Date(),
                    priority: "high",
                },
                {
                    id: crypto.randomUUID(),
                    projectId: "p2",
                    title: "Go to the gym",
                    desc: "",
                    completed: true,
                    dueDate: new Date(),
                    priority: "low",
                }
            ],
            currentProjectId: "p1",
            currentTodoId: null,
            submitAction: "add",
        }

        this.listeners = [];
    };

    getState(){
        return { ...this.state }
    }

    setState(newState){
        this.state = { ...this.state, ...newState};
        this.notify();
    }

    subscribe(callback){
        this.listeners.push(callback);
    }

    unsubscribe(callback){
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    notify(){
        this.listeners.forEach(callback => callback(this.state));
    }
}

// Create and export a single instance (singleton pattern)
const globalState = new GlobalState();
export default globalState;