let listBox = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");

const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
// ?? nullish coalescing operator
// JSON.stringify() ra JSON.parse()

function addTodo() {
  if (!inputBox.value) {
    alert("Please write your todo");
  }
  // else {
  //   let todo = document.createElement("li");
  //   todo.textContent = inputBox.value;
  //   console.log("todo", todo);
  //   listBox.appendChild(todo);

  //   let span = document.createElement("span");
  //   span.textContent = "\u00d7";
  //   todo.appendChild(span);
  // }
  // tasks.push(inputBox.value);
  saveData(inputBox.value);
  showData();
  inputBox.value = "";
}
listBox.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    
    saveData();
  } else if (e.target.tagName == "SPAN") {
    if(e.target.parentElement.classList.contains("checked")){
      e.target.parentElement.remove();
      saveData();
    }
    
  }

});

function saveData(task) {
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function showData() {
  console.log(JSON.parse(localStorage.getItem("tasks")));
  listBox.innerHTML = JSON.parse(localStorage.getItem("tasks"))
    .map((task) => {
      return `<li>
      ${task}
      <span>\u00d7</span>
    </li>`;
    })
    .join(" ");
}
function clearall() {
  localStorage.clear();
}

showData();
