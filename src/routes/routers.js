const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");
const fileControler = require("../controller/fileControler");




router.get("/", mainController.HomePage);
router.get("/about", mainController.AboutPage);
router.get("/contact", mainController.ContactPage);
router.get("/file-write", mainController.CreateFile);
router.get("/upload-page.html", mainController.uploadPage);
router.post('/upload', fileControler.fileUploader);





module.exports = router;