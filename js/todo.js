const todoForm = document.querySelector("#todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todos"

function saveTodo (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delTodo (event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
};

function writetodo (newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newtodo.text;
    button.innerText = "✔";
    button.addEventListener("click",delTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
};

function handleTodolist(go){
    go.preventDefault();
    const newList = todoInput.value;
    todoInput.value = "";
    const newobj = {
        text:newList,
        id: Date.now()
    };
    todos.push(newobj);
    writetodo(newobj);
    saveTodo();
};

todoForm.addEventListener("submit",handleTodolist);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(writetodo);
}