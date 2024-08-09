const { mongoose } = require("mongoose");
const pageSchema = require("../page/pageModel");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pages: [pageSchema]
});

const userModal = mongoose.model('People', userSchema);

module.exports = userModal;