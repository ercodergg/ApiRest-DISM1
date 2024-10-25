'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.adminFichajesFiltrarGET = function adminFichajesFiltrarGET (req, res, next, usuarioId, fechaInicio, fechaFin) {
  Admin.adminFichajesFiltrarGET(usuarioId, fechaInicio, fechaFin)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminTrabajosGET = function adminTrabajosGET (req, res, next) {
  Admin.adminTrabajosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminTrabajosIdDELETE = function adminTrabajosIdDELETE (req, res, next, id) {
  Admin.adminTrabajosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminTrabajosIdPUT = function adminTrabajosIdPUT (req, res, next, body, id) {
  Admin.adminTrabajosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminTrabajosPOST = function adminTrabajosPOST (req, res, next, body) {
  Admin.adminTrabajosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminUsuariosGET = function adminUsuariosGET (req, res, next) {
  Admin.adminUsuariosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminUsuariosIdDELETE = function adminUsuariosIdDELETE (req, res, next, id) {
  Admin.adminUsuariosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminUsuariosIdGET = function adminUsuariosIdGET (req, res, next, id) {
  Admin.adminUsuariosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminUsuariosIdPUT = function adminUsuariosIdPUT (req, res, next, body, id) {
  Admin.adminUsuariosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminUsuariosPOST = function adminUsuariosPOST (req, res, next, body) {
  Admin.adminUsuariosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
