var express = require('express');
var User = require('../models/user');
var loginHelper = require('../helpers/loginHandler')


module.exports = function(passport){    
    var router = express.Router();

    router.get('/', function(req, res) {
        res.send('respond with a resource');
    });

    // show the login form
    router.get('/login', function(req, res) {
        res.render('login', { message: req.flash('loginMessage') });
    });

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/users/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // show the signup form
    router.get('/signup', function(req, res) {
        res.render('signup', { message: req.flash('signupMessage') });        
    });

    // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/users/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    router.get('/:userId', loginHelper.isLoggedIn, function(req, res) {    
        res.send('Hi there!');
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/users/login'
        })
    );


    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;

}