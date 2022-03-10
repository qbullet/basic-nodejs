import StatusEnum from '../../../common/status.enum.js'
import BookService from '../services/book.service.js'

const BookController = {
  getBooks: async (req, res) => {
    try {
      const books = await BookService.getAll({ status: StatusEnum.ACTIVE })
      // const mapped = books.map((book) => {
      //   const { name, price } = book
      //   return { name: `x${name}`, price }
      // })

      // const db = [
      //   { orderId: '01', name: 'a', price: 10 },
      //   { orderId: '01', name: 'b', price: 20 },
      //   { orderId: '02', name: 'c', price: 30 },
      //   { orderId: '02', name: 'd', price: 40 }
      // ]

      // const payloads = []

      // db.forEach((row) => {
      //   const index = payloads.findIndex((payload) => payload.orderId === row.orderId)
      //   const { name, price } = row
      //   if (index === -1) {
      //     payloads.push({ orderId: row.orderId, bookList: [{name, price}]})
      //   } 
        
      //   if (index > -1 ) {
      //     payloads[index].bookList.push({name, price})
      //   }
      // })

      res.status(200).json({
        success: true,
        data: books
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await BookService.getOneById(req.params.id)

      res.status(200).json({
        success: true,
        data: book
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  },
  createBook: async (req, res) => {
    try {
      const created = await BookService.create(req.body)
      
      res.status(201).json({
        success: true,
        data: created
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  },
  updateBook: async (req, res) => {
    try {
      const { id } = req.params
      const payload = req.body

      const updated = await BookService.updateById(id, payload)
      
      res.status(201).json({
        success: true,
        data: updated
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  } 
}

export default BookController