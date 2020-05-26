const assert = require("assert").strict;
const area = require("./area");

describe("Площадь квадрата", function() {
    it("Площадь квадрата со стороной '3'", function() {
        assert.strictEqual(area.area(3), 9);
    });
});