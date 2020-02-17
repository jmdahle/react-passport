
const express = require('express')
const router = express.Router()
const User = require('../database/models/user')

// route: /user/
router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log(`user ${username} already exists`);
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            console.log('new user added')
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

module.exports = router