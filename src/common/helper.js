/**
 * Contains generic helper methods
 */
const _ = require('lodash')
const axios = require('axios')
const config = require('config')
const qs = require('querystring')
const m2mAuth = require('tc-core-library-js').auth.m2m
const logger = require('./logger')

const ubahnM2MConfig = _.pick(config, ['AUTH0_URL', 'AUTH0_UBAHN_AUDIENCE', 'AUTH0_PROXY_SERVER_URL'])
const topcoderM2MConfig = _.pick(config, ['AUTH0_URL', 'AUTH0_TOPCODER_AUDIENCE', 'AUTH0_PROXY_SERVER_URL'])

const ubahnM2M = m2mAuth({ ...ubahnM2MConfig, AUTH0_AUDIENCE: ubahnM2MConfig.AUTH0_UBAHN_AUDIENCE })
const topcoderM2M = m2mAuth({ ...topcoderM2MConfig, AUTH0_AUDIENCE: topcoderM2MConfig.AUTH0_TOPCODER_AUDIENCE })

/**
 * Use this function to halt execution
 * js version of sleep()
 * @param {Number} ms Timeout in ms
 */
async function sleep (ms) {
  if (!ms) {
    ms = config.SLEEP_TIME
  }

  logger.debug(`Sleeping for ${ms} ms`)

  return new Promise(resolve => setTimeout(resolve, ms))
}

/* Function to get M2M token
 * (U-Bahn APIs only)
 * @returns {Promise}
 */
async function getUbahnM2Mtoken () {
  return ubahnM2M.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET)
}

/* Function to get M2M token
 * (Topcoder APIs only)
 * @returns {Promise}
 */
async function getTopcoderM2Mtoken () {
  return topcoderM2M.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET)
}

/**
 * Get Kafka options
 * @return {Object} the Kafka options
 */
function getKafkaOptions () {
  const options = { connectionString: config.KAFKA_URL, groupId: config.KAFKA_GROUP_ID }
  if (config.KAFKA_CLIENT_CERT && config.KAFKA_CLIENT_CERT_KEY) {
    options.ssl = { cert: config.KAFKA_CLIENT_CERT, key: config.KAFKA_CLIENT_CERT_KEY }
  }
  return options
}


module.exports = {
  getKafkaOptions,
  getTopcoderM2Mtoken,
  getUbahnM2Mtoken
}
