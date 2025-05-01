let year = Number(prompt("Mời bạn nhập vào một năm bất kì để kiểm tra năm nhuận:"));

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    document.writeln(`${year} là năm nhuận`);
} else{
    document.writeln(`${year} không phải năm nhuận`)
}