- Find
The password validator

knowing:
- between 5 adn 15
- at least one digit
- at least one upper case letter



doing:
- validate password
- returns an object with result and errors keys

examples:
"Mom" -> invalid
"mom"-> invalid
"123" -> invalid
"Mom123" -> valid


- Arch
PasswordValidator.validate("test") returns Result object
Result = {
result: boolean,
errors: Error[]
}
inteface Error{
    type: string,
    message: string
}

- Automate
set up your test infra.