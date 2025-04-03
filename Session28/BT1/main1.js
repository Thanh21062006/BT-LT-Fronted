const person = {
    name: "John Doe",
    age: 25,
    job: "Developer",
}

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}