import express from 'express'
const router = express.Router()
import * as controller from './user-controller'
import * as auth from "../../services/auth-service"

router.get('/user', auth.requireLogin, controller.index)

router.get('/user/:id', auth.requireLogin, controller.show)

export default router
