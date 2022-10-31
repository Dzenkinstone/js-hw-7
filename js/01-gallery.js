import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);
console.log(instance);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const collection = galleryItems
  .map(
    (item) =>
      `<div class ="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`
  )
  .join("");
gallery.innerHTML = collection;

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  instance.show();
  window.addEventListener("keydown", onKeyDown);
  function onKeyDown(event) {
    if (event.code === "Escape") {
      return instance.close();
    }
  }
}
