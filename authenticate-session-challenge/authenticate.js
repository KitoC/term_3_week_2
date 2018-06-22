
const parseurl = require('parseurl')


const authenticate = () => {

    
    
    
    
    return (req, res, next) => {

        if(!req.session.loggedIn) {
            req.session.loggedIn = false
        }
        const path = parseurl(req).pathname

        if (path === '/auth/login') {
            req.session.loggedIn = true
        } else if (path === '/auth/logout') {
            req.session.loggedIn = false
        }
        next()
    }
}

module.exports = {authenticate}