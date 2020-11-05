/** 1 **/
function a(x, y) {
    return 5;
}
console.log(a(5, 5)); //función devuelve 5
//Rspt:5


/** 2 **/
function a(x, y) { //x=2;y=2; // x=6; y=8;
    z = [] //creacion de un arreglo vacio;
    z.push(x); //z=[2] // z=[6]
    z.push(y); //z=[2 2]// z=[6 8]
    z.push(5); //z=[2 2 5]// z=[6 8 5]
    console.log(z);
    return z;
}
b = a(2, 2)
console.log(b);
console.log(a(6, 8));
//Rspt: [2 2 5], [2 2 5], [6 8 5], [6 8 5]


/** 3 **/
function a(x) { //x=2;
    z = []; //arreglo vacio
    z.push(x); //z=[2]
    z.pop(); //z=[]
    z.push(x); //z=[2]
    z.push(x); //z=[2 2]
    return z; // z=[2 2 ]
}
y = a(2); //y=[2 2]
y.push(5); //y=[2 2 5]
console.log(y);
//Respt:[2 2 5] 


/** 4 **/
function a(x) { //x=[2 3 4 5]; 
    if (x[0] < x[1]) { //2<3
        return true;
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5]);
console.log(b);
//Rspt: true


/** 5 **/
function a(x) { //x=[1, 2, 3, 4]; x.length=4
    for (var i = 0; i < x.length; i++) { //i=0;

        if (x[i] > 0) {
            x[i] = "Coding";
        }
        //x=["coding" "coding" "coding" "coding"]
    }
    return x; //x=["coding" "coding" "coding" "coding"]
}
console.log(a([1, 2, 3, 4]))
    //Rpst: ["coding" "coding" "coding" "coding"]


/** 6 **/
function a(x) { // x=[5, 7, -1, 4]; x.length=4;
    for (var i = 0; i < x.length; i++) { //i=0;
        if (x[i] > 5) {
            x[i] = "Coding"; //x[1]=["Coding"]
        } else if (x[i] < 0) {
            x[i] = "Dojo"; //x[2]=["Dojo"]
        }
        //x=[5 "Coding" "Dojo" 4]
    }
    return x; //x=[5 "Coding" "Dojo" 4]
}
console.log(a([5, 7, -1, 4]))
    //Rspt:[5 "Coding" "Dojo" 4]


/** 7 **/
function a(x) { //x=[5, 10];
    if (x[0] > x[1]) { //5<10
        return x[1];
    }
    return 10; //x=10
}
b = a([5, 10])
console.log(b);
//Rspt:10   


/** 8 **/
function sum(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//Rspt:Undefined



/**Parte 2**/
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores:

function printAverage(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length

    y = printAverage([1, 2, 3]);
    console.log(y); // should log 2

    y = printAverage([2, 5, 8]);
    console.log(y); // should log 5



    //2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

    function returnOddArray() {
        var arreglo = [];
        for (var i = 1; i <= 255; i += 2) { //i=1,3,5,7,9,.....,253,255,257
            arreglo.push(i); //[1 3 5 ...... 253 255]
        }
        return arreglo

    }

    y = returnOddArray();
    console.log(y); // should log [1,3,5,...,253,255]



    //3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

    function squareValue(x) {

        for (var i = 1; i < x.length; i++) {
            x[i] = x[i] * x[i];
        }
        return x;
    }
    y = squareValue([1, 2, 3]);
    console.log(y); // should log [1,4,9]

    y = squareValue([2, 5, 8]);
    console.log(y); // should log [4,25,64]