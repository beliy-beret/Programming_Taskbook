const assert = require("assert").strict;
const begin = require("./begin");

describe("Задания 1 - 10", function() {
    
    // begin-1  //
    it("Периметр квадрата со стороной '2'", function(){
        assert.equal(begin.perimetrSqr(2), 8);
    })
    
    //  begin-2 //
    it("Площадь квадрата со стороной '3'", function() {
        assert.strictEqual(begin.areaSqr(3), 9);
    })
    
    //  begin-3 //
    it("Периметр прямоугольника", function() {
        assert.strictEqual(begin.perimetrRect(1, 2), 6);
    })
    it("Площадь прямоугольника", function() {
        assert.notStrictEqual(begin.areaRect(1, 2), 3);
    })
    
    //  begin-4 //
    it("Длина окружности с диаметром '3' равна '9.42'", function() {
        assert.equal(begin.circumference(3), 9.42);
    })
    
    //  begin-5 //
    it ("Объем куба с гранью '3' равен '27'", function() {
        assert.equal(begin.voleumCube(3), 27);
    })
    it ("Площадь куба с гранью '3' равна '54'", function() {
        assert.equal(begin.areaCube(3), 54);
    })
    
    //  begin-6 //
    it ("Объем параллелепипеда", function(){
        assert.strictEqual(begin.voleumParallelepiped(2, 2, 3), 12);
    })
    it ("Площадь параллелепипеда", function(){
        assert.strictEqual(begin.areaParallelepiped(2, 2, 3), 32);
    })
    
    //  begin-7 //
    it ("Длина окружности с радиусом '5' равна '31.4'", function() {
        let C = begin.circumFerence(5);
        assert.equal(Number(C.toFixed(1)), 31.4);
    })
    it ("Площадь окружности с радиусом '5' равна '78.5'", function() {
        assert.equal(begin.areaCircle(5), 78.5);
    })
    
    //  begin-8 //
    it ("Среднее арифметическое чисел 5 и 7 будет - 6.5", function() {
        assert.strictEqual(begin.TaM(5, 8), 6.5);
    })
    it ("Среднее арифметическое чисел 5 и 3 будет - 4", function() {
        assert.strictEqual(begin.TaM(5, 3), 4);
    })
    it ("Среднее арифметическое с отрицательным числом", function() {
        assert.strictEqual(begin.TaM(-3, 5), 1);
    })

    //  begin-9 //
    it ("Среднее геометрическое чисел 2 и 8 будет - 4", function() {
        assert.strictEqual(begin.TgM(2, 8), 4);
    })
    it ("Среднее геометрическое отрицательного числа будет - NaN", function() {
        assert.strictEqual(begin.TgM(-2, 4), NaN);
    })

    //  begin-10    //
    it ("Сумма чисел 2 и 5 будет - 7", function() {
        assert.strictEqual(begin.NumSum(2, 5), 7);
    })
    it ("Разница между числами 2 и 5 будет - '-3'", function() {
        assert.strictEqual(begin.NumDiff(2, 5), -3);
    })
    it ("Произведение чисел 2 и 5 будет - 10", function() {
        assert.strictEqual(begin.NumMul(2, 5), 10);
    })
    it ("Частное квадратов чисел 2 и 5 будет - 0.16", function() {
        assert.strictEqual(begin.NumDiffSqr(2, 5), 0.16);
    })

})