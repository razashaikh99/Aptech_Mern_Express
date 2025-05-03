let express = require('express');

let rout = express.Router();
let userLogic = require('../Controller/userLogics');

rout.post("/user", userLogic.register);
rout.get("/get", userLogic.getAllUser);
rout.delete("/get/:id", userLogic.deleteUser);

module.exports = rout;
