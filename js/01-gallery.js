import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(createCard);

const galleryConteiner = document.querySelector('.gallery');
const cardMarkup = createCard(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend', cardMarkup);
galleryConteiner.addEventListener('click', galleryClick);

function createCard(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

function galleryClick(evt) {
  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
      `);
  instance.show();
}
