let numb = Number(prompt("Mời bạn nhập số lượng các số fibonacci đầu tiên:"));

let a = 1;
let b = 1;
if(!isNaN(numb)){
    if(numb > 0){
        for(let i = 0;i < numb; i++){
            document.writeln(a, );
            let temp = a + b;
            a = b;
            b = temp;
        }
    }
} else{
    document.writeln("Số nhập vào không hợp lệ!")
}