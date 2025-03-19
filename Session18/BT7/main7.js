let numb1 = parseFloat(prompt("Mời bạn nhập vào số a:"));
let numb2 = parseFloat(prompt("Mời bạn nhập vào số b:"));

let operation = prompt("Mời bạn nhập vào phép tính +,-,*,/");

switch(operation) {
    case 1:
        alert(`Kết quả của phép tính trên: a + b = ${numb1 + numb2}`); 
        break;
    case "-":
        alert(`Kết quả của phép tính trên: a - b = ${numb1 - numb2}`);
        break;
    case "*":
        alert(`Kết quả của phép tính trên: a * b = ${numb1 * numb2}`);
        break;
    case "/":
        alert(`Kết quả của phép tính trên: a / b = ${numb1 / numb2}`);
        break;
    default:
        alert("Phép tính không tồn tại");
        break;
}