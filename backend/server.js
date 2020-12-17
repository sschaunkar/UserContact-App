const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin-sachin:ra1isdead@cluster0.2glrp.mongodb.net/contactDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/", require("./UserRoute/UserRoute"));

app.listen(process.env.PORT || 3001, () => {
  console.log("Express Server is running on Port 3001");
});
