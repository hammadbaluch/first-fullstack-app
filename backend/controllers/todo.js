const todos = []
const addTodo = (name)=>{
    todos.push(name)
    return true
}

const getTodo = ()=>{
    return todos
}

module.exports={
    addTodo,
    getTodo
}