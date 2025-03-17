let a = prompt(`Nhập số a:`);
let b = prompt("Nhập số b:");

let result = Math.random()*(Number(b)-Number(a))+Number(a);

document.writeln(`Giá trị lấy được ngẫu nhiên trong khoảng ${a} và ${b} là: ${result}`);
