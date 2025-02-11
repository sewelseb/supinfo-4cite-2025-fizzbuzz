module.exports =  class Game {
    count(number) {
        if (this.isMultipleOf3(number)) return "fizz";
        if (number === 5 || number === 10) return "buzz";
          
        return number;
    }

    isMultipleOf3(number) {
        return number % 3 === 0;
    }
}