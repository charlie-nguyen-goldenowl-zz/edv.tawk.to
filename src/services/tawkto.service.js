const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const TawkTo = require('../models/tawkto.model');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

const saveHook = async (hookBody) => {
  //   if (await User.isEmailTaken(hookBody.email)) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  //   }
  const saved = await TawkTo.create(hookBody);
  return saved;
};
module.exports = {
  saveHook,
};
