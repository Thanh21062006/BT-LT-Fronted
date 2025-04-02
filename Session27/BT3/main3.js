const PI = 3.14;

while(true){
    let choice = prompt(`=========MENU========
    1. Tính diện tích hình tròn.
    2. Tính chu vi hình tròn.
    3. Tính diện tích hình chữ nhật.
    4. Tính chu vi hình chữ nhật.
    5. Thoát.
--------------------------------------
Mời bạn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            let r1 = parseFloat(prompt("Mời bạn nhập vào chu vi hình tròn:"));
            alert(hinhTron(r1, choice, PI));
            break;
        case '2':
            let r2 = parseFloat(prompt("Mời bạn nhập vào chu vi hình tròn:"));
            alert(hinhTron(r2, choice, PI));
            break;
        case '3':
            let a = parseFloat(prompt("Mời bạn nhập vào chiều cao của hình chữ nhật:"));
            let b = parseFloat(prompt("Mời bạn nhập vào chiều rộng của hình chữ nhật:"));
            alert(chuNhat(a, b, choice));
            break;
        case '4':
            let a1 = parseFloat(prompt("Mời bạn nhập vào chiều cao của hình chữ nhật:"));
            let b1 = parseFloat(prompt("Mời bạn nhập vào chiều rộng của hình chữ nhật:"));
            alert(chuNhat(a1, b1, choice));
            break;
        case '5':
            alert('Hẹn gặp lại...');
            break;
        default:
            alert("Chức năng không tồn tại mời bạn chọn lại!");
            break;
    }
    if(choice == '5'){
        break;
    }
}


function hinhTron(r, choi, pi) {
    if(choi == '1'){
        return pi*Math.pow(r, 2);
    } else{
        return 2*pi*r
    }
}

function chuNhat(x, y, choi) {
    if(choi == '3'){
        return x*y
    }
    if(choi == '4'){
        return (x+y)*2
    }
}