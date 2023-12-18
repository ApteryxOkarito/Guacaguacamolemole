//Elementos del juego
let avocadosDom = document.getElementsByClassName('avocado')
let gameOverScreen = document.getElementById('gameover')
let avocados = Array.from(avocadosDom).map(function(element) {
   return {
        isHidden : true,
        sprite : element,
        timerAvocado : null,
        timerShowAvocado :null
    };
});
let lifes = 1;
let startButton = document.getElementById('startbutton')
let startScreen = document.getElementById('start')
let restartButton = document.getElementById('restartbutton')
let visibleAvocados = 0
let maxAvocados = 3
let music = new Audio("./Music/Classic Mariachi .mp3")
music.play();
let timerID //reducir el tiempo (más adelante)


//Funcionalidad botón start
startButton.addEventListener('click',function(){
    startScreen.style.display = "none";
    timerID = setInterval(checkAvocados, 10)
})

//funcionalidad botón game over
restartButton.addEventListener('click',function(){
    gameOverScreen.style.display = "none"
    timerID = setInterval(checkAvocados,10)
})

//esto genera numeros aleatorios 
function generateRandom(min,max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}

//esto hace visible un aguacate escondido y luego lo vuelve a esconder (llama a la función que lo esconde)
function showAvocado(avocado) {
    avocado.sprite.style.visibility = "visible";
    avocado.isHidden = false;
    let randomTime = generateRandom(2,5)
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
        let randomTime2 = generateRandom(1,3)
        visibleAvocados ++;
        let choosenAvocado = pickHiddenAvocado()
        choosenAvocado.isHidden = false;
        choosenAvocado.timerShowAvocado = setTimeout(function(){
        showAvocado(choosenAvocado)
        },randomTime2*1000)
    }
    if(lifes === 0){
        checkGameOver()
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

//Funcioanlidad pierde y aparece pantalla de game over

function checkGameOver(){
    if(lifes === 0){
    gameOverScreen.style.display = 'block';
    clearInterval(timerID)
    
    avocados.forEach(function(avocado){
        clearTimeout(avocado.timerAvocado)
        clearTimeout(avocado.timerShowAvocado)
        avocado.isHidden = true
        avocado.sprite.style.visibility = "hidden"
    });
    lifes = 1
    visibleAvocados = 0    
    }
}


//Esto hace que el aguacate que cliquee desaparezca 
avocados.forEach(function(avocado){
    avocado.sprite.addEventListener('click', function(event){
    let clickedAguacate = event.target;
    clearTimeout(avocado.timerAvocado)
    clickedAguacate.classList.add("avocadosmashed");
    visibleAvocados --
    //Este setTimeOut se encarga de que aparezca y desaparezca el smashed
    timerID2 = setTimeout(function(){
        clickedAguacate.classList.remove("avocadosmashed")
        clickedAguacate.classList.add("avocado")
        clickedAguacate.style.visibility = "hidden"
        avocado.isHidden = true
    },800)
})
})


// window.onload = function(){
//     let music = new Audio("./Music/Classic Mariachi .mp3")
//     music.play();
// }
