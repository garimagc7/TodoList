let todoList = [{
    name: 'washing dishes' ,
    date: 2026-9-18
}];
showInput();
function showInput(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, date } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            showInput();
        " class="delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    }
    document.querySelector('.showtodo-list').innerHTML = todoListHTML;
}

function jsInput(){
    const todoname=document.querySelector('.js-input-todo');
    const name = todoname.value;
    const dateList = document.querySelector('.js-input-date');
    const date = dateList.value;

    todoList.push({name,date});
    todoname.value = '';
    showInput();
}
