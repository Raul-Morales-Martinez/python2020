//1
function printUpTo(x) { //x=1000  - x=-10
    // your code here
    if (x < 0) { //-10<0
        console.log("Numero negativo");
        return false;
    }

    for (var i = 1; i <= x; i++) { //1,2,3,4,5,6,7,8,9,10    
        console.log(i); //>1,2,3,4,5,6,7,8,9,10
    }

}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false
//rspt: 1,2,3,4,5,6.......,1000,Numero negativo, false 

//2
function printSum(x) { //x=255
    var sum = 0;
    for (var i = 0; i <= x; i++) { //i=0>1
        console.log(i); //0,1,2,3,4,.....,254,255
        sum = sum + i;
        console.log(sum); //0,1,3,.....,32131,32385,32640

    }
    return sum
}
y = printSum(255) // debería imprimir  todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

//3
function printSumArray(x) { // x=[1,2,3]; x[0]=>1; x[1]=>2; x[2]=>3; x.legth=3; 
    var sum = 0; //1>3>6
    for (var i = 0; i < x.length; i++) { //i=0,1,2,3
        //your code here
        sum = sum + x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6

//bonus
function largestElement(arreglo) {

    var mayor = arreglo[0] //mayor=1

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) { //1; 1<30; 30>5; 30>7;
            mayor = arreglo[i]; //30

        }
    }
    return mayor
}
console.log(argestElement([1, 30, 5, 7]))
    // Respt: 30;