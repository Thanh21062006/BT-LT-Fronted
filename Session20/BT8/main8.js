let numb = Number(prompt("Mời bạn nhập vào số lượng số nguyên tố:"));

if(numb > 0){
    let check = 0;
    for(let i = 2; true ; i++){
        let isPrime = true;
        for(let j = 2;j*j <= i;j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            document.writeln(i, );
            check = check+1
        }

        if(check === numb){
            break;
        }
    }
} else{
    document.writeln("Nhập không hợp lệ!");
}