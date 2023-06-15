const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
};

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      title: 'All To-Dos'
    });
}

function newTodo(req, res){
  res.render('todos/new', {
    title: 'New To-Do',
  })
}

function show(req, res){
  res.render('todos/show', {
    //getting id based on parameter passed in
    todo: Todo.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

function create(req, res){
  console.log(req.body);
  //models are responsilbe for cruding data
  Todo.create(req.body)
  res.redirect('/todos');
}

function deleteTodo(req, res){
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

function edit(req, res){
  const todo = Todo.getOne(req.params.id)
  res.render('todos/edit', {
    title: 'Edit To-Do',
    todo
  })
}

function update(req, res){
  Todo.update(req.params.id, req.body)
  res.redirect(`/todos/${req.params.id}`)
}