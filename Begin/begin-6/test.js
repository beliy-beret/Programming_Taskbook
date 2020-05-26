const parallelepiped = require ("./parallelepiped");
const assert = require ("assert");

describe("Параллелепипед", function() {
    
    it ("Объем параллелепипеда", function(){
        assert.strictEqual(parallelepiped.V(2, 2, 3), 12);
    });

    it ("Площадь параллелепипеда", function(){
        assert.strictEqual(parallelepiped.S(2, 2, 3), 32);
    });

});