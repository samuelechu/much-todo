import "./index.css";



const addToDo = () => {
    const newToDo = document.getElementById("toDoInput").value
    const currentToDos = JSON.parse(localStorage.getItem("currentToDos"))
    const newToDos = [...currentToDos, newToDo]
    localStorage.setItem("currentToDos", JSON.stringify(newToDos))
}

const updateList = () => {
    const currentToDos = JSON.parse(localStorage.getItem("currentToDos"))

    const str = `<ul> 
        ${currentToDos.map((toDo) => '<li>'+ toDo + '</li>').join("")}
    </ul>`
  
    document.getElementById("currentToDos").innerHTML = str;
}

const processAdd = () => {
    addToDo()
    updateList()
    
}

document.getElementById("addButton").addEventListener("click", processAdd);

if (localStorage.getItem("currentToDos") == undefined){
    localStorage.setItem("currentToDos", JSON.stringify([]) )
} else {
    updateList()
}