let numberArray = new Array(4, 7, 2, 5, 8, 4, 2, 5, 8, 5);
let size = numberArray.length;

// for(let i = 0; i < size; i++){
//     for(let j = i+1; j < size; j++){
//         if(numberArray[i] == numberArray[j]){
//             numberArray.splice(j, 1);
//             size--;
//         }
//     }
// }

// for(let i = 0; i < size - 1; i++){
//     for(let j = 0;j < size - i -1;j++){
//         if(numberArray[j] > numberArray[j+1]){
//             let temp = numberArray[j];
//             numberArray[j] = numberArray[j+1];
//             numberArray[j+1] = temp;
//         }
//     }
// }

// console.log(numberArray);

numberArray.forEach((item, index, array) => {
    console.log(array);
    // console.log(index);
});
