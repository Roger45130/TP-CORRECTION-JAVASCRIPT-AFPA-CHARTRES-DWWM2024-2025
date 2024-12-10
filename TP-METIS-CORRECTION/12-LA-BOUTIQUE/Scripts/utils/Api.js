const BASE_URL = "Data/data.json";

export const getData = async () => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        return new Error("Quelque chose ne va pas.")
    }
}

export const getArticles = async () => {
    const data = await getData();
    return data;
}

export const getTableauArticles = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    let article = urlParams.get("article");
    const datas = await getArticles();
    let data;
    
    if(!article) {
        const index = Object.keys(datas)[0];
        data = datas[index];
        article = index;
    }

    for (const key in datas) {
        if(key === article) {
            data = datas[key];
        }
    }

    return {
        name: article,
        data: data.article
    }
};