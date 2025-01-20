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
        console.log(amigos);
    }
    
}
