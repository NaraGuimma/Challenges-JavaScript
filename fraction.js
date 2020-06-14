function maisMenos(valores){
    var positivos=0;
    var nulos =0;
    var negativos=0;
    var tamanho = valores.length;
    var resultado = [];
    for (var i=0; i<tamanho; i++){
        if (valores[i]>0){
            positivos +=1;
        } else if (valores[i]<0){
            negativos+=1;
        } else {
            nulos+=1;
        }
    }
    positivos = positivos/tamanho;
    resultado.push(positivos);
    nulos=nulos/tamanho;
    resultado.push(nulos);
    negativos=negativos/tamanho;
    resultado.push(negativos);
    return resultado;
}
