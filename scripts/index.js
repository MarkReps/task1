import {generateTableData} from "./generateData.js";
import createModal from "./createModal.js";
import { countCategory } from "./countTable.js";
const data = [
        {
          "id":0,
          "name": "Shopping List",
          "created": "Fri Sep 16 2022",
          "category": "Task",
          "content": "Tomatoes,bread",
          "dates": "",
          "active":true,
        },
        {
          "id":1,
          "name": "The theory of evolution",
          "created": "Tues April 27 2021",
          "category": "Random Thought",
          "content": "The evolution ...",
          "dates": "",
          "active":true,
        },
        {
          "id":2,
          "name": "New Feature",
          "created": "Wed May 5 2021",
          "category": "Idea",
          "content": "Implements new ...",
          "dates": "2022-09-01, 2022-09-02",
          "active":true,
        },
        {
          "id":3,
          "name": "William Gaddis",
          "created": "Wed May 5, 2021",
          "category": "Quote",
          "content": "Power doesn`t considered",
          "dates": "",
          "active":false,
        },
        {
          "id":4,
          "name": "Books",
          "created": "Thurs May 15, 2021",
          "category": "Task",
          "content": "The Lean Startup",
          "dates": "",
          "active":false,
        },
        {
          "id":5,
          "name": "Books",
          "created": "Thurs May 22, 2021",
          "category": "Quote",
          "content": "The Lean Startup",
          "dates": "",
          "active":false,
        },
        {
          "id":6,
          "name": "Books",
          "created": "Thurs May 29, 2021",
          "category": "Idea",
          "content": "The Lean Startup",
          "dates": "",
          "active":true,
        }
      ];


const refs = {
  activeTable: document.querySelector('#js-active-table'),
  archiveTable: document.querySelector('#js-archive-table'),
  coutnTable: document.querySelector('#js-count-table'),
  createTaskBtnRef: document.querySelector('.create-btn'),
}

createModal('Create New Task',refs.createTaskBtnRef,'create');

const activeTask = data.filter(task => task.active)
const archiveTask = data.filter(task => !task.active)



for (const row of activeTask) {
  generateTableData(row,refs.activeTable)
}

for (const row of archiveTask) {
  
  generateTableData(row,refs.archiveTable)
}

countCategory(refs.activeTable,refs.archiveTable,refs.coutnTable)
window.addEventListener('click',() =>countCategory(refs.activeTable,refs.archiveTable,refs.coutnTable))
window.addEventListener('submit',() =>countCategory(refs.activeTable,refs.archiveTable,refs.coutnTable))