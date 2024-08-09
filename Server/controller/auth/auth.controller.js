const errorHelpers = require("../../helpers");
const userModal = require("../../model/auth/auth.modal")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//  for author /admin
const getAllUsers = async (req, res) => {
    try {
        const users = await userModal.find().select("-password");
        res.status(200).json(users)
    } catch (error) {
        errorHelpers(res, error)
    }
}


const getOneUser = async (req, res) => {
    const { userId } = req.user;
    try {
        const users = await userModal.findOne({ _id: userId }).select("-password");
        res.status(200).json(users)
    } catch (error) {
        errorHelpers(res, error)
    }
}


const registerUser = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;

        const matchUsername = await userModal.findOne({ username })
        const matchEmail = await userModal.findOne({ email });

        //  password hasing
        const hashPassword = await bcrypt.hash(password, 10)

        if (matchUsername) {
            return res.status(400).json({
                message: "username Already Exist"
            })
        }
        if (matchEmail) {
            return res.status(400).json({
                message: "Email Already Exist"
            })
        }

        const newUser = userModal({
            username,
            name,
            email,
            password: hashPassword
        });

        const user = await newUser.save()

        res.status(201).json({
            message: "User Register succesful",
        })
    } catch (error) {
        errorHelpers(res, error)
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const matchEmail = await userModal.findOne({ email });



        if (matchEmail) {
            //  compair password 
            const comparePass = await bcrypt.compare(password, matchEmail.password);

            if (comparePass) {

                const tokenInfo = {
                    userId: matchEmail._id,
                    username: matchEmail.username,
                    email: matchEmail.email
                };
                const token = jwt.sign(tokenInfo, process.env.JWT_SECRET)


                res.status(200).json({
                    message: "Login Succesful",
                    user: tokenInfo,
                    token
                })
            } else {
                return res.status(400).json({
                    message: "Invalid Credential",
                })
            }
        } else {
            return res.status(400).json({
                message: "Invalid Credential",
            })
        }

    } catch (error) {
        errorHelpers(res, error)
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userModal.findByIdAndDelete({ _id: id });
        if (deleteUser) {
            res.status(200).json({
                message: "Delete succesfull",
            })
        } else {
            res.status(200).json({
                message: "User Not Found!",
            })
        }
    } catch (error) {
        errorHelpers(res, error)
    }
}



module.exports = { getAllUsers, getOneUser, registerUser, loginUser, deleteUser }