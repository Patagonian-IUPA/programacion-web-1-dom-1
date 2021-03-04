// @TODO Completar...

//1
const contenedor = document.getElementById("contenedor");

//2
const lista = document.createDocumentFragment();

//3
const ul = document.createElement("ul");

lista.appendChild(ul);

//5
const template = document.getElementById("mitemplate").content;

for (i = 0; i < 50; i++) {
    const li = template.getElementById("list");
    li.textContent = i;
    const nodo = template.cloneNode(true);
    lista.appendChild(nodo);
    }

//6
    contenedor.appendChild(lista);