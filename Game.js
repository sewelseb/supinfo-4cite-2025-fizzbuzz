module.exports =  class Game {
    count(number) {
        if (this.isMultipleOf3and5(number)) return "fizzbuzz";
        if (this.isMultipleOf3(number)) return "fizz";
        if (this.isMultipleOf5(number)) return "buzz";
          
        return number;
    }

    isMultipleOf3and5(number) {
        return this.isMultipleOf3(number) && this.isMultipleOf5(number);
    }

    isMultipleOf5(number) {
        return number % 5 === 0;
    }

    isMultipleOf3(number) {
        return number % 3 === 0;
    }
}