function escada(altura){
    var escada = [];
    var vazio ="";
    var icone ="";
    var resultado = "";
    for (var i=1; i<=altura; i++){
        vazio=" ".repeat(altura-i);
        icone="#".repeat(i);
        resultado = vazio+icone;
        escada.push(resultado)
    }
    return escada;
}
