const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");
const uploadController = require("../controller/uploadControler");


router.post("/upload", uploadController.FileUploder);
router.get("/", mainController.HomePage);
router.get("/about", mainController.AboutPage);
router.get("/contact", mainController.ContactPage);
router.get("/file-write", mainController.CreateFile);
router.get("/upload", mainController.UploadFile);






module.exports = router;