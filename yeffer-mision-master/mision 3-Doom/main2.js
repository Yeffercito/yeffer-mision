const button_simple = document.getElementById("button_simple");
const button_enviar = document.getElementById("button_enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("a");
const area = document.getElementById("area");
const usuario = document.getElementById("usuario");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");

button_simple.addEventListener("click", function () {
  window.open("index.html", "_self");
});

button_enviar.addEventListener("click", function () {
  let nombree = nombre.value;
  let apellidoe = apellido.value;
  let areae = area.value;
  let usuarioe = usuario.value;
  let edade = edad.value;
  let direccione = direccion.value;
  let emaile = email.value;
  nombre.value=""
  apellido.value=""
  area.value=""
  usuario.value=""
  edad.value=""
  direccion.value=""
  email.value=""
});
