import createModal from "./createModal.js"

const refs ={
    activeTable: document.querySelector('#js-active-table'),
    archiveTable: document.querySelector('#js-archive-table'),
    tableRowTemp: document.querySelector('#tableRow'),
}

function deleteRow(event){
    const tr = event.currentTarget.parentNode.parentNode
        tr.remove()
}

function replaceRow(event){
    let tr = event.currentTarget.parentNode.parentNode
    const currentTable = tr.parentNode
    
    tr = currentTable.removeChild(tr)
    
    if(currentTable === refs.activeTable){
        refs.archiveTable.appendChild(tr)
    } else{
        refs.activeTable.appendChild(tr)
    }
}

export function generateTableData(row,tableRef=refs.activeTable){
    const cloneRow = refs.tableRowTemp.content.cloneNode(true);
    const tdList = cloneRow.querySelectorAll('td')
    const btns = cloneRow.querySelector('td[data-type="buttons"]').children

    tdList.forEach((data) =>{

        const type = data.dataset.type
        if(type !== 'buttons'){
            data.textContent = row[type]
        }
    })

    createModal('Edit Task',btns[0],'edit');
    btns[1].addEventListener('click',replaceRow)
    btns[2].addEventListener('click',deleteRow);

    tableRef.appendChild(cloneRow)
}


export function editTableData(data,tdList){

    for (const td of tdList) {
        const type = td.dataset.type;
        if(type !== 'buttons'){
            td.textContent = data[type]
        }
    } 
}