var express = require('express')
var app = express()
var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');
require('dotenv/config');
var imgModel = require('./models/images');

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// Set EJS as templating engine 
app.set("view engine", "ejs");

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

app.post('/', upload.single('image'), (req, res, next) => {
  
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

var port = process.env.PORT || '5001'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})