// @TODO Completar...

const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const ul = document.createElement("ul");

lista.appendChild(ul);

for (i = 0; i < 50; i++) {
    const li = `<li class="list-group">${i}</li>`;
    ul.innerHTML += li;
    }


contenedor.appendChild(lista);