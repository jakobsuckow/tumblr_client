const url = "https://010101110.netlify.app/.netlify/functions/tumblr"

let images = []
fetch(url, { mode: "cors" })
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Network Error")
  })
  .then((data) => {
    console.log(JSON.stringify(data, null, 2))
    data.map((subArray) => {
      subArray.map((value) => {
        console.log(value)
        return images.push(value.url)
      })
    })
  })
  .catch((error) => {
    console.log(`There has been an error: ${error.message}`)
  })

let i = 0

const placeImage = (x, y) => {
  const nextImage = images[i]
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"

  document.body.appendChild(img)

  i = i + 1

  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener("click", (e) => {
  e.preventDefault()
  placeImage(e.pageX, e.pageY)
})
