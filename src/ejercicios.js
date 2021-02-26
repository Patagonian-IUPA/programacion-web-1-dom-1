// @TODO Completar...

const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const ul = document.createElement("ul");

lista.appendChild(ul);

for (let i = 0; i < 50; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }

contenedor.appendChild(lista);