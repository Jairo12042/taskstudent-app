function agregarTarea(){

    let tarea = document.getElementById("nuevaTarea").value;

    if(tarea === ""){
        alert("Escribe una tarea");
        return;
    }

    let lista = document.getElementById("listaTareas");

    let elemento = document.createElement("li");

    elemento.textContent = tarea;

    elemento.onclick = function(){
        this.style.textDecoration = "line-through";
    };

    lista.appendChild(elemento);

    document.getElementById("nuevaTarea").value = "";
}