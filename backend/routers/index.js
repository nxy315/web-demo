/**
 * Created by nxy on 2018/5/23.
 */
const router = require('koa-router')();

const api = require('./api/user-api');

router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;