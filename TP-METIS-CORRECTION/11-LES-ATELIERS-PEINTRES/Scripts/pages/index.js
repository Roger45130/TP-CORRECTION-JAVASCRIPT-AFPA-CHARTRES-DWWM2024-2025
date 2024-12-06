import { getPeintres, getTableauxByPeintre } from "../utils/Api.js";
import { Header, Dropdown, active } from "../components/header.js";
import { Main } from "../components/main.js";
import { Footer } from "../components/footer.js";

const displayData = (datas, datasTableauxByPeintre) => {
  const body = document.querySelector("body");
  body.innerHTML = `
        <div class="container">
        ${Header(datas)}
        ${Main(datasTableauxByPeintre)}
        ${Footer()}
        </div>
    `;
};

/*
    La programmation asynchrone permet de démarrer une tâche potentiellement longue
    sans bloquer le programme, qui continue d'exécuter d'autres tâches en parallèle.
*/

(async () => {
  // On récupère les données des peintres et des tableaux depuis data.json
  const datasTableauxByPeintre = await getTableauxByPeintre();
  const datas = await getPeintres();

  // Affiche les données sur la page
  displayData(datas, datasTableauxByPeintre);

  // Initialise la fonction Dropdown pour le menu burger
  Dropdown();

  active();
})();
