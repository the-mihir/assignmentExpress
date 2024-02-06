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

exports.fileUploader = (req, res) => {
    upload.single('photo')(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        res.end("File uploaded successfully");
    })
}