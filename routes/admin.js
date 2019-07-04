var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/',(req,res)=>{
    res.render('admin.ejs')
})

router.post('/', (req,res)=>{
    var uid = req.body.uid;
    var pass = req.body.pass;
    if(uid=='admin' && pass=='pass'){
        res.render('admin.ejs')
    }
    
})

module.exports =router;