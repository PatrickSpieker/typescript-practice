interface Person {
    firstName: string,
    lastName: string,
}

function message(person: Person) {
    return "Hello " + person.firstName + "you memer";
}

let user = {firstName: "patrick", lastName: "noU"};
console.log(message(user));