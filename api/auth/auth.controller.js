const authService = require('./auth.service');
const tokenService = require('../../services/token.service');
const userService = require('../user/user.service');
const passwordService = require('../../services/password.service');
const Auth = require('../../dataBase/Auth');
const httpStatuses = require('../../configs/responseStatuses');
async function authUser(req, res, next) {
  const { email = '', password = '' } = req.body;
  try {
    const userByEmail = await userService.getUserByParams({ email });

    if (!userByEmail) {
      throw new Error('User not found');
    }

    //check password
    await passwordService.comparePasswords(password, userByEmail.password);

    const tokenPair = tokenService.generateTokenPair({ email });

    await authService.insertNewTokenPair({ ...tokenPair, _user_id: userByEmail._id });

    res.status(httpStatuses.OK).json({ tokens: tokenPair, user: userByEmail });
  } catch (e) {
    next(e);
  }
}

async function refreshToken(req, res, next) {
  try {
    const refreshToken = req.token.token;

    tokenService.checkOauthToken(refreshToken, 'refresh');

    const tokenWithUser = await Auth.findOne({ refreshToken }).populate('_user_id');

    if (!tokenWithUser?._user_id?._id) {
      throw new Error('Token not valid');
    }

    const tokenPair = tokenService.generateTokenPair({ email: tokenWithUser._user_id.email });

    const newTokenPair = await Auth.findOneAndUpdate(
      { _id: tokenWithUser._id },
      { ...tokenPair, _user_id: tokenWithUser._user_id._id },
      { new: true },
    );

    res.status(httpStatuses.OK).json({ tokens: newTokenPair, user: tokenWithUser._user_id });
  } catch (e) {
    next(e);
  }
}

module.exports = { authUser, refreshToken };
