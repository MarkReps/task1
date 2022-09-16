import createModal from "./modal.js";

export default function createTableRow(rowData) {
    const tBody = document.querySelector("#table-content");
    const tableRowTemp = document.querySelector("#tableRow");
    const tableRowClone = tableRowTemp.content.cloneNode(true);
    const tdList = tableRowClone.querySelectorAll("td");
    const modalsDiv = document.querySelector("#modals");

    for (const td of tdList) {
        if (td.dataset.type !== "buttons") {
            td.textContent = rowData[td.dataset.type];
        }
    }

    const btns = tableRowClone.querySelector(
        'td[data-type="buttons"]'
    ).children;

    function openModalFunc(event, form) {
        const tr = event.currentTarget.parentNode.parentNode;

        const tdList = tr.querySelectorAll("td");
        tdList.forEach((td) => {
            if (
                td.dataset.type !== "created" &&
                td.dataset.type !== "buttons" &&
                td.dataset.type !== "dates"
            ) {
                form[td.dataset.type].value = td.textContent;
            }
        });
    }

    function formSubmit(event) {
        event.preventDefault();
        const formRef = event.target;
        const formData = new FormData(formRef);

        const submittedData = {};
        formData.forEach((value, key) => {
            submittedData[key] = value;
        });
        console.log(submittedData);
        for (const td of tdList) {
            if (td.dataset.type !== "buttons") {
                if (td.dataset.type === "dates") {
                    if (
                        !td.textContent.includes(submittedData[td.dataset.type])
                    ) {
                        td.textContent += td.textContent
                            ? ` , ${submittedData[td.dataset.type]}`
                            : submittedData[td.dataset.type];
                        console.log("hi");
                    }
                    continue;
                }
                if (td.dataset.type !== "created") {
                    td.textContent = submittedData[td.dataset.type];
                }
            }
        }

        formRef.reset();
    }

    // edit Btn
    const editModal = createModal(btns[0], formSubmit, openModalFunc);
    modalsDiv.appendChild(editModal);
    tBody.appendChild(tableRowClone);

    // archive Btn
    btns[1].addEventListener("click", (event) => {
        let anotherTable;
        const currentTable =
            event.currentTarget.parentNode.parentNode.parentNode;

        if (currentTable === tBody) {
            anotherTable = document.querySelector("#archive-table-content");
        } else {
            anotherTable = tBody;
        }

        const tr = event.currentTarget.parentNode.parentNode;
        const elm = currentTable.removeChild(tr);
        anotherTable.appendChild(elm);
    });

    //delete Btn
    btns[2].addEventListener("click", (event) => {
        const tr = event.currentTarget.parentNode.parentNode;
        tr.remove();
    });
}
