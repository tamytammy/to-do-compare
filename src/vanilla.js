//when dom is ready
document.addEventListener('DOMContentLoaded', () => {
const newTodo = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addButton = document.querySelector('#add-btn');
let todos = []
function addTodo() {
    todos.push(newTodo.value);
    newTodo.value = '';
    renderTodos();
}
function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach(todo => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        const label = document.createElement('label');
        const btn = document.createElement('button');

        input.type = 'checkbox';
        label.textContent = todo;
        btn.textContent = 'X';
        
        btn.addEventListener('click', () => {
            todos = todos.filter(t => t !== todo);
            renderTodos();
        });
        input.addEventListener('change', () => {
            if (input.checked) {
                label.classList.add('done');
            } else {
                label.classList.remove('done');
            }
        })

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

addButton.addEventListener('click', addTodo);



})