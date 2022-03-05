const person = {
    name: "Bob",
    age: 30,
    profession: "Builder"
}
const person2 = person;
person2.name = "Sarah";

console.log(person);
console.log(person2);

// This is a problem because we have 2 Pointers (person and person2) to the same Object 