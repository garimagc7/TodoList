let todoList = [{
    name: 'washing dishes' ,
    date: '2026-09-16'
}];
showInput();
function showInput(){
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, date } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button  class="delete-todo-button js-delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    });
    document.querySelector('.showtodo-list').innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton,index) => {
    deletebutton.addEventListener('click', () =>{
            todoList.splice(index, 1);
            showInput();
    });
    });
}
document.querySelector('.js-add-todo-button').addEventListener('click',() => {
 jsInput();   
});

function jsInput(){
    const todoname=document.querySelector('.js-input-todo');
    const name = todoname.value;
    const dateList = document.querySelector('.js-input-date');
    const date = dateList.value;

    todoList.push({name,date});
    todoname.value = '';
    showInput();
}
