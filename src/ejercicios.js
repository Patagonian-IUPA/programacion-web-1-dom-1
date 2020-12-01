// @TODO Completar...

/*
1. Obtener el elemento con `id=contenedor` y guardar
   su referencia en una variable `contenedor`.
 */

const contenedor= document.getElementById('contenedor');
console.log(contenedor);

/*2. Crear un `DocumentFragment` y guardar su referencia en
una variable `lista`.*/
// let lista = new DocumentFragment();
const lista = document.createDocumentFragment();
console.log(lista);

/*3. Crear un elemento `<ul>` dinámicamente y almacenarlo en
el `DocumentFragment` de la variable `lista`.*/
const ul=document.createElement('ul');
console.log(ul);


let list_ul = ['Alumno: Franck  Tscherig (elemento ul)'];

list_ul.forEach(item=>{   
//const ul=document.createElement('ul');
//console.log(ul);
     ul.classList.add("list-group-item");
     //ul.classList.add("test")
     const listaTexto=document.createTextNode(item);
     console.log('lista texto:',listaTexto);
     ul.setAttribute('title',item);
     ul.setAttribute('id','Listerine');
     ul.appendChild(listaTexto);
     lista.insertBefore(ul,contenedor.firstElement);
     contenedor.appendChild(lista);
     //console.log(list_ul);
})  
    

/* 4. Crear un `template` con un elemento `<li>`. */

/* <template id='mytemplate'>
<!--<li class="list list-group-item"> -->
<li id="id_algo"  class='Listatemplate'>Lista 0</li></li>
</template */

const template=document.getElementById('mitemplate').content;
console.log("Template: ",template);


/*
5. Mediante un `for`, crear elementos `li` usando el `template`,
desde el número **1** hasta el número **50**, e insertarlos
en el `ul` del `DocumentFragment`.  */

let list_li = ['Alumno: Franck  Tscherig (elemento li)'];   

n=50;
for (let i=0;i<n;i++){

list_li.forEach(item1=> {
const span = template.getElementById('texto');
span.textContent = item1;
const nodo = template.cloneNode(true);
//   lista.appendChild(nodo);
lista.appendChild(nodo);
// console.log('creacion lista LI', lista.appendChild(nodo));
})
}
let nodo_refencia=document.getElementById('contenedor').getElementsByTagName('ul');
//console.log(nodo_refencia);
contenedor.appendChild(lista,nodo_refencia);