const { db } = require('./.env')

module.exports = {
    client: 'pg',
    connection: db.ps,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
}
