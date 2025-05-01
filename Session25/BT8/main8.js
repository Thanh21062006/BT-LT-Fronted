let passWord = prompt("Nhập mật khẩu:");
alert(checkPass(passWord));

function checkPass(str) {
    if(str.length < 8) return "Không đủ 8 kí tự";
    str = str.split('');

    let check1 = false;
    let check2 = false;
    let check3 = false;

    for(let i = 0;i < str.length;i++){
        if(str[i] >= "A" && str[i] <= "Z") check1 = true;
        if(str[i] >= "a" && str[i] <= "z") check2 = true;
        if(str[i] >= "0" && str[i] <= "9") check3 = true;
    }

    return (check1 && check2 && check3 ? "true" : "false");
}