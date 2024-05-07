let listBox= document.getElementById("list-container");
let inputBox =document.getElementById("input-box");




function addTodo() {
    if(inputBox.value===""){
        alert("Please write your todo");
    }
    else{
       let todo= document.createElement('li');
        todo.textContent=inputBox.value
          listBox.appendChild(todo);

        let span= document.createElement('span');
        span.textContent='\u00d7';
        todo.appendChild(span)

  

    }
    inputBox.value=" "; 
    saveData();
}
listBox.addEventListener('click',(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
 function saveData(){
   localStorage.setItem("tasks",listBox.innerHTML)
}
 function showData(){
    listBox.innerHTML=localStorage.getItem('tasks')
    
}
function clearall(){
    localStorage.clear();

}
showData()