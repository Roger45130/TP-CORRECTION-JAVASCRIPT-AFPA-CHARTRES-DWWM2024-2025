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
    console.log(currentPictureLightBox);

    pictureGalery.forEach((item) => {
        item.addEventListener('click', () => {
            // alert('test')
            
            const srcCurrentPictureGalery = item.src;
            currentPictureLightBox.src = srcCurrentPictureGalery;

            itemsLightBox.forEach((item) => {
                item.classList.remove('fadeOut');
                item.classList.add('fadeIn');
            });
            currentPictureLightBox.classList.add('animationFaceInScale');
        });
    });
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