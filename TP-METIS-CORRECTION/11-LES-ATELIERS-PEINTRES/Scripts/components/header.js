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

export const Dropdown = () => {
  let navBar = document.querySelector(".nav");
  let iconBurger = document.querySelector(".icone__burger");
  iconBurger.addEventListener("click", () => {
    navBar.classList.toggle("navFunction");
  });
};

// //  Exercice 2: Créer une fonction pour les liens actifs, si dans l'URL ?pentre=Picasso, alors le lien <a> Picasso reste en couleur active (#d03001).

export const active = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let peintre = urlParams.get("peintre");
  let dataPeintre = document.querySelector('[data-peintre="' + peintre + '"]');
  console.log(dataPeintre);
  console.log(queryString);

  urlParams.forEach(() => {
    dataPeintre.addEventListener("click", () => {
      peintre.classList.add("active");
    });
  });
};
