// npm packages

import express from 'express';

// init app
var app = express();

// test method

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// catch all unhandler errors
app.use( function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

// start server
app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`Shard listening at http://${host}:${port}`);
});

// output all uncaught exceptions
process.on('uncaughtException', function err() { console.error('uncaught exception:', err)});
process.on('unhandledRejection', function error() { console.error('unhandled rejection:', error)});