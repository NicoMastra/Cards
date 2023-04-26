const imagenes = document.querySelectorAll(".imagen");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    eliminarClaseActivo();
    imagen.classList.add("activo");
  });
});

function eliminarClaseActivo() {
  imagenes.forEach((imagen) => {
    imagen.classList.remove("activo");
  });
}
