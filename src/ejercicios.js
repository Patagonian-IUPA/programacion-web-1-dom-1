// @TODO Completar...
const contenedor = document.getElementById('contenedor');

const lista = document.createDocumentFragment();

const nuevaLista = document.createElement('ul');

lista.appendChild(nuevaLista);

const template = document.getElementById("nuevoTemplate").content;

for(i=0; i<=50; i++){
    const span = template.getElementById("elementoLista");
    span.textContent = i;
    const nodo = template.cloneNode(true);
    lista.appendChild(nodo);
}

console.log(lista);

contenedor.appendChild(lista);