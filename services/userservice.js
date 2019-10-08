var userHelper = require('../helper/userhelper');

const activationLink = "http://localhost:3000/users/activateMyAccount/";

async function registerNewUser(userInfo) {
    try {
        console.log("UserInfo: ", userInfo);
        userInfo = await generateActivationLink(userInfo)
        userInfo = await encryptPassword(userInfo)
        console.log("UserInfo: ", userInfo);
        return await userHelper.saveUser(userInfo)
    } catch (e) {
        console.log(`Error @ registerNewUser: ${e}`);
        throw e
    }
}

async function activateUserAccount(email) {
    console.log("Email: ", Buffer.from(email, 'base64'));
    return await userHelper.activateLink(Buffer.from(email, 'base64'))

}

async function login(loginInfo) {
    return await userHelper.login(loginInfo)
}

function generateActivationLink(userInfo) {
    var link = activationLink + Buffer.from(userInfo.email).toString('base64');
    userInfo['activationLink'] = link;
    console.log(userInfo)
    return userInfo;
}

function encryptPassword(userInfo) {
    var encryptPassword = Buffer.from(userInfo.password).toString('base64');
    userInfo['password'] = encryptPassword;
    console.log(userInfo)
    return userInfo;
}

module.exports = {
    registerNewUser,
    activateUserAccount,
    login
}

