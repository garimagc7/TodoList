let todoList = [{
    name: 'washing dishes' ,
    date: 2026-9-18
}]
function showInput(){


}

function jsInput(){
    const todoname=document.querySelector('.js-input-todo');
    const name = todoname.value;
    const dateList = document.querySelector('.js-input-date');
    const date = dateList.value;

    todoList.push({name,date});
    todoname.value = '';

}
