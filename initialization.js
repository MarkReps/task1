import createTableRow from "./createTableRow.js";
import createModal from "./modal.js";
import { initializeState } from "./state.js";
const data = [
    {
        name: "Shopping List",
        created: "Fri Sep 16 2022",
        category: "Task",
        content: "Tomatoes,bread",
        dates: "",
    },
    {
        name: "The theory of evolution",
        created: "Tues April 27 2021",
        category: "Random Thought",
        content: "The evolution ...",
        dates: "",
    },
    {
        name: "New Feature",
        created: "Wed May 5 2021",
        category: "Idea",
        content: "Implements new ...",
        dates: "2022-09-01, 2022-09-02",
    },
    {
        name: "William Gaddis",
        created: "Wed May 5, 2021",
        category: "Quote",
        content: "Power doesn`t considered",
        dates: "",
    },
    {
        name: "Books",
        created: "Thurs May 15, 2021",
        category: "Task",
        content: "The Lean Startup",
        dates: "",
    },
    {
        name: "Books",
        created: "Thurs May 22, 2021",
        category: "Quote",
        content: "The Lean Startup",
        dates: "",
    },
    {
        name: "Books",
        created: "Thurs May 29, 2021",
        category: "Idea",
        content: "The Lean Startup",
        dates: "",
    },
];

initializeState(data);

for (const rowData of data) {
    createTableRow(rowData);
}

const createTableRowBtn = document.querySelector("#myBtn");
const modalsDiv = document.querySelector("#modals");

function formSubmit(event) {
    event.preventDefault();
    const formRef = event.target;
    const formData = new FormData(formRef);

    const submittedData = {};

    formData.forEach((value, key) => {
        submittedData[key] = value;
    });
    submittedData["created"] = new Date(Date.now()).toDateString();

    createTableRow(submittedData);
}

modalsDiv.appendChild(createModal(createTableRowBtn, formSubmit));
