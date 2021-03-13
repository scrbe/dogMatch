const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const origin = "http://localhost:3000";
const corsConfig = { origin: [origin], credentials: true };

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(cors(corsConfig));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};
