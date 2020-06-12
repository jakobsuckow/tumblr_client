const url = "/tumblr"

<<<<<<< HEAD
let images = []
fetch(url, { mode: "cors" })
  .then((response) => {
=======
let images = [];
fetch(url, { mode: 'cors' })
  .then(response => {
>>>>>>> dea2dbf7c050f8c98732c84d8fd047f2b058bb8f
    if (response.ok) {
      return response.json()
    }
    throw new Error("Network Error")
  })
  .then((data) => {
    console.log(`inside: ${JSON.stringify(data, null, 2)}`)
  })
  .catch((error) => {
    console.log(`There has been an error: ${error.message}`)
  })

let i = 0

const placeImage = (x, y) => {
<<<<<<< HEAD
  const nextImage = images[i]
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
=======
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.height > img.width
    ? img.classList.add(`portrait`)
    : img.classList.add(`landscape`)

>>>>>>> dea2dbf7c050f8c98732c84d8fd047f2b058bb8f

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
