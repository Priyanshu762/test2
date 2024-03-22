const express = require('express');
const { userRegister, userLogin, allUsers } = require('./controller');
const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get("/all", allUsers)

module.exports = router;