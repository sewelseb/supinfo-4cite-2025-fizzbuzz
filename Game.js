module.exports =  class Game {
    count(number) {
        if (this.isMultipleOf3(number)) return "fizz";
        if (this.isMultipleOf5(number)) return "buzz";
          
        return number;
    }

    isMultipleOf5(number) {
        return number % 5 === 0;
    }

    isMultipleOf3(number) {
        return number % 3 === 0;
    }
}