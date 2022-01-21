// Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorNuevo) {
            return valorAcumulado + valorNuevo;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

// Mediana general
const salariosCol = colombia.map(
    function (nombrePersona) {
        return nombrePersona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (a , b){
        return a - b;
    }
);

const medianaGeneralCol =  medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaGeneralColTop10 =  medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaGeneralColTop10
});