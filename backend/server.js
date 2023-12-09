const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const connect_db = require("./config/db");
//ต่อฐานข้อมูล
connect_db();

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Route 3 -> แนะนำให้สร้าง Route แบบที่นี้ เพราะเป็นการอ่าน Auto
const { readdirSync } = require("fs");
readdirSync("./routes").map((readdir) =>
  app.use("/v1", require("./routes/" + readdir))
);

app.listen(5000, () => console.log("Server is Running on port 5000"));
