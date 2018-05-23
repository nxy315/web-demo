/**
 * Created by nxy on 2018/5/23.
 */
const router = require('koa-router')();
const userInfoController = require('../../controllers/user-info');

const routers = router
  .get('/user/getUserInfo', userInfoController.getLoginUserInfo)
  .post('/user/signIn', userInfoController.signIn)
  .post('/user/singUp', userInfoController.signUp);

module.exports = routers;