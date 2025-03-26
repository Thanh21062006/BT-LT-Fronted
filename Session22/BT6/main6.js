let numberArray = [4, 6, 7, 4, 8, 9, 2, 4, 7, 0];
let value = Number(prompt("Mời bạn nhập vào một số bất kì để kiểm tra:"));
let count = 0;

for(let index in numberArray){
    if(numberArray[index] === value){
        count++;
    }
}

if(count > 0){
    alert(`Số ${value} xuất hiện ${count} lần trong mảng`);
} else{
    alert(`Số ${value} không tồn tại trong mảng!`);
}