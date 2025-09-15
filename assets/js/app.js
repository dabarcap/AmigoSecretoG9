let amigos = [];

function agregarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let amigoNombre = amigoInput.value.trim();

  if (amigoNombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigoNombre);
  amigoInput.value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `¡El/La amigo/a secreto/a es: <strong>${amigoSorteado}</strong>!`;
}

function reiniciarJuego() {
    const confirmar = confirm("¿Está seguro de que desea reiniciar el juego? Se perderán todos los nombres y resultados.");
  if (!confirmar) return;

  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}