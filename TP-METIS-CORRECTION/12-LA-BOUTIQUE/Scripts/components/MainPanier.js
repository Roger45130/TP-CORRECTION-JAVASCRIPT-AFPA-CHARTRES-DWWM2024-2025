export const MainPanier = (datas) => {
    const displayArticles = () => {
        if (!datas || !datas.products) {
            console.log("Les données des articles sont manquantes ou incorrectes.");
            return '';
        }

        return datas.products
            .map((produit) => {
                return `
                    <figure class="card">
                        <img src="./Assets/Images/Products/${produit.image}" alt="${produit.alt}" class="article__picture">
                        <figcaption class="card__legend">${produit.name}<br><br>
                        <button class="btnVoirPlus">Voir plus</button></figcaption>
                    </figure>
                `;
            })
            .join('');
    };

    return `
        <main class="main">
            <section class="presentation">
              <h2 class="title__h2">Nos produits</h2>
              <div class="article__content">
                ${displayArticles()}
              </div>
            </section>
        </main>
    `;
};
