const renderSidebar = (projects) => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.innerHTML = '';

    projects.forEach((project, index) => {
       const projectBtn = document.createElement("button");
        projectBtn.textContent = project.name;
        projectBtn.dataset.index = index;
        sidebar.appendChild(projectBtn);
    });
};

 export default renderSidebar;




