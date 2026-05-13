import Project from './project.js';
import Todo from './todo.js';
import { saveToLocalStorage, loadFromLocalStorage } from './storage.js';


const AppController = (() => {
    let projects = [];


    const init = () => {
        const savedProjects = loadFromLocalStorage();

        if(savedProjects){
            projects = savedProjects;
        }
        else {
            // if no projects have been added yet, create a default project
            const defaultProjects = new Project("General");
            projects.push(defaultProjects);
            saveToLocalStorage(projects);
        };
    };

    const addProject = (name) => {
        projects.push(new Project(name));
        saveToLocalStorage(projects);
    };


    const getProjects = () => projects;

    return {init, addProject, getProjects, saveToLocalStorage}
})();


export default AppController;