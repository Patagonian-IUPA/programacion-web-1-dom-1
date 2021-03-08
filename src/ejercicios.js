'use strict'

const contenedor = document.querySelector('#contenedor');

const lista = document.createDocumentFragment();

const ul = document.createElement('ul');

lista.appendChild(ul);

const template = document.querySelector('#template').content;

for (let i = 1; i <= 50; i++) {
    const li = template.querySelector('li');
    li.textContent = `Elemento: ${i}`;
    const item = template.cloneNode(true);
    ul.appendChild(item);
}
contenedor.appendChild(lista);
