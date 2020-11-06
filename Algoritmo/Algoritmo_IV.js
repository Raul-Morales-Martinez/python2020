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

function maxminprom(array) {
    if (array.length >= 1) {
        let max = array[0];
        let min = array[0];
        if (array.length == 1) {
            console.log(max, min, array[0]);


        } else {
            let suma = 0;
            for (let index = 0; index < array.length; index++) {
                if (max < array[index]) {
                    max = array[index];
                }
                if (min > array[index]) {
                    max = array[index];
                }
                suma = suma + array[index];

            }
            console.log(max, min, suma / array.length);
        }
    } else {
        return false;
    }
}
c = maxminprom();

//3

function reemplneg(arre) {
    let newarray = [];

    for (i = 0; i < arre.length; i++) {
        if (arre[i] < 0) {
            newarray.push("Dojo");
        } else {
            newarray.push(arre[i]);
        }
    }
    return newarray;

}

var f = reemplneg([1, 2, -3, -5, 5]);
console.log(f);

//4

function removerRango(arre, ranginic, rangfin) {
    if (ranginic <= rangfin && rangfin >= 0 && ranginic >= 0 && ranginic <= arre.length && rangfin < = arre.length) {
        let newarray = [];
        for (i = 0; i < arre.length; i++) {
            if (i < ranginic || i > rangfin) {
                newarray.push(arre[i]);

            }
        }
        return newarray;

        return "Revisar datos"

    }

    g = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
    console.log(g);