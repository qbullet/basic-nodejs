import express from 'express'
import BookController from './controllers/book.controller.js'

const BookRouter = express.Router()

BookRouter.get('/', BookController.getBooks)
BookRouter.get('/:id', BookController.getBookById)
BookRouter.post('/', BookController.createBook)
BookRouter.patch('/:id', BookController.updateBook)

export default BookRouter
