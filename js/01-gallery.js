import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxEl = document.querySelector(".gallery");

const makeGalleryCard = ({
    preview,
    original,
    description,
}) => `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>
</div>`;


const markup = galleryItems.map((el) => makeGalleryCard(el)).join("");
boxEl.insertAdjacentHTML("afterbegin", markup);

const handleShowImg = event => {
    event.preventDefault();

const modal = basicLightbox.create(`<img class="gallery__image"
   src="${event.target.dataset.source}"/>`);
        modal.show();
    }

boxEl.addEventListener("click", handleShowImg);

