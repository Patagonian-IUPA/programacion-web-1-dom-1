// @TODO Completar...
const contenedor = document.getElementById("contenedor");
console.log (contenedor);

const lista = document.createDocumentFragment();
console.log (lista);

const ul = document.createElement("ul");
lista.appendChild(ul);

const template = document.getElementById("idtemplate");

const item = template.content.querySelector("li");

for (let index = 1; index <= 50; index++) {
    const itemNew = item.cloneNode(true);
    itemNew.textContent = index;
    ul.appendChild(itemNew);
}

contenedor.appendChild(lista);