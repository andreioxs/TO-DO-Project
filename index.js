const container = document.getElementsByClassName('container')

const addtask = document.getElementById('addtask')

const submit = document.getElementById('submit')

const list = document.getElementById('list')

const input = document.getElementById('input')
 

submit.addEventListener("click", addtaskfunction)

function addtaskfunction(e) {
    e.preventDefault()
    const newTask = input.value

    addtask1(newTask)
}

function addtask1(newTask) {
    const newTaskItem = document.createElement('li')
    newTaskItem.innerText = newTask
    list.appendChild(newTaskItem)
}


//console.log(newTask)
//const addtask = document.createElement('div')