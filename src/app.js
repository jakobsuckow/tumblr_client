const url = "https://010101110.netlify.app/.netlify/functions/tumblr"

let images = []
let imagesLength = 0
fetch(url, { mode: "cors" })
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Network Error")
  })
  .then((data) => {
    data.map((subArray) => {
      imagesLength = subArray.length
      subArray.map((value) => {
        return images.push(value.url)
      })
    })
  })
  .catch((error) => {
    console.log(`There has been an error: ${error.message}`)
  })
console.log(imagesLength)

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
