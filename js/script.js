const containerCheck = document.querySelector(".container-check");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const taskInput = document.querySelector("#task");

form.addEventListener("submit", taskAdd);
btn.addEventListener("submit", taskAdd);

let tasks = 0;

function taskAdd(e) {
  e.preventDefault();

  if (taskInput.value.length > 0) {
    containerCheck.innerHTML += `
      <div class="check d-flex align-items-center justify-content-between mx-auto">
      <div class="d-flex gap-2">
      <input class="input-checkbox" type="checkbox" />
      <p class="list-text m-0">${taskInput.value}</p>
      </div>
      <i class="bi bi-trash3"></i>
      </div>
      `;
    taskInput.value = "";
    tasks++;

    emptyMessage();
    showDelete();
    showCheckbox();
  }
}

function emptyMessage() {
  const empty = document.querySelector(".task-empty");

  if (tasks === 0) {
    empty.classList.remove("d-none");
    containerCheck.style.borderBottom = "1px solid #dee2e6";
  } else {
    empty.classList.add("d-none");
    containerCheck.style.borderBottom = "none";
  }
}

function showDelete() {
  const empty = document.querySelectorAll(".bi-trash3");

  empty.forEach((btn) => btn.addEventListener("click", btnDelete));
}

function showCheckbox() {
  const checkbox = document.querySelectorAll(".input-checkbox");

  checkbox.forEach((check) =>
    check.addEventListener("click", (e) => {
      const text = e.target.parentElement.querySelector("p");
      if (e.target.checked === true) {
        text.style.textDecoration = "line-through";
        text.style.opacity = ".7";
      } else {
        text.style.textDecoration = "none";
        text.style.opacity = "1";
      }
    })
  );
}

function btnDelete(e) {
  e.target.parentElement.remove();
  tasks--;
  emptyMessage();
}
