'use strict';

/**
 * property-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::property-service.property-service');
