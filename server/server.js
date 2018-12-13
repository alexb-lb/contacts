/** Setup environment */
require('../config/config.js');

/** Built-in modules */
const path = require('path');

/** Third-party modules */
const Hapi = require('hapi');

/** Project modules */
const initialPlugins = require('./plugins/initialPlugins');
const Logger = require('./models/Logger');


/** Server config defaulting to NODE_ENV or "development" */
const server = Hapi.server({
  port: process.env.HTTP_PORT,
  host: process.env.HOST,
  routes: {files: { relativeTo: path.join(__dirname, '..', 'client','public') }}
});

/** Server init */
const init = async () => {

  await initialPlugins(server);

  // static files like images
  server.route({method: 'GET', path: '/images/{file*}', handler: {directory: { path: './images', listing: true }}});

  // use React router instead of server routing for all paths
  server.route({method: 'GET', path: '/{route*}', handler: (request, h) => h.file('./app.html')});

  await server.start();
  Logger.createLog(`Server running at: ${server.info.uri}`);
};
init();

/** Error handlers */
process.on('unhandledRejection', err => {
  Logger.createLog(err);
  process.exit(1);
});

