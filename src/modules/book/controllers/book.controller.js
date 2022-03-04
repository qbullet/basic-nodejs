const BookController = {
  getBooks: (req, res) => {
    res.status(200).json({
      success: true,
      data: [
        {
          name: 'A',
          price: 1000
        },
        {
          name: 'B',
          price: 1000
        },
        {
          name: 'C',
          price: 1000
        },
        {
          name: 'D',
          price: 1000
        },
      ]
    })
  },
  createBook: (req, res) => {
    console.log(req.params)
  }
}

export default BookController