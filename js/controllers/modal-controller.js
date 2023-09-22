
function State() {
    this.container = null;
    this.btnClose = null;

}

const state = new State();

export function init() {
    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");
    state.btnClose.addEventListener('click', handleBtnCloseOnClick);    
    console.log("Modal iniciado");
}

export function showModal() {

    state.container.classList.add("active");
}

export function closeModal() {

    state.container.classList.remove("active");

}

function handleBtnCloseOnClick(event) {
    event.preventDefault();
    closeModal();
}