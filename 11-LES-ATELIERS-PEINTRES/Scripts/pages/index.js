import { getPeintres, getTableauxByPeintre } from "../utils/Api.js";
import { Header } from "../components/header.js";
import { Main } from "../components/main.js";
import { Footer } from "../components/footer.js";

const displayData = (datas) => {
    
    const body = document.querySelector('body');
    console.log(body);

    body.innerHTML = `<div class="container">
        ${Header(datas)}
        ${Main()}
        ${Footer()}
    </div>`;
}

/*
    La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'execution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche, de pouvoir continuer à réagir aux autres évènements pendant l'execution de la tâche. Une fois la tâche terminée, le programme en reçoit le résultat.
*/ 
(async () => {
    //  On récupère l'ensemble des données des peintres du fichir data.json, que l'on envoi en argument dans la fonction displayData().
    const datasTableauxByPeintre = await getTableauxByPeintre();
    console.log(datasTableauxByPeintre);
    const datas = await getPeintres();
    displayData(datas);
})();