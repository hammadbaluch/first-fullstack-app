const express = require("express");
const { getTodo, addTodo } = require("../controllers/todo");
const { createUser, login } = require("../controllers/auth");
const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    await createUser(req.body.email, req.body.password);
    res.send("User Successfully Created");
  } catch (error) {
    res.send("User creation UnSuccessfull");
  }
});
router.post("/login", async (req, res) => {
  try {
    const resp = await login(req.body.email, req.body.password);
    res.send(resp);
  } catch (error) {
    res.send("Error Detected");
  }
});
module.exports = router;
