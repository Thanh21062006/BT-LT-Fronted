let passWord = "thanhKS24B";

while(true){
    let pass = prompt("Mời bạn nhập vào mật khẩu:");
    if(passWord === pass){
        alert("Đăng nhập thành công");
        break;
    } else{
        alert("Sai mật khẩu!!!");
    }
}