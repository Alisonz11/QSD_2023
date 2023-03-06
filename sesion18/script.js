/*//for
for (inicializacion; condicion; actualizacion) {
    //todo lo que tenga
    //aqui adentro
}

//while
var i =0;
while ( 1 == 2) {
    //todo lo que yo quiera
    //otra instruccion
    i++;
}

var i= 2;
//Do while
do {
    //instruccion1
    //instruccion2
    //instruccion3
}mientras(condicion)*/

//while - mientras el dia sea jueves 2 de marzo, limpien su habitacion.
//do while - Limpien su habitacion, mientras sea 3 de marzo

/*
segun un numero ingresado por el ususario, mostrar la suma de todos los numeros hasta dicho numero 
en un console.log{}
eje: El usuario ingresa 10
sumatoria total = 1+2+3+4+5+6+7+8+9+10 =55
hacerlo con for, while y do while
*/ 

do {
    var numero = parseInt(prompt("ingresa un numero positivo:"));
} while(numero < 0)

//ejemplo con for
var sumatoria = 0;
for (var i = 1; i <= numero; i++) {
    sumatoria += i;
}
console.log("(FOR)la sumatoria hasta" + numero + "es:" + sumatoria);

//ejemplo con while
sumatoria = 0;
var aux = numero;
while(aux > 0) {
    sumatoria |= aux;
    aux--;
}
console.log("(WHILE)La sumatoria hasta" + numero + "es:" + sumatoria);

//ejemplo con do while
sumatoria = 0;
var aux = numero;
do{
    sumatoria += aux;
    aux++;
}while(aux > 0)
console.log("(DO WHILE) La sumatoria hasta" + numero + "es:" + sumatoria);

/*
Según un texto ingresado por el usario, determinar cuántas letras a (mayúsculas o minúsculas) existen.
Pistas:
for, while, .lenght, .toUpperCase(), .toLowerCase(), i
-----------
var texto = "Hola este es un texto";
var palabra;

palabra = texto.slice(5); //devuelve la subcadena comenzando desde la posición 5
palabra = texto.slice(5, 9); //devuelve la subcadena comenzando desde la pos. 5 hasta la posicion 9
palabra = texto.slice(-5); //devuelve la subcadena comenzando desde el final, contando 5 posiciones

document.write(palabra);
*/

var texto = prompt("ingrese un texto");
var cantidad = texto.length;
var i = 0;
var contador = 0;
var desde = 0;
var hasta = 1;
while (i<cantidad) {
    if(texto.slice(desde,hasta)=="a"||texto.slice(desde,hasta)=="A"){
    contador = contador + 1;
    }
    i - i + 1;
    desde = desde +1;
    hasta = hasta +1;
}
alert("hay" + contador + "letras a")


//inversor texto
alert("invertir texto")
var texto = prompt("ingrese un texto");
var inverso ="";
var i = texto.length;
