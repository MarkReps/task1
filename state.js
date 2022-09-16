const initialState = {
    task: 0,
    random: 0,
    idea: 0,
    quote: 0,
};

let firstTableState = { ...initialState };
let secondTableState = { ...initialState };

const tableCounter = document.querySelector(".count > tbody");

function accByName(name, state) {
    const firstWord = name.split(" ")[0];

    if (firstWord) {
        state[firstWord] += 1;
    }
}

function countTableRow(tableRef, tableState) {
    tableRef.querySelectorAll("tr").forEach((tr) => {
        const name = tr.querySelector('td[data-type="category"]').textContent;
        accByName(name.toLowerCase(), tableState);
    });
}

function markup() {
    tableCounter.querySelectorAll("tr").forEach((tr) => {
        const stateName = tr.children[0].textContent
            .toLocaleLowerCase()
            .split(" ")[0];

        tr.children[1].textContent = firstTableState[stateName];
        tr.children[2].textContent = secondTableState[stateName];
    });
}

export function initializeState(data) {
    firstTableState = { ...initialState };

    data.forEach((row) => {
        const rowCategory = row.category.toLocaleLowerCase().split(" ")[0];
        firstTableState[rowCategory] += 1;
    });

    markup();
}

function recountStates() {
    firstTableState = { ...initialState };
    secondTableState = { ...initialState };

    const firstTableBody = document.querySelector("#table-content");
    const secondTableBody = document.querySelector("#archive-table-content");

    countTableRow(firstTableBody, firstTableState);
    countTableRow(secondTableBody, secondTableState);

    markup();
}

window.addEventListener("click", recountStates);
window.addEventListener("submit", recountStates);
