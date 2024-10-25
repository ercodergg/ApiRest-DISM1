'use strict';


/**
 * Obtener fichajes del día
 *
 * returns List
 **/
exports.usuarioFichajesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "fechaHoraEntrada" : "2024-10-16T08:00:00Z",
  "fechaHoraSalida" : "2024-10-16T17:00:00Z",
  "trabajo" : {
    "id" : 1,
    "nombre" : "Desarrollo Backend"
  },
  "geolocalizacion" : "40.416775,-3.703790"
}, {
  "id" : 1,
  "fechaHoraEntrada" : "2024-10-16T08:00:00Z",
  "fechaHoraSalida" : "2024-10-16T17:00:00Z",
  "trabajo" : {
    "id" : 1,
    "nombre" : "Desarrollo Backend"
  },
  "geolocalizacion" : "40.416775,-3.703790"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finalizar un fichaje en menos de 12 horas
 *
 * body Fichaje 
 * id Integer 
 * no response value expected for this operation
 **/
exports.usuarioFichajesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Registrar nuevo fichaje
 *
 * body Fichaje 
 * no response value expected for this operation
 **/
exports.usuarioFichajesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

