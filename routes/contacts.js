const express = require("express");
const router = express.Router();

//route: get api/contacts, description: get users contacts, access: private

router.get("/", (req, res) => {
  res.send("get contacts");
});

//route: post api/contacts, description: add contacts, access: private

router.post("/", (req, res) => {
    res.send("add contacts");
  });
  
  //route: put api/contacts, description: update contacts, access: private

router.put("/:id", (req, res) => {
    res.send("update contacts");
  });
  
  //route: delete api/contacts, escription: delete contacts, access: private

router.delete("/:id", (req, res) => {
    res.send("delete contacts");
  });
  

module.exports = router;
