let user = require("../Collection/User")
let b = require("bcrypt")
let jwt = require("jsonwebtoken")
let node = require("nodemailer")
require("dotenv")

let EmailInfo = node.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL,
        pass:process.env.PASS_KEY
    }
})

let userFunction = {
    register: async function (req, res) {
        try {
            let userData = new user(req.body)
            let saveData = await userData.save();

            let emailData = {

            }
            res.status(200).json({
                message: "User Registered Successfully",
            })
        } catch (error) {
            console.log(error);
        }
    },
    getAllUser: async function (req, res) {
        try {
            let userRecord = await user.find().select("-password").sort({ "record_at": -1 });
            return res.status(200).json(userRecord)
        } catch (error) {
            res.status(501).json({ message: error.message });
        }
    },
    deleteUser: async function (req, res) {
        try {
            let { id } = req.params
            let findId = await user.findById(id)
            if (findId) {
                await user.findByIdAndDelete(findId)
                return res.status(200).json({ message: "User Delete SuccessFully" });
            }
        } catch (error) {
            res.status(501).json({ message: error.message });
        }
    },
    updateRecord: async function (req, res) {
        try {
            let { id } = req.params;
            let { name, email, gender, age } = req.body

            let id_exist = await user.findById(id);
            if (id_exist) {
                let updated_Record = {
                    name: name,
                    email: email,
                    age: age,
                    gender: gender
                }
                await user.findByIdAndUpdate(id, updated_Record)
                return res.status(200).json({ message: "User Updated SuccessFully" });
            }
        } catch (error) {
            res.status(501).json({ message: error.message });
        }
    },
    userLogin: async function (req, res) {
        try {
            let { email, password } = req.body
            let email_exist = await user.findOne({ email })

            if (!email_exist) {
                return res.status(404).json({ message: "Email Not Found" })
            }
            // let password_find = b.compareSync(password, email_exist.password);
            // if (!password_find) {
            //     return res.status(404).json({ message: "Password is Invalid" })
            // }

            let secure_data = jwt.sign({ id: email_exist.id }, "hunain", { expiresIn: "3h" })
            return res.status(201).json({ secure_data, user: { name: email_exist.name, email: email_exist.email } })
        } catch (error) {
            res.status(501).json({ message: error.message })
        }
    }

}

module.exports = userFunction;