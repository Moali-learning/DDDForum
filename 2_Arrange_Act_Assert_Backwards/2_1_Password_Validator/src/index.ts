interface Error{
    type: string,
    message: string
}

interface Result{
    result: boolean,
    errors: Error[] | null
}

export default class PasswordValidator{
    private static capitalLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    private static numbers = "1234567890".split("")
    static validate(str: string): Result{
        const result: Result = {result: true, errors: null}
        if (str.length < 5 || str.length > 15){
            if (result.errors == null) result.errors = [];
            result.errors?.push({type: "Invalid Range", message: "Password should atleast be 5 - 15 charachters"})
        }
        const hasNumber = str.split("").some(char => this.numbers.includes(char));
        if (!hasNumber){
            if (result.errors == null) result.errors = [];
            result.errors?.push({type: "Missing Digit", message: "Password should have at least one digit"})
        }

        if (result.errors != null){ result.result = false};

        return result
    }
}