const inputBox =document.getElementById("input")
const listContainer =document.getElementById("list-container")

function addTask() {
    if (inputBox.value === "") {
        alert("You Must Write Something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML ="\u00d7"
        li.appendChild(span)
    }
    inputBox.value='';
    saveTask();
}

listContainer.addEventListener("click",(event)=>{
      if (event.target.tagName ==="LI") {
          event.target.classList.toggle("checked");
          saveTask();
      } 
      else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveTask();
      }
})


function saveTask() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML =localStorage.getItem("data")
}

showTask();
