//ejercicio 2

function sumMaxMin(array) {
    let suma = 0;
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    suma = min + max;
    return suma;
}
describe("sumMaxMin", function() {
    it("intento 1 deberia devolver 11", function() {
        expect(sumMaxMin([1, 3, 10])).toEqual(11);
    });
    it("intento 2 deberia devolver -12", function() {
        expect(sumMaxMin([-2, -5, -10])).toEqual(-12);
    });
    it("intento 3    deberia devolver 10", function() {
        expect(sumMaxMin([6, -5, 15])).toEqual(10);
    });
});