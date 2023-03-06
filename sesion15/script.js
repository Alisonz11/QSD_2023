// var edad;
// var ingreso = prompt("ingrese su edad");
// edad = parseInt( ingreso );
/*
var edad = parseInt(prompt("Ingrse su edad"));
if (edad < 18) {
  alert("Aún eres menor de edad");
} else {
  alert("Eres mayor de edad");
}
*/

//--------------

var mes = prompt("Ingrese un mes");

/*
if (mes == 2) {
  alert("El mes tiene 28 días");
} else {
  if (mes == "febrero") {
    alert("El mes tiene 28 días");
  } else {
    if (mes == "feb") {
      alert("El mes tiene 28 días");
    } else {
      alert("El mes tiene más de 28 días");
    }
  }
}*/

if (mes == 2) {
  alert("El mes tiene 28 días");
} else if (mes == "febrero") {
  alert("El mes tiene 28 días");
} else if (mes == "feb") {
  alert("El mes tiene 28 días");
} else {
  alert("El mes tiene más de 28 días");
}

if (mes == 2 || mes == "febrero" || mes == "feb") {
  alert("El mes tiene 28 días");
} else {
  alert("El mes tiene más de 28 días");
}
