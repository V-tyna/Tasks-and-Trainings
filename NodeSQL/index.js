const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const path = require('path');

const resolver = require('./graphql/resolver');
// const todoRoutes = require('./routes/todo'); // For MySQL DB
const schema = require('./graphql/schema');
const sequelize = require('./utils/database');

const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// app.use('/api/todo', todoRoutes); // For MySQL DB
app.use(graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}))

app.use((req, res, next) => {
  res.sendFile('./index.html');
});

async function start() {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch(e) {
    console.log('Start connection function error: ', e);
  }
}

start();
