let exp = require("express");
let r = require("./Routes/route");
let db = require("./MongodbConnection");
require("dotenv").config();

let app = exp();
app.use("/", r)

db().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}/`);
    });
}).catch((error) => {
    console.log(error);
})
