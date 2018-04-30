const { default: config } = require('nextein/config');

module.exports = config({
  exportPathMap: () => ({
    '/projects': { page: '/projects' },
    '/presentations': { page: '/presentations' },
    '/volunteering': { page: '/volunteering' },
    '/about': { page: '/about' }
  })
});
