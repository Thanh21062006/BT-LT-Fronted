let array = [false, NaN, undefined, null, 0, "hello", 4];
let array2 = new Array(); 
for (const value of array) {
    if(value) {
        array2.push(value);
    }
}
console.log(array2);