import * as modalController from './modal-controller.js';

export function init() {
    const contactLink = document.querySelector(".contact-link")
    contactLink.addEventListener('click', handleContactLinkOnClick);
    console.log("Page controller iniciado!");
}

function handleContactLinkOnClick(event) {

    event.preventDefault();
    modalController.showModal();


}