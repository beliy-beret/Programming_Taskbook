const assert = require("assert");
const TAM = require("./arithmeticMean");

describe("Среднее арифметическое", function() {
    it ("Среднее арифметическое чисел 5 и 7 будет - 6.5", function() {
        assert.strictEqual(TAM.TaM(5, 8), 6.5);
    })
    it ("Среднее арифметическое чисел 5 и 3 будет - 4", function() {
        assert.strictEqual(TAM.TaM(5, 3), 4);
    })
    it ("Среднее арифметическое с отрицательным числом", function() {
        assert.strictEqual(TAM.TaM(-3, 5), 1);
    })
})