const mongoose = require("mongoose");



const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Is Connected")
    } catch (error) {
        console.log("Database not connect", error.message)
    }
}

module.exports = connectDb;