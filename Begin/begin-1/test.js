const assert = require("assert");
const perimetrOftheSquare = require("./P.js");

describe("Периметр квадрата", function() {
    it("Периметр квадрата со стороной '2'", function(){
        assert.equal(perimetrOftheSquare.P(2), 8);
    });
}); 