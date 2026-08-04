interface Error{
    type: string,
    message: string
}

interface Result{
    result: boolean,
    errors: Error[] | null
}

export default class PasswordValidator{
    static validate(str: string): Result{
        return {result: false, errors:[
            {type: "Invalid Range", message: "Should be at least 5 - 15 characters" },
            {type: "Invalid Case", message: "Password should contain at least 1 upper case character"},
            {type: "Digit Missing", message: "Password should contain at least 1 digit"},
        ]}
    }
}