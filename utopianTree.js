function alturaArvoreUtopica(ciclos){
    var alturaFinal=1;
    if (ciclos == 0) {
        alturaFinal=1;
    } else {
        for (var i=1; i<=ciclos; i++){
            if (i % 2 == 0){
                alturaFinal+=1;
            } else {
                alturaFinal = alturaFinal*2;
            }
        }
    }
    return  alturaFinal;
}
