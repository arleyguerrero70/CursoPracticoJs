function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorNuevo) {
            return valorAcumulado + valorNuevo;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    4500,
    500,
    750,
    40000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const elemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
    mediana = elemento1y2;
}else{
    mediana = lista1[mitadLista1];
}

const arrayOne = [1,8,22,445,3512,2,11,3546,54,1125,3];
const arrayTwo = [8,3,4,5,7,1,9];
const arrayThree = [
    {nombre: 'J', apellido: 'W'},
    {nombre: 'a', apellido: 'c'},
    {nombre: 'C', apellido: 'z'},
    {nombre: 'w', apellido: 'A'},
    {nombre: 'S', apellido: 'z'},
];

const arrayTwoOrden = arrayTwo.sort();
const arrayOneOrden = arrayOne.sort((a,b)=>{
    return a -b;
})
const arrayThreeOrden = arrayThree.sort((a, b) =>{
    const apellidoA = a.apellido.toLowerCase;
    const apellidoB = b.apellido.toLowerCase;
    if(apellidoA < apellidoB){
        return -1;
    }
    if (apellidoA > apellidoB){
        return 1;
    }
    return 0;
});