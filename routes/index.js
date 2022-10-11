var express = require('express');
var router = express.Router();
const AuthController=require('../controller/auth')

/* GET home page. */
router.get('/',AuthController.mainpage);


router.get('/signup',AuthController.signup)
router.post('/signup',AuthController.signupprosceed)

router.get('/login',AuthController.loginui)
router.post('/login',AuthController.login)

router.get('/logout',AuthController.destroy)




module.exports = router;
