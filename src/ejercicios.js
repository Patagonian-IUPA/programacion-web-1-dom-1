const contenedor = document.getElementById("contenedor"); //TP DOM_01 Inc 1)

const lista = new DocumentFragment(); //TP DOM_01 Inc 2)

//TP DOM_01 Inc 3)
const ul = document.createElement("ul");
lista.appendChild(ul);

//TP DOM_01 Inc 4)
const template = document.createElement("template");
const liTemplate = document.createElement("li");
template.appendChild(liTemplate);

//TP DOM_01 Inc 5)
for (let i = 1; i <= 50; i++) {
  const clone = template.cloneNode(true);
  const li = clone.querySelector("li");
  li.textContent = `Item de Lista ${i}`;
  ul.appendChild(li);
}

//TP DOM_01 Inc 6)
contenedor.appendChild(lista);
