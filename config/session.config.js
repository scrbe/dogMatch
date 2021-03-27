require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo");

const { SESSION_SECRET, MONGODB_URI, NODE_ENV } = process.env;
console.log(MONGODB_URI);
console.log("NODE_ENV :>> ", NODE_ENV);

const isProduction = NODE_ENV === "production";
const sameSite = isProduction ? "none" : "lax";
module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 360000 * 24 * 14, secure: isProduction, sameSite },
      store: MongoStore.create({
        mongoUrl: MONGODB_URI,
        ttl: 360000 * 24 * 14,
      }),
    })
  );
};
