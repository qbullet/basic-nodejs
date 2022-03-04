import express from 'express'
import cors from 'cors'

const AppMiddleware = express()

AppMiddleware.use(express.urlencoded({ extended: true }))
AppMiddleware.use(express.json())
AppMiddleware.use(cors())

export default AppMiddleware
