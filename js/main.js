

//bottone per iniziare a giocare
let start = document.getElementById('btn');
//creo una variabile con il contenitore della griglia
let tabella = document.getElementById('campo');

start.addEventListener('click', function () {

    //rimuovo la classe hide dalla tabella
    tabella.classList.remove('hide')

    //aggiungo la classe hide al bottone
    start.classList.add('hide')

})



for (let i = 1; i < 101; i++) {

    //richiamo funzione
    let elemento = creaElemento(i);

}

/**************FUNCTIONS****************/

//funzione per creare un elemento e add\remove classi 
function creaElemento(numero) {

    //creo un elemento div
    let div = document.createElement("div");

    //aggiungo ad ogni elemento la classe square
    div.classList.add('square');

    //numero i quadrati
    div.innerText = numero;

    //stampo in pagina i div
    tabella.append(div);

    //aggiungo eventlistener click
    div.addEventListener('click', function () {

        //aggiungi o rimuovi la classe color
        div.classList.toggle('color');

        let colorato = document.getElementsByClassName('color').innerText;
        console.log(colorato);
    });

    return div

};



/***************************************/