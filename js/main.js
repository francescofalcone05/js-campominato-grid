

//bottone per iniziare a giocare
let start = document.getElementById('btn');
//creo una variabile con il contenitore della griglia
let tabella = document.getElementById('campo');
//creo variabile per il select
let level = document.getElementById('difficolty');

start.addEventListener('click', function () {

    /*se voglio tenere bottone e select in pagina durante il gioco,
     per poter cambiare il livello anche dopo averlo selezionato la prima volta */ 
    tabella.innerHTML = ""

    //se il livello selezionato e` Easy
    if (level.value == 'easy') {
        // rimuovo la classe hide dalla tabella
        tabella.classList.remove('hide')
        //aggiungi la classe container al contenitore a secondo del livello selezionato
        tabella.classList.add('contenitore_easy')

        //se voglio nascondere bottone e select una volta scelto il livello aggiungo la classe hide
        //start.classList.add('hide')
        //level.classList.add('hide')

        for (let i = 1; i < 101; i++) {

            //richiamo funzione
            let elemento = creaElemento(i);

        }

    //altrimenti se il livello selezionato e` Medium
    } else if (level.value == 'medium') {
        // rimuovo la classe hide dalla tabella
        tabella.classList.remove('hide')
        //aggiungi la classe container al contenitore a secondo del livello selezionato
        tabella.classList.add('contenitore_medium')

        //se voglio nascondere bottone e select una volta scelto il livello aggiungo la classe hide
        //start.classList.add('hide')
        //level.classList.add('hide')

        for (let i = 1; i < 82; i++) {

            //richiamo funzione
            let elemento = creaElemento(i);

        }
    //altrimenti se il livello selezionato e` Hard
    } else if (level.value == 'hard') {
        // rimuovo la classe hide dalla tabella
        tabella.classList.remove('hide')
        //aggiungi la classe container al contenitore a secondo del livello selezionato
        tabella.classList.add('contenitore_hard')

        //se voglio nascondere bottone e select una volta scelto il livello aggiungo la classe hide
        //start.classList.add('hide')
        //level.classList.add('hide')

        for (let i = 1; i < 50; i++) {

            //richiamo funzione
            let elemento = creaElemento(i);

        }

    }

})


/**************FUNCTIONS****************/

//funzione per creare un elemento e add\remove classi 
function creaElemento(numero) {

    //creo un elemento div
    let div = document.createElement("div");

    //aggiungo ad ogni elemento la classe square
    div.classList.add('square');

    //numero i quadrati
    // div.innerText = numero;

    //stampo in pagina i div
    tabella.append(div);

    //aggiungo eventlistener click
    div.addEventListener('click', function () {

        //aggiungi o rimuovi la classe color
        div.classList.toggle('color');
        console.log('ho cliccato', numero)

        //se dentro l'innerText non c'e` nulla
        if (div.innerText == '') {
            //aggiungi inerText
            div.innerText = numero;
        } else {

            //altrimenti svuota innerText
            div.innerText = ''
        }
    });

    return div

};




/***************************************/