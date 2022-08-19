class servicios { //declaro los atributos que van a tener mis seguros ofrecidos 
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
//creo array de seguros 
const seguros = [];
seguros.push(new servicios("Auto", "Bronce", 900, 1));
seguros.push(new servicios("Auto", "Plata", 1200, 2));
seguros.push(new servicios("Auto", "Oro", 2500, 3));
seguros.push(new servicios("Hogar", "Bronce", 2000, 4));
seguros.push(new servicios("Hogar", "Plata", 4000, 5));
seguros.push(new servicios("Hogar", "Oro", 6000, 6));
seguros.push(new servicios("Vida", "Bronce", 3000, 7));
seguros.push(new servicios("Vida", "Plata", 4500, 8));
seguros.push(new servicios("Vida", "Oro", 7000, 9));

const crearCard = (seguroCards, identificador) => {
    const col = document.createElement("div");
    col.className = "col";
    //creo la lista de seguros 
    const contenido = `
    <div class="card" style="width: 25rem padding 2px;">
        <div class="card-body">
            <h5 class="card-title">${seguroCards.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted"> ${seguroCards.plan} - ${seguroCards.costo} </h6>
            <button id="btn - ${seguroCards.id}">Cotiza</button>
            <p id="mensajeBtnCotizar"></p>
        </div>
    </div>`;

    col.innerHTML = contenido; 
    document.querySelector(`#${identificador}`).append(col);
    //aplico evento para trackear los cliks en el boton cotizar 
    col.onclick = () => {
       console.log("el usuario desea cotizar algun seguro");
       seguroPorCotizar.push(seguroCards); // se muestra el seguro que la persona desea cotizar con iva incluido solo puedo cotizar un solo seguro
       mostrarSeguros(seguroPorCotizar, "seguroPorCotizar");
       const msjCoti = document.getElementById("mensajeBtnCotizar");
       msjCoti.innerText = "¿Queres cotizar este seguro? " +  seguroCards.nombre + "\nCon el plan " + seguroCards.plan; 
    }
};


//funcion para mostrar el seguro que el cliente desea cotizar 
const mostrarSeguros = (seguroListado, identificador) => {
    for (const seguroCards of seguroListado) {
        crearCard(seguroCards, identificador);
    }
}
const seguroPorCotizar = [];

mostrarSeguros(seguros, "catalogo");
/*
for (const seguroCards of seguros) {
    crearCard(seguroCards);
}/*
let botonCoti = document.getElementById(${seguroCards.id})
botonCoti.addEventListener("click", eventoClick);
function eventoClick(){
    console.log("el usuario desea cotizar algun seguro");
    const msjCoti = document.getElementById("mensajeBtnCotizar");
    msjCoti.innerHTML = "¿Quieres cotizar este seguro?";
}*/


// muestro todos los seguros 
alert("Panes de seguros de Auto. \n 1- Bronce, 2- Plata, 3- Oro");
alert("Planes de seguros de Hogar. \n 4- Bronce, 5- Plata, 6- Oro");
alert("Planes de seguros de Vida. \n 7- Bronce, 8- Plata, 9- Oro");
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

let num = parseInt(prompt("Ingrese el numero del plan que desee cotizar"));
while(isNaN(num)){
    num= parseInt(prompt("Ingrese un numero del plan que desee cotizar"));

    if (num > 10){
        alert("El numero ingresado no pertenece a ningun plan");
        num = parseInt(prompt("Vuelva a ingresar su numero, que este dentro del rango de planes (1 - 9)"));
    }
}
const finid=seguros.find(numIng=>numIng.id === num); /*numing es el numero ingresado por el cliente*/
console.log(finid);
alert("El seguro que selecciono es: seguro de " + finid.nombre  + "\nEl precio de su seguro es: $" + finid.costo +" con iva incluido" + "\nEl plan seleccionado es: Plan " + finid.plan);


