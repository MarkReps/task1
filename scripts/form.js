import {editTableData, generateTableData} from "./generateData.js";

export function createTask(event){
    
    event.preventDefault()

    const formData = new FormData(event.target)
        
    const submitedData ={}; 

    formData.forEach((value,key) =>{
        submitedData[key] = value;
    })

    const regular = /\d{1,2}\/\d{1,2}\/\d{1,4}/g;
    const dates = submitedData['content'].match(regular)?.join(', ');
    submitedData['created'] = new Date(Date.now()).toDateString();
    submitedData['dates'] = dates ? dates :'';

    generateTableData(submitedData);
}

export function editTask(event,created,tdList){
    event.preventDefault();

    const formData = new FormData(event.target);

    const submitedData ={};

    formData.forEach((value,key) =>{
        submitedData[key] = value;
    })

    const regular = /\d{1,2}\/\d{1,2}\/\d{1,4}/g;
    const dates = submitedData['content'].match(regular)?.join(', ');
    submitedData['created'] = created;
    submitedData['dates'] = dates ? dates :'';

    editTableData(submitedData,tdList)
}