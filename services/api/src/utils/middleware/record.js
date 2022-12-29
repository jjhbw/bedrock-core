// Records API requests/responses to OpenApi definition.

const { recordRequest } = require('../openapi');

async function record(ctx, next) {
  if (ctx.get('Api-Record')) {
    await next();
    await recordRequest(ctx);
  } else {
    return await next();
  }
}

module.exports = record;
