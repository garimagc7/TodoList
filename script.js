let todoList = [];
showInput();
function showInput(){
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, date, createdAt } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <div>${createdAt}</div>
        <button  class="delete-todo-button js-delete-todo-button"><img height="18px" src="assets/delete.svg">Delete</button> 
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
    const createdAt = new Date().toLocaleString();
     if (name === '' || date === '') {
        return;
    }
    todoList.push({name, date, createdAt});
    todoname.value = '';
    dateList.value = '';
    showInput();
}
