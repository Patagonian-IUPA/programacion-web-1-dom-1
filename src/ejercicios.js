// @TODO Completar...
const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const ul = document.createElement("ul");
lista.appendChild(ul);

const template = document.getElementById("idtemplate");

const item = template.content.querySelector('li');

for (let index = 1; index <= 50; index++) {
    const itemNuevo = item.cloneNode(true);
    itemNuevo.textContent = index;
    ul.appendChild(itemNuevo);
}

contenedor.appendChild(lista);