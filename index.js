//objeto aguacate
let avocadosDom = document.getElementsByClassName('avocado')
let gameOverScreen = document.getElementById('gameover')
let avocados = Array.from(avocadosDom).map(function(element) {
   return {
        isHidden : true,
        sprite : element,
        timerAvocado : null
    };
});
let lifes = 1;
let startButton = document.getElementById('startbutton')
let startScreen = document.getElementById('start')
let restartButton = document.getElementById('restartbutton')
let visibleAvocados = 0
let maxAvocados = 3
let timerID //reducir el tiempo (más adelante)

//Puntero cambiado

let absolute = document.getElementById('absolute')
absolute.addEventListener('mouseover',function(){
    absolute.style.cursor = 'url("./Images/puntero.jpg"), auto';
});

//Funcionalidad botón start
startButton.addEventListener('click',function(){
    startScreen.style.display = "none";
    timerID = setInterval(checkAvocados, 10)
})

//funcionalidad botón game over
restartButton.addEventListener('click',function(){
    gameOverScreen.style.display = "none"
    timerID = setInterval(checkAvocados, 10)
})

//esto genera numeros aleatorios 
function generateRandom(min,max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}

//esto hace visible un aguacate escondido y luego lo vuelve a esconder (llama a la función que lo esconde)
function showAvocado(avocado) {
    console.log(avocado)
    avocado.sprite.style.visibility = "visible";
    avocado.isHidden = false;
    let randomTime = generateRandom(2,4)
    visibleAvocados ++;
    avocado.timerAvocado = setTimeout(function() {
        hideAvocado(avocado);
    }, randomTime*1000);
}

//esto esconde un aguacate y lo vuelve a mostrar
function hideAvocado(avocado) {
    avocado.sprite.style.visibility = "hidden";
    avocado.isHidden = true;
    visibleAvocados --
    lifes --
}

//esto chequea aguacates (que no haya más de 3 en pantalla a la vez) y las vidas
function checkAvocados(){
    if(visibleAvocados < maxAvocados){
    let choosenAvocado = pickHiddenAvocado()
    showAvocado(choosenAvocado)
    }
    if(lifes === 0){
        checkGameOver()
    }
}

//Funcioanlidad pierde y aparece pantalla de game over

function checkGameOver(){
    if(lifes === 0){
    gameOverScreen.style.display = 'block';
    clearInterval(timerID)
    
    avocados.forEach(function(avocado){
        clearTimeout(avocado.timerAvocado)
        avocado.isHidden = true
        avocado.sprite.style.visibility = "hidden"
    });
    lifes = 1
    visibleAvocados = 0    
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
        clearTimeout(clickedAguacate.timerAvocado)
        clickedAguacate.classList.add("avocadosmashed");
        //Este setTimeOut se encarga de que aparezca y desaparezca el smashed
        timerID2 = setTimeout(function(){
            clickedAguacate.classList.remove("avocadosmashed")
            clickedAguacate.classList.add("avocado")
            clickedAguacate.style.visibility = "hidden"
            clickedAguacate.isHidden = true
        },800)
    })
})





