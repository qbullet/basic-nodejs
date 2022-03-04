import express from 'express'
import BookRouter from './modules/book/book.router.js'

const AppRouter = express.Router()

AppRouter.use('/book', BookRouter)

export default AppRouter
