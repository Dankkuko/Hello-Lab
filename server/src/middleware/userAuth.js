const secret_config = require("../../config/secret");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../../config/jwt");
const userProvider = require("../app/User/userProvider");
const userService = require("../app/User/userService");
module.exports = {
  async userAuth(req, res, next) {
    try {
      const accessToken = await verifyToken(req.cookies.access);
      const userId = req.cookies.userId;
      const retrieveFromUser = await userProvider.getTokenFromUser(userId);
      const getRefreshToken = retrieveFromUser.refreshToken;
      const refreshToken = verifyToken(getRefreshToken);

      const job = retrieveFromUser.job;
      req.userId = userId;
      if (accessToken === null) {
        if (refreshToken === null) {
          //토큰 모두 없음
          throw Error();
        } else {
          //accessToken만 만료
          const newAccessToken = jwt.sign(
            {
              id: userId,
            },
            secret_config.jwtsecret,
            {
              expiresIn: "15m",
              subject: job ? "professor" : "student",
            }
          );
          res.cookie("access", newAccessToken);
        }
      } else {
        //access token 존재, refresh token 만료
        if (refreshToken === null) {
          const newRefreshToken = jwt.sign(
            {
              id: userId,
            },
            secret_config.jwtsecret,
            {
              expiresIn: "24h",
              subject: "User",
            }
          );
          userService.updateToken(userId, newRefreshToken);
          res.cookie("userId", userId);
        }
      }
    } catch (e) {
      res.status(401).json({ isAuth: false, message: "유효하지 않은 토큰" });
      next(e);
    } finally {
      next();
    }
  },
};
