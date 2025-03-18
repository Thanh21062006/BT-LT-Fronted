let r = parseFloat(prompt("Mời bạn nhập vào bán kính hình cầu"));
const PI = 3.14;

document.writeln(`Thể tích hình cầu là: ${((4/3)*PI*Math.pow(r, 3))} <br>`);
document.writeln(`Diện tích bề mặt là: ${(4*PI*Math.pow(r, 2))} <br>`);
document.writeln(`Chu vi lớn nhất là: ${(2*PI*r)} <br>`);
