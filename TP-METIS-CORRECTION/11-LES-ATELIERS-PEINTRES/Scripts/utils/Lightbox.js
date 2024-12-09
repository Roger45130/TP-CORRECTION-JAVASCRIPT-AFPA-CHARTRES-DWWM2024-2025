export const LightBoxRender = () => {
    // console.log('LightBoxRender');
    return `
    <i class="fa-solid fa-circle-xmark icone__close"></i>
    <i class="fa-solid fa-chevron-left icone__previous"></i>
    <i class="fa-solid fa-chevron-right icone__next"></i>
    <div class="lightbox">
      <img src="Assets/images/Caillebotte/Autoportrait_Caillebotte.png" alt="image Caillebotte" class="picture__lightbox">
    </div>
    `;
};

export const openLightBox = () => {
    const pictureGalery = document.querySelectorAll('.peinture__picture');
    // console.log(pictureGalery)
    const itemsLightBox = document.querySelectorAll('.icone__close, .icone__previous, .icone__next, .lightbox');
    // console.log(itemsLightBox);
    const currentPictureLightBox = document.querySelector('.picture__lightbox');
    // console.log(currentPictureLightBox);

    pictureGalery.forEach((item) => {
        item.addEventListener('click', () => {
            //  Pour avoir l'effet de zoom a chaque fois que l'on ouvre la lightbox, on supprime d'abord la classe animationFadeInScale pour l'affecter 50ms plus tard grace à la fonction setTimeout.
            currentPictureLightBox.classList.remove('animationFaceInScale');
            //  Source de l'image de la galerie sur laquelle nous avons cliqué.
            const srcCurrentPictureGalery = item.src;
            const dataPositionPictureGalery = item.getAttribute('data-position');
            // console.log('position picture ' + dataPositionPictureGalery);
            //  On affecte la source de l'image de la galerie sur laquelle nous avons cliquée, à la source de l'image de la lightbox.
            currentPictureLightBox.src = srcCurrentPictureGalery;
            currentPictureLightBox.setAttribute('data-position', dataPositionPictureGalery);

            //  On boucle tout les éléments de la lightbox (icones + div + img) afin de leur affecter les classes css permettant de l'ouvrir / fermer.
            itemsLightBox.forEach((item) => {
                item.classList.remove('fadeOut');
                item.classList.add('fadeIn');
            });

            //  Commentaire ci-dessus.
            setTimeout(() => {
                currentPictureLightBox.classList.add('animationFaceInScale');
            }, "50");
        });
    });
};

let compteur = 0;
let index = 0;


export const NextLightBox = (datasTableauxByPeintre) => {
    console.log(datasTableauxByPeintre);
    const name = datasTableauxByPeintre.name;
    const arrayTableaux = datasTableauxByPeintre.data;
    const sizeArrayTableaux = arrayTableaux.length;
    const iconeNext = document.querySelector('.icone__next');
    console.log(name);
    console.log(arrayTableaux);
    console.log(sizeArrayTableaux);
    // console.log(iconeNext);

    iconeNext.addEventListener('click',() => {
        const currentPictureLightBox = document.querySelector('.picture__lightbox');
        console.log(currentPictureLightBox);
        const currentPositionPicture = parseInt(currentPictureLightBox.getAttribute('data-position'));
        console.log('currentPositionPicture : ' + currentPositionPicture);

        compteur++;
        index = currentPositionPicture + compteur;
        console.log(index);
    })
};

export const PreviousLightBox = (datasTableauxByPeintre) => {
    // console.log(datasTableauxByPeintre);
    // const name = datasTableauxByPeintre.name;
    // const arrayTableaux = datasTableauxByPeintre.data;
    // const sizeArrayTableaux = arrayTableaux.length;
    // const iconePrevious = document.querySelector('.icone__next');
    // console.log(name);
    // console.log(arrayTableaux);
    // console.log(sizeArrayTableaux);
    // console.log(iconePrevious);

    // iconePrevious.addEventListener('click',() => {
        
    // })
};

export const closeLightBox = () => {
    const itemsLightBox = document.querySelectorAll('.icone__close, .icone__previous, .icone__next, .lightbox');
    const iconeClose = document.querySelector('.icone__close');
    // console.log(itemsLightBox);
    // console.log(iconeClose);

    iconeClose.addEventListener('click', () => {
        itemsLightBox.forEach((item) => {
            item.classList.remove('fadeIn');
            item.classList.add('fadeOut');
        })
    })
};