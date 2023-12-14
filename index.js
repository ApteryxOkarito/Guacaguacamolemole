//objeto aguacate
let avocadosDom = document.getElementsByClassName('avocado')

let avocados = Array.from(avocadosDom).map(function(element) {
   return {
        isHidden : true,
        sprite : element,
    };
});

//cuando isHidden true, el aguacate está escondido
//cuando isHiden false, el aguacate está visible


//misma longitud map
let visibleAvocados = 0
let maxAvocados = 3
let timerID = setInterval(checkAvocados, 10) //reducir el tiempo (más adelante)

//esto genera numeros aleatorios 
function generateRandom(min,max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(typeof randomNumber)
    return randomNumber
}

//esto hace visible un aguacate escondido y luego lo vuelve a esconder (llama a la función que lo esconde)
function showAvocado(avocado) {
    avocado.sprite.style.visibility = "visible";
    avocado.isHidden = false;
    let randomTime = generateRandom(3,5)
    visibleAvocados ++;
    setTimeout(function() {
        hideAvocado(avocado);
    }, randomTime*1000);
}

//esto esconde un aguacate y lo vuelve a mostrar
function hideAvocado(avocado) {
    avocado.sprite.style.visibility = "hidden";
    avocado.isHidden = true;
    visibleAvocados --
}

//esto chequea aguacates (que no haya más de 3 en pantalla a la vez)
function checkAvocados(){
    if(visibleAvocados < maxAvocados){
    let choosenAvocado = pickHiddenAvocado()
    //console.log(choosenAvocado)
    showAvocado(choosenAvocado)
    }
}

//esto selecciona aguacates de forma aleatoria 
function pickHiddenAvocado(){
    let i = generateRandom(0,8);
    //console.log(i)
    let randomAvocado = avocados[i]
    if (randomAvocado.isHidden === true){
        return randomAvocado
    } else {
        pickHiddenAvocado()
    }
}



//queremos que escoja un aguacate que no esté ya visible, es decir que isHidden = false 

//No queremos que coja uno que está visible, no queremos que coja uno cuyo isHidden = false 

//if avocados.isHidden === false{

//}

//queremos que solo coja aquellos cuyos isHidden = true
 

// function checkAvocados(avocado){
//     if(visibleAvocados <= maxAvocados){
//         showAvocado(avocado)
//     }
// }









