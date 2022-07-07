let body = document.querySelector('body')
let addNewTask = document.querySelector('.addNewTask')
let taskList = document.querySelector('ul')

//evento para adicionar nova tarefa com enter do teclado
document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const insertTask = document.querySelector('#insertTask')
        insertTask.click()
    }
})


function getNewTask(){    
    let takeNewTask = document.querySelector('input[name = "newTask"]').value     

    //criando item da lista
    let liNewTask = document.createElement('li') 
    /* liNewTask.setAttribute('draggable', "true")
    liNewTask.setAttribute('id', "dragAndDrop") */

    //div para tarefa, checkbox e button
    let containertask = document.createElement('div')
    containertask.className = "containerTask"
    liNewTask.appendChild(containertask)

    //criando checkbox 
    let checkTask = document.createElement('input')
    checkTask.type = 'checkbox'
    checkTask.setAttribute('id', 'checkTask')
    containertask.appendChild(checkTask)

    //Criando paragrafo para receber a nova tarefa
    let taskParagraph = document.createElement('p')
    taskParagraph.setAttribute ('contenteditable',"true")
    taskParagraph.innerText = takeNewTask       
    containertask.appendChild(taskParagraph)
    //Adicionando tarefas à lista
    taskList.appendChild(liNewTask)

    //criando TrashIcon
    let trashIconSpan = document.createElement('span')
    let trashIcon = document.createElement('i')
    trashIcon.className = "bi bi-trash-fill"
    trashIconSpan.appendChild(trashIcon)

    //class="bi bi-trash-fill
    //criando removeButton

    let removeButton = document.createElement('button')
    
    removeButton.type = "button"
    removeButton.setAttribute ('onclick', "RemoveTask(this)")
    removeButton.className = "btn"
    removeButton.appendChild(trashIconSpan)
    //adicionando button na tarefa
    containertask.appendChild(removeButton)  

    //finalcheck task
    checkTask.addEventListener('change', function(){
        if(checkTask.checked == true){
            liNewTask.style.backgroundColor = "#027264"
            liNewTask.style.color = "#fff"
            taskParagraph.style.textDecoration = "line-through"
        }else{
            liNewTask.style.backgroundColor = "#f0f8ff"
            liNewTask.style.color = "#000"
            taskParagraph.style.textDecoration = "none"
        }
    })


    //limpando input para nova tarefa
    function cleannerInput(){
        const inputTask = document.querySelector('input[name="newTask"]')
        inputTask.value = ""
    }
    
    cleannerInput()

    
    hideMessage()
    
}





function RemoveTask(removeButton){
    let divTask = document.querySelector('.containerTask')
    divTask.parentNode.remove(removeButton)
}


//Verificação de dados de entrada
function appTask(){
    let verificateInput = document.querySelector('input[name = "newTask"]').value
    // se a entrada for uma string vazia emitirá uma mensagem de erro
    if(verificateInput == ""){
        alert('Nenhuma entrada detectada!')
        //do contrário executará a função de adicionar nova tarefa à lista
    }else{
        getNewTask()
    }
}

//function remove initialMessage

function hideMessage(){
    const message = document.querySelector('.initialMessage')
    message.style.display = "none"
}