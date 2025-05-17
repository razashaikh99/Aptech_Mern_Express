let express = require('express');

let rout = express.Router();
let userLogic = require('../Controller/userLogics');

rout.post("/user", userLogic.register);
rout.get("/get", userLogic.getAllUser);
rout.delete("/get/:id", userLogic.deleteUser);
rout.put("/get/:id", userLogic.updateRecord);
rout.post("/login", userLogic.userLogin);

module.exports = rout;
