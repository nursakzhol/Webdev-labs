const inputVox = document.querySelector(".input input");
const addBtn = document.querySelector(".input button");
const todoList = document.querySelector(".todoList");

inputVox.onkeyup = () => {
    let userData = inputVox.value; //getting users value
    if(userData.trim() != 0){
        
        //if users value aren't only spaces
        addBtn.classList.add("active");
} else {
        addBtn.classList.remove("active");
}
}

showTasks();

addBtn.onclick = () => {
    let userData = inputVox.value;
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks();
}



function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    let newLiTag = '';
    listArr.forEach( (elements, index) => {
        newLiTag += `<input type="checkbox" onclick = "checkedTask(${index})"><li> ${elements} <span onclick="deleteTask(${index})"><i class = "fa fa-trash"></i></span></li>`;
    });

    todoList.innerHTML = newLiTag;
    inputVox.value = "";
}

//delete function

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks();
}

function checkedTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    listArr = JSON.parse(getLocalStorage);
    a.style.fontSize = "50px";
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks();
}