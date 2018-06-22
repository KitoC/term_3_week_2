const parseurl = require('parseurl')
const countViews = (startValue) => {

    return (req, res, next) => {
        // req.session.views = (req.session.views || (startValue || 0)) + 1
        if(!req.session.views){
            req.session.views = {}
        }
        const path = parseurl(req).pathname
        console.log(parseurl(req))
        req.session.views[path] =  (req.session.views[path] || (startValue || 0)) + 1
        console.log(req.session.views, 'use')
        next()
    }
}

module.exports = { countViews }