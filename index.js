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
    //console.log(createCheckbox(newTaskItem)).toString()
    newTaskItem.innerHTML = (createCheckbox(newTaskItem)).outerHTML
    newTaskItem.innerHTML += (createText(newTask)).outerHTML
    newTaskItem.innerHTML += (createRemove(newTaskItem,list)).outerHTML

    list.appendChild(newTaskItem)
    //console.log(createCheckbox(newTaskItem))
}
function test() {
    console.log("Hallo")
}

function createCheckbox(parent) {
    const checkbox = document.createElement('button')
    checkbox.innerText = 'createCheckbox'
    //parent.appendChild(checkbox)
    return checkbox
}

function createText(p) {
    const text = document.createElement('span')
    text.innerText = p
    //parent.appendChild(checkbox)
    return text
}

function createRemove(r, list) {
    const removeButton = document.createElement('button')
    removeButton.innerText = 'remove'
    removeButton.onclick = "test ()"
    console.log(list)
    //removeButton.addEventListener("click" ,test )
    //removeButton.addEventListener("click" ,()=> list.removeChild(list.lastElementChild) )
    return removeButton
}





//console.log(newTask)
//const addtask = document.createElement('div')