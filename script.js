// //1.Pintar usuarios
// //En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
// // 

// //Imprimir por consola la lista de usuarios.
// axios
// .get("https://jsonplaceholder.typicode.com/users/")
// .then((res) => console.log(res.data))
// .catch((err) => console.error(err));

// //Imprimir por consola solo el nombre de los usuarios.
// axios
// .get("https://jsonplaceholder.typicode.com/users/")
// .then((res) => console.log(res.data.map(user => user.name)))

// .catch((err) => console.error(err));

// //Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
// let globalUsers = []
// axios
// .get("https://jsonplaceholder.typicode.com/users/")
// .then((res) => (globalUsers = res.data))
// .catch((err) => console.error(err))
// console.log(globalUsers);

//Crea una función que muestre por consola la variable global que habías creado
// const mostrar = () => console.log(globalUsers.map(user => user.name ))

// mostrar()

// //Crea un botón que cuando lo cliques ejecute la función que habías creado
// const button = document.getElementById('btn')


// //Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)
// const postDiv = document.getElementById('post')
// const mostrarVariable = () => {
// postDiv.innerHTML = globalUsers.map(user => {
//     return `<p>${user.name}</p>`})}
// button.addEventListener('click', mostrarVariable)

// Extras

// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.
// Imprimir por consola una imagen random de una raza.
// Imprimir por consola todas las imágenes de una raza concreta.
// Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.
//const cors = require('cors');
//cors()
axios
.get('https://dog.ceo/api/breeds/list')
.then((res) => console.log(res.data.message))
.catch((err) => console.error(err));
 
axios
.get('https://dog.ceo/api/breeds/image/random')
.then((res) => console.log(res.data.message))
.catch((err) => console.error(err));

axios
.get('https://dog.ceo/api/breeds/image')
.then((res) => console.log(res.data.message))
.catch((err) => console.error(err));

