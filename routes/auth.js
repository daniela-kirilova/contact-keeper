const express = require("express");
const router = express.Router();

//route: Get api/auth, description: get the logged user, access: private

router.get("/", (req, res) => {
  res.send("get logged in user");
});

//route: post api/auth,description: auth user and get token, access: public

router.get("/", (req, res) => {
    res.send("log in user");
  });
  
  

module.exports = router;
