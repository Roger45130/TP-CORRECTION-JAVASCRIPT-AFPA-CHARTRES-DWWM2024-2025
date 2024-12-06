export const Header = (datas) => {
  let navLink = "";
  //      Picasso in object toute les données
  for (let key in datas) {
    navLink += `
      <li class="nav__item">
      <a href="?peintre=${key}" class="nav__link">${key}</a>
      </li>
      `;
  }

  return `
    <header class="header">
        <div class="header__logo">
            <a href="index.html" class="header__link__logo">
                <img
                src="assets/logos/logo-art-peinture.png"
                alt="logo"
                class="logo"
                />
            </a>
            <h1 class="header__title">Les Artistes Peintres</h1>
        </div>
        <i class="fa-solid fa-bars icone__burger"></i>
        <nav class="nav">
            <ul class="nav__list">
                ${navLink}
            </ul>
        </nav>
    </header>
    `;
};

//   //  Exercice 1: Créer une fonction permettant de générer le menu déroulant.
// Fonctionnalité pour afficher/masquer le menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".icone__burger");
  const navList = document.querySelector(".nav__list");

  // Écouteur d'événements sur l'icône burger
  burgerIcon.addEventListener("click", () => {
    // Toggle de la classe active
    if (navList.style.display === "block") {
      navList.style.display = "none"; // Masquer la liste
    } else {
      navList.style.display = "block"; // Afficher la liste
    }
  });

  // Initialement, cacher le menu sur les écrans inférieurs à 768px
  if (window.innerWidth < 768) {
    navList.style.display = "none";
  }

  // Adapter le comportement en cas de redimensionnement de la fenêtre
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navList.style.display = "flex"; // Afficher le menu en flex
    } else {
      navList.style.display = "none"; // Cacher le menu
    }
  });
});

// const burgerIcon = document.querySelector(".icone__burger");
// const navLink = document.querySelector(".nav__link");

// burgerIcon.addEventListener("click", function () {
//     if (navLink.style.opacity === "0" || navLink.style.opacity === "") {
//         navLink.style.opacity = "1";
//         navLink.style.transition = "opacity 0.3s ease";
//         setTimeout(function () {
//             navList.style.pointerEvents = "auto";
//         }, 1);
//     } else {
//         navLink.style.opacity = "0";
//         navLink.style.pointerEvents = "none";
//     }
// });

// //  Exercice 2: Créer une fonction pour les liens actifs, si dans l'URL ?pentre=Picasso, alors le lien <a> Picasso reste en couleur active (#d03001).

// navLink.forEach((link) => {

//   link.addEventListener("click", () => {
//       navLink.forEach((navLink) => navLink.classList.remove("active"));
//       link.classList.add("active");
//   });
// });
