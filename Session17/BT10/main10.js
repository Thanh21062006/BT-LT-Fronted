let numb = Number(prompt("Mời bạn nhập vào số bất kì:"));

let check1 = (numb >= 0) ? "yest" : "no";

let check2 = (check1 == "yest") ? Math.sqrt(numb) : `${numb} không phải số chính phương`;

let check3 = (check2 % 1 == 0) ? `${numb} là số chính phương` : `${numb} không phải số chính phương`;

document.writeln(check3);