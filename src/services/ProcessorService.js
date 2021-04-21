/**
 * Processor Service
 */

const _ = require('lodash')
const Joi = require('@hapi/joi')
const config = require('config')
const logger = require('../common/logger')
const helper = require('../common/helper')

/**
 * Process kafka message
 * @param {Object} message the kafka message
 * @returns {Promise}
 */
async function processSync (message) {
  const { handle } = message.payload
  const tcToken = await helper.getTopcoderM2Mtoken()
  const ubToken = await helper.getUbahnM2Mtoken()
}

processSync.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    payload: Joi.object().keys({
      handle: Joi.string().required(),
    }).required().unknown(true)
  }).required()
}

module.exports = {
  processSync
}

logger.buildService(module.exports)
