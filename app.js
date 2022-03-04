import express from 'express'
import AppRouter from './src/app.router.js'
import AppMiddleware from './src/app.middleware.js'

const app = express()

app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (request, response) => {
  response.status(200).json({
    success: true,
    data: {
      date: new Date()
    }
  })
})

const PORT = 3030
app.listen(PORT, () => {
  console.log(`THIS SERVICE IS RUNNING... on port ${PORT}`)
})

export default app 
