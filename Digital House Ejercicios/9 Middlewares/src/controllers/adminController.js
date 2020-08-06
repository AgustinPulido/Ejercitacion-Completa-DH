var {check, validationResult, body} = require('express-validator');


const controller = {

    adminLogin: function(req, res, next){
        res.render('adminLogin')
    },

    adminAccess: function(req, res, next){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            
            res.render('profileAdmin')
        } else {
            res.render('adminLogin', {errors: errors.errors})
        }

    },
};


module.exports = controller;