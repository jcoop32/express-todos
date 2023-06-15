const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
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