import Impuesto from "./impuesto.js";

class Cliente {
    constructor(nombre) {
        this._nombre = nombre
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    calcular(n1, n2) {
        let valor = ((n1 - n2) * 21);
        return valor;
    }
}



const capturarCliente = (arregloCliente, arregloImpuesto) => {
    const txtCliente = document.querySelector('#cliente');
    const txtVenta = document.querySelector('#venta');
    const txtDeduccion = document.querySelector('#deduccion');
    let n1 = parseInt(txtVenta.value);
    let n2 = parseInt(txtDeduccion.value);
    const clientea = new Cliente(txtCliente.value);
    const impuestoCliente = new Impuesto(txtVenta.value, txtDeduccion.value);
    arregloCliente.push(clientea);
    arregloImpuesto.push(impuestoCliente);
    let final = arregloCliente[0].calcular(n1, n2);
    console.log(arregloCliente, arregloImpuesto);
    console.log(final);
    document.querySelector('#resultado').innerHTML = 'Valor a cancelar por impuesto anual ' + final;
    cliente.value = '';
    venta.value = '';
    deduccion.value = '';

}

export {
    capturarCliente
}

