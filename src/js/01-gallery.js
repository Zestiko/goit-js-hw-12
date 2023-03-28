
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery.items';
console.log(galleryItems);

const gallery= document.querySelector('.gallery')
console.log(gallery);
const galleryItemsImages = galleryItems.map(({ original, preview, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"
  />
</a>`
}).join('');
gallery.innerHTML = galleryItemsImages;

// gallery.addEventListener('click', onGalleryImagesClick);
 
// function onGalleryImagesClick(evt) {
//    evt.preventDefault();
//    if (evt.target.nodeName !== 'IMG') {
//       return;
//    }
   

//    var lightbox = new SimpleLightbox('.gallery a', {
//       /* options */
//       captions: true,
//       captionDelay: 250,
//       captionSelector: 'img',
//       captionType: 'attr',
//       captionsData: 'alt',
      
       
//    });
// }
var lightbox = new SimpleLightbox('.gallery a', {
   captionDelay: 250,
   captionsData: 'alt',
   captions: true,
   captionSelector: 'img',
   captionType: 'attr',
   captionPosition:'bottom',
});
