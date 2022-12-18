import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

function createMarkupImage(array) {
  const markup = array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
  return markup;
}
galleryDiv.insertAdjacentHTML('beforeend', createMarkupImage(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: `bottom`,
  captionDelay: 250,
  fadeSpeed: 350,
});

console.log(galleryItems);
