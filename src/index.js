import './styles.css';
import AppController from './appController.js';
import renderSidebar from './domContent.js';

document.addEventListener("DOMContentLoaded", () => {

AppController.init();

const projects = AppController.getProjects();
renderSidebar(projects);
})
