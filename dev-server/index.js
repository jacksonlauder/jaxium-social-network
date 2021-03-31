/* eslint-disable no-path-concat */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import express from 'express'
var app = express()

import { registerRoutes } from './routes'
import { setEnvironment } from './config/env'
import { connectToDB } from './config/db'

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in dev mode')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' })
  }
})

app.listen(3000, () => {
  console.log('Jaxium Social Network Application listening on port 3000 in ' + process.env.NODE_ENV)
})
