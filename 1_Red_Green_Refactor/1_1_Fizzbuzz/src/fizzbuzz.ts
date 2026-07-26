
export class FizzBuzz {
    calculate(int: number): string {
       if (int == 3){
        return "Fizz";
       } else if (int == 5){
        return "Buzz";
       }
       return "FizzBuzz";
    }
}