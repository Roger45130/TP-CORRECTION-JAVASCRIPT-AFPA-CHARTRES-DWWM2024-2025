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
}

export const openLightBox = () => {
    console.log('openLightBox');
}