class servicios {
  //declaro los atributos que van a tener mis seguros ofrecidos
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

const guardarSeguros = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
//almaceno mis seguros en local storage 1 por 1
for (const servicios of seguros) {
  guardarSeguros(servicios.id, JSON.stringify(servicios));
}
//almaceno mis seguros en un array
guardarSeguros("listaDeSeguros", JSON.stringify(seguros));

//calculo precio con IVA de mis seguros

console.log("-------------------precios con iva incluido-------------------");
for (const servicios of seguros) {
  servicios.sumaIva();
}
for (const id of seguros) {
  console.log(id.nombre);
  console.log(id.plan);
  console.log(id.costo);
}
// Utilizo esta funcion para poder traer todos los valores que genera el formulario
const cotizarSeguroAuto = () => {
  let nombreAuto = document.querySelector("#formAutoNombre").value;
  let apellidoAuto = document.querySelector("#formAutoApellido").value;
  let correoAuto = document.querySelector("#formAutoCorreo").value;
  let provinciaAuto = document.querySelector("#provinciaAuto").value;
  let marca = document.querySelector("#marca").value;
  let year = document.querySelector("#year").value;
  let planAuto = document.querySelector("#planAuto").value;

  let divResumenAuto = document.querySelector("#resumenSeguro1");
  let divResultadoAuto = document.querySelector("#resultadoSeguro1");

  //Utilizo este If para chequear que el cliente llene todos los campos
  if (
    marca === `` ||
    year === `` ||
    provinciaAuto === `` ||
    planAuto === `` ||
    nombreAuto === `` ||
    apellidoAuto === `` ||
    correoAuto === ``
  ) {
    mostrarErrorAuto("#msjErrorCotiAuto", "Falta Seleccionar Opciones");
    return;
  } else if (/\d/.test(nombreAuto) || /\d/.test(apellidoAuto)) {
    mostrarErrorAuto(
      "#msjErrorCotiAuto",
      "Agregaste caracteres incorrectos en el nombre y/o apellido"
    );
    return;
  } else if (!correoAuto.includes("@")) {
    mostrarErrorAuto("#msjErrorCotiAuto", "No ingresaste un correo valido");
    return;
  }

  //Utilizo descontructor para poder buscar el seguro de auto que eligio el cliente y crear los divs de resultados
  let cotizacionAuto = { provinciaAuto, marca, year, planAuto };
  document.querySelector("#mensajeSeguro1").style.display = "none"; //Oculto el mensaje 1
  let cotizacionFinalAuto = cotizarAuto(cotizacionAuto);
  divResumenAuto.style.backgroundColor = "#FFF";
  divResumenAuto.style.display = "block"; //Muestro el div que tiene el resumen del seguro
  divResumenAuto.innerHTML = `
                            <h2> Resumen de cotizacion </h2>
                                <ul>
                                    <li> Marca: ${mayuscula(marca)}</li>
                                    <li> Año: ${mayuscula(year)}</li>
                                    <li> Provincia: ${mayuscula(
                                      provinciaAuto
                                    )}</li>
                                    <li> Plan: ${mayuscula(planAuto)}</li>
                                    <p class="textoCotizacionAuto">Total: ${cotizacionFinalAuto}</p>
                                </ul>`;
};
// con esta funcion pongo la primer letra del resumen en mayuscula ejemplo auto --> Auto
const mayuscula = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
};

// Utilizo esta funcion para mostrar error cuando el cliente no llena algun espacio de formulario
const mostrarErrorAuto = (elemento, mensaje) => {
  divErrorAuto = document.querySelector(elemento);
  //agrego libreria de error sweetalert2 para cuando no se completan los datos
  divErrorAuto.innerHTML =
    alert(mensaje); /*`<p class="alertaErrorAuto">${mensaje}</p>`;*/
};

//Utilizo esta funcion para poder cotizar el seguro del auto
const cotizarAuto = (cotizacionAuto) => {
  const { planAuto } = cotizacionAuto;
  let resultadoAuto = 1;

  if (planAuto === "Bronce") {
    resultadoAuto = 900 * 1.21;
  } else if (planAuto === "Plata") {
    resultadoAuto = 1200 * 1.21;
  } else if (planAuto === "Oro") {
    resultadoAuto = 2500 * 1.21;
  }
  return resultadoAuto;
};
// Utilizo esta funcion para poder traer todos los valores que genera el formulario de Hogar
const cotizarSeguroHogar = () => {
  let nombreHogar = document.querySelector("#formHogarNombre").value;
  let apellidoHogar = document.querySelector("#formHogarApellido").value;
  let correoHogar = document.querySelector("#formHogarCorreo").value;
  let provinciaHogar = document.querySelector("#provinciaHogar").value;
  let planHogar = document.querySelector("#planHogar").value;

  let divResumenHogar = document.querySelector("#resumenSeguro2");
  let divResultadoHogar = document.querySelector("#resultadoSeguro2");

  //Utilizo este If para chequear que el cliente llene todos los campos
  if (
    nombreHogar === `` ||
    apellidoHogar === `` ||
    correoHogar === `` ||
    provinciaHogar === `` ||
    planHogar === ``
  ) {
    mostrarErrorHogar("#msjErrorCotiHogar", "Falta Seleccionar Opciones");
    return;
  } else if (/\d/.test(nombreHogar) || /\d/.test(apellidoHogar)) {
    mostrarErrorHogar(
      "#msjErrorCotiHogar",
      "Agregaste caracteres incorrectos en el nombre y/o apellido"
    );
    return;
  } else if (!correoHogar.includes("@")) {
    mostrarErrorHogar("#msjErrorCotiHogar", "No ingresaste un correo valido");
    return;
  }

  //Utilizo descontructor para poder buscar el seguro de hogar que eligio el cliente y crear los divs de resultados
  let cotizacionHogar = { provinciaHogar, planHogar };
  document.querySelector("#mensajeSeguro2").style.display = "none"; //Oculto el mensaje 2
  let cotizacionFinalHogar = cotizarHogar(cotizacionHogar);
  divResumenHogar.style.backgroundColor = "#FFF";
  divResumenHogar.style.display = "block"; //Muestro el div que tiene el resumen del seguro
  divResumenHogar.innerHTML = `
                            <h2> Resumen de cotizacion </h2>
                                <ul>
                                    <li> Provincia: ${mayuscula(
                                      provinciaHogar
                                    )}</li>
                                    <li> Plan: ${mayuscula(planHogar)}</li>
                                    <p class="textoCotizacionHogar">Total: ${cotizacionFinalHogar}</p>
                                </ul>`;
};

// utilizo esta funcion para poder mostrar un error cuando el cliente no complete los datos

const mostrarErrorHogar = (elemento, mensaje) => {
  divErrorHogar = document.querySelector(elemento);
  //agrego libreria de error sweetalert2 para cuando no se completan los datos
  divErrorHogar.innerHTML =
    alert(mensaje); /*`<p class="alertaErrorHogar">${mensaje}</p>`;*/
};

// utilizo esta funcion para cotizar el preico del seguro que desea el cliente

const cotizarHogar = (cotizacionHogar) => {
  const { planHogar } = cotizacionHogar;
  let resultadoHogar = 1;

  if (planHogar === "Bronce") {
    resultadoHogar = 2000 * 1.21;
  } else if (planHogar === "Plata") {
    resultadoHogar = 4000 * 1.21;
  } else if (planHogar === "Oro") {
    resultadoHogar = 6000 * 1.21;
  }
  return resultadoHogar;
};

