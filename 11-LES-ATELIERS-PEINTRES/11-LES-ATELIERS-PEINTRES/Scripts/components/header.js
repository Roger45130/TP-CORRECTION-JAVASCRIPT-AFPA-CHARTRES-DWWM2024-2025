export const Header = (datas) => {
    let navLink = "";
    //      Picasso in object toute les données
    for (let key in datas) {
        key = key.replace(/_/g, ' ');

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
}