class Project{
    constructor(name){
        this.name = name
        this.todoList = []
    }

    addTodo(todo){
        this.todoList.push(todo);
    }

    removeTodo(index){
        this.todoList.splice(index, 1)
    }
}

export default Project;