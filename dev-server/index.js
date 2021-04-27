/* eslint-disable no-path-concat */
// eslint-disable-next-line no-unused-vars
const _  = require('lodash');
const express = require('express');
const history = require('connect-history-api-fallback');
import { registerRoutes } from './routes'
import { setEnvironment } from './config/env'
import { connectToDB } from './config/db'

const app = express()
app.use('/', history());

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in developer mode')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' })
  }
})

app.listen(3000, () => {
  console.log('Jaxium Social Network Application listening on port 3000 in ' + process.env.NODE_ENV)
})
