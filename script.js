/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');

img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');

console.log(img);

pid.innerHTML= ""; //Borra el contenido del elemento.
pid.append(img);
*/

//Clase Eventos en Javascript

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btnEj = document.querySelector('#btnEjemplo');
const pResult = document.querySelector('#result');

//btn.addEventListener('click', btnOnClick);

/*function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    console.log(Number(input1.value) + Number(input2.value));
    console.log(parseInt(input1.value) + parseInt(input2.value));
    console.log(input1.value + input2.value);
}*/

//form.addEventListener('submit', sumarImputValues)

btnEj.addEventListener('mousemove', changeButtonColor);

function sumarImputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

function changeButtonColor(){
    btnEj.style.backgroundColor = '#337ab7'
}

