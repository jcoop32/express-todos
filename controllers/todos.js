const Todo = require('../models/todo')

module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
}

function show(req, res){
  res.render('todos/show', {
    //getting id based on parameter passed in
    todo: Todo.getOne(req.params.id),
  });
}