//Hacer que los aguacates aparezcan y desaparezcan

let aguacate = document.getElementsByClassName('aguacate')[4]
console.log(aguacate)

/*let timerId = setTimeout(function(){
    aguacate.style.visibility = "visible";
},3000)*/

function mostrarAguacate() {
    aguacate.style.visibility = "visible";
    setTimeout(ocultarAguacate, 3000)
}

function ocultarAguacate() {
    aguacate.style.visibility = "hidden";
    setTimeout(mostrarAguacate, 3000)
}

mostrarAguacate()







//Click a los aguacates

// let aguacates = document.getElementsByClassName('aguacate')

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


