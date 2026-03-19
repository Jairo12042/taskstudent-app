
<let contador  = 0;

function agregarTarea(){

    let input = document.getElementById("nuevaTarea");
    let texto = input.value;

    if(texto === ""){
        alert("Escribe una tarea");
        return;
    }

    let lista = document.getElementById("listaTareas");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = texto;

    span.onclick = function(){
        span.classList.toggle("completada");
    };

    let boton = document.createElement("button");
    boton.textContent = "X";
    boton.className = "eliminar";

    boton.onclick = function(){
        lista.removeChild(li);
        contador--;
        actualizarContador();
    };

    li.appendChild(span);
    li.appendChild(boton);

    lista.appendChild(li);

    contador++;
    actualizarContador();

    input.value="";
}

function actualizarContador(){
    document.getElementById("contador").textContent = contador;
}
