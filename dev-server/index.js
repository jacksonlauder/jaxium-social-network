/* eslint-disable no-path-concat */
// eslint-disable-next-line no-unused-vars
var _  = require('lodash');
var express = require('express');
var history = require('connect-history-api-fallback');

var app = express()
app.use(history());

import { registerRoutes } from './routes'
import { setEnvironment } from './config/env'
import { connectToDB } from './config/db'

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.listen(3000, () => {
  console.log('Jaxium Social Network Application listening on port 3000 in ' + process.env.NODE_ENV)
})

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in dev mode')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' })
  }
})
