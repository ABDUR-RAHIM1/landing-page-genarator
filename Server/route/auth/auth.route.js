const { getAllUsers, registerUser, loginUser, deleteUser, getOneUser } = require("../../controller/auth/auth.controller");
const authGuard = require("../../midlewere/authGuard");

const router = require("express").Router();

router.get("/user/all", getAllUsers)
router.get("/user/one", authGuard, getOneUser)
router.post("/user/register", registerUser)
router.post("/user/login", loginUser)
router.delete("/user/delete/:id", deleteUser)

// for test




module.exports = router