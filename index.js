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

const guardarSeguros = (clave, valor) => {localStorage.setItem(clave, valor)};
//almaceno mis seguros en local storage 1 por 1  
for (const servicios of seguros){
    guardarSeguros(servicios.id, JSON.stringify(servicios))
}
//almaceno mis seguros en un array
guardarSeguros("listaDeSeguros", JSON.stringify(seguros));

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

console.log("-------------------precios con iva incluido-------------------")
for(const servicios of seguros){
    servicios.sumaIva();
}
for(const id of seguros){
    console.log(id.nombre);
    console.log(id.plan);
    console.log(id.costo);
}

const cotizarSeguroAuto=()=>{
    let nombreAuto=document.querySelector("#formAutoNombre").value;
    let apellidoAuto=document.querySelector("#formAutoApellido").value;
    let correoAuto=document.querySelector("#formAutoCorreo").value;
    let provinciaAuto=document.querySelector("#provinciaAuto").value;
    let marca=document.querySelector("#marca").value;
    let year=document.querySelector("#year").value;
    let planAuto=document.querySelector("#planAuto").value;

    let divResumen=document.querySelector("#resumenSeguro1");
    let divResultado=document.querySelector("#resultadoSeguro1");


    

    
    if (marca===``|| year===`` || provinciaAuto=== `` || planAuto === `` || nombreAuto ===`` || apellidoAuto === `` || correoAuto === ``){
        mostrarError("#msjErrorCotiAuto", "Falta Seleccionar Opciones");
        return;
    }

    let cotizacionAuto ={provinciaAuto, marca, year, planAuto};
    document.querySelector("#mensajeSeguro1").style.display="none";

    divResumen.style.backgroundColor = "#FFF";
    divResumen.style.display="block";
    divResumen.innerHTML= `
                            <h2> Resumen de cotizacion </h2>
                                <ul>
                                    <li> Marca: ${mayuscula(marca)}</li>
                                    <li> Año: ${mayuscula(year)}</li>
                                    <li> Provincia: ${mayuscula(provinciaAuto)}</li>
                                    <li> Plan: ${mayuscula(planAuto)}</li>
                                </ul>`;
    let cotizacionFinalAuto = cotizarAuto(cotizacionAuto);
    divResultado.style.display ="block";
    divResultado.className="divResultado";
    divResultado.innerHTML= `<p class="textoCotizacionAuto">${cotizacionFinalAuto}</p>`;                           

}

const mayuscula = (palabra)=> {
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
}


const mostrarError=(elemento, mensaje)=>{
    divErrorAuto = document.querySelector(elemento);
    divErrorAuto.innerHTML = `<p class="alertaErrorAuto">${mensaje}</p>`;
}

const cotizarAuto = (cotizacionAuto)=>{
    const {planAuto}=cotizacionAuto;
    let resultadoAuto= 1;

    if(planAuto === "Bronce"){
        resultadoAuto = 900*1.21; 
    }else if (planAuto === "Plata"){
        resultadoAuto = 1200 * 1.21; 
    }else if(planAuto === "Oro"){
        resultadoAuto = 2500 * 1.21; 
    }
    return resultadoAuto;
}