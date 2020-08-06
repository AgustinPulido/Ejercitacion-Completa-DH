const indexController = {
    index: function(req, res, next) {
        res.render('index', {color: req.session.color});
      },
    
    color: function(req, res){
        if(req.session.color == undefined){
            req.session.color = 'white';
        }

        req.session.color = req.body.color;

        // if(req.body.recordar != undefined){
        //     res.cookie('recordar', req.session.color, {maxAge: 60000})
        // }

        res.redirect('/')
    },
    
    colorSelected: function(req, res){
        res.render('selected', {color: req.session.color})
    },
    
    colorDeselected: function(req, res){
        if(req.session.color != undefined){
            req.session.color = 'white';
        }
        res.redirect('/')
    },
    
};


module.exports = indexController;