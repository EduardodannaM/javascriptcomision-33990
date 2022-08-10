class servicios {
    constructor(nombre, plan, costo, id) {
        this.nombre = nombre;
        this.plan = plan;
        this.costo = costo;
        this.id = id;
    }
    sumaIva() {
        this.costo = this.costo * 1.21;
    }
}
const seguros = [];
seguros.push(new servicios("Auto", "bronce", 900, 1));
seguros.push(new servicios("Auto", "plata", 1200, 2));
seguros.push(new servicios("Auto", "oro", 2500, 3));
seguros.push(new servicios("Hogar", "bronce", 2000, 4));
seguros.push(new servicios("Hogar", "plata", 4000, 5));
seguros.push(new servicios("Hogar", "oro", 6000, 6));
seguros.push(new servicios("Vida", "bronce", 3000, 7));
seguros.push(new servicios("Vida", "plata", 4500, 8));
seguros.push(new servicios("Vida", "oro", 7000, 9));
alert("planes de seguros de auto 1- bronce, 2- plata, 3- oro");
alert("planes de seguros de hogar 4- bronce, 5- plata, 6- oro");
alert("planes de seguros de vida 7- bronce, 8- plata, 9- oro");
for(const id of seguros){
    console.log(id.nombre);
    console.log(id.plan);
    console.log(id.costo);
}
console.log("-------------------precios con iva incluido-------------------")
for(const servicios of seguros){
    servicios.sumaIva();
}
for(const id of seguros){
    console.log(id.nombre);
    console.log(id.plan);
    console.log(id.costo);
}






















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












/*
alert("planes de seguros de auto 1- bronce, 2- plata, 3- oro");
alert("planes de seguros de hogar 4- bronce, 5- plata, 6- oro");
alert("planes de seguros de vida 7- bronce, 8- plata, 9- oro");
for(const costo of precios){
    console.log(costo);
    console.log(costo.seguro);
}
let id = parseInt(prompt("ingrese el numero del ID de seguro que desee"));
for(const id of precios){
    calculoprecio(id, seguro, plan); 
        if (id == 1){
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 2) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 3) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 4) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 5) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 6) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 7) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }else if (id == 8) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }
        else if (id == 9) {
            console.log("escogiste el seguro de ", seguro, "y el plan ", plan);

        }
}
alert("el precio de su seguro es $ ", calculoprecio);
/*
console.log(servicio1);
console.log(servicio2);
console.log(servicio3);
*//*
alert("los servicios que ofrecemos son: seguro de auto (numero 1), seguro de hogar (numero 2), seguro de vida (numero 3)")
let servicioseleccionado = parseInt(prompt("Ingrese el numero del servicio que desea contratar (1, 2 o 3)"));
/*
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
   /* return(precio);*//*
}/*
precio(servicio1, servicio2, servicio3)
alert("el precio de su seguro es de $" +servicioseleccionado + " con 21% de iva incluido (seguro hogar y vida)");
*/

