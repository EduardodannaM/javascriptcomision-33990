/*
let nota1 = parseInt(prompt("ingrese primer nota de parcial"));
let nota2 = parseInt(prompt("ingrese segunda nota de parcial"));
let nota3 = parseInt(prompt("ingrese tercera nota de parcial"));
let suma = 0;

for (let i = 0; i <= 1; i++){
    suma = (nota1 + nota2 + nota3 ) / 3;
    if(suma >= 6){
        console.log("Estas aprobado, tu promedio es: " + suma);
    }else{
        console.log("Estas reprobado, tu promedio es: " + suma);
    } 
}*/

var servicio1 = 1500;  /*seguro auto*/
var servicio2 = 2000;  /*seguro hogar*/
var servicio3 = 3000;  /*seguro vida*/

alert("los servicios que ofrecemos son: seguro de auto (numero 1), seguro de hogar (numero 2), seguro de vida (numero 3)")
let servicioseleccionado = parseInt(prompt("Ingrese el numero del servicio que desea contratar (1, 2 o 3)"));

function precio(servicio1, servicio2, servicio3,){
    for (let i = 0; i < 10; i++){
        if (servicioseleccionado == 1){
            console.log("escogiste seguro de auto");
            servicioseleccionado = servicio1;
            return servicioseleccionado;
        }else if (servicioseleccionado == 2){
            console.log("escogiste seguro de hogar");
            servicioseleccionado = servicio2 * 0.21 + servicio2;
            return servicioseleccionado;
        }else if (servicioseleccionado == 3){
            console.log("escogiste seguro de vida");
            servicioseleccionado = servicio3 * 0.21 + servicio3;
            return servicioseleccionado;
        }else if((servicioseleccionado != 1) || (servicioseleccionado != 2) || (servicioseleccionado != 3)){
            alert("el numero ingresado no corresponde a ningun servicio ofrecido")
           servicioseleccionado= parseInt(prompt("Ingrese un numero del 1 al 3 para seleccionar un servicio"));
        }
    }
   /* return(precio);*/
}
precio(servicio1, servicio2, servicio3)
alert("el precio de su seguro es de $" +servicioseleccionado + " con 21% de iva incluido (seguro hogar y vida)");


