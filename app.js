// Core Module
const path = require("path");

// External Module
const express = require("express");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use((req,res,next) => {
  req.isLoggedIn = req.get("Cookie")?req.get("Cookie").split("=")[1]==='true' : false;
  next();
});
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!res.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://sahitya:helloroot123@sahitya.unfftxk.mongodb.net/staynest?appName=Sahitya",
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB: ", err);
  });
