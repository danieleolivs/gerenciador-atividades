
function add(){
    //resposta do input
    let tarefa = document.getElementById("adiciona_respostas")
    let atividades_id = document.getElementById("atividades")
    //cria uma nova div
    
    let newDiv = document.createElement("div")
    newDiv.setAttribute('id', 'tarefas')
    
    atividades_id.appendChild(newDiv)
    newDiv.innerHTML = `<input type="checkbox" /><span class="checkmark"></span> <p>${tarefa.value}</p>`

}