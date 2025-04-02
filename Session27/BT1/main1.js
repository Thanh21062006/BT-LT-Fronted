let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));

while(true){
    let choice = Number(prompt(`==========MENU==========
    1. Cộng hai số.
    2. Trừ hai số.
    3. Nhân hai số.
    4. Chia hai số.
    5. Thoát.
    --------------------
    Mời bạn chọn chức năng cần thực thi:`));

    switch(choice){
        case 1:
            alert(operation(a, b, "+"));
            break;
        case 2:
            alert(operation(a, b, "-"));
            break;
        case 3:
            alert(operation(a, b, "*"));
            break;
        case 4:
            alert(operation(a, b, "/"));
            break;
        case 5:
            alert("Hẹn gặp lại...");
            break;
        default:
            alert("Lựa chọn không tồn tại mời bạn chọn lại!");
    }

    if(choice == 5){
        break;
    }
}

function operation(x, y, oper){
    if(oper == "+"){
        return x + y
    } else if(oper == "-"){
        return x - y
    } else if(oper == "*"){
        return x * y
    } else if(oper == "/"){
        return x / y
    } else{
        return "Toán tử không hợp lệ!"
    }
}
