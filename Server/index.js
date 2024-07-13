const express = require("express");
const cors = require('cors');
const connectDb = require("./Database");
const dotenv = require('dotenv');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
dotenv.config()
const Port = process.env.PORT || 9000;
const userRouter = require("./route/auth/auth.route");
const pageRouter = require("./route/page/page.route");

// routers 
app.use("/api/v2", userRouter)
app.use("/api/v2", pageRouter)


app.use("/api/landingpage", (req, res) => {
    res.send("landing page home route")
})


app.listen(Port, async () => {
    console.log('Server is running');

    try {
        await connectDb()
    } catch (error) {
        console.log("Database is not Connected : ", error)
    }

})