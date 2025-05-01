let numb1 = prompt("Mời bạn nhập vào số a:");
let numb2 = prompt("Mời bạn nhập vào số b:");

if(!isNaN(numb1) && !isNaN(numb2)){
    alert(`Ta được ${numb1}^${numb2} = ${Math.pow(numb1, numb2)}`);
} else{
    alert("dữ liệu nhập vào không hợp lệ!");
}