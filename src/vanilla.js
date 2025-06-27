//when dom is ready
document.addEventListener('DOMContentLoaded', () => {
const newTodo = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addButton = document.querySelector('#add-btn');
let todos = []

function addTodo() {
    todos.push(newTodo.value);
    newTodo.value = '';
    // renderTodos1();
    renderTodos2();
}
function renderTodos1() {
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

function renderTodos2(){
    todoList.innerHTML = '';
    let todosHtml = ''
    todos.forEach(todo => {
        todosHtml += `
            <li class="todo-item" id="todo-item">
                <input type="checkbox" name="done" id="todo-done" class="todo-done">
                <label for="todo-done">${todo}</label>
                <button type="button" class="remove-btn">X</button>
            </li>
        `;

        todoList.innerHTML = todosHtml;

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('remove');
                todos = todos.filter(t => t !== todo);
                render2();
            });
        });

    });


        document.querySelectorAll('.todo-done').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const label = checkbox.nextElementSibling;
                if (checkbox.checked) {
                    label.classList.add('done');
                } else {
                    label.classList.remove('done');
                }
            });
        });
    
}

addButton.addEventListener('click', addTodo);



})