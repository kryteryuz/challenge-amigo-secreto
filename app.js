// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    if(nombreAgregado == ''){
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAgregado);
        alert("Amigo agregado");
        document.getElementById('amigo').value = '';
        //console.log(amigos);
    }
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    var listAmigos = document.querySelector('#listaAmigos');
    
    // Asegurarse de que la variable 'amigos' esté definida y no esté vacía
    if (Array.isArray(amigos) && amigos.length > 0) {
        // Limpiar la lista antes de agregar nuevos elementos
        listAmigos.innerHTML = "";
        
        // Crear el contenido de la lista
        let listaHTML = "";
        amigos.forEach((item) => {
            listaHTML += `<li>${item}</li>`;
        });

        // Insertar el contenido generado en el DOM
        listAmigos.innerHTML = listaHTML;
    } else {
        // Si la lista 'amigos' está vacía o no es un array válido
        listAmigos.innerHTML = "<li>No hay amigos para mostrar</li>";
    }
}

//mostrarListaAmigos();