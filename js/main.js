//creo una variabile con il contenitore della griglia
let tabella = document.getElementById('tab');

for (let i = 1; i < 101; i++) {

    //creo un elemento div
    let div = document.createElement('div')
    //aggiungo ad ognielemento la classe square
    div.innerText = (i)
    console.log(div)

    
    div.classList.add('square')
    //stampo in pagina i div
   .document.getElementById('tab').innerText += (div)

}