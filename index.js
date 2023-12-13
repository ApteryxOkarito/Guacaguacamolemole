//RandomTime
let avocadosDom = document.getElementsByClassName('avocado')
let avocaditos = {
    sprite : 1,
    isVisible : false
}

//misma longitud map
let visibleAvocados = 0
let maxAvocados = 3
let timerID = setInterval(checkAvocados, 10) //reducir el tiempo (más adelante)

//esto genera numeros aleatorios 
function generateRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//esto muestra un aguacate visible y llama al escondido
function showAvocado(avocado) {
    avocado.style.visibility = "visible";
    let randomTime = generateRandom(3,5)
    visibleAvocados ++;
    setTimeout(function() {
        hideAvocado(avocado);
    }, randomTime*1000);
}

//esto esconde un aguacate y llama al visible 
function hideAvocado(avocado) {
    avocado.style.visibility = "hidden";
    visibleAvocados --
    let randomTime = generateRandom(3,5)
}

//esto chequea aguacates 
function checkAvocados(){
    if(visibleAvocados < maxAvocados){
    let choosenAvocado = pickHiddenAvocado()
    showAvocado(choosenAvocado)
    }
}

//esto selecciona aguacates de forma aleatoria 
function pickHiddenAvocado(){
    let i = generateRandom(0,8)
    return avocadosDom[i]
}




// function checkAvocados(avocado){
//     if(visibleAvocados <= maxAvocados){
//         showAvocado(avocado)
//     }
// }









