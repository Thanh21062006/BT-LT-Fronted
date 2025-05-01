let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử cho mảng:"));

for(let i = 0; i < size; i++){
    while(true){
        let value = prompt(`Mời bạn nhập giá trị cho array[${i}]:`);
        if(!isNaN(value)){
            numbArray[i] = Number(value);
            break;
        } else{
            alert("Số bạn nhập không hợp lệ mời bạn nhập lại!!!");
        }
    }
}


let index = 0;
let maxValue = numbArray[0];
for(let i = 1; i < numbArray.length; i++){
    if(maxValue < numbArray[i]){
        maxValue = numbArray[i];
        index = i;
    }
}

if(numbArray.length > 0){
    alert(`Số lớn nhất ${maxValue}
Vị trí: ${index}`);
} else{
    alert('Không có số lớn nhất!!');
}