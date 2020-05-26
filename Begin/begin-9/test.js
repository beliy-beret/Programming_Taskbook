const assert = require("assert").strict;
const TGM = require("./geometricMean");

describe("Среднее геометрическое", function() {

    it ("Среднее геометрическое чисел 2 и 8 будет - 4", function() {
        assert.strictEqual(TGM.TgM(2, 8), 4);
    })
    it ("Среднее геометрическое отрицательного числа будет - NaN", function() {
        assert.strictEqual(TGM.TgM(-2, 4), NaN);
    })
    
})