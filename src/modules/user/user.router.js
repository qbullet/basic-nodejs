import express from 'express'
import UserController from './controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter.post('/', UserController.createUser)
UserRouter.get('/', UserController.getAll)

export default UserRouter