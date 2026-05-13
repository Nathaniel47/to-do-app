import Project from "./project.js";
import Todo from "./todo.js";


const SAVE_KEY = "odinTodoData";

    //1. SAVE: Convert current state to JSON string
    export const saveToLocalStorage = (projects) => {
        localStorage.setItem(SAVE_KEY, JSON.stringify(projects));
    };

    //2. 
    export const loadFromLocalStorage = () =>{
        const rawData = localStorage.getItem(SAVE_KEY);

        if(!rawData) return null;

        const parsedData = JSON.parse(rawData);
        
        return parsedData.map(projData => {
            const project = new Project(projData.name);

            //Re-instantite each Todo so they regain their methods
            project.todoList = projData.todoList.map(todo => 
                new Todo(todo.title, todo.description, todo.dueDate, todo.priority)
            )
            return project;
        });
    };