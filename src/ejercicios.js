'use strict';

/* 1. Obtener el elemento con `id=contenedor` y guardar
   su referencia en una variable `contenedor`. */

const contenedor = document.getElementById('contenedor');

/* 2. Crear un `DocumentFragment` y guardar su referencia en
   una variable `lista`. */

const lista = document.createDocumentFragment();

/* 3. Crear un elemento `<ul>` dinámicamente y almacenarlo en
   el `DocumentFragment` de la variable `lista`. */

const ul = document.createElement('ul');
lista.appendChild(ul);

/* 4. Crear un `template` con un elemento `<li>`. */
const temp = document.createElement('template');
const li = document.createElement('li');
temp.appendChild(li);

/* 5. Mediante un `for`, crear elementos `li` usando el [`template`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/template),
   desde el número **1** hasta el número **50**, e insertarlos
   en el `ul` del `DocumentFragment`. */

   for (let index = 0; index < 50; index++) {
      let tgtUl = lista.firstElementChild;
      let li = document.createElement('li');
      li.textContent = `**${index +1}**` ;
      tgtUl.appendChild(li);
   }
   
//  Insertar el `DocumentFragment` en el `contenedor`.

contenedor.appendChild(lista);