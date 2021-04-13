import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

export function setEnvironment (app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app)
  } else {
    setProdEnv(app)
  }
}

function setDevEnv (app) {
  process.env.NODE_ENV = 'development'
  process.env.DB_URL = 'mongodb://localhost:27017/jaxium-db'
  process.env.TOKEN_SECRET = '10596874-jaxium-social-network-development-secret'
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(cors())
}

function setProdEnv (app) {
  process.env.DB_URL = 'mongodb+srv://jacksonlauder:10596874@jaxium-db.4yzkv.mongodb.net/jaxium-db?retryWrites=true&w=majority'
  process.env.TOKEN_SECRET = '10596874-jaxium-social-network-production-secret'
  app.use(bodyParser.json())
  app.use(express.static(__dirname + '/../../dist'))
}
