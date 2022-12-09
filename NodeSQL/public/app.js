new Vue({
  el: '#app',
  data() {
    return {
      isDark: true,
      show: true,
      todoTitle: '',
      todos: []
    }
  },
  created() {
    // GraphQL:
    const query = `
      query {
        getTodos {
          id, title, done, createdAt, updatedAt
        }
      }
    `;

    fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then((response) => {
        this.todos = response.data.getTodos;
      })
      .catch(e => console.log('Fetch GET all todos error: ', e));

    // WITH MySQL:
    // fetch('/api/todo', {
    //   method: 'get'
    // })
    //   .then(res => res.json())
    //   .then(({ todos }) => this.todos = todos)
    //   .catch(e => console.log('Fetch GET all todos error: ', e));

  },
  methods: {
    addTodo() {
      const title = this.todoTitle.trim();
      if (!title) {
        return;
      }

      // GraphQL:
      const query = `
        mutation {
          createTodo(todo: {title: "${title}"}) {
            id, title, done, createdAt, updatedAt
          }
        }
      `;

      fetch('/graphql', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query })
      })
        .then(res => res.json())
        .then((response) => {
          this.todos.push(response.data.createTodo);
          this.todoTitle = '';
        })
        .catch(e => console.log('Fetch GET all todos error: ', e));

      // FOR MySQL:
      // fetch('/api/todo', {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title })
      // })
      //   .then(res => res.json())
      //   .then(({ todo }) => {
      //     this.todos.push(todo);
      //     this.todoTitle = '';
      //   })
      //   .catch(e => console.log('Fetch POST new Todo error: ', e)); 
    },
    completeTodo(id) {
      //FOR GraphQL:

    const query = `
      mutation {
        editTodo(id: "${id}") {
          id, title, done, createdAt, updatedAt
        }
      }
    `;

    fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then((response) => {
        const i = this.todos.findIndex(todo => todo.id === id);
        this.todos[i].updatedAt = response.data.editTodo.updatedAt;
      })
      .catch(e => console.log('Fetch GET all todos error: ', e));

      //FOR MySQL:
      // const i = this.todos.findIndex(todo => todo.id === id);
      // fetch(`/api/todo/${id}`, {
      //   method: 'put',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ done: this.todos[i].done })
      // })
      //   .then(res => res.json())
      //   .then(({ todo }) => {
      //     this.todos[i].updatedAt = todo.updatedAt;
      //   })
      //   .catch(e => console.log('Fetch PUT Todo error: ', e)); 
    },
    removeTodo(id) {
      //FOR GraphQL:

      const query = `
        mutation {
          deleteTodo(id: "${id}")
        }
     `;
 
      fetch('/graphql', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query })
      })
        .then(() => {
          this.todos = this.todos.filter(t => t.id !== id);
        })
        .catch(e => console.log('Fetch GET all todos error: ', e));

       //FOR MySQL:
      // fetch(`/api/todo/${id}`, {
      //   method: 'delete'
      // })
      //   .then(() => {
      //     this.todos = this.todos.filter(t => t.id !== id);
      //   })
      //   .catch(e => console.log('Fetch DELETE Todo error: ', e)); 
    }
  },
  filters: {
    capitalize(value) {
      return value.toString().charAt(0).toUpperCase() + value.slice(1);
    },
    date(value) {
      const options = {
        dateStyle: 'full', 
        timeStyle: 'medium',
        timeZone: "Europe/Kiev"
      };
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(+value));
    }
  }
});
