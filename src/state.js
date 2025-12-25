class GlobalState {
    constructor(){
        this.state = {
            projectListItems: [
                { id: "p1", name: "Project 1" },
                { id: "p2", name: "Project 2" },
            ],
            todoListItems: [
                {
                    id: crypto.randomUUID(),
                    projectId: "p1",
                    title: "Todo 1",
                    desc: "Todo 1 description",
                    completed: false,
                    dueDate: new Date(),
                    priority: "high",
                },
                {
                    id: crypto.randomUUID(),
                    projectId: "p1",
                    title: "Todo 2",
                    desc: "Todo 2 description",
                    completed: true,
                    dueDate: new Date(),
                    priority: "low",
                }
            ],
            currentProjectId: 1,
            filter: "all",
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