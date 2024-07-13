const { getAllUsers, registerUser, loginUser, deleteUser } = require("../../controller/auth/auth.controller");

const router = require("express").Router();

router.get("/user/all", getAllUsers)
router.post("/user/register", registerUser)
router.post("/user/login", loginUser)
router.delete("/user/delete/:id", deleteUser)


module.exports = router