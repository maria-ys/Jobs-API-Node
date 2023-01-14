const express = require('express');
const router = express.Router();

const {login, register} = require('../controllers/auth')

router.post('/register', register);
router.get('/log', (req, res)=>{
    res.json({msg: "logged in"});
})
router.post('/login', login);

module.exports = router;