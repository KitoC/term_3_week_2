const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')

const app = express()
const { countViews } = require('./countViews')

app.use(session({
    secret: 'foobarbat',
    resave: false,
    saveUninitialized: true
}))

app.use(countViews())

// "user" triggers on EVERY request (POST, GET, DELETE, PUT)

app.get('/foo', (req, res) => {
    res.send(`You view this page ${req.session.views['/foo']} times`)
    console.log(req.session.views, 'get')
})

app.get('/bar', (req, res) => {
    res.send(`You view this page ${req.session.views['/bar']} times`)
    console.log(req.session.views, 'get')
})

app.listen(3333, () => {
    console.log('App listening on 3333')
})