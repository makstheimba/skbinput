const querystring = require('querystring');
const data = require('./src/kladr.json');

/**
 * api: /api/towns
 * params in query string
 * ?search: string
 * ?limit: number
 */

module.exports = {
  inline: true,
  port: 8000,
  contentBase: './src',
  proxy: [
    {
      context: ['/api/towns'],
      target: 'localhost',
      onProxyReq: (proxyReq, req, res) => {
        try {
          const params = querystring.parse(req._parsedUrl.query);
          const limit = params.limit || 10;

          console.log(`SEARCHIN FOR: ${params.search}`);
          console.log(`LIMIT: ${params.limit}`);

          if (!params.search) {
            res.end(JSON.stringify(data.slice(0, limit + 1)));
          } else {
            res.end(JSON.stringify(data.filter((item => item.City.startsWith(params.search))).slice(0, limit + 1)));
          }
          proxyReq.abort();
          return false;
        } catch (error) {
          console.log(error);
        }
      },
    },
  ],
};
