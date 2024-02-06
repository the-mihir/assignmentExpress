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

exports.uploadPage = (req, res) => {
    fs.readFile("./src/view/upload-page.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}


