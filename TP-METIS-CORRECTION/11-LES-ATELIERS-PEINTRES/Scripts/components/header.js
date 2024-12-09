export const Header = (datas) => {
    let navLink = "";
    //      Picasso in object toute les données
    for (let key in datas) {

      
      navLink += `
      <li class="nav__item">
      <a href="?peintre=${key}" data-peintre="${key}" class="nav__link">${key}</a>
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

export const dropdownNav = () => {
  const iconeBurger = document.querySelector('.icone__burger');
  const nav = document.querySelector('.nav');
  // console.log(nav);

  iconeBurger.addEventListener('click', () => {
    nav.classList.toggle('toggleNav');
  });

}

// //  Exercice 2: Créer une fonction pour les liens actifs, si dans l'URL ?pentre=Picasso, alors le lien <a> Picasso reste en couleur active (#d03001).

export const activeNavLink = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get('peintre');
  // console.log(window.location); //  retourne les paramètres de l'URL.
  // console.log(queryString); //  retourne les paramètres de recherche de l'URL (?peintre=Picasso).
  // console.log(param); //  retourne la valeur de l'indice de recherche ?peintre= de l'URL.

  let selector = '[data-peintre="' + param + '"]';

  //  On entre dans cette condition que dans le cas où l'indice ?peintre N'EST PAS par défint, c'est-à-dire au premier changement de la page, on sélectionne le premier lien de la nav.
  if(!param) selector = '.nav__link';

  const activeLink = document.querySelector(selector);
  activeLink.classList.add('active');
  // console.log(activeLink);
}