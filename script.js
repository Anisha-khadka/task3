let listBox = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");

function addTodo() {
  if (inputBox.value === "") {
    alert("Please write your todo");
  } else {
    let todo = document.createElement("li");
    todo.textContent = inputBox.value;
    listBox.appendChild(todo);

    let closeSymbol = document.createElement("span");
    closeSymbol.textContent = "\u00d7";
    closeSymbol.classList.add("close-symbol");
    todo.appendChild(closeSymbol);


    let anotherSymbol = document.createElement("span");
    anotherSymbol.textContent = "\u270E"; 
    anotherSymbol.classList.add("another-symbol");

    todo.appendChild(anotherSymbol);
  }
  inputBox.value = " ";
  saveData();
}
listBox.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    if(e.target.classList.contains("close-symbol")){
        e.target.parentElement.remove();
        saveData();
    }
    
    if (e.target.classList.contains("another-symbol")) {
        if(!e.target.parentElement.classList.contains("checked")){
        inputBox.value = e.target.parentElement.textContent.replace("\u00d7","").replace("\u270E","").trim();
        e.target.parentElement.remove();
        saveData();
        }
      }
    
   
  }
});
function saveData() {
  localStorage.setItem("tasks", listBox.innerHTML);
}
function showData() {
  listBox.innerHTML = localStorage.getItem("tasks");
}
function clearall() {
  localStorage.clear();
}
showData();
