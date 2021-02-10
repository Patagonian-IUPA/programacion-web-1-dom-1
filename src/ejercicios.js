// @TODO Completar...

// Obtengo el elemento con id 'contenedor' y guardo su referencia en la variable 'contenedor'
const contenedor = document.getElementById('contenedor');

// Creo el DocumentFragment y guardo su referencia en una variable 'lista'
const lista = document.createDocumentFragment();

// Creo el ul dinámicamente y lo almaceno en el DocumentFragment
const itemList = document.createElement('ul');
itemList.setAttribute('id', 'itemList');

lista.appendChild(itemList);

// Selecciono el template (agregado a mano en el html), y lo asigno a la variable 'tt'
const tt = document.getElementById('mitemplate');

// Busco el elemento 'li' dentro del template y guardo su referencia en la variable 'elem'
const elem = tt.content.querySelector('li');

// Declaro la variable con let y no const, porque adentro del for le reasigno valores 
let nodo = elem.cloneNode(true);

for (let i = 1; i <= 50; i++) {
    nodo.textContent = `Elemento nº: ${i}`;
    // Inserto el 'li' que guardé en la variable 'elem', en la lista 'ul' del template
    itemList.insertBefore(nodo, itemList.firstElement);

    // Utilizo el método cloneNode para clonar el elemento que obtengo del template y poder usarlo
    nodo = elem.cloneNode(true);
}

// Finalmente, agrego el DocumentFragment modificado dentro del div contenedor, dinámicamente
contenedor.appendChild(lista);