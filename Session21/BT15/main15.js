let money = Number(prompt("Mời bạn nhập vào số tiền:"))
let to500 = 0;
let to200 = 0;
let to100 = 0;
let to50 = 0;
let to20 = 0;
let to10 = 0;
let to5 = 0;
let to2 = 0;
let to1 = 0;

while(money > 0){
    if(money >= 1000){
        if(money >= 500000){
            to500 = Math.floor(money / 500000);
            money = money % 500000;
            document.writeln(`500.000-${to500} tờ` + "<br>");
        } else if(money >= 200000){
            to200 = Math.floor(money / 200000);
            money = money % 200000;
            document.writeln(`200.000-${to200} tờ` + "<br>");
        } else if(money >= 100000){
            to100 = Math.floor(money / 100000);
            money = money % 100000;
            document.writeln(`100.000-${to100} tờ` + "<br>");
        } else if(money >= 50000){
            to50 = Math.floor(money / 50000);
            money = money % 50000;
            document.writeln(`50.000-${to50} tờ` + "<br>");
        } else if(money >= 20000){
            to20 = Math.floor(money / 20000);
            money = money % 20000;
            document.writeln(`20.000-${to20} tờ` + "<br>");
        } else if(money >= 10000){
            to10 = Math.floor(money / 10000);
            money = money % 10000;
            document.writeln(`10.000-${to10} tờ` + "<br>");
        } else if(money >= 5000){
            to5 = Math.floor(money / 5000);
            money = money % 5000;
            document.writeln(`5.000-${to5} tờ` + "<br>");
        } else if(money >= 2000){
            to2 = Math.floor(money / 2000);
            money = money % 2000;
            document.writeln(`2.000-${to2} tờ` + "<br>");
        } else if(money >= 1000){
            to1 = Math.floor(money / 1000);
            money = money % 1000;
            document.writeln(`1.000-${to1} tờ` + "<br>");
        }
    } else{
        alert("Số tiền nhập vào không hợp lệ!");
        break;
    }
}