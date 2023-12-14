const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    console.log(token);
    if (!token) {
      return res.send("No token").status(401);
    }
    const decoded = jwt.verify(token, "jwtsecret");
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.send("Token Invalid").status(500);
  }
};
