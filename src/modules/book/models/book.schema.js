import mongoose from 'mongoose'
import StatusEnum from '../../../common/status.enum.js'

const { Schema, model } = mongoose

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: Object.values(StatusEnum),
    default: StatusEnum.ACTIVE
  }
}, { timestamps: true, strict: true })

const BookModel = model('books', BookSchema)

export default BookModel