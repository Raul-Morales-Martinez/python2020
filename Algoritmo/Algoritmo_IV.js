// 1

function ejercicio1(arreglo, y) {
    var cantidad = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > y) {
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}

b = ejercicio1([], y);
console.log(b);

//2