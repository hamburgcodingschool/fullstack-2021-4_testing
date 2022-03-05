const person = {
    name: "Bob",
    age: 30,
    profession: "Builder"
}

// const description = person.name + " is a " + person.age + " year old " + person.profession;
const description = `${person.name} is a ${person.age} year old ${person.profession}`;


console.log(description);