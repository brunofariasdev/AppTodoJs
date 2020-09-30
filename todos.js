var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodo(){

    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href' ,'#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick' , 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('X');

        linkElement.appendChild(linkText);

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodo();

function addTodos(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();

}

btnElement.onclick = addTodos;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();
}

function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));

}







