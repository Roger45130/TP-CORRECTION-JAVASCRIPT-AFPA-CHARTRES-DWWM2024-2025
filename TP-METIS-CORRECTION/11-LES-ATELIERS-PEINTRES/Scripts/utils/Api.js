const BASE_URL = "Data/data.json";

export const getData = async () => {
    try {

        //  L'API fetch (récupérer en Anglais) fournit une interface JavaScript pour accéder et manipuler des données.
        //  fetch() ici envoi une requête à partir d'une URL dans le fichier data.json afin de récupérer son contenu.
        //  L'opérateur await permet d'attendre la résolution d'une promesse. Il ne peut être utilisé qu'au sein d'une fonctiion asynchrone.
        //  Si la requête est bien effectué et bien terminé, le status est à 200.
        const response = await fetch(BASE_URL);
        // console.log(response);
        // console.log(response.json());
        return response.json();
    } catch (error) {
        return new Error("Quelque chose ne va pas.")
    }
}

export const getPeintres = async () => {
    const data = await getData();
    return data;
}

export const getTableauxByPeintre = async () => {

    // permet de récupérer dans l'URL les paramètres de recherche lorsque l'on clique sur un lien d'un peintre (exemple : ?peintre=Picasso | index=valeur&index=valeur=valeur).
    const queryString = window.location.search;
    // L'interface URLSearchParams définit des méthodes utilitaire pour travailler avec la chaine de requête (les paramètres GET) d'une URL.
    const urlParams = new URLSearchParams (queryString);
    let peintre = urlParams.get("peintre");
    const datas = await getPeintres();
    // console.log(queryString);
    // console.log(peintre);
    // console.log(datas);
    let data;

    //  On entre dans le IF seulement dans le cas où l'indice ?peintre= n'est pas définit dans l'URL, on entre uniquement pour la première visite de la page Web
    if(!peintre) {
        // console.log(datas);
        // console.log(Object.keys(datas)[0]);
        // console.log("Pas de params dans l'URL");

        //  Object.keys(datas) : permet de récupérer tout les indices de l'objet datas (['Picasso', 'Caillebotte', 'Vermeer' etc...])

        const index = Object.keys(datas)[0]; //  Caillebotte | Récupère le premier indice de l'objet datas
        //     datas["Caillebotte"]
        data = datas[index];
        peintre = index;
    }

    for (const key in datas) {
        if(key === peintre) {
            // console.log('key : ' + key);
            // console.log('peintre : ' + peintre);
            // data = datas["Monet"]
            data = datas[key];
        }
    }

    return {
        // ?? : Condition IF ternaire, SI peintre contient un peintre, on affecte la valeur de la variable peintre SINON on affecte la valeur 'Picasso'
        name: peintre,
        data: data.tableaux
    }
};