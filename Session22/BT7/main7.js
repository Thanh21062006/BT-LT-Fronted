let numberArray = new Array(3, 5, 8, 1, 4, 8, 0, 9, 12, 15);

for(let i = 0; i < numberArray.length - 1; i++){
    for(let j = 0;j < numberArray.length - i - 1;j++){
        if(numberArray[j] > numberArray[j+1]){
            let temp = numberArray[j];
            numberArray[j] = numberArray[j+1];
            numberArray[j+1] = temp;
        }
    }
}

console.log(numberArray);