document.querySelector(".click").addEventListener('click', ()=>{
    let array = JSON.parse(localStorage.getItem('information'));
    console.log(array);
    let ojb = new Object();
    let email = document.getElementById("formGroupExampleInput").value;
    let passWord = document.getElementById("formGroupExampleInput2").value;
    
    if(email.trim() == '' || passWord.trim() == ''){
        alert("Không được để trống!");
        return
    }

    let check = array.some((value) => value.email == email && value.passWord == passWord);
    if(check){
        alert("Đăng nhập thành công.");
        window.location.href = "https://shopee.vn/";
    } else{
        alert("Thông tin không hợp lệ!");
    }
    reset();
})

function reset(){
    document.getElementById("formGroupExampleInput").value = '';
    document.getElementById("formGroupExampleInput2").value = '';
}

// console.log(localStorage.getItem("information"));