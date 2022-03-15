import {capturarCliente} from './cliente.js';


//console.log(cli1);

const btnInscribirEmp = document.querySelector('#enviar');
const arregloCliente = [];
const arregloImpuesto = [];
btnInscribirEmp.addEventListener('click', () => {
    capturarCliente(arregloCliente,arregloImpuesto);
});