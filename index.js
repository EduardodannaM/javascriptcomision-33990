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
}

