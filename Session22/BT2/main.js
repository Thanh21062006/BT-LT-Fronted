let numberArray = [2, 5, 3, 8, 9, 0];
let numberCheck = Number(prompt("Mời bạn nhập vào một số bất kì để nhận phần thưởng:"));
let check = false;

for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] == numberCheck){
        check = true;
        break;
    }
}

if(check){
    console.log("Bingo");
} else{
    console.log("Chúc bạn may mắn lần sau...!");
}