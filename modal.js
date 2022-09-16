// import createMarkup from "./template/template.js";

export default function createModal(showBtn, formSubmit, openModalFunc) {
    const modalTemp = document.querySelector("#modal-template");
    const modalClone = modalTemp.content.cloneNode(true);
    const closeBtn = modalClone.querySelector("#close");
    const modalBody = modalClone.querySelector("#myModal");
    const form = modalClone.querySelector("form");

    function closeModal() {
        modalBody.style.display = "none";
    }

    showBtn.onclick = function (event) {
        modalBody.style.display = "block";
        if (openModalFunc) {
            openModalFunc(event, form);
        }
    };

    closeBtn.onclick = closeModal;

    window.addEventListener("click", (event) => {
        if (event.target == modalBody) {
            closeModal();
        }
    });

    form.addEventListener("submit", formSubmit);
    form.addEventListener("submit", closeModal);
    return modalClone;
}
