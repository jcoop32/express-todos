const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
	
  function getAll() {
    return todos;
  }

  function getOne(id){
    //url parans are strings - convert to a number
    id = parseInt(id)
    //the Array.prototype.find iterator method is 
    //ideal for finding objs within an array
    return todos.find(todo => todo.id === id)
  }

  function create(todo){
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo)
  }

  function deleteOne(id){
    id = parseInt(id);
    //find index of todo
    const idx = todos.findIndex(todo => todo.id === id)
    todos.splice(idx, 1)
  }

  function update(id, editTodo){
    id = parseInt(id);
    //find index of todo
    const idx = todos.findIndex(todo => todo.id === id)
    todos[idx].todo = editTodo.todo
  }