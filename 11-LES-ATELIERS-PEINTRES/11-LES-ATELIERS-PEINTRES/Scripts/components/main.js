export const Main = (datas) => {

  const datasTableauxByPeintre = datas;

  const displayGalery = () => {
    const blockAnimation = document.createElement('div');
    blockAnimation.classList.add('block__animation');
    const peintureTitle = document.createElement('h2');
    peintureTitle.classList.add('peinture__title');
    peintureTitle.innerText = `Galerie ${datasTableauxByPeintre.name}`;

    blockAnimation.appendChild(peintureTitle);

    const peintureContent = document.createElement('div');
    peintureContent.classList.add('peinture__content');

    datasTableauxByPeintre.data.forEach(tableau => {

      const card = document.createElement('figure');
      card.classList.add('card');
      
      const picture = document.createElement('img');
      picture.classList.add('peinture__picture');
      picture.setAttribute('alt', `Tableau ${datasTableauxByPeintre.name} : ${tableau}`);
      picture.src = `Assets/images/${datasTableauxByPeintre.name}/${tableau}`;

      const legend = document.createElement('figcaption');
      legend.classList.add('card__legend');
      console.log(tableau.split('.'));
      const textLegend = tableau.split('.')[0].replace(/[_-]/g, " ");
      legend.innerText = textLegend;

      card.appendChild(picture);
      card.appendChild(legend);

      console.log(card);
    });
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
            <h2 class="peinture__title">Galerie Picasso</h2>
            <div class="peinture__content">
              <figure class="card">
                <img
                  src="assets/images/Picasso/La_Sieste.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 1</figcaption>
              </figure>
              <figure class="card">
                <img
                  src="assets/images/Picasso/Le_déjeuner-1873.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 2</figcaption>
              </figure>
              <figure class="card">
                <img
                  src="assets/images/Picasso/Le_Peintre_et_son_Modele.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 3</figcaption>
              </figure>
              <figure class="card">
                <img
                  src="assets/images/Picasso/Les_Coquelicots.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 4</figcaption>
              </figure>
              <figure class="card">
                <img
                  src="assets/images/Picasso/Les_Iris-1889.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 5</figcaption>
              </figure>
              <figure class="card">
                <img
                  src="assets/images/Picasso/La_Sieste.png"
                  alt="peinture picasso"
                  class="peinture__picture"
                />
                <figcaption class="card__legend">Image 6</figcaption>
              </figure>
            </div>
          </section>
        </section>
      </main>
    `;
}