let date1 = prompt("Mời bạn nhập (năm - tháng - ngày) thứ nhất:");
let date2 = prompt("Mời bạn nhập (năm - tháng - ngày) thứ hai:");

let d1 = new Date(date1);
let d2 = new Date(date2);

let check = Math.abs(d2 - d1);

let result = ((((check /1000)/60)/60)/24);

document.writeln(`Số ngày chênh lệch là : ${result} ngày.`)
