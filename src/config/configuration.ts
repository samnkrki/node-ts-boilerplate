import 'dotenv/config'

type Configuration = {
  port: number
  env: string
  database: {
    url: string
  }
}

const configuration: Configuration = Object.freeze({
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || '',
  },
})

export default configuration
