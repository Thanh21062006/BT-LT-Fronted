let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập độ dài cho mảng:"));

if(size > 0){
    let total = 0;
    for(let i = 0; i < size; i++){
        let value = prompt(`Mời bạn nhập array[${i}]:`)
        numbArray[i] = value;
        if(!isNaN(value)){
            total += Number(numbArray[i]);
        }
    }

    if(total == 0){
        alert("Không có phần tử nào là số!");
    } else{
        alert(total);
    }

} else if(size == 0){
    alert("Mảng không có phần tử!");
} else{
    alert("Số lượng phần tử không được âm!");
}