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
async function processSync(message) {
  try {
    const { handle } = message.payload
    const tcToken = await helper.getTopcoderM2Mtoken()
    const member = await helper.getMember(handle, tcToken)
    const location = member.homeCountryCode || member.competitionCountryCode || null
    const payload = {
      id : member.id,
      handle: handle,
      firstName : member.firstName,
      lastName: member.lastName,
      email: member.email,
      country : {
        isoAlpha3Code: location
      },
      active : (member.status === 'ACTIVE') ? true : false 
    }
    await postEvent(config.PUBLISH_TOPIC, payload, tcToken)
  } catch (e) {
    logger.error(`unable to process the message, error : ${JSON.stringify(e)}`)
  }

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
