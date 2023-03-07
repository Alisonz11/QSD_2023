/* 
1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y 
el programa muestre en una alert la temperatura en grados Fahrenheit.
*/

var centigrados, fahrenheit;
centigrados = parseInt(prompt("Ingrese la temperatura en grados centigrados"));
fahrenheit = (9 / 5 * centigrados) + 32;
alert("Los centigrados convertidos a fahrenheit son" + " " + "fahrenheit");

/*
2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5
*
**
***
****
*****
****
***
**
*
*/


/*
3) Según un numero ingresado por el usuario, calcular su factorial
Ej:
Factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
factorial de 5 = 120
factorial de 10 = 10*9*8*7*6*5*4*3*2*1 = 3628800
*/

var num = parseInt(prompt("Ingrese un numero"));
var resultado = num;
for (var i = 1; i < num; i++) {
    resultado = resultado * i;
}
alert("El resultado es");

/*
4) ATM (cajero automático)
Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
- EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
- DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
- CONSULTAR SALDO: debe mostrar el saldo actual
- VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
- SALIR: debe terminar la ejecución del programa
El programa debe mostrar el menú de opciones, y permitir ingresar una opción.
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú.
Si se elige SALIR, debe terminar el programa.
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada,
volver al menú de opciones.
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder
consultarse luego, por ejemplo:
ULTIMOS MOVIMIENTOS
- Extraido: $50
- Depositado: $550
- Extraido: $1000
- Consultado saldo: $3400
- Depositado: $100
- otra operacion
- otra operacion
 */

var opc = 0;
var saldo = 50000;
var retiro = 0;
var deposito = 0;
while (opc < 1 || opc > 4) {
    document.write("Bienvenido" + "<br>" + "Opciones" + "<br>" + "1. Consulta Saldo"
        + "<br>" + "2. Retiro" + "<br>" + "3. Deposito" + "<br>" + "4. Movimientos" + "<br>");
    opc = parseInt(prompt("Ingrese la opcion: "));
}
if (opc == 1) {
    document.write("Su saldo actual es: " + saldo);
}
if (opc == 2) {
    while (retiro > saldo || retiro == 0 != 0)
        retiro = parseInt(prompt("Cuanto quiere retirar"));
} saldo = saldo - retiro;
document.write("Su saldo actual es: " + saldo);
if (opc == 3) {
    deposito = parseInt(prompt("Cuanto deposita: "));
    saldo = saldo + deposito;
    document.write("Su saldo actual es: " + saldo);
}
if (opc == 4) {
    alert("No tiene movimientos");
}

/*
5) Fibonacci
Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34
 */

