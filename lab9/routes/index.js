const passport=require('passport');
const express = require('express');

const constructorMethod = (app) => {

    app.get("/", function (req, res) {
        if(req.user) 
            res.redirect('/private');
        else
            res.render("user/login", { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', { successRedirect : '/private', failureRedirect : '/', failureFlash : true }));


    app.get('/private', function(req, res) {
        if(!req.user) 
            res.redirect('/');
        else
            res.render('user/private', { user : req.user });
    });

    app.get('/logout', 
        function(req, res) {
            req.logout();
            res.redirect('/');
        }
    );
    
     app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;
