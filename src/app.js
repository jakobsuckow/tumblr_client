
let images = [
    "https://66.media.tumblr.com/51042487e5e284b582043b30727b975e/tumblr_pyz4nv1O331qfzymao1_1280.jpg",
    "https://66.media.tumblr.com/d693df0a49f8581c81da5043e3c6ec4c/tumblr_oblwotbO3D1qe0nlvo1_1280.jpg",
    "https://66.media.tumblr.com/005e610ae9006e1d3dc11d9d25942384/tumblr_oygajkbev31tt2o04o1_400.jpg",
    "https://66.media.tumblr.com/5570a8f9b3e7c04724fbd42a9836319c/tumblr_obtxozYfZC1uy7gmyo1_1280.jpg",
    "https://66.media.tumblr.com/c5208aea0d10d3f3d9fbbbd80fbdf80b/tumblr_obtxozYfZC1uy7gmyo2_1280.jpg",
    "https://66.media.tumblr.com/e5ff415aae981ad180f0a4a8df9720e8/tumblr_p65xc9DlqR1vnm7bio1_1280.jpg",
    "https://66.media.tumblr.com/c7e469d47162a6884e07699512ca6e55/tumblr_pjbirn5YEv1s5qhggo10_1280.jpg",
    "https://66.media.tumblr.com/93e692d53601994ecaae1f5067803b0e/tumblr_pk7hefWKYi1qe0nlvo1_1280.jpg",
    "https://66.media.tumblr.com/784cf300dcc13b0a46059ace05643482/tumblr_o9xisjI96i1vyt62no1_1280.jpg",
    "https://66.media.tumblr.com/2b8f70dc10975e1d8f27130f07459fb5/tumblr_oe3upboNkQ1r6xg0co1_500.jpg",
    "https://66.media.tumblr.com/54d917f5de4b9b5fd120ac81db8b83c8/tumblr_nd9288O0zM1qm2kg4o4_1280.jpg",
    "https://66.media.tumblr.com/aefcf493c3a28d7be73e118b5be4f107/tumblr_nd9288O0zM1qm2kg4o1_1280.jpg",
    "https://66.media.tumblr.com/6ee367982feab867cf04e2a236c3b816/tumblr_pmi0grdS0L1v9fn1io1_400.gif",
    "https://66.media.tumblr.com/23b612d848c8584076401cf23312ddb6/tumblr_p08pf5tppc1tv6b9no1_1280.jpg"


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
        return res.json()
    })
    then(function(data) {
        console.log(data)
    })
}

getData()

