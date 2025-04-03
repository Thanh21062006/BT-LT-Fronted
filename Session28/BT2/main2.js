const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

console.log('=============================');
car.color = "red";
car.year = 2022;

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}