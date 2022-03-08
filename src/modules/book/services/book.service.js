import BookModel from '../models/book.schema.js'

const BookService = {
  create: (payload) => {
    return new BookModel(payload).save()
  },
  getAll: (query) => {
    return BookModel.find(query)
  },
  getOneById: (id) => {
    return BookModel.findOne({ _id: id })
  },
  updateById: (id, payload) => {
    return BookModel.findOneAndUpdate({_id: id}, { $set: { ...payload }})
  }
}

export default BookService