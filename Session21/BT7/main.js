let money = parseFloat(prompt("Mời bạn nhập vào số tiền:"));
let month = Number(prompt('Mời bạn nhập vào tháng gửi:'));

let interest = 0;

for(let i = 1;i <= month;i++){
    interest = (money * (1/100));
    money = money + interest;
}

alert(`Tổng số tiền gốc và lãi nhận được sau ${month} tháng là: ${money}`);

