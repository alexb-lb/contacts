const serve = require('inert');

const initialPlugins = (server) =>  {
  return Promise.all([
    server.register(serve),
  ])
};

module.exports = initialPlugins;