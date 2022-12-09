const TodoModel = require('../models/todo.model');

module.exports = {
  async getTodos() {
    try {
      return await TodoModel.findAll();
    } catch(e) {
      throw new Error('Adding new todo error: GET all todos request. ', e);
    }
  },

  async createTodo({ todo }) {
    try {
      return await TodoModel.create({
        title: todo.title,
        done: false
      });
    } catch(e) {
      throw new Error('Adding new todo error: adding new todo POST request.', e);
    }
  },

  async editTodo({ id }) {
    try {
      const newTodo = await TodoModel.findByPk(+id);
      console.log('Todo: ', newTodo.done, !newTodo.done)
      newTodo.done = !newTodo.done;
      await newTodo.save();
      return newTodo;
    } catch(e) {
      throw new Error('Adding new todo error: editing todo PUT request.', e);
    }
  },

  async deleteTodo({ id }) {
    try {
      const todos = await TodoModel.findAll({
        where: {
          id
        }
      });
      await todos[0].destroy();
      return true;
    } catch(e) {
      throw new Error('Adding new todo error: editing todo DELETE request.', e);
    }
  }
};

// const users = [
//   { name: 'Valya', age: 33, email: 'boiko.vtyna@gmail.com' },
//   { name: 'Vova', age: 36, email: 'vladimirleonidovichboiko@gmail.com' }
// ]

// module.exports = { 
//   test() {
//     return {
//       count: Math.trunc(Math.random() * 10),
//       users
//     };
//   },

//   random({ min, max, count }) {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//       const random = Math.random() * (max - min) + min;
//       arr.push(random);
//     }
//     return arr;
//   },

//   addTestUser({ user: { name, email } }) {
//     const user = {
//       name, email,
//       age: Math.ceil(Math.random() * 30)
//     };
//     users.push(user);
//     return user;
//   }
// };
