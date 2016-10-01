// npm packages
import express from 'express';

// init app
var app = express();

// test method

app.get('/', (req, res) => {
  res.send('Hello World!') ;
});

// catch all unhandler errors
app.use( (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

export default app;