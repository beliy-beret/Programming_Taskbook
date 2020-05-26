const assert = require("assert");
const Num = require("./num.js");

describe("Числа", function() {
    it ("Сумма чисел 2 и 5 будет - 7", function() {
        assert.strictEqual(Num.Sum(2, 5), 7);
    })
    it ("Разница между числами 2 и 5 будет - '-3'", function() {
        assert.strictEqual(Num.Diff(2, 5), -3);
    })
    it ("Произведение чисел 2 и 5 будет - 10", function() {
        assert.strictEqual(Num.Mul(2, 5), 10);
    })
    it ("Частное квадратов чисел 2 и 5 будет - 0.16", function() {
        assert.strictEqual(Num.DiffSqr(2, 5), 0.16);
    })
})