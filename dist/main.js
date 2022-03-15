"use strict";

var _cliente = require("./cliente.js");

//console.log(cli1);
var btnInscribirEmp = document.querySelector('#enviar');
var arregloCliente = [];
var arregloImpuesto = [];
btnInscribirEmp.addEventListener('click', function () {
  (0, _cliente.capturarCliente)(arregloCliente, arregloImpuesto);
});