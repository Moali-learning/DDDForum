
export class FizzBuzz {
    calculate(int: number): string {

       if (int % 3 == 0 && int % 5 == 0){
        return "FizzBuzz";
       } else if (int % 3 == 0){
        return "Fizz";
       }else if (int % 5 ==0){
        return "Buzz";
       }
       return String(int);

    }

}