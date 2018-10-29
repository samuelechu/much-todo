import "./index.css";

/*toDo : {
value:
completed:
}*/



const addToDo = () => {
    const newToDo = document.getElementById("toDoInput").value
    const currentToDos = JSON.parse(localStorage.getItem("currentToDos"))
    const newToDos = [...currentToDos, {value: newToDo, completed: false}]
    localStorage.setItem("currentToDos", JSON.stringify(newToDos))
}

const toggleToDo = (i) => {
    const currentToDos = JSON.parse(localStorage.getItem("currentToDos"))
    currentToDos[i].completed = !currentToDos[i].completed
    
    localStorage.setItem("currentToDos", JSON.stringify(currentToDos))
    refreshList()
} 

const toggleAllToDos = () => {
    const markComplete = document.getElementById("toggleAllComplete").innerHTML.split(" ")[0] === "Mark"
    for (let i = 0; i < JSON.parse(localStorage.getItem("currentToDos")).length; i++)
        toggleToDo(i)
    
    document.getElementById("toggleAllComplete").innerHTML = `${markComplete ? "Unmark": "Mark"} All as Complete`
    refreshList()
}

const filterToDos = (completed) => {
    
}

const toDoListItem = ({value: toDo, completed}) => 
    `<li class = toDo> 
        ${completed ? toDo.strike() : toDo} 
    </li>`

const refreshList = () => {
    const currentToDos = JSON.parse(localStorage.getItem("currentToDos"))

    const str = 
        `<ul>
            ${currentToDos.map((toDo) => toDoListItem(toDo)).join("")} 
        </ul>`
    
        
    document.getElementById("currentToDos").innerHTML = str;
    [...document.getElementsByClassName("toDo")].forEach((li, index) => li.addEventListener("click", () => toggleToDo(index)))
    //debugger
}

const processAdd = () => {
    addToDo()
    refreshList()
    
}

// const showContent = () => {
//     var temp = document.getElementById("ff")
//     var clon = temp.content.cloneNode(true)
//     document.body.appendChild(clon)
// }

document.getElementById("addButton").addEventListener("click", processAdd)
document.getElementById("toggleAllComplete").addEventListener("click", toggleAllToDos)
if (localStorage.getItem("currentToDos") == undefined){
    localStorage.setItem("currentToDos", JSON.stringify([]) )
} else {
    refreshList()
}
