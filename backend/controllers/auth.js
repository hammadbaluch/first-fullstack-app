const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { createUser, findUser } = require("../model/user");
const { SECRET_KEY } = require("../data/key");

exports.createUser = async (email, password) => {
  try {
    const uid = Date.now();
    await createUser(email, password, uid);
  } catch (error) {
    throw error;
  }
};
exports.login = async (email, password) => {
  try {
    const user = await findUser(email);
    const result = await bcrypt.compare(password, !!user&&user.password)
    if (result){
        const token = jwt.sign({ email }, SECRET_KEY);
        return {token}
    }else{
        return "Invalid Email or Password"
    }
  } catch (error) {
    throw error;
  }
};
