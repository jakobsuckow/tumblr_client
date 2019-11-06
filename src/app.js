const url =
  "https://api.tumblr.com/v2/blog/jakobsuckow.tumblr.com/posts?api_key=1JQBQQ6JXQ4RELfjxdtg0xcZ6ZQh0hdXXejkaZHYX77YezMcM4";

let images = [];
fetch(url, {mode: 'cors'})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network Error");
  })
  .then(data => {
    console.log(`inside: ${JSON.stringify(data.response.posts, null, 2)}`);
    data.response.posts.map(entry => {
      return images.push(entry.photos[0].original_size.url);
    });
  })
  .catch(error => {
    console.log(`There has been an error: ${error.message}`);
  });
console.log(`Outisde: ${JSON.stringify(images, null, 2)}`);

let i = 0;

const placeImage = (x, y) => {
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";

  document.body.appendChild(img);

  i = i + 1;

  if (i >= images.length) {
    i = 0;
  }
};

document.addEventListener("click", e => {
  e.preventDefault();
  placeImage(e.pageX, e.pageY);
});
