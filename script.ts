interface Person {
    firstName: string,
    lastName: string,
}

function message(person: Person) {
    return "Hello " + person.firstName + "you memer";
}
let foo: Array<number> = [0,1,2]
let bar: Array<number> = [5,1,2]

let user = {firstName: "patrick", lastName: "noU"};
console.log(message(user));