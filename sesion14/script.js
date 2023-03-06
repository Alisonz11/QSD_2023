//estructura condicional (if)
var num = 33;
if (num > 30) {
alert("La variable num es mayor que 30");
}
/*
operadores matemaricos/aritmeticos 
mayor (>)
menor (<)
mayor o igual (>=)
menor o igual (<=)
igual (==) OJO CON ESTO!!
distinto (|=)
*/

var n1 = 12;
var n2 = 10;
//mayor
if (n1 > n2) {
    alert ("n1 es mayor que n2");
}
//menor
if (n1 < n2) {
    alert ("n1 es menor que n2");
}
//mayor o igual
if (n1 >= n2) {
    alert ("n1 es mayor o igual que n2");
}
//menor o igual
if (n1 <= n2) {
    alert ("n1 es menor o igual que n2");
}
//igual 
if (n1 == n2) {
    alert ("n1 y n2 son iguales");
}
//distintos
if (n1 != n2) {
    alert ("n1 y n2 son distintos");
}

//ejercicio
var num = prompt ("por favor ingresar un numero");
var num1 = parseInt(num);
var num2 = 10;
if (num1>num2) {
    alert ("el numero ingresado es mayor a 10");
}

