const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });

exports.fileUpload = (req, res) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        res.end("image uploaded successfully");

    });
}