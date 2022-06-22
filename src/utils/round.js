export const round = (value) => {

    let decimal = value - Math.trunc(value);
    let resultado = Math.trunc(value)

    if(decimal <= .25 ){
        decimal = 0;
        resultado += decimal;
    }else if (decimal <= .75){
        decimal = 0.5;
        resultado += decimal;
    }else {
        decimal = 1;
        resultado += decimal; 
    }

    return resultado;
}
