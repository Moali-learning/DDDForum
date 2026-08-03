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
        return {result: true, errors: null}
    }
}