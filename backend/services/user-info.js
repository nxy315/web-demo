/**
 * Created by nxy on 2018/5/23.
 */
/**
 * 用户业务操作
 */

const userModel = require('../models/user-info');
const userCode = require('../codes/user');

const user = {
  /**
   * 创建用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async createUser(user) {
    let resultData = await userModel.create(user);
    return resultData;
  },

  /**
   * 查找用户
   * @param  {object} formData 查找的表单数据
   * @return {object}               查找结果
   */
  async findUser(user) {
    let resultData = await userModel.findUser(user);
    return resultData;
  },

  /**
   * 删除用户
   * @param {string} ids 用户id|ids
   * @return {obejct|null}      返回结果
   */
  async deleteUser(ids) {
    let resultData = await userModel.deleteUser(ids);
    return resultData;
  },

  /**
   * 修改用户
   * @param {object} options  更新的数据
   * @return {obejct|null}      返回结果
   */
  async updateUser(options) {
    let resultData = await userModel.updateUser;
    return resultData;
  },

  /**
   * 用户登录
   * @param  {object} userInfo 用户信息
   * @return {object}          返回结果
   */
  async login(userInfo) {
    // let resultData;
    // return resultData;
  },
};

module.export = user;