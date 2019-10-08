var express = require('express');
var router = express.Router();
var userService = require('../services/userservice');


/*POST login.*/
router.post('/login', function (req, res, next) {
  userService.login(req.body.loginInfo).then(isUser => {
    console.log(isUser)
    if (isUser) {
      res.json({ error: false, data: { loginSucces: isUser } });
    } else {
      res.json({ error: true, data: { loginSucces: isUser } });
    }
  })
})

/*POST to register user details. */
router.post('/register', async function (req, res, next) {
  userService.registerNewUser(req.body.userInfo).then(value => {
    console.log("Here ", value.get('activationLink'));
    res.json({ error: false, data: value });
  }).catch(err => {
    res.status(500).json({ error: true, data: { message: err.message } });
  })
})


/*Get to activate user account. */
router.get('/activateMyAccount/:value', async function (req, res, next) {
  console.log("Value: ", req.params.value);
  userService.activateUserAccount(req.params.value).then(isActive => {
    res.json({ error: false, data: { userAccount: isActive } });
  }).catch(err => {
    res.status(500).json({ error: true, data: { message: err } });
  })
})

module.exports = router;
