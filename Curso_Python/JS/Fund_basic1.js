/** 3 
 * Escribe una función que devuelva la suma de todos 
 * los números impares entre 1 y 5000
 */


/** 4
 * 
 */

function sumValArray(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma = suma + array[index]
    }
    return suma
}
console.log(sumValArray([10, 22, 5]));

/** 5
 *  Dado un array con múltiples valores,
 *  escribe una función que devuelva el número mayor
 */

function elMayor(array) {
    let numMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMayor) {
            numMayor = array[i];

        }
    }
    return numMayor
}
console.log(elMayor([-3, 3, 5, 7]));

/** 6 
 * Dado un array con múltiples valores, escribe una función
 *  que devuelva el promedio de los valores
 */
function elprom(array) {
    let suma = array[0];
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];

    }
    return suma / array.length;
}
console.log(elprom([1, 3, 5, 7, 20]));

/**7
 * Escribe una función que devuelva un array de
 *  todos los números impares entre 1 y 50
 */

function arrayimp() {
    let imp = [];
    for (let i = 1; i < 50; i = +2) {
        imp.push(i);
    }
    return imp;

}
console.log(arrayimp());