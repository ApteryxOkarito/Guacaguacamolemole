// //esto hace aparecer y desaparecer UN aguacate
// let avocado4 = document.getElementsByClassName('avocado')[4]
// console.log(avocado)

// /*let timerId = setTimeout(function(){
//     avocado4.style.visibility = "visible";
// },3000)*/

// function showAvocado4() {
//     avocado4.style.visibility = "visible";
//     setTimeout(hideAvocado4, 3000)
// }

// function hideAvocado4() {
//     avocado4.style.visibility = "hidden";
//     setTimeout(showAvocado4, 3000)
// }

// //showAvocado4()


//Hacer que los aguacates aparezcan y desaparezcan
//Extraemos los aguacates
// let avocadosDom = document.getElementsByClassName('avocado')

// //console.log(avocadosDom)


// let anyAvocado;

// for (let i = 0; i < avocadosDom.length;i++){
//     anyAvocado = avocadosDom[i];
//     console.log(anyAvocado)
// }

// function showAvocado(){
//     anyAvocado.style.visibility = "visible";
//     setTimeout(hideAvocado, 3000)
// }

// function hideAvocado(){
//     anyAvocado.style.visibility = "hidden";
//     setTimeout(showAvocado, 3000)
// }

// showAvocado(anyAvocado)

//RandomTime

function generateRandomSec(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomTime = generateRandomSec(3,8)


let avocadosDom = document.getElementsByClassName('avocado');

function showAvocado(avocado) {
    avocado.style.visibility = "visible";
    setTimeout(function() {
        hideAvocado(avocado);
    }, randomTime*1000);
}

function hideAvocado(avocado) {
    avocado.style.visibility = "hidden";
    setTimeout(function() {
        showAvocado(avocado);
    }, randomTime*1000);
}

for (let i = 0; i < avocadosDom.length; i++) {
    let currentAvocado = avocadosDom[i];
    showAvocado(currentAvocado);
}





//Click a los aguacates



// console.log(aguacates)


// function aplastarAguacate(evento){

// }

// // addEventListener('click', function(){
// //     console.log('soy un aguacate')
// // })


// aguacate.onClick = aplastarAguacate

// // aguacate.onClick = function(){
// //     console.log('soy un aguacate')
// // }


