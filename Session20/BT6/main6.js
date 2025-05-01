let numb = Number(prompt("Mời bạn nhập vào một số  bất kì để kiểm tra số nguyên tố:"));

if(numb > 1){
    let check = true;
    for(let i = 2; i < numb; i++){
        if(numb % i === 0){
            check = false;
        }
    }

    check ? alert("Là số nguyên tố") : alert("Không phải là số nguyên tố")
} else{
    alert("Không phải số nguyên tố")
}