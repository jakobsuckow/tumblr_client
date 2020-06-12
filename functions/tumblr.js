const axios = require("axios")
require("dotenv").config()

exports.handler = function (event, context, callback) {
  function filter_array_values(arr) {
    arr = arr.filter(isEligible)
    return arr
  }

  function isEligible(value) {
    if (value !== false || value !== null || value !== 0 || value !== "") {
      return value
    }
  }
  const baseUrl = `https://api.tumblr.com/v2/blog/jakobsuckow.tumblr.com/posts?api_key=1JQBQQ6JXQ4RELfjxdtg0xcZ6ZQh0hdXXejkaZHYX77YezMcM4`
  const apiKey =
    process.env.TUMBLR_API_KEY ||
    `1JQBQQ6JXQ4RELfjxdtg0xcZ6ZQh0hdXXejkaZHYX77YezMcM4`
  const url = `${baseUrl}${apiKey}`

  // Send Response

  const send = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    })
  }
  // Perform API Call
  const getTumblr = async () => {
    const tumblr = await axios.get(baseUrl)
    const data = await tumblr.data.response.posts.map((post) => post.photos)
    const cleaned = filter_array_values(data)
    const newArray = cleaned.map((subArray) => {
      return subArray.map((value) => value.original_size)
    })
    send(newArray)
  }

  // Make sure Method is "GET"
  if (event.httpMethod == "GET") {
    getTumblr()
  }
}
