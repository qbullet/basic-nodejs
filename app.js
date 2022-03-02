import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    data: {
      date: new Date(),
      text: 'Hello'
    }
  })
})

const PORT = 3030
app.listen(PORT, () => {
  console.log(`THIS SERVICE IS RUNNING... on port ${PORT}`)
})

export default app 
