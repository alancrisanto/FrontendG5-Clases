let miForm = document.getElementById("formTodo");

let ulTareas = document.getElementById("tareas");


let tareas = []; //Almacenar tareas a mostrar

// Vamos a obtener el valor del input y agregarlo a tareas

miForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    // formulario.nombre.value
    let nuevaTarea = formTodo.tarea.value
    tareas.push(nuevaTarea)
;    console.log(tareas);

    // reset(), reinicia todo el formulario

    miForm.reset();
    dibujarTareas();
})

function dibujarTareas(){
    // Cada vez que se ejecute dibujar tareas, lo primero que hago es decir al contenido HTML va a ser nada
    ulTareas.innerHTML = "";
    // Se va a encargar de dibujar las tareas (mostrarlas en el navegador)
    tareas.forEach(function(item, posicion){
        let li = document.createElement("li");
        li.innerText = item
        ulTareas.appendChild(li)

        // Agregar un evento por cada item
        li.addEventListener("dblclick", function(){
            // Idea que esto nos permita eliminar una tarea
            tareas.splice(posicion, 1)
            console.log("despues de eliminar", tareas)

            dibujarTareas();

    })
    })


}