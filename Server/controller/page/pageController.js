const errorHelpers = require("../../helpers");
const userModal = require("../../model/auth/auth.modal");

const createPage = async (req, res) => {
    const { userId, email, username } = req.user;

    try {

        const isUser = await userModal.findOne({ _id: userId })

        if (!isUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const newPage = req.body

        isUser.pages.push(newPage);
        await isUser.save();
        res.json({
            message: "create Successful",
            ok: true
        })
    } catch (error) {
        console.log(error)
        errorHelpers(res, error)
    }
}


const getPage = async (req, res) => {
    const { username, pageId } = req.params;

    try {
        const user = await userModal.findOne({ username, });
         
        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        const pageById = user.pages.id(pageId);

        if (!pageById) {
            return res.status(404).json({ message: 'Page not found' });
        }

        res.status(200).json(pageById)

    } catch (error) {
        errorHelpers(res, error)
    }
}

module.exports = { createPage, getPage }