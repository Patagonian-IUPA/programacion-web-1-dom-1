// @TODO Completar...

const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const unorderedList = document.createElement("ul");

lista.appendChild(unorderedList);

const template = document.getElementById("template").content;

for (let i = 1; i <= 50; i++) {
  template.getElementById("list-item").innerText = i;
  unorderedList.appendChild(template.cloneNode(true));
}

contenedor.appendChild(lista);
