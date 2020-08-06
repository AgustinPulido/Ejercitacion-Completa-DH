function adminLogin(req, res, next){

    if(req.params.name != 'Ada' || req.params.name != 'Greta' || req.params.name != 'Vim' || req.params.name != 'Tim'){

        res.render('No tiene los privilegios')

    };

    next()
}

module.exports = adminLogin;