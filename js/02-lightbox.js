import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const boxEl = document.querySelector(".gallery");

const makeGalleryCard = ({
    preview,
    original,
    description,
}) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
</li >`;


const markup = galleryItems.map((el) => makeGalleryCard(el)).join("");
boxEl.insertAdjacentHTML("afterbegin", markup);


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData : "alt",
    animationSpeed : 250,
});

