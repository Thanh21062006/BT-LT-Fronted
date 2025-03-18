let r = parseFloat(prompt("Mời bạn nhập vào bán kính hình trụ:"))
let h = parseFloat(prompt("Mời bạn nhập vào chiều cao hình trụ:"))
const PI = 3.14;

document.writeln(`Diện tích xung quanh là: ${2*PI*r*h}, <br>`);
document.writeln(`Diện tích toàn phần là: ${2*PI*r*h + 2*PI*(r*r)}, <br>`);
document.writeln(`Thể tích hình trụ là: ${PI*(r*r)*h}, <br>`);
document.writeln(`Chu vi đáy là: ${2*PI*r}, <br>`);
