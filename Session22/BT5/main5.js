let numberArray = [];
let totalChan = 0;
let totalLe = 0;

for(let i = 0; i < 5;i++){
    numberArray[i] = Math.round(Math.random()*9);
    if(numberArray[i] % 2 === 0){
        totalChan += numberArray[i]; 
    } else{
        totalLe += numberArray[i];
    }
}
console.log(numberArray);

console.log(`Tổng các số chẵn là: ${totalChan}`);
console.log(`Tổng các số lẻ là: ${totalLe}`);