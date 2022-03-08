import express from 'express'
import AppRouter from './src/app.router.js'
import AppMiddleware from './src/app.middleware.js'
import AppConfig from './src/app.config.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(AppConfig)
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

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`THIS SERVICE IS RUNNING... on port ${PORT}`)
})

export default app 
