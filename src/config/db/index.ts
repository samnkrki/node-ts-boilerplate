import knex from 'knex'
import dbConfig from './knexFile'

const db = knex(dbConfig)

export default db
