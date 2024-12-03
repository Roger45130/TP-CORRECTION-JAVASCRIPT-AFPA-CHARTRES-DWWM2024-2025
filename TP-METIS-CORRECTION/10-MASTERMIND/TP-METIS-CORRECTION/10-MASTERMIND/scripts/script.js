const colors = ['green', 'blue', 'red', 'purple', 'black', 'yellow'];
const colorslength = colors.length;
const circleSolution = document.querySelectorAll('.circle__solution');
const circleChoices = document.querySelectorAll('.circle__choices');
const choicesCurrent = document.querySelector('.choices').innerHTML;
// console.log(choicesCurrent);
let compteur = 0;
let step = 1;
let handleSelectedColors = [];
let arrayMatchs = [];
let arrayColorsIndicators = [];
//  arra   = toute les couleurs sélectionnées par l'utilisateur
//  str = 1 couleur combinaison secrète
const getMatch = (arr, str) => {
    // console.log(arr);
    // console.log(str);
    //                   blue
    let reg = new RegExp(str, "i");
    //                     1 couleur, data-position
    return arr.filter((item, index) => {
        //  Si la couleur sélectionné par l'utilisateur correspond à une couleur de la combinaison secrète
        if(item.match(reg)) {
            // arrayMatchs[2] = blue
            // arrayMatchs[data-position] = blue
            arrayMatchs[index] = item;
            return arrayMatchs;
        }
    });
}

const randomSelection = (n) => {
    let newArr = [];
    if (n >= colorslength) {
        return colors;
    }
    for(let i = 0; i <= n; i++) {
        //            colors[    0.45                  *     6       ] = indice entre 0 et 6 maximum
        let newElem = colors[Math.floor(Math.random() * colorslength)];
        // console.log('couleur' + i);
        // console.log('couleur' + newElem);
        while(newArr.includes(newElem)){
            newElem = colors[Math.floor(Math.random() * colorslength)];
        }
        newArr.push(newElem);
    }
    return newArr;
}

const arrayRandomColors = randomSelection(3);
// console.log(arrayRandomColors);

circleSolution.forEach((el, index) => {
    //               arrayRandomColors[0] = (couleur en 1è position de la solution);
    el.classList.add(arrayRandomColors[index]);
});

const allowDrop = (event) => {
    event.preventDefault();
}

const dragstart = (event) => {
    // console.log(event.target.id);
    let id = event.target.id + '-step' + step; //   green-step1 .... green-step2
    // console.log(id);

    event.target.setAttribute("id", id);
    event.dataTransfer.setData("text/plain", id);
}

//  Cette fonction permet de réinitialiser les choix de couleurs après chaque étapes.
const reset = () => {
    const choices = document.querySelector('.choices');
    choices.innerHTML = choicesCurrent;
}

const drop = (event) => {
    event.preventDefault();

    compteur++;
    // console.log(compteur);

    let data = event.dataTransfer.getData("text/plain");
    event.target.append(document.getElementById(data));

    //  Une fois le drag and drop effectué, on ne peut plus déplacer l'élément au bout de 500ms, setTimeout() s'exécute automatiquement au bout de 500ms.
    setTimeout(() => {
        document.getElementById(data).setAttribute('draggable', false);
    }, "500");

    const position = event.currentTarget.getAttribute('data-position');
    const colors = document.getElementById(data).getAttribute('data-color');

    handleSelectedColors[position] = colors;
    // console.log(handleSelectedColors);

    //  On entre dans cette condition tout les 4 drop.
    if(compteur % 4 == 0) {
        arrayRandomColors.forEach((colorRandom, indexRandom) => {
            getMatch(handleSelectedColors, colorRandom);
            console.log(arrayMatchs);
            
            // On convertit les tableaux de couleurs en chaîne de caractères, si les deux chaînes sont bien égales, l'utilisateur a trouvé la combinaison
            if(arrayRandomColors.toString() === arrayMatchs.toString()){
                console.log('Vous avez Gagné !!');
                arrayColorsIndicators.push('green');
            }else{
                //  On entre dans le else si il y a des correspondance de couleurs
                console.log("Vous n'avez pas Gagné !!");
    
                arrayMatchs.forEach((colorMatch, indexMatch) => {
                    if (colorRandom == colorMatch && indexRandom == indexMatch) {
                        //  Bonne couleur bien positionné
                        console.log('colorMatch ' + colorMatch + ' bien positionné');
                        arrayColorsIndicators.push('green');
                    }
                    if (colorRandom == colorMatch && indexRandom != indexMatch) {
                        //  Bonne couleur mais mal positionné
                        console.log('colorMatch ' + colorMatch + ' existe mais mal positionné');
                        arrayColorsIndicators.push('orange');
                    }
                });
            }
        });
        
        //  permet de lister les éléments de l'array par ordre alphabétique
        arrayColorsIndicators.sort();
        console.log(arrayColorsIndicators);
        const dataIndice = document.querySelectorAll('[data-indice="' + step + '"]');
        console.log(dataIndice);
        arrayColorsIndicators.forEach((couleur, index) => {
            dataIndice[index].classList.add(couleur);
        })

        step++;
        // console.log('étape : ' + step);

        reset();

        const positionStep = document.querySelectorAll('[data-step="' + step + '"]');
        // console.log(positionStep);
        positionStep.forEach((element) => {
            element.setAttribute("ondrop", "drop(event)");
            element.setAttribute("ondragover", "allowDrop(event)");
        })
        
        console.log(arrayColorsIndicators);

        //  On réinitialise 
        arrayColorsIndicators = [];
        arrayMatchs = [];
    }
    
};