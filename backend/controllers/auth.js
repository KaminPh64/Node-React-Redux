const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    //code
    // 1.CheckUser
    const { name, password } = req.body;
    let user = await User.findOne({ name });
    if (user) {
      return res.send("User Already Exists!!!").status(400);
    }
    // 2.Encrypt
    const salt = await bcrypt.genSalt(10);
    user = new User({
      name,
      password,
    });
    user.password = await bcrypt.hash(password, salt);
    // 3.Save
    await user.save();
    res.send("Register Success!!");
  } catch (err) {
    //code
    console.log(err);
    res.send("Server Error").status(500);
  }
};

exports.login = async (req, res) => {
  try {
    //code
    // 1. Check User
    const { name, password } = req.body;
    let user = await User.findOneAndUpdate({ name }, { new: true });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.send("Password Invalid!!!").status(400);
      }
      // 2. Payload
      let payload = {
        user: {
          name: user.name,
          role: user.role,
        },
      };
      // 3. Generate
      jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.send("User not found!!!").status(400);
    }
  } catch (err) {
    //code
    console.log(err);
    res.send("Server Error").status(500);
  }
};

exports.currentUser = async (req, res) => {
  try {
    //code
    console.log("currentUser", req.user);
    let user = await User.findOne({ name: req.user.name })
      .select("-password")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};
