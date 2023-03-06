//espacio en blanco no
//no comenzar con numero o signos
//idem anterior .
//no mayusculas
//no acentos
//no caracteres especiales(ñ)
//nombre% idem anterior edadd¿, "nombre"
//nom_empe, lisCompl - notacion camello o camelCase notacion
/*var num1 = 10;
var num2 = 1000000;
var total = num1+num2;
alert("el total es"+total);
//length
var texto = "Hola como estas? otra cosa";
var cantidad = texto.length;
alert (cantidad);
//concatenar
var nombre = "Alison";
var apellido = "Zarta";
var signo = "Aries";
var nombre_completo_signo = nombre + " " + apellido + " " + "mi signo es" + " " + signo;
alert(nombre_completo_signo);
alert(nombre_completo_signo.length);
alert(nombre_completo_signo.toUpperCase())
alert(nombre_completo_signo.toLowerCase())

//mayusculas
var mascota = "perro";
alert(mascota.toUpperCase());
//minuscula
var color = "VERDE";
alert(color.toLowerCase());*/
//pronpt
var nombre_usuario = prompt("Hola, ingrese su nombre por favor");
alert(nombre_usuario.toUpperCase());

var color = prompt ("Hola, ingrese su color favorito");
alert("Tu color es el" +" " + color.toUpperCase());

//parseint
var num = prompt("Ingrese un numero");
var resta = 10 - parseInt(num);
alert(resta);

var num1 = prompt("ingrese primer numero");
var num2 = prompt("Ingrese segundo numero");
var enum1 = parseInt(num1);
var enum2 = parseInt(num2);
alert("La suma de los dos numeros es" + (enum1+enum2));
alert("La resta de los dos numeros es" + (enum1-enum2));
alert("La multiplicacion de los dos numeros es" + (enum1*enum2));
alert("La division de los dos numeros es" + (enum1/enum2));
