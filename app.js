require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/middleware.config")(app);
require("./config/session.config")(app);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const dogRoutes = require("./routes/dog.routes");
app.use("/api/dogs", dogRoutes);

app.listen(process.env.PORT, () => console.log("server running"));
