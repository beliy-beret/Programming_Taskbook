const cube = require("./cube");
const assert = require("assert");

describe("Куб", function() {
    it ("Объем куба с гранью '3' равен '27'", function() {
        assert.equal(cube.V(3), 27);
    });
    it ("Площадь куба с гранью '3' равна '54'", function() {
        assert.equal(cube.S(3), 54);
    });
});