const express = require('express')
const parseurl = require('parseurl')
const bodyParser = require('body-parser')
const session = require('express-session')
// const request = require('supertest')
const {authenticate} = require('./authenticate')


const app = express()


app.use(express.static('Assets'))

app.use(session({
    secret: 'foobarbat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: false}))

app.use('/secure/', (req, res, next) => {
    if (req.session.loggedIn) {   
        next()
    } else (
        res.status(403).send()
    )
})



app.get('/', (req, res) => {
    // res.status(200).send('Hello World!')
    res.sendFile(`${__dirname}/Assets/foo.html`)
})

app.get('/secure/welcome', (req, res) => {
    res.status(200).send('Secure Page')
}) 

app.get('/secure/dog', (req, res) => {
    res.send('<img src="/Images/dog.png" />')
})

app.get('/auth/login', (req, res) => {
    req.session.loggedIn = true
    res.status(200).send("You've logged in")
    // res.status(200).send(`
    // <form method="post" action="/auth/login">
    // <label>Username</label>
    // <input name="username" />
    // <label>Password</label>
    // <input name="password" />
    // </form>`)
})

app.get('/auth/logout', (req, res) => {
    req.session.loggedIn = false
    res.status(200).send("You've logged out")
})


app.listen(5000, () => {
    console.log('Sessions  on 5000')}
)


// TESTING

// describe('GET /', () => {
//     it('Displays hello world', () => {
//         request(app)
//         .get('/')
//             .expect('Content-Type', 'text/html; charset=utf-8')
//         .expect('Content-Length', '12')
//         .expect(200)
//         .end((err, res) => {
//             if (err) throw err
//         })

//     })
// }) 

// describe('GET /secure/welcome', () => {
//     it('Displays "secure page"', () => {
//         request(app)
//             .get('/secure/welcome')
//             .expect('Content-Type', 'text/html; charset=utf-8')
//             .expect('Content-Length', '11')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err
//             })

//     })
// }) 

// describe('GET /auth/login', () => {
//     it('Logs user in', () => {
//         request(app)
//             .get('/auth/login')
//             .expect('Content-Type', 'text/html; charset=utf-8')
//             .expect('Content-Length', '16')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err
//             })

//     })
// }) 

// describe('GET /auth/logout', () => {
//     it('Logs user out', () => {
//         request(app)
//             .get('/auth/logout')
//             .expect('Content-Type', 'text/html; charset=utf-8')
//             .expect('Content-Length', '17')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err
//             })

//     })
// }) 
// describe('GET /secure/dog', () => {
//     it('Shows a picure', () => {
//         request(app)
//             .get('/secure/dog')
//             .expect('Content-Type', 'text/html; charset=utf-8')
//             .expect('Content-Length', '89')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err
//             })

//     })
// }) 

