// @TODO Completar...

// Obtengo el elemento con id 'contenedor' y guardo su referencia en la variable 'contenedor'
const contenedor = document.getElementById('contenedor');

// Creo el DocumentFragment y guardo su referencia en una variable 'lista'
const lista = document.createDocumentFragment();

// Creo el ul dinámicamente y lo almaceno en el DocumentFragment
const ul = document.createElement('ul');
lista.appendChild(ul);

// Selecciono el template (agregado a mano en el html), y lo asigno a la variable 'tt'
const tt = document.getElementById('mitemplate');

// Busco el elemento 'li' dentro del template y guardo su referencia en la variable 'itemList'
const itemList = tt.content.querySelector('li');

for (let i = 1; i <= 50; i++) {
    // Utilizo el método cloneNode para clonar el elemento que obtengo del template y poder usarlo
    const nodo = itemList.cloneNode(true);

    // Agrego texto que identifique el número de línea que se agrega
    nodo.textContent = `Elemento nº: ${i}`;
    
    // Inserto el 'li' que guardé en la variable 'elem', en la lista 'ul' del template
    ul.insertBefore(nodo, ul.firstElement);
}

// Finalmente, agrego el DocumentFragment modificado dentro del div contenedor, dinámicamente
contenedor.appendChild(lista);