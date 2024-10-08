task = document.querySelector("#task");
add = document.querySelector("#add");
remove = document.querySelector(".remove");
todos = document.querySelector(".todos");

add.addEventListener("click", function () {
  if (task.value) {
    console.log(task.value);
    let li = document.createElement("li");
    li.textContent = task.value;
    li.classList.add("todo");
    btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("remove");
    li.appendChild(btn);
    todos.appendChild(li);
    task.value = "";

    saveData();
  }
});

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
  saveData();
});

function saveData() {
  localStorage.setItem("todos", todos.innerHTML);
}

function showData() {
  let todo = localStorage.getItem("todos");
  if (todo) {
    todos.innerHTML = todo;
  }
}

showData();
