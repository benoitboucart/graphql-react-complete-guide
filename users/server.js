const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true // only to use in dev env
}));

app.listen(4000, () => {
  console.log(`Listening`);
});