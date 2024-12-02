
const n = Math.floor((Math.random() * 6)) + 1;

if (n !== 1) {
    console.log("Vish ta safe não atirou");
} else {
    console.log("Vish atirou");
}


let pente = 0

function recarregarPente() {
    for (let i = 0; i < 16; i++){
        pente++
        console.log('tlec')
    }
    console.log('Pente cheio')
}

function roletaRussaComGlock(){
    if(!(pente > 0)){
        console.log('pente vazio')
    } else {
        console.log('Voce morreu.')
    }
}

recarregarPente()
roletaRussaComGlock()
