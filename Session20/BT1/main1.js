let numb = Number(prompt("Mời bạn nhập vào một số bất kì để tính tổng:"));

if(numb > 0){
    let total = 0;
    for(let i = 1;i <= numb; i++){
        total = total + i;
    }
    alert(total);
} else{
    alert("Dữ liệu nhập vào không hợp lệ!");
}