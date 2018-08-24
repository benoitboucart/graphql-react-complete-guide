const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const schema = require('./schema/schema');

const app = express();

const MONGO_URI = 'mongodb://benoit:benoit1@ds125372.mlab.com:25372/lyricaldbenoit';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useMongoClient: true });
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(
//   webpackMiddleware(webpack(webpackConfig), {
//   })
// );
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });

app.listen(4000, () => {
  console.log('Listening');
});

module.exports = app;
