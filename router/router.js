const router = require('express').Router();

const registerRouter = require('../auth/register-router');
const loginRouter = require('../auth/login-router');

const restricted = require('../middleware/restricted');


router.use('/register', registerRouter);
router.use('/login', loginRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: "api working"});
});

module.exports = router;