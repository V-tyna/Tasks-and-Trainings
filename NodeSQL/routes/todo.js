const { Router } = require('express');
const TodoModel = require('../models/todo.model');

const todoRoutes = Router();

// Get all todos
todoRoutes.get('/', async (req, res) => {
  try {
    const todos = await TodoModel.findAll();
    res.status(200).json({ todos });
  } catch(e) {
    console.log('Adding new todo error: ', e);
    res.status(500). json({
      message: 'Server error: GET all todos request.'
    });
  }
});

// Create new todo
todoRoutes.post('/', async (req, res) => {
  try {
    const todo = await TodoModel.create({
      title: req.body.title,
      done: false
    });
    res.status(201).json({ todo });
  } catch(e) {
    console.log('Adding new todo error: ', e);
    res.status(500). json({
      message: 'Server error: adding new todo POST request.'
    });
  }
});

// Change todo
todoRoutes.put('/:id', async (req, res) => {
  try {
    const todo = await TodoModel.findByPk(+req.params.id);
    todo.done = req.body.done;
    await todo.save();
    res.status(200).json({ todo });
  } catch(e) {
    console.log('Adding new todo error: ', e);
    res.status(500). json({
      message: 'Server error: changing todo PUT request.'
    });
  }
});


// Delete todo
todoRoutes.delete('/:id', async (req, res) => {
  try {
    const todos = await TodoModel.findAll({
      where: {
        id: +req.params.id
      }
    });
    await todos[0].destroy();
    res.status(204).json({});
  } catch(e) {
    console.log('Adding new todo error: ', e);
    res.status(500). json({
      message: 'Server error: deleting todo DELETE request.'
    });
  }
});

module.exports = todoRoutes;
