//1

function resetNegativos(arreglo) {

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            arreglo[i] = 0;
        }
    }
    return arreglo;

}

var resultado = resetNegativos([1, 2, -1, -3]);
console.log(resultado);

//2

function mover(arreglo) {
    let nuevoarreglo = [0];
    for (var i = 1; i < arreglo.length; i++) {
        nuevoarreglo.push(arreglo[i]);
    }
    nuevoarreglo.push(0);
    return nuevoarreglo;
}

var resultado = mover([1, 2, 3]);
console.log(resultado);

//3

function returnReverso(arreglo) {
    let nuevoarreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        nuevoarreglo.push(arreglo[i]);
    }
    return nuevoarreglo;
}

var result = returnReverso([1, 2, 3]);
console.log(result);

//4

function repetirValores(array) {
    let nuevoarray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoarray.push(array[i]);
        nuevoarray.push(array[i]);
    }
    return nuevoarray;

}

var resultado = repetirValores([4, "Ulysses", 42, false]);
console.log(resultado);