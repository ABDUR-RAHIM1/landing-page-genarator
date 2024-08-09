// const { getAllPages, createPage, getPageById } = require("../../controller/page/page.controller");
const { createPage, getPage } = require("../../controller/page/pageController");
const authGuard = require("../../midlewere/authGuard")
const router = require("express").Router();

// router.get("/page/all/:username", authGuard, getAllPages);
// router.get("/page/one/:username/:pageId", getPageById);
// router.post("/page/create", authGuard, createPage)

// router.get("/page/all/:username", authGuard, getAllPages);
// router.get("/page/one/:username/:pageId", getPageById);
router.post("/page/create", authGuard, createPage)
router.get("/page/one/:username/:pageId", getPage)


module.exports = router;