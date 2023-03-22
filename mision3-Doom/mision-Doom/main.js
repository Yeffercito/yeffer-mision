const button_crear = document.getElementById("button_crear");
const input_nombre = document.getElementById("input_nombre");
const nombres = [];

button_crear.addEventListener("click", function () {
  window.open("index2.html", "_self");
});

input_nombre.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    console.log(input_nombre.value);
    if (nombres.length !== 0) {
      console.log("a");
    }
  }
});
