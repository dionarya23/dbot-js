require('dotenv').config()
var axios = require('axios')
module.exports = {
    get_response: function (msg, callback) {
        axios.get(`${process.env.URL_BOT}${msg}`)
        .then(result => callback(null, result))
        .catch(err => callback(err, null))
    }
}