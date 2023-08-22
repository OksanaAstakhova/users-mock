const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000
const DOMAIN = process.env.DOMAIN
const JOB_DURATION = 30 * 1000
const APP_ID = process.env.APP_ID
const SECRET = process.env.SECRET

module.exports = {
  PORT, DOMAIN, JOB_DURATION, APP_ID, SECRET
}