import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const collection = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a>`
  )
  .join("");
gallery.innerHTML = collection;

new SimpleLightbox(".gallery a", {});
