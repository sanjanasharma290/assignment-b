const express = require('express');
const {createTodo, getTodos, deleteTodo} = require('../controllers/todoController');

const router = express.Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.delete('/:id',deleteTodo);

module.exports = router;