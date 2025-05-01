console.log(`a.`);
for(let i = 10; i >= 1; i--){
   console.log("*".repeat(i));
}

console.log(`b.`);
for(let i = 1; i <= 10; i++){
   console.log("*".repeat(i));
}

console.log(`c. `);
let index1 = 10;
for(let i = 1; i <= 10; i++){
    console.log(" ".repeat(index1 - i) + "*".repeat(i));
}

console.log(`d. `);
let index2 = 10;
for(let i = 10; i >= 1; i--){
    console.log(" ".repeat(index2 - i) + "*".repeat(i));
}