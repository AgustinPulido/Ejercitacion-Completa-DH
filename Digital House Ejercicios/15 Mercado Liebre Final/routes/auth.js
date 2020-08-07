const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
var path = require('path');
let multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/avatars')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({ storage: storage })


router.get('/register', authController.register);
router.post('/register', upload.any(), authController.createUser);

router.get('/login', authController.login);
router.post('/login', authController.access);

router.get('/profile/:id', authController.profile)

module.exports = router;