require('dotenv').config()
var axios = require('axios')
module.exports = {
    get_response: function (msg, callback) {
        axios.get(`https://chatbot-indo.herokuapp.com/get/${msg}`)
        .then(result => callback(null, result))
        .catch(err => callback(err, null))
    }
}