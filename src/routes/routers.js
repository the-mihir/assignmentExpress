const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");




router.get("/", mainController.HomePage);
router.get("/about", mainController.AboutPage);
router.get("/contact", mainController.ContactPage);
router.get("/file-write", mainController.CreateFile);
router.get("/upload-page.html", mainController.uploadPage);









module.exports = router;