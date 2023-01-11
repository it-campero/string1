/*
Ejercicio JS String para estudianes
===================
*/

//Una cadena de texto con tu nombre.-
const nombre = "Facundo";
console.log(nombre);

//Una cadena de texto con tu apellido.-
const apellido = "Malorush";
console.log(apellido);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias.-
let estudiante = "Estudiante";
console.log(`${estudiante} ${nombre} ${apellido}`);
console.log(estudiante.concat(" ",nombre, " ", apellido));
console.log(estudiante + " " + nombre + " " + apellido)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas.-
let toMay = "estudianteMayus";
console.log(toMay.toUpperCase());

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas.-
let toMin = "estudianteMinus";
console.log(toMin.toLowerCase());

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios.-
let longitudCadena = "estudiante";
console.log(longitudCadena.length);

//Una variable que contenga la primera letra del Nombre
console.log(nombre.slice(0,1));
console.log(nombre);
console.log(nombre.charAt(0));

//Otra variable que contenga la última letra del Apellidoconsole.log(nombre);
console.log(nombre)
console.log(nombre.charAt(6));
console.log(nombre.slice(6,7));

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let espacios = " estudiante ";
//longitud de caracteres de un string con espacios.-
console.log(espacios.length);
//longitud de caracteres de un string con el método trim().-
console.log(espacios.trim());
console.log(espacios.trim().length);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante".-

let booleana = estudiante.includes(`${nombre}`)
console.log(booleana);