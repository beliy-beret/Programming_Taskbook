const assert = require("assert").strict;
const rect = require("./rect");

describe("Прямоугольник", function() {
    it("Периметр прямоугольника", function() {
        assert.strictEqual(rect.perimetr(1, 2), 6);
    })
    it("Площадь прямоугольника", function() {
        assert.notStrictEqual(rect.area(1, 2), 3);
    })
})