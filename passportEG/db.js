const mongoose = require('mongoose')
const passport = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/express-mongo-passport')


// Create schema called user
const user_schema = mongoose.Schema({})

// Attach passport to the schema
//  Tell passport to use the email address as the username
user_schema.plugin(passport, { usernameField: 'email' })

console.log(user_schema)

// Create a user model from the User schema
module.exports = mongoose.model('User', user_schema)