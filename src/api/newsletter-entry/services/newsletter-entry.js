'use strict';

/**
 * newsletter-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-entry.newsletter-entry');
