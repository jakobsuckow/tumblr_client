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
    imagesLength = data.length
    data.map((subArray) => {
      subArray.map((value) => {
        return images.push(value)
      })
    })
  })
  .catch((error) => {
    console.log(`There has been an error: ${error.message}`)
  })
console.log(imagesLength)

let i = 0

const placeImage = (x, y) => {
  const nextImage = images[i].url
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  if (images[i].width >= images[i].height) {
    img.className += `landscape`
  } else {
    img.className += `portrait`
  }

  document.body.appendChild(img)

  i = i + 1

  if (i >= images.length) {
    i = 0
  }
}

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  )
}

alert(isMobileDevice())

const placeImageMobile = () => {
  const nextImage = images[i].url
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  if (images[i].width >= images[i].height) {
    img.className += `landscape`
  } else {
    img.className += `portrait`
  }
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

document.addEventListener("touchstart", () => {
  alert(`touched`)
})

// document.addEventListener("touchstart", (e) => {
//   e.preventDefault()
//   placeImageMobile()
// })
