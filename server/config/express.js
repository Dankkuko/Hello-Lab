const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const path = require("path");

var cors = require("cors");
module.exports = function () {
  require("dotenv").config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === "production"
        ? ".env"
        : process.env.NODE_ENV === "development"
        ? ".env.dev"
        : process.env.NODE_ENV === "local"
        ? ".env.local"
        : "undefined"
    ),
  });

  const app = express();

  app.use(compression());

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(methodOverride());

  app.use(cookieParser());

  app.use(cors());
  // app.use(express.static(process.cwd() + '/public'));

  /* App (Android, iOS) */
  // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
  require("../src/app/User/userRoute")(app);
  require("../src/app/Schedule/scheduleRoute")(app);
  require("../src/app/Lab/labRoute")(app);
  require("../src/app/Search/searchRoute")(app);
  require("../src/app/LabNotice/noticeRoute")(app);
  require("../src/app/Mypage/mypageRoute")(app);
  require("../src/app/Qna/qnaRoute")(app);
  require("../src/app/LabMember/memberRoute")(app);
  require("../src/app/LabIntroduction/introductionRoute")(app);
  require("../src/app/Process/processRoute")(app);
  require("../src/app/Research/researchRoute")(app);
  require("../src/app/OpenLab/openRoute")(app);
  require("../src/app/LabReport/labReportRoute")(app);

  return app;
};
