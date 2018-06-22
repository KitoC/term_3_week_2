const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('./db')
const session = require('express-session')

// Tell passport to use strategy for out User model
passport.use(User.createStrategy())


// Tell passport to use our User model to serialize/deserialize the user
// This is required in order to store the user in the session
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



module.exports passport