let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));

if(!isNaN(a) && !isNaN(b)){
    if(a % 1 !== 0 || b % 1 !== 0){
        alert("Dữ liệu không hợp lệ!");
    } else{
        alert("Tổng là: " + sum(a, b));
    }
} else{
    alert("Dữ liệu không hợp lệ!");
}

function sum(a, b) {
    return a + b;
}