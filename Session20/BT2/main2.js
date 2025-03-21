let numb = Number(prompt("Mời bạn nhập số bất kì để kiểm tra chia hết cho 5:"))

if(numb > 0){
    for(let i = 1;i <= numb;i++){
        if(i % 5 === 0){
            console.log(i);
        }
    }
} else{
    console.log("Dữ liệu nhập vào không hợp lệ!");
}