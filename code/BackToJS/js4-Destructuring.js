// Destructuring an object is Awesome!!!!!
const person = {
    name: "Bob",
    age: 30,
    profession: "Builder"
}

const { name, age } = person;

const description = `${name} is ${age} years old`;
console.log(description);