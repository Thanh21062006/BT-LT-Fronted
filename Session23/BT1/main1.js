let numbArray = new Array();

for(let i = 0; i < 10; i++){
    while(true){
        let value = prompt(`Mời bạn nhập giá trị cho array[${i}]:`);
        if(!isNaN(value)){
            numbArray[i] = Number(value);
            break;
        } else{
            alert("Số bạn nhập không hợp lệ mời bạn nhập lại!!!")
        }
    }
}

let count = 0;
let check = [];
for(let i = 0; i < numbArray.length; i++){
    if(numbArray[i] >= 10){
        check[count] = numbArray[i];
        count++;
    }
}

if(count > 0){
    alert(`Có ${count} phần tử >= 10 là : ${check}`);
} else{
    alert('Không có số nào >= 10 !!!');
}
