/* Desenvolva sua lógica aqui */
function handleModal() {
    const openButton = document.getElementsByClassName('modal__Button')[0];
    const modalContainer = document.querySelector('#modal__controller');

    openButton.addEventListener('click', function () {
        modalContainer.showModal();
        closeModal();
    });
}

function closeModal() {
    const closeButton = document.querySelector('#modal__close');
    const modalContainer = document.querySelector('#modal__controller');

    closeButton.addEventListener('click', () => {
        modalContainer.close();
    });
}

handleModal();
