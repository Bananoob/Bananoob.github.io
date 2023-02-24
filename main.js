// window.addEventListener("load", function() {
//   // Récupération des éléments navbar et h1
//   var navbar = document.querySelector("nav");
//   var h1 = document.querySelector("h1");

//   // Récupération de la position x de la navbar
//   var navbarX = navbar.getBoundingClientRect().x;

//   // Application de la position x de la navbar au positionnement du h1
//   h1.style.marginLeft = navbarX + "px";
// });

// window.addEventListener('resize', function(event){
//   var h1 = document.querySelector("h1");
//   var width = window.innerWidth * 0.5; // on calcule la moitié de la largeur de la fenêtre
//   var height = 200; // on garde la hauteur fixe
//   maDiv.style.width = width + 'px'; // on met à jour la largeur
//   maDiv.style.height = height + 'px'; // on met à jour la hauteur
// });

// Le jeu du juste prix page
const ljdjp = document.getElementById("ljdjp");
ljdjp.addEventListener("click", function() {
  window.location.href = "./le-jeu-du-juste-prix/ljdjp.html";
});

// Animations page
const animations = document.getElementById("animations")
animations.addEventListener("click", function() {
  window.location.href = "./animations/animations.html";
})

// Current page
const title = document.getElementById("title")
title.addEventListener("click", function() {
  window.location.href = "home.html"
})

// SVGs
const svghome = document.getElementById("svghome")
svghome.addEventListener("click", function() {
  window.location.href = "home.html"
})