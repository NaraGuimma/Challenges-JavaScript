function acontece(chegada, min){
    var cont = 0;
    for (var i=0; i<chegada.length; i++){
        if (chegada[i]<=0){
            cont += 1;
        }
    }
    return cont>=min;
}

function  aberturas(semana, alunos){
    var result = [];
    for (var i=0; i<semana.length; i++){
        var teste = acontece(semana[i], alunos);
        result.push(teste);
    }
    return result;
}
