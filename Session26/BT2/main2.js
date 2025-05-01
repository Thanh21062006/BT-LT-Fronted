let arrStr = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử chỏ mảng:"));

for(let i = 0;i < size; i++){
    arrStr.push(prompt(`Mời bạn nhập vào một chuỗi bất kì cho arr[${i}]:`));
}

if(!Array.isArray(arrStr)){
    alert("Dữ liệu nhập vào không hợp lệ!");
} else if(arrStr.length == 0){
    alert("Mảng không có phần tử nào!");
} else{
    let temp = arrStr.filter(function(value){
        return value.length > 5
    });
    alert(temp);
}
