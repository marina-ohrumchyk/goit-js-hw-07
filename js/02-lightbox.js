import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const cardMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
        
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
     
      `;
  })
  .join('');

galleryConteiner.insertAdjacentHTML('afterbegin', cardMarkup);
galleryConteiner.addEventListener('click', galleryClick);

function galleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

new SimpleLightbox('.gallery a');
const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});