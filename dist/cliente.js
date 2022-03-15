"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capturarCliente = void 0;

require("core-js/modules/es.parse-int.js");

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "calcular",
    value: function calcular(n1, n2) {
      var valor = (n1 - n2) * 21;
      return valor;
    }
  }]);

  return Cliente;
}();

var capturarCliente = function capturarCliente(arregloCliente, arregloImpuesto) {
  var txtCliente = document.querySelector('#cliente');
  var txtVenta = document.querySelector('#venta');
  var txtDeduccion = document.querySelector('#deduccion');
  var n1 = parseInt(txtVenta.value);
  var n2 = parseInt(txtDeduccion.value);
  var clientea = new Cliente(txtCliente.value);
  var impuestoCliente = new _impuesto["default"](txtVenta.value, txtDeduccion.value);
  arregloCliente.push(clientea);
  arregloImpuesto.push(impuestoCliente);

  var _final = arregloCliente[0].calcular(n1, n2);

  console.log(arregloCliente, arregloImpuesto);
  console.log(_final);
  document.querySelector('#resultado').innerHTML = 'Valor a cancelar por impuesto anual ' + _final;
  cliente.value = '';
  venta.value = '';
  deduccion.value = '';
};

exports.capturarCliente = capturarCliente;