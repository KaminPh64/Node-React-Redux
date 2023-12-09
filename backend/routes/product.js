//http://localhost:5000/v1/product

const express = require("express");
const router = express.Router();

//Middleware
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

//นำ controller มาใช้
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../controllers/product");

// //นำ controller มาใช้
router.get("/product", list);
router.get("/product/:id", read);
router.post("/product", upload, create);
router.put("/product/:id",upload, update);
router.delete("/product/:id", remove);

module.exports = router;
