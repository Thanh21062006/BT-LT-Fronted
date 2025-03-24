let numb = Number(prompt("Mời bạn nhập số lượng các số fibonacci đầu tiên:"));

let a = 1;
let b = 1;
if(numb > 1){
    document.writeln(a, );
    document.writeln(b, );
    for(let i = 2;i < numb; i++){
        let temp = a + b;
        document.writeln(temp, );
        a = b;
        b = temp;
    }
} else{
    document.writeln("Số nhập vào không hợp lệ!")
}