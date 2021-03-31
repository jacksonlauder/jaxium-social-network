import express from 'express'
// import * as controller from './auth-controller'
const router = express.Router()

router.post('/auth', (req, res) => {
  res.send('post.auth - login')
})

export default router
