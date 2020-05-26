const assert = require("assert");
const circumference = require("./circle");

describe("Окружность", function() {
    it ("Длина окружности с радиусом '5' равна '31.4'", function() {
        let C = circumference.L(5);
        assert.equal(C.toFixed(1), 31.4);
    });
    it ("Площадь окружности с радиусом '5' равна '78.5'", function() {
        assert.equal(circumference.S(5), 78.5);
    });
});