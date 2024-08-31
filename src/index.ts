import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import configuration from './config/configuration'
import { requestLogger } from './middlewares'
import appRoutes from './modules/index.route'
import { logger } from './helpers'
import { handleApiError } from './middlewares/error-handler.middleware'
import db from './config/db'

const app = express()
function bootstrap(app: express.Application): void {
  const port = configuration.port

  // register middlewares
  app.use(cors())
  app.use(helmet())
  app.use(express.json())
  app.use(requestLogger)

  // database connection
  async function connectDatabase() {
    logger.info('Connecting to database')
    try {
      await db.raw('SELECT 1+1 AS result')
      logger.info('Connected to database')
    } catch (err) {
      logger.error('Error connecting to database', err)
      process.exit(1)
    }
  }

  // routes register
  app.use('/api', appRoutes).use(handleApiError)
  app.get('/', (_req, res) => {
    res.send('Hello, TypeScript with Express!')
  })
  app.get('/health', (_req, res) => {
    res.send('Server is up and running!')
  })

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await db.destroy()
    process.exit(0)
  })

  process.on('SIGTERM', async () => {
    await db.destroy()
    process.exit(0)
  })

  // start the server
  connectDatabase().then(() => {
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`)
    })
  })
}
bootstrap(app)

export default app
