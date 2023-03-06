/*var x=10;
if (x<9) {
    alert("es menor que 10")
}else {
    alert("es mayor o igual que 10")
}

//switch
switch(x) {
    case 10:
        alert("el valor es 10");
        break;

    case 9:
        alert("el valor es 9");
        break;
     
    case 7:
        alert("el valor es 7");
        break;    
}*/

var mes = prompt("Ingrese una opción: \n 1 - Suma \n 2 - Resta");

switch (mes) {
  case 2:
    alert("El mes tiene 28 días");
    break;

  case "feb":
    alert("El mes tiene 28 días");
    break;

  case "febrero":
    alert("El mes tiene 28 días");
    break;

  default:
    alert("El mes tiene más de 28 días");
}

