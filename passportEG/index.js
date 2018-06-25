const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('./db')
const user = require('./passport-serialize')



const app = express()

// Use JSON body parser (for POST requests)
app.use(bodyParser.json())


// Tell passport to use strategy for out User model
passport.use(User.createStrategy())

// Tell passport to use our User model to serialize/deserialize the user
// This is required in order to store the user in the session
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())





// Create session - THIS HAS TO BE CALLED BEFORE PASSPORT.SESSION()!!!
app.use(session({
    secret: 'foobarbat',
    resave: false,
    saveUninitialized: false
}))

// Initialize passport and connect it to the session
app.use(passport.initialize())
app.use(passport.session())



app.get('/', (req, res) => {
    console.log(req.user || 'No user assigned')
    res.send(`You are logged ${req.user ? 'in as ' + JSON.stringify(req.user) : 'out'}`)
})


app.post('/register', (req, res) => {
    User.register(new User({ email: req.body.email, }), req.body.password, (err) => {
        // If registration failed
        if (err) {
            console.log(err)
            return res.status(500).send(err.message)
        }

        // Registration was successful. New user now exists in db with hashed pw.
        // Log the new user in
        // Authenticate returns a function, which we will store in "fn"
        const fn = passport.authenticate('local')

        // Call the "fn" function
        fn(req, res, () => {
            
            res.redirect('/')
        })

    })
})

app.post('/login', passport.authenticate('local'), (req, res) => {
    // Will only happen if passport.authenticate is successful
    console.log(req.user)
    res.redirect('/')
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})
// listen
app.listen(6000, () =>{
    console.log('Listening on port 6000')
})