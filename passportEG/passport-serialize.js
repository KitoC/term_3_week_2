//include Account model

const user = {
        serialize: (user, done) => {
            done(null, user.username)
        },
        deserialize: (username, done) => {
            Account.findOne({ 'username': username }, function (err, user) {
                done(err, user);
            })
    }
}


module.exports = user;