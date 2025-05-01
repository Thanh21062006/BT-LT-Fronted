let numb = Number(prompt("Mời bạn nhập vào một số bất kì để kiểm tra số nguyên tố:"));

alert(soNguyenTo(numb));

function soNguyenTo(a) {
    if(!isNaN(a)){
        if(a > 1){
            let check = true;
            for(let i = 2;i * i <= a; i++){
                if(a % i == 0){
                    check = false;
                    break;
                }
            }
    
            if(check){
                return "Là số nguyên tố"
            } else{
                return "Không phải là số nguyên tố!"
            }
        } else{
            return "Không phải số nguyên tố!"
        }
    } else{
        return "Dữ liệu nhập vào không hợp lệ!"
    }
}