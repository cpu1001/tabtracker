const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = {
    register (req, res) {
        res.send({
            message: 'Hello ${req.body.email}! Your user was registered. Have fun!'
        })
    }
} 