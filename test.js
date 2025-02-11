const assert = require('assert').strict;
const mocha = require('mocha');
const Game = require('./Game');

describe("testing the count function", () => {
    it("should return 1 when given 1",() => {
        let game = new Game();

        let result = game.count(1);

        assert.equal(result, 1);
    });

    it("should return 2 when given 2", () => {
        let game =new Game();

        let result = game.count(2);

        assert.equal(result, 2);
    });
});