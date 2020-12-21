const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt= require('bcryptjs')
const User = require("../models/User");

//route: POST api/users, description: register a user, access: public
router.post(
  "/",
  [
    check("name", "please add name").not().isEmpty(),
    check("email", "please inclide a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ msg: "User already exists" });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
