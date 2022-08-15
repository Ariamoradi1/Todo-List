let $ = document

let textInput = $.querySelector('input')
let todobutton = $.querySelector('.todo-button')
let spanText = $.querySelector('span')
let ulElem = $.querySelector('.todos')
let iconTodo = $.querySelector('i')
let lis = $.querySelector('li')



todobutton.addEventListener('click', function () {

let newElem = $.createElement('li')
newElem.className = 'list-group-item d-flex justify-content-between align-items-center'
let newSpan = $.createElement('span')
newSpan.innerHTML = textInput.value
let iconList = $.createElement('i')
iconList.className = 'fa fa-trash-o delete'

newElem.append(newSpan,iconList)

ulElem.append(newElem)

console.log(newElem)
iconList.addEventListener('click', function (event) {

    event.target.parentElement.remove()
    
    console.log(iconList)
    
    
    
    })

})