const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.name) {
        strapi.log.debug("beforeCreate")
        data.slug = slugify(data.name, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      
      if (data.name) {
        strapi.log.debug("beforeUpdate")
        data.slug = slugify(data.name, {lower: true});
      }
    },
  },
};
 