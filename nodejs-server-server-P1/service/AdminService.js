'use strict';


/**
 * Filtrar fichajes por usuario y rango de fechas
 *
 * usuarioId Integer 
 * fechaInicio date 
 * fechaFin date 
 * returns List
 **/
exports.adminFichajesFiltrarGET = function(usuarioId,fechaInicio,fechaFin) {
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
 * Obtener todos los trabajos
 *
 * returns List
 **/
exports.adminTrabajosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "nombre" : "Desarrollo Backend"
}, {
  "id" : 1,
  "nombre" : "Desarrollo Backend"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar un trabajo
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.adminTrabajosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar un trabajo
 *
 * body Trabajo 
 * id Integer 
 * no response value expected for this operation
 **/
exports.adminTrabajosIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear un nuevo trabajo
 *
 * body Trabajo 
 * no response value expected for this operation
 **/
exports.adminTrabajosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener todos los usuarios
 *
 * returns List
 **/
exports.adminUsuariosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "nombre" : "Juan",
  "apellidos" : "Pérez",
  "clave" : 1234
}, {
  "id" : 1,
  "nombre" : "Juan",
  "apellidos" : "Pérez",
  "clave" : 1234
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar un usuario
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.adminUsuariosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener un usuario por ID
 *
 * id Integer 
 * returns Usuario
 **/
exports.adminUsuariosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "nombre" : "Juan",
  "apellidos" : "Pérez",
  "clave" : 1234
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un usuario
 *
 * body Usuario 
 * id Integer 
 * no response value expected for this operation
 **/
exports.adminUsuariosIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear un nuevo usuario
 *
 * body Usuario 
 * no response value expected for this operation
 **/
exports.adminUsuariosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

