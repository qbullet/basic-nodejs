import express from 'express'
import BookRouter from './modules/book/book.router.js'
import OrderRouter from './modules/order/order.router.js'
import UserRouter from './modules/user/user.router.js'

const AppRouter = express.Router()

AppRouter.use('/book', BookRouter)
AppRouter.use('/order', OrderRouter)
AppRouter.use('/user', UserRouter)

export default AppRouter
