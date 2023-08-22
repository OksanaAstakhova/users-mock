const {APP_ID, SECRET} = require("../data/config");

const checkAuth = (authorization) => {
  const b64auth = authorization.split(' ')[1]
  const [appId, secret] = Buffer.from(b64auth, 'base64').toString().split(':')
  return appId === APP_ID && secret === SECRET
}

module.exports = {
  checkAuth
}