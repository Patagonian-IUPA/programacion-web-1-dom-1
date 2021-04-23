// @TODO Completar...

//---------------------------------------------------------------------------//

console.log(document.getElementById('contenedor'));

const titulo = document.getElementById('contenedor');

titulo.textContent='Esto pertenece al DOM';
/*titulo.innerHTML='<h1>esto pertenece al DOM</h1>';*/

//--------------------------------------------------------------------------//
console.log(document.getElementsByTagName('h1'));

const h1 = document.getElementsByTagName('h1');

console.log(h1[0]);

h1[0].style.backgroundColor='#F68E1E';


//--------------------------------------------------------------------------//

const h2Nombre = document.getElementsByName('h2Nombre');

console.log(h2Nombre);
h2Nombre[0].style.backgroundColor='coral';


//--------------------------------------------------------------------------//

const div = document.querySelector('div');
console.log(div);

div.style.backgroundColor='green';
div.style.color='#FFF';
div.style.fontSize='25px';


//-------------------------------------------------------------------------//

const cuerpo =document.querySelectorAll('.cuerpo');
console.log(cuerpo);
cuerpo[0].style.backgroundColor='#ccc';
cuerpo[0].style.borderBottom='4px solid red';
cuerpo[0].style.padding='10px';


