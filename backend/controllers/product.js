const Product = require("../models/product");
const fs = require("fs");

exports.read = async (req, res) => {
  try {
    //code
    const id = req.params.id;
    const getProduct = await Product.findOne({ _id: id }).exec();
    res.send(getProduct);
  } catch (err) {
    //error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    //code
    const allProduct = await Product.find({}).exec();
    res.send(allProduct);
  } catch (err) {
    //error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    //code
    let data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }
    const createProduct = await Product(data).save();
    res.send(createProduct);
  } catch (err) {
    //error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    let newData = req.body;

    if (typeof req.file !== "undefined") {
      newData.file = req.file.filename;
      await fs.unlink("./img/" + newData.fileOld, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Edit success");
        }
      });
    }

    const updateProduct = await Product.findOneAndUpdate({ _id: id }, newData, {
      new: true,
    }).exec();
    res.send(updateProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removeProduct = await Product.findOneAndDelete({ _id: id }).exec();

    if (removeProduct?.file) {
      await fs.unlink("./img/" + removeProduct.file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Remove success");
        }
      });
    }

    res.send(removeProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
