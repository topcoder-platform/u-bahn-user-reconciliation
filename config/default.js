/**
 * The default configuration file.
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  KAFKA_URL: process.env.KAFKA_URL || 'localhost:9092',
  // below are used for secure Kafka connection, they are optional
  // for the local Kafka, they are not needed
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY,

  // Kafka group id
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'u-bahn-user-reconciliation-processor',
  USER_RECONCILATION_TOPIC: process.env.USER_RECONCILATION_TOPIC || 'backgroundjob.reconcile.user',

  UBAHN_API_URL: process.env.UBAHN_API_URL || 'https://api.topcoder-dev.com/v5',
  MEMBERS_API_URL: process.env.MEMBERS_API_URL || 'https://api.topcoder-dev.com/v5/members',

  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token', // Auth0 credentials
  AUTH0_UBAHN_AUDIENCE: process.env.AUTH0_UBAHN_AUDIENCE || 'https://u-bahn.topcoder.com',
  AUTH0_TOPCODER_AUDIENCE: process.env.AUTH0_TOPCODER_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,

  SLEEP_TIME: process.env.SLEEP_TIME ? parseInt(process.env.SLEEP_TIME, 10) : 1000
}
