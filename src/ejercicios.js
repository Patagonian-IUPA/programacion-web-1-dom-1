// @TODO Completar...

// Ejercicos 1 a 4 
//const contenedor = document.getElementById('contenedor');
//const lista = new DocumentFragment;
//const ul = document.createElement('ul');
//lista.appendChild(ul);
//const template = document.createElement('template');
//const li = document.createElement('li');
//template.appendChild(li)
//ul.appendChild(li)
//contenedor.appendChild(lista)



// Ejercicos 5 y 6 
const contenedor = document.getElementById('contenedor');
const template = document.createElement('template');
const lista = new DocumentFragment;
const ul = document.createElement('ul');
for (let i = 0; i < 50; i++) {
    const li = document.createElement('li');
    lista.appendChild(ul);
    contenedor.appendChild(lista);
    template.appendChild(li);
    ul.appendChild(li);
}