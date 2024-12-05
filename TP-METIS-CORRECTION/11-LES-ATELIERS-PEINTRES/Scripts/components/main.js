export const Main = (datas) => {

  const datasTableauxByPeintre = datas;

  const displayGalery = () => {

    //  Rendu : <div class="block__animation"></div>
    //  Cette élément html contient l'ensemble de la galerie (h2, toute la galerie)
    const blockAnimation = document.createElement('div');
    blockAnimation.classList.add('block__animation');

    //  On génère le titre <h2> de la galerie (exemple : Galerie Monet)
    const peintureTitle = document.createElement('h2');
    peintureTitle.classList.add('peinture__title');
    peintureTitle.innerText = `Galerie ${datasTableauxByPeintre.name}`;

    //  On injecte comme enfant le titre <h2> au blockAnimation global
    blockAnimation.appendChild(peintureTitle);

    //  On génère une div contenant toute les cards de la galerie
    const peintureContent = document.createElement('div');
    peintureContent.classList.add('peinture__content');

    //  On boucle les tableaux récupérer dans le fichier data.json et on génère une card <figure> par tour de boucle, la boucle tourne autant de fois qu'il y a de tableau pour le peintre
    datasTableauxByPeintre.data.forEach(tableau => {
      //  création de la balise <figure>
      const card = document.createElement('figure');
      card.classList.add('card');
      
      //  création de la balise <img>
      const picture = document.createElement('img');
      picture.classList.add('peinture__picture');
      //  On définit l'attribut alt de l'<img> avec le nom du peintre et le nom de l'image
      picture.setAttribute('alt', `Tableau ${datasTableauxByPeintre.name} : ${tableau}`);
      //  On définit la source de l'image 'Assets/images/Monet/image.png'
      picture.src = `Assets/images/${datasTableauxByPeintre.name}/${tableau}`;

      //  Création de la balise <figcaption> pour la légend de l'image
      const legend = document.createElement('figcaption');
      legend.classList.add('card__legend');
      //  split() : fonction qui permet de séparer les éléments d'un chaine de caractère via un séparateur (ici le '.') et place chaque élément séparés dans un tableau Array
      const textLegend = tableau.split('.')[0].replace(/[_-]/g, " ");
      legend.innerText = textLegend;

      //  On affecte comme enfant chaque card l'image et la légende
      card.appendChild(picture);
      card.appendChild(legend);

      //  On affecte comme enfant l'ensemble des cards au block peintureContent
      peintureContent.appendChild(card);
      
    });
    
    //  On affecte l'ensemble des éléments HTMl générés (h2, card ...) au bloc global
    blockAnimation.appendChild(peintureContent)
    blockAnimation.classList.add('animationBounce');
    
    // outerHTMl permet de convertir l'objet HTMLElement blockAnimation en html
    return blockAnimation.outerHTML;
  }

  displayGalery();

    return `
        <main class="main">
        <section class="main__presentation">
          <img
            src="assets/banner/img_baniere.png"
            alt="peinture bannière"
            class="banner"
          />
          <div class="presentation__content">
            <h2 class="presentation__title">Ce que nous faisons</h2>
            <p class="presentation__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed
              odio, quia error dolorum, earum illo, saepe voluptatem esse
              aperiam praesentium porro iure adipisci sit iusto totam in
              accusantium. Id quod facere doloremque, quos error voluptatibus
              maiores architecto sapiente, debitis expedita ullam quis fuga
              nulla ex velit magni perferendis aliquid.
            </p>
          </div>
        </section>
        <section class="galery">
          <aside class="galery__nav">
            <ul class="galery__nav__list">
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Nos productions</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Qui sommes nous</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Notre philosophie</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Nous contacter</a>
              </li>
            </ul>
          </aside>
          <section class="peinture">
            ${displayGalery()}
          </section>
        </section>
      </main>
    `;
}