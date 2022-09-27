import { createTask, editTask } from "./form.js";
import { editTableData } from "./generateData.js";

const refs = {
    modalTemp: document.querySelector('#modalTemp'),
    modalContainer: document.querySelector('.modal-container'),
}

function fillForm(event,modalBody){
    const tr = event.currentTarget.parentNode.parentNode
    const tdList = tr.querySelectorAll('td');
    const formRef = modalBody.querySelector('form')
    let created = ''
    tdList.forEach((td) =>{
        const type =td.dataset.type;
        if(type !== 'buttons' && type !== 'dates'){
            
            type === 'created'? created = td.textContent:
                                formRef[type].value = td.textContent;
        }
    })
    return [created,tdList];
}

function openEditModal(event,modalBody,modalContent){
    const data = fillForm(event,modalBody)
    openModal(modalBody,modalContent)
    return data;
}

function openModal(modalBody,modalContent){
    modalBody.classList.add('active');
    modalContent.classList.add('active');
} 

function closeModal(modalBody,modalContent){
    modalBody.classList.remove('active');
    modalContent.classList.remove('active');
}

export default function createModal(title,openBtnRef,modalType){
    const modalClone = refs.modalTemp.content.cloneNode(true);
    const modalBody = modalClone.querySelector('.modal');
    const modalContent = modalClone.querySelector('.modal-content');
    const closeBtnRef = modalClone.querySelector('.modal-close-btn');
    const formRef = modalBody.querySelector('form');
    let created;
    let tdList;

    modalClone.querySelector('.modal-title').textContent = title;
    
    if(modalType === 'edit'){
        openBtnRef.addEventListener('click',(event) =>{
            [created,tdList] = openEditModal(event,modalBody,modalContent)
        })
        formRef.addEventListener('submit',(event) => editTask(event,created,tdList))
    } else{
        openBtnRef.addEventListener('click',() =>openModal(modalBody,modalContent))
        formRef.addEventListener('submit',createTask)
    }

    closeBtnRef.addEventListener('click',() =>closeModal(modalBody,modalContent))

    refs.modalContainer.appendChild(modalClone);
}