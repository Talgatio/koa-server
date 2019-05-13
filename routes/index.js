const Router = require('koa-router');
const validate = require('koa2-validation');

const router = new Router();

const { registration, login } = require('./controller');

const rules = require('./validator');

router.post('/registration', validate(rules.registration), registration);
router.post('/login', validate(rules.registration), login);

module.exports = router;
