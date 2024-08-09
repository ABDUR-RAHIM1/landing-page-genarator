
const Jwt = require("jsonwebtoken");

const authGuard = async (req, res, next) => {
    const tokenScrate = process.env.JWT_SECRET
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(404).json({
            message: "Header Missing"
        })
    }

    try {
        const token = authorization.split(" ")[1];
        const decoded = Jwt.verify(token, tokenScrate)
        const { _id, name, email } = decoded;
        req.user = decoded,
            next()
    } catch (error) {

        res.status(400).json({
            message: "Authentication Failed",
            error: error.message
        })
    }

}

module.exports = authGuard;