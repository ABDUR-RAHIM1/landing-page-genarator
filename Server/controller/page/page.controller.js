
const errorHelpers = require("../../helpers");
const pageModel = require("../../model/page/page.model");


// verify on jwt token and send actual user's page
const getAllPages = async (req, res) => {
    const { userId } = req.user;
    const { username } = req.params;
   
    try {
        const pages = await pageModel.find({ userId, urlName: username });
        res.status(200).json({
            message: "All Pages",
            totalPage: pages.length,
            pages
        });
    } catch (error) {
        errorHelpers(res, error);
    }
};


// actual page by username and ID
const getPageById = async (req, res) => {
    const { userId } = req.user;
    const { username, pageId } = req.params;

    try {
        const page = await pageModel.findOne({ userId, urlName: username, _id: pageId });
        res.status(200).json({
            message: "Page",
            page
        });
    } catch (error) {
        errorHelpers(res, error);
    }
};




const createPage = async (req, res) => {

    const { user } = req;

    try {
        const newPageData = {
            ...req.body,
            userId: user.userId,
            urlName: user.username,
            email: user.email,
        };
        const newPage = pageModel(newPageData);
        const page = await newPage.save();
        res.status(201).json({
            message: "Your Page Created Successfully",
            page
        })
    } catch (error) {
        errorHelpers(res, error)
    }
}


module.exports = { getAllPages, getPageById, createPage }