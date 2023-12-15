//objeto aguacate
let avocadosDom = document.getElementsByClassName('avocado')

let avocados = Array.from(avocadosDom).map(function(element) {
   return {
        isHidden : true,
        sprite : element,
    };
});

//Funcionalidad botón start
let startButton = document.getElementById('startbutton')
let startScreen = document.getElementById('start')
startButton.addEventListener('click',function(){
    startScreen.style.display = "none"
})

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
    let randomTime = generateRandom(2,4)
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
    showAvocado(choosenAvocado)
    }
}

//esto selecciona aguacates de forma aleatoria 
function pickHiddenAvocado(){
    let i = generateRandom(0,8);
    let randomAvocado = avocados[i]
    if (randomAvocado.isHidden === true){
        return randomAvocado
    } else {
        return pickHiddenAvocado()
    }
}

//Esto hace que el aguacate que cliquee desaparezca 
let smashAguacate = avocados.forEach(function(avocado){
    avocado.sprite.addEventListener('click', function(event){
        let clickedAguacate = event.target;
        clickedAguacate.classList.add("avocadosmashed");
        timerID2 = setTimeout(function(){
            clickedAguacate.classList.remove("avocadosmashed")
            clickedAguacate.classList.add("avocado")
            clickedAguacate.style.visibility = "hidden"
            clickedAguacate.isHidden = true
        
        },800)
    })
})


