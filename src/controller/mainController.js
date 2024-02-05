const fs = require("fs");


exports.HomePage = (req, res) => {
    fs.readFile("./src/view/index.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}


exports.AboutPage = (req, res) => {
    fs.readFile("./src/view/about.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}

exports.ContactPage = (req, res) => {
    fs.readFile("./src/view/contact.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}

exports.CreateFile = (req, res) => {
    fs.writeFile('demo.txt', 'hello world', (err) => {
        if (err) {
            console.log(err);
        }
        res.end("File created successfully");
    })

}

exports.UploadPage = (req, res) => {
    fs.readFile("./src/view/upload.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}


exports.getFiles = (req, res) => {

    fs.readdir('../uploads', function (err, files) {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            const imageList = files.filter(files => /\.(jpg|jpeg|png|gif)$/i.test(files));
            res.json(imageList);
        }
    });

}



