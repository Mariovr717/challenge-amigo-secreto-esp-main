// Crear un array vacío para almacenar los nombres de los participantes
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Captura el input
    let amigoUsuario = inputAmigo.value.trim(); // Obtiene el valor ingresado sin espacios extras
    let mensajeError = document.getElementById("mensaje-error"); // Captura el mensaje de error

    // Convertir el nombre a minúsculas para evitar duplicados con diferente formato
    let nombreNormalizado = amigoUsuario.toLowerCase();

    // Validar si el campo está vacío
    if (amigoUsuario === '') {
        mensajeError.innerText = "⚠️ Debe ingresar un nombre.";
        return;
    } else {
        mensajeError.innerText = ""; // Borra cualquier mensaje de error previo
    }

    // Verificar si el nombre ya está en la lista sin importar mayúsculas o minúsculas
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        mensajeError.innerText = `⚠️ El nombre "${amigoUsuario}" ya fue agregado.`;
        inputAmigo.value = ""; // Limpia el campo de entrada
        return;
    }

    //Agregar el nombre a la lista de amigos
    listaAmigos.push(amigoUsuario);
    actualizarLista();
    limpiarInput();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para limpiar solo el campo de entrada después de agregar un nombre
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Función para sortear un solo amigo al azar
function sortearAmigo() {
    let mensajeError = document.getElementById("mensaje-error"); // Captura el mensaje de error
    let resultado = document.getElementById('resultado');

    if (listaAmigos.length === 0) {
        mensajeError.innerText = "⚠️ No hay amigos en la lista para sortear.";
        return;
    } else {
        mensajeError.innerText = ""; // Borra cualquier mensaje de error previo
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Genera un índice aleatorio
    let amigoSorteado = listaAmigos[indiceAleatorio]; // Obtiene el nombre sorteado

    // Muestra el resultado en la página
    resultado.innerHTML = `<h3>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</h3>`;

    // Vacía la lista después del sorteo
    listaAmigos = [];
    actualizarLista();
}

// Función para limpiar la lista de amigos y el resultado del sorteo
function limpiarTodo() {
    listaAmigos = []; // Vaciar la lista
    actualizarLista();
    document.getElementById('resultado').innerHTML = ''; // Limpiar el resultado del sorteo
    document.getElementById('amigo').value = ''; // También limpiar el input de entrada
    document.getElementById("mensaje-error").innerText = ""; // Borrar mensajes de error
}
