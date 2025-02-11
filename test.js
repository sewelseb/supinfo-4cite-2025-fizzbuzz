const assert = require('assert').strict;
const mocha = require('mocha');
const Game = require('./Game');

describe("testing the count function", () => {
    let game = new Game();

    it("should return 1 when given 1",() => {
        let result = game.count(1);

        assert.equal(result, 1);
    });

    it("should return 2 when given 2", () => {
        let result = game.count(2);

        assert.equal(result, 2);
    });

    it("should return fizz when given 3", () => {
        let result = game.count(3);

        assert.equal(result, "fizz");
    });

    it("should return 4 when given 4", () => {
        let result = game.count(4);

        assert.equal(result, 4);
    });

    it("should return buzz when given 5", () => {
        let result = game.count(5);

        assert.equal(result, "buzz");
    });

    it("should return fizz when given 6", () => {
        let result = game.count(6);

        assert.equal(result, "fizz");
    });

    it("should return buzz when given 10", () => {
        let result = game.count(10);

        assert.equal(result, "buzz");
    });

    it("should return fizzbuzz when given 15", () => {
        let result = game.count(15);

        assert.equal(result, "fizzbuzz");
    });
});