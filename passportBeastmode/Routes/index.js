const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('./Models/User');

router.get('/', () => {
    
});


router.get('/logout', () => {
   
    // res.redirect('/')
});

router.post('/login', () => {

});

router.post('/register', () => {

});


module.exports = router;
