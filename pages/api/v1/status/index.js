import database from 'infra/database.js'

async function status(request, response) {
  const updateAt = new Date().toISOString()

  const maxConnectionsResult = await database.query('show max_connections;')
  const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections)

  const databaseVersionResult = await database.query('SHOW server_version;')
  const version = databaseVersionResult.rows[0].server_version

  const databaseName = process.env.POSTGRES_DB

  const openedConnectionsResult = await database.query({
    text: 'select count(*)::int from pg_stat_activity where datname = $1;',
    values: [databaseName]
  })
  const openedConnections = openedConnectionsResult.rows[0].count

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        max_connections: maxConnections,
        opened_connections: openedConnections,
        version: version
      }
    }
  })
}

export default status