const cotizarSeguroVida = () => {
  let nombreVida = document.querySelector("#formVidaNombre").value;
  let apellidoVida = document.querySelector("#formVidaApellido").value;
  let correoVida = document.querySelector("#formVidaCorreo").value;
  let provinciaVida = document.querySelector("#provinciaVida").value;
  let planVida = document.querySelector("#planVida").value;
  let edadCliente = document.querySelector("#edadCliente").value;
  let divResumenVida = document.querySelector("#resumenSeguro3");
  let divResultadoVida = document.querySelector("#resultadoSeguro3");

  //Utilizo este If para chequear que el cliente llene todos los campos
  if (
    nombreVida === `` ||
    apellidoVida === `` ||
    correoVida === `` ||
    provinciaVida === `` ||
    planVida === `` ||
    edadCliente === ``
  ) {
    mostrarErrorVida("#msjErrorCotiVida", "Falta Seleccionar Opciones");
    return;
  } else if (/\d/.test(nombreVida) || /\d/.test(apellidoVida)) {
    mostrarErrorVida(
      "#msjErrorCotiVida",
      "Agregaste caracteres incorrectos en el nombre y/o apellido"
    );
    return;
  } else if (!correoVida.includes("@")) {
    mostrarErrorVida("#msjErrorCotiVida", "No ingresaste un correo valido");
    return;
  }

  //Utilizo descontructor para poder buscar el seguro de Vida que eligio el cliente y crear los divs de resultados
  let cotizacionVida = { provinciaVida, planVida, edadCliente };
  document.querySelector("#mensajeSeguro3").style.display = "none"; //Oculto el mensaje 2
  let cotizacionFinalVida = cotizarVida(cotizacionVida);
  divResumenVida.style.backgroundColor = "#FFF";
  divResumenVida.style.display = "block"; //Muestro el div que tiene el resumen del seguro
  divResumenVida.innerHTML = `
                            <h2> Resumen de cotizacion </h2>
                                <ul>
                                    <li> Provincia: ${mayuscula(
                                      provinciaVida
                                    )}</li>
                                    <li> Edad del cliente: ${edadCliente}</li>
                                    <li> Plan: ${mayuscula(planVida)}</li>
                                    <p class="textoCotizacionVida">Total: ${cotizacionFinalVida}</p>
                                </ul>`;
};

// utilizo esta funcion para poder mostrar un error cuando el cliente no complete los datos

const mostrarErrorVida = (elemento, mensaje) => {
  divErrorVida = document.querySelector(elemento);
  //agrego libreria de error sweetalert2 para cuando no se completan los datos
  divErrorVida.innerHTML =
    alert(mensaje); /*`<p class="alertaErrorVida">${mensaje}</p>`;*/
};

// utilizo esta funcion para cotizar el preico del seguro que desea el cliente

const cotizarVida = (cotizacionVida) => {
  const { planVida } = cotizacionVida;
  let resultadoVida = 1;

  if (planVida === "Bronce") {
    resultadoVida = 3000 * 1.21;
  } else if (planVida === "Plata") {
    resultadoVida = 4500 * 1.21;
  } else if (planVida === "Oro") {
    resultadoVida = 7000 * 1.21;
  }
  return resultadoVida;
};
const alert = (mensaje) => {
  Swal.fire({
    icon: "error",
    title: "Datos no ingresados",
    text: mensaje,
  });
};

//agrego fetch
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);

function cargarJSON() {
  fetch("seguros.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (seguros) {
      let html = "";
      html += `<h2 id="tituloDivSeguros"> Listado de Seguros</h2>`;
      seguros.forEach(function (mostrarSeguros, i) {
        html += `
                <ul>
                <li>Seguro</li>
                <li>${mostrarSeguros.nombre}</li>
                <li>${mostrarSeguros.plan}</li>
                <li>${mostrarSeguros.costo}</li>
                <button id="btnCotizar${i}" onclick="direccionarSeguro('${mostrarSeguros.nombre}')">Cotizar</button> 
                </ul>
                `;

        document.getElementById("mostrarSegurosJson").innerHTML = html;
        //console.log(document.getElementById('btnCotizar'+i))
        document.getElementById("btnCotizar" + i);
      });
    });
}

function direccionarSeguro(nombre) {
  console.log(nombre);
  if (nombre == "Auto") {
    location.href = "#msjErrorCotiAuto";
    return console.log("es auto");
  }
  if (nombre == "Hogar") {
    location.href = "#msjErrorCotiHogar";
    return console.log("es hogar");
  }
  if (nombre == "Vida") {
    location.href = "#msjErrorCotiVida";
    return console.log("es vida");
  }
}

/*

    
    switch(nombre){
        case 1 : console.log(`${nombre} es auto`);
        break;
        case 2: console.log(`${nombre} es hogar`);
        break;
        default: console.log(`${nombre} es vida`);
    }
}

direccionarSeguro(mostrarSeguros);*/
