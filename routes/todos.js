var express = require('express');
var router = express.Router();

var todosCtrl = require('../controllers/todos')
/* GET users listing. */

//GET /todos
router.get('/', todosCtrl.index);

//GET /todos/new <- define before show route
router.get('/new', todosCtrl.new)

//GET /todos/:id
router.get('/:id', todosCtrl.show)

//GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit)

router.put('/:id', todosCtrl.update)

//POST /todos
router.post('/', todosCtrl.create)

//DELETE /todos/:id
router.delete('/:id', todosCtrl.delete)

module.exports = router;

