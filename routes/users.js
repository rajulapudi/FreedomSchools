var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/',(req,res)=>{
    res.render('user.ejs')
})

router.post('/', (req,res)=>{
    var uid = req.body.uid;
    var pass = req.body.pass;
    if(uid=='user' && pass=='pass'){
        res.render('user.ejs')
    }
})

router.post('/module', (req,res)=>{

    var mod1 = Number(req.body.mod1||0);
    var mod2 = Number(req.body.mod2||0);
    var mod3 = Number(req.body.mod3||0);
    var mod4 = Number(req.body.mod4||0);
    var mod5 = Number(req.body.mod5||0);
    var mod6 = Number(req.body.mod6||0);
    var mod7 = Number(req.body.mod7||0);
    var mod8 = Number(req.body.mod8||0);
    var mod9 = Number(req.body.mod9||0);
    var mod10 = Number(req.body.mod10||0);


    var module_completion = Number(mod1+mod10+mod2+mod3+mod4+mod5+mod6+mod7+mod8+mod9);
    var mod_percentage = module_completion*10

    res.send(`${mod_percentage}`);
    
})

module.exports =router;


