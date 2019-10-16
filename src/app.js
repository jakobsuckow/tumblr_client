
let images = [
    "https://66.media.tumblr.com/51042487e5e284b582043b30727b975e/tumblr_pyz4nv1O331qfzymao1_1280.jpg",
    "https://66.media.tumblr.com/d693df0a49f8581c81da5043e3c6ec4c/tumblr_oblwotbO3D1qe0nlvo1_1280.jpg",
    "https://66.media.tumblr.com/005e610ae9006e1d3dc11d9d25942384/tumblr_oygajkbev31tt2o04o1_400.jpg",
    "https://66.media.tumblr.com/5570a8f9b3e7c04724fbd42a9836319c/tumblr_obtxozYfZC1uy7gmyo1_1280.jpg",
    "https://66.media.tumblr.com/c5208aea0d10d3f3d9fbbbd80fbdf80b/tumblr_obtxozYfZC1uy7gmyo2_1280.jpg",
    "https://66.media.tumblr.com/e5ff415aae981ad180f0a4a8df9720e8/tumblr_p65xc9DlqR1vnm7bio1_1280.jpg"

]


let i = 0; 

const placeImage = (x,y) => {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.left = x + 'px'
    img.style.top = y + 'px'

    document.body.appendChild(img)

    i = i + 1

    if(i >= images.length) {
        i=0
    }
}

document.addEventListener("click", (e) => {
    e.preventDefault()
    placeImage(e.pageX,e.pageY)
})


function getData() {
    fetch('https://010101110.netlify.com/.netlify/functions/getTumblr')
    .then(function(res) {
        console.log(res)
    })
}

getData()

