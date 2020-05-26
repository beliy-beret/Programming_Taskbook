const assert = require("assert");
const L = require("./circumference");

describe("Окружность", function() {
    it("Длина окружности с диаметром '3' равна '9.42'", function() {
        assert.equal(L.circumference(3), 9.42);
    });
});