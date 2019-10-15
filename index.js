require('dotenv').config()
const baseUrl = `api.tumblr.com/v2/blog/jakobsuckow.tumblr.com/posts?api_key=`
const apiKey = process.env.TUMBLR_API_KEY
const url = `${baseUrl}${apiKey}`

