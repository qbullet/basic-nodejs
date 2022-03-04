import express from 'express'
import BookController from './controllers/book.controller.js'

const BookRouter = express.Router()

BookRouter.get('/', BookController.getBooks)
BookRouter.post('/', BookController.createBook)

export default BookRouter
