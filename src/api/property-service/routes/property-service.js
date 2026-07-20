'use strict';

/**
 * property-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::property-service.property-service');
