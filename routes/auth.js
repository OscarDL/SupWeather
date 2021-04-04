const express = require('express');

const { login, register, forgotpw, resetpw, userinfo, deleteUser } = require('../controllers/auth');

const router = express.Router();

router.route('/login').post(login);
router.route('/forgot').post(forgotpw);
router.route('/userinfo').get(userinfo);
router.route('/register').post(register);
router.route('/delete').delete(deleteUser);
router.route('/reset/:resetToken').put(resetpw);

module.exports = router;