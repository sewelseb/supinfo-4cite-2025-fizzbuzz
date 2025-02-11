const assert = require('assert').strict;
const mocha = require('mocha');
const Game = require('./Game');

describe("testing the count function", () => {
    it("should return 1 when given 1",() => {
        let game = new Game();

        let result = game.count(1);

        assert.equal(result, 1);
    });
});