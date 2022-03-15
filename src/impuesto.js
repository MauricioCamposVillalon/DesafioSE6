
export default class Impuesto{

    constructor (montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    get montoBrutoAnual (){
        return this._monto_bruto_anual;
    }
    set montoBrutoAnual (montoBrutoAnual){
        this._montoBrutoAnual = montoBrutoAnual;
    }  
    get deducciones (){
        return this._deducciones;
    }
    set deduccionesl (deducciones){
        this._deducciones = deducciones;
    }

    

}