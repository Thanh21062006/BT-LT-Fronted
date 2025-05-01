let gui = Number(prompt('Mời bạn nhập số tiền gửi:'));

let month = Number(prompt('Mời bạn nhập số tháng gửi:'));

let phanTram = month * ((4.3 / 100) / 12);

document.writeln(`Số tiền lãi nhận được là: ${(gui * phanTram).toLocaleString("vi-VN").concat(" VND")}`);