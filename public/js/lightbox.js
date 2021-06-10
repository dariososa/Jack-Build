const imagenes = document.querySelectorAll(".img-gallery");
const imagenesLight = document.querySelector(".add-image");
const contenedorLight = document.querySelector(".image-light");
const burguer1 = document.querySelector(".burguer");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    addImg(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("show-image");
    burguer1.style.opacity = "1";
  }
});

const addImg = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("show-image");
  const burguer1 = document.querySelector(".burguer");
};
