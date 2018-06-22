const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')
const request = require('supertest')
const {authenticate} = require('./authenticate')
const app = express()



app.use(session({
    secret: 'foobarbat',
    resave: false,
    saveUninitialized: true
}))

app.use(authenticate())

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/secure/welcome', (req, res) => {
    if(req.session.loggedIn) {
        res.status(200).send('Secure Page')
    } else (
        res.status(401)
    )
}) 

app.get('/auth/login', (req, res) => {
    res.status(200).send(`
    <form method="post" action="/auth/login">
    <input name="username"
    </form>`)
})

app.get('/auth/logout', (req, res) => {
    res.status(200).send("You've logged out")
})

app.get('/secure/dog', (req, res) => {
    if (req.session.loggedIn) {
        res.send('<img src="http://i0.kym-cdn.com/entries/icons/original/000/010/346/gdggfjjgfjgfgg.png" />')
    } else (
        res.status(401)
    )
})


app.listen(5000, () => {
    console.log('Poop  on 5000')}
)


// TESTING

describe('GET /', () => {
    it('Displays hello world', () => {
        request(app)
        .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8')
        .expect('Content-Length', '12')
        .expect(200)
        .end((err, res) => {
            if (err) throw err
        })

    })
}) 

describe('GET /secure/welcome', () => {
    it('Displays "secure page"', () => {
        request(app)
            .get('/secure/welcome')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Content-Length', '11')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })

    })
}) 

describe('GET /auth/login', () => {
    it('Logs user in', () => {
        request(app)
            .get('/auth/login')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Content-Length', '16')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })

    })
}) 

describe('GET /auth/logout', () => {
    it('Logs user out', () => {
        request(app)
            .get('/auth/logout')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Content-Length', '17')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })

    })
}) 
describe('GET /secure/dog', () => {
    it('Shows a picure', () => {
        request(app)
            .get('/secure/dog')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Content-Length', '89')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })

    })
}) 

