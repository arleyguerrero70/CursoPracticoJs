function calcularMediaAritmetica (lista){

   /*  let sumaLista = 0;

    for (i =0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } */
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorNuevo) {
            return valorAcumulado + valorNuevo;
        }
    )

    const promedioLista = sumaLista / lista.length;

}