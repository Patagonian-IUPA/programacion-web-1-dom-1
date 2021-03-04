// @TODO Completar...
const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const unorderedList = document.createElement("ul");

lista.appendChild(unorderedList);

const template = document.getElementById("template").content;

for (let i = 1; i <= 50; i++) {
  const listItem = template.getElementById("list-item");
  listItem.innerText = i;

  const nodo = template.cloneNode(true);
  unorderedList.appendChild(nodo);
}

contenedor.appendChild(lista);
