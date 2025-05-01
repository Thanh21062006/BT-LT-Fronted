let numb = Number(prompt("Mời bạn nhập vào một số bất kì để kiểm tra số nguyên tố:"));

if(!isNaN(numb)){
    if(numb > 1){
        let check = true;
        for(let i = 2;i*i <= numb;i++){
            if(numb % i === 0){
                check = false;
                break;
            }
        }
        if(check){
            alert(`${numb} là số nguyên tố`);
        } else{
            alert(`${numb} không phải số nguyên tố!`);
        }
    } else{
        alert(`${numb} không phải số nguyên tố!`);
    }
} else{
    alert("Dữ liệu nhập vào không hợp lệ!");
}