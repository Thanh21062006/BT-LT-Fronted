document.querySelector(".click").addEventListener('click', ()=>{
    let array = JSON.parse(localStorage.getItem('information'));
    console.log(array);
    let ojb = new Object();
    let email = document.getElementById("formGroupExampleInput").value;
    let passWord = document.getElementById("formGroupExampleInput2").value;
    let confirmPassWord = document.getElementById("formGroupExampleInput3").value;
    
    if(email.trim() == '' || passWord.trim() == '' || confirmPassWord.trim() == ''){
        alert("Không được để trống!");
        return
    }

    let check = array.some((value) => value.email == email || value.passWord == passWord)
    if(check){
        alert("email hoặc password đã tồn tại!")
        return
    } else{
        ojb.email = email;
        ojb.passWord = passWord;
    }

    if(confirmPassWord == passWord){
        array.push(ojb);
        localStorage.information = JSON.stringify(array);
        alert("Đăng kí thành công.");
        reset();
    } else{
        alert("Mật khẩu chưa trùng khớp");
    }

})

function reset(){
    document.getElementById("formGroupExampleInput").value = '';
    document.getElementById("formGroupExampleInput2").value = '';
    document.getElementById("formGroupExampleInput3").value = '';
}

// localStorage.clear();