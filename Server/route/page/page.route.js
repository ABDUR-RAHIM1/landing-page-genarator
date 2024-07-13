const { getAllPages, createPage, getPageById } = require("../../controller/page/page.controller");
const authGuard = require("../../midlewere/authGuard")
const router = require("express").Router();

router.get("/page/all/:username", authGuard, getAllPages);
router.get("/page/one/:username/:pageId", authGuard, getPageById);
router.post("/page/create", authGuard, createPage)


module.exports = router;