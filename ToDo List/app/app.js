const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
    todoInputEl.addEventListener('keypress', event => {
        if(event.keyCode === 13) {
            let newListItem = createListElement(todoInputEl.value);
            todoListEl.appendChild(newListItem);
            todoInputEl.value= '';
        }
    });
}

function toggleDone() {
    todoListEl.addEventListener('click', (e) => {
        if(e.target.classList.contains("todo__item")) {
            e.target.classList.toggle("done");
        }
    })
}

function createListElement(text) {
    const newListEl = document.createElement("li");
    newListEl.textContent = text;
    newListEl.setAttribute("class", "todo__item")
    return newListEl;
}

addListItem();
toggleDone();