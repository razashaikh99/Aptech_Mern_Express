let user = require("../Collection/User")

let userFunction = {
    register: async function (req, res){
        try {
            let userData = new user (req.body)
            let saveData = await userData.save();
            res.status(200).json({
                message: "User Registered Successfully",
            })
        } catch (error) {
            console.log(error);
        }
    },
    getAllUser: async function (req, res){
        try {
            let userRecord = await user.find().select("-password").sort({"record_at": -1});
            return res.status(200).json(userRecord)
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },
    deleteUser: async function (req, res){
        try {
            let {id} = req.params
            let findId = await user.findById(id)
            if (findId) {
                await user.findByIdAndDelete(findId)
                return res.status(200).json({message: "User Delete SuccessFully"});
            }
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },
    updateRecord: async function (req, res){
        
    }
}

module.exports = userFunction;