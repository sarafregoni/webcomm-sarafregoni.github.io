
document.addEventListener("DOMContentLoaded", () => {

  const fotoSerate = [
    "IMG_3046.jpg",
    "IMG_3047.jpg",
    "IMG_3048.jpg",
    "IMG_3049.jpg",
    "IMG_3050.jpg",
    "IMG_3051.jpg",
    "IMG_3052.jpg",
    "IMG_3053.jpg"
  ];

  let indiceSerate = 0;
  const slideSerate = document.querySelector("#slide-serate");

  function mostraSerate() {
    slideSerate.src = "foto_serate/" + fotoSerate[indiceSerate];
  }

  document.querySelector("#next-serate").addEventListener("click", () => {
    indiceSerate = (indiceSerate + 1) % fotoSerate.length;
    mostraSerate();
  });

  document.querySelector("#prev-serate").addEventListener("click", () => {
    indiceSerate = (indiceSerate - 1 + fotoSerate.length) % fotoSerate.length;
    mostraSerate();
  });

  const fotoMenu = [
    "IMG_3248.jpg",
    "IMG_3249.jpg",
    "IMG_3250.jpg",
    "IMG_3251.jpg",
    "IMG_3252.jpg",
    "IMG_3253.jpg",
    "IMG_3254.jpg",
    "IMG_3255.jpg",
    "IMG_3256.jpg",
    "IMG_3257.jpg",
    "IMG_3258.jpg"
  ];

  let indiceMenu = 0;
  const slideMenu = document.querySelector("#slide-menu");

  function mostraMenu() {
    slideMenu.src = "foto_menu/" + fotoMenu[indiceMenu];
  }

  document.querySelector("#next-menu").addEventListener("click", () => {
    indiceMenu = (indiceMenu + 1) % fotoMenu.length;
    mostraMenu();
  });

  document.querySelector("#prev-menu").addEventListener("click", () => {
    indiceMenu = (indiceMenu - 1 + fotoMenu.length) % fotoMenu.length;
    mostraMenu();
  });

});
