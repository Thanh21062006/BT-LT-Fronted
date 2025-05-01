let str = prompt("Mời bạn nhập vào một chuỗi bất kì:");

alert(UpStr(str));

function UpStr(str) {
    if(str.length == 0){
        return("Mảng trống!");
    }

    str = str.toLocaleLowerCase();
    str = str.split('');
    str[0] = str[0].toLocaleUpperCase();

    for (let i = 0; i < str.length;i++) {
        if(str[i] == " " && i < str.length - 1){
            str[i+1] = str[i+1].toLocaleUpperCase();
        }     
    }
    return str.join('');
}
