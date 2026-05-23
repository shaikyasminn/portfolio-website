const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shaikyasmin264_db_user:<skyashu264>@cluster0.tgp2osf.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});