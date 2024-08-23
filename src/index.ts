import configuration from './config/configuration'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { requestLogger } from './middlewares'
import appRoutes from './modules/index.route'
import { logger } from './helpers'
import { handleApiError } from './middlewares/error-handler.middleware'

const app = express()
const port = configuration.port

// register middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(requestLogger)

// database connection

// routes register
app.use('/api', appRoutes).use(handleApiError)
app.get('/', (_req, res) => {
  res.send('Hello, TypeScript with Express!')
})
app.get('/health', (_req, res) => {
  res.send('Server is up and running!')
})

// start the server
app.listen(port, () => {
  logger.log({ level: 'info', message: `Server is running at http://localhost:${port}` })
})

export default app
