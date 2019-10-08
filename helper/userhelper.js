var User = require('../models/users');

async function saveUser(userDetails) {
    let val = new User;
    try {
        val = await User.forge(userDetails).save();
        console.log(val.toJSON());
    } catch (e) {
        console.log(`Failed to save data: ${e}`);
    } finally {
        return val;
    }
}

async function activateLink(email) {
    let val = new User;
    try {
        console.log(email.toString())
        val = await User.forge({ email: email })
            .fetch({ require: true })
        val = await val.save({
            active: true
        })
        console.log(val.toJSON());
        return val.get('active')
    } catch (e) {
        console.log(`Failed to activate link: ${e}`);
        return false
    }
}

async function login(loginInfo) {
    let val = new User;
    try {
        val = await User.forge({
            email: loginInfo.email,
            password: Buffer.from(loginInfo.password).toString('base64')
        }).fetch({ require: true })
        console.log(val.toJSON())
        if (val.get('active')) {
            return true
        } else {
            return false
        }
    } catch (e) {
        console.log(`Failed @ login: ${e}`);
        return false
    }
}

module.exports = {
    saveUser,
    activateLink,
    login
}