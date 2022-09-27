
const initialState = {
    'Task':0,
    "Idea":0,
    "Random Thought": 0,
    "Quote":0,
}

export function countCategory(ActiveTable,ArchiveTable,countTable){

    const activeTableState = {...initialState};
    const ArchiveTableState = {...initialState};

    const a = ActiveTable.querySelectorAll('tr > td[data-type="category"]')
    const b = ArchiveTable.querySelectorAll('tr > td[data-type="category"]')
    
    a.forEach((td) => {
        activeTableState[td.textContent] += 1;
    })
    b.forEach((td) =>{
        ArchiveTableState[td.textContent] += 1;
    })
    countTable.querySelectorAll('tr').forEach((tr) =>{
        const tdList = tr.querySelectorAll('td');
        const categoryName = tdList[0].textContent;
        tdList[1].textContent = activeTableState[categoryName];
        tdList[2].textContent = ArchiveTableState[categoryName];
    })
}