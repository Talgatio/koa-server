const User = require('../postgres/driver/user');
const bcrypt = require('bcrypt');

exports.registration = async (ctx) => {
  const { body } = ctx.request;
  const hash = await bcrypt.hash(body.password, 10);
  const user = await User.createUser(body.email, hash);
  ctx.body = {
    email: user.email
  }
}

exports.login = async (ctx) => {
  const { body } = ctx.request;
  const user = await User.login(body.email);
  const compare = await bcrypt.compare(body.password, user.password);
  if (compare) {
    ctx.body = {
      success: true
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}
