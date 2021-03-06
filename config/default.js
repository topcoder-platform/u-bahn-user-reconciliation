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
  KAFKA_MESSAGE_ORIGINATOR: process.env.KAFKA_MESSAGE_ORIGINATOR || 'u-bahn-user-reconciliation-processor',
 
  // Kafka group id
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'u-bahn-user-reconciliation-processor',
  USER_RECONCILATION_TOPIC: process.env.USER_RECONCILATION_TOPIC || 'backgroundjob.reconcile.user',
  PUBLISH_TOPIC: process.env.PUBLISH_TOPIC_TOPIC || 'legacy.sync.user',

  V5_API_URL: process.env.V5_API_URL || 'https://api.topcoder-dev.com/v5',

  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token', // Auth0 credentials
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,

}
