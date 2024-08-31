import { Knex } from 'knex'
import path from 'path'
import configuration from '../configuration'

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: configuration.database.url,
  migrations: {
    directory: path.join(__dirname, '../../../', 'database', 'migrations'),
    extension: 'ts',
    tableName: 'migrations',
  },
  seeds: {
    directory: path.join(__dirname, '../../../', 'database', 'seeds'),
    extension: 'ts',
    timestampFilenamePrefix: true,
  },
  compileSqlOnError: false,
}

export default dbConfig
