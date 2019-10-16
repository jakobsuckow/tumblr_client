const axios = require('axios')
require('dotenv').config()

exports.handler = function (event, context, callback) {
    const baseUrl = `https://api.tumblr.com/v2/blog/jakobsuckow.tumblr.com/posts?api_key=1JQBQQ6JXQ4RELfjxdtg0xcZ6ZQh0hdXXejkaZHYX77YezMcM4`
    const apiKey = process.env.TUMBLR_API_KEY || `1JQBQQ6JXQ4RELfjxdtg0xcZ6ZQh0hdXXejkaZHYX77YezMcM4`
    const url = `${baseUrl}${apiKey}`

    // Send Response 

    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }
    // Perform API Call
    const getTumblr = () => {
        axios.get(baseUrl)
        .then(res => send(res.data.response.posts))
        .catch(err => send(err))
    }

    // Make sure Method is "GET"
    if(event.httpMethod == 'GET') {
        getTumblr()
    }
}

