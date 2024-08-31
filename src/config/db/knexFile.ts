import { Knex } from 'knex'
import path from 'path'
import configuration from '../configuration'
import camelCase from 'camelcase'

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
  postProcessResponse: (result, _queryContext) => {
    // TODO: add special case for raw results
    // (depends on dialect)
    if (Array.isArray(result)) {
      return result.map(row => camelCase(row))
    } else {
      return camelCase(result)
    }
  },
}

export default dbConfig
