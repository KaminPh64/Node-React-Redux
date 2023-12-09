const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    console.log(token);
    if (!token) {
      return res.status(401).send("No token");
    }
    const decoded = jwt.verify(token, "jwtsecret");
    // res.send(decoded)
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.send("Token Invalid").status(500);
  }
};
