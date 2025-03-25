let dai = Number(prompt("Mời bạn nhập vào chiều ngang của hình chữ nhật:"));
let rong = Number(prompt("Mời bạn nhập vào chiều dọc của hình chữ nhật:"));

// for(let i = 0; i < rong; i++){
//     if(i == 0 || i == rong - 1){
//         document.writeln("*".repeat(dai) + "<br>");
//     } else{
//         document.writeln("*" + "&nbsp".repeat((dai - 2)*2) + "*" + "<br>");
//     }
// }

for(let i = 0;i < rong; i++){
    if(i == 0 || i == rong - 1){
        for(let j = 0; j < dai; j++){
            document.writeln("*");
        }
        document.writeln("<br>");
    } else{
        document.writeln("*");
        for(let j = 0; j < dai - 2; j++){
            document.writeln("&nbsp&nbsp");
        }
        document.writeln("*" + "<br>");
    }
}