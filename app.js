const express = require("express");
const app = express();
const {indexRouter} = require('./routes/indexRouter.js');
const messageRouter = require('./routes/messageRouter.js');
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use("/new", messageRouter)
app.use("/", indexRouter);





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`My first Express app - listening on port ${port}!`));