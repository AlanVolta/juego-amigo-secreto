// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array vacío para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo al array.
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById("amigo").value.trim();
    // 2. Validar que el nombre no esté vacío
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }   
    // 3. Actualizar el array de amigos
    amigos.push(nombreAmigo);
    // 4. Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
    // 5. Mostrar la lista actualizada de amigos
    mostrarAmigos();
}

// función para actualizar la lista de amigos
function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    // (Opcional) Limpiar el resultado si existe
    document.getElementById("resultado").innerHTML = "";
}

// función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}