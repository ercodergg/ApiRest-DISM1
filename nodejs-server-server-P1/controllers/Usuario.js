'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.usuarioFichajesGET = function usuarioFichajesGET (req, res, next) {
  Usuario.usuarioFichajesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioFichajesIdPUT = function usuarioFichajesIdPUT (req, res, next, body, id) {
  Usuario.usuarioFichajesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioFichajesPOST = function usuarioFichajesPOST (req, res, next, body) {
  Usuario.usuarioFichajesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
