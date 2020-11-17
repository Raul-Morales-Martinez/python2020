/** 1
 * Dado un array, escribe una función que cambie todos los números positivos en él,
 * por el string “big”. Ejemplo: grande([-1,3,5,-5]) 
 * devuelve [-1, “big”, “big”, -5].
 */
function stingarray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}
console.log(stingarray([-1, 3, 5, -5]));

/** 2
 * Crea una función que tome un array de números. La función debería imprimir 
 * (print) el menor valor del array, y devolver (return) el mayor.
 */
function minmay(array) {
    let min = 0;
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log(min);
    return mayor
}
console.log(minmay([-1, 3, 5, -5]));

/** 3
 *  Crea una función para un array de números. La función debería imprimir (print) 
 * el penúltimo valor y devolver (return) el primer valor impar.
 */
function printpen(array) {
    console.log(array[array.length - 2]);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            return array[i];
        }
    }
}
console.log(printpen([2, 4, 5, 7, 6]));

/** 4
 * Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
 * Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
 */
function doble(array) {
    let doblearray = [];
    for (let i = 0; i < array.length; i++) {
        doblearray.push(array[i] * 2);
    }
    return doblearray;
}
console.log(doble([1, 2, 3]));

/** 5
 * Dado un array de números, crea una función para reemplazar el último valor con el número de valores
 * positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
 */
function contarPositivos(array) {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            cont = cont + 1;
        }
    }
    array[array.length - 1] = cont;
    return array;
}
console.log(contarPositivos([-1, 1, 1, 1]));

/** 6
 * Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”,
 * y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
 */
function tresseguidos(array) {
    let contpos = 0;
    let contimp = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            contpos = contpos + 1;
            if (contpos == 3) {
                return "¡Es para bien!"
            }
        } else {
            contimp = contimp + 1;
            if (contimp == 3) {
                return "¡Que imparcial"
            }
        }
    }
}
console.log(tresseguidos([2, 4, 5, 7, 6, 9]));

/** 7
 *  Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos 
 * cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
 * Luego, console.log cada valor del array y devuelve arr.
 */
function impar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr
}
console.log(impar([2, 4, 5, 7, 6, 9]));

/** 8   
 * Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
 * reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
 * Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) 
 * debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
 */
function longitudesPrevias(array) {
    for (i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1].length;
    }
    return array
}
console.log(longitudesPrevias(["programar", "dojo", "genial"]))

/** 9
 * Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
 * pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
 */
function agregasiete(array) {
    let massiete = [];
    for (let i = 0; i < array.length; i++) {
        massiete.push(array[i] + 7);
    }
    return massiete;
}
console.log(agregasiete([1, 2, 3]));

/** 10
 * Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus 
 * valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
 */
function invertir(array) {
    let numeroguardado;
    for (let i = 0; i < array.length / 2; i++) {
        numeroguardado = array[i]; //3-1
        array[i] = array[array.length - 1 - i]; //2-
        array[array.length - 1 - i] = numeroguardado; //3
    }
    //[2,1,6,4,3]
    return array;
}
console.log(invertir([3, 1, 6, 4, 2]))
    //recorrer el arreglo desde el ultimo hasta el primero-push a nuevo arreglo

/** 11
 * Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos
 * (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
 */
function negaarray(array) {
    let nega = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            nega.push(array[i] * (-1));
        } else { nega.push(array[i]); }
    }
    return nega;

}
console.log(negaarray([1, -3, 5]))

/** 12
 * Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
 * Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
 */
function hambriento(array) {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "comida") {
            console.log("yummy")
        } else {
            cont = cont + 1;
        }
    }
    if (cont == array.length) {
        return "tengo hambre";
    }
    return "gracias por la comida"
}
console.log(hambriento(["comida", "comida", 1, 2, "comida"]));

/** 13
 * Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
 * Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) 
 * cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
 */

function cambiaHaciaElCentro(array) {
    let valores = [];
    valores.push(array[0]);
    valores.push(array[array.length - 1]);
    valores.push(array[2]);
    valores.push(array[array.length - 3]);
    array[0] = valores[1];
    array[array.length - 1] = valores[0];
    array[2] = valores[3];
    array[array.length - 3] = valores[2];
    return array;
}

console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]));

/** 14
 *Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
 *y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
 */

function escalaArray(array, y) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * y;
    }
    return array;
}

console.log(escalaArray([1, 2, 3], 3));