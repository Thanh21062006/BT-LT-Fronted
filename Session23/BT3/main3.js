let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử của mảng:"));

if(size > 0){
    for(let i = 0; i < size; i++){
        let value = prompt(`Mời bạn nhập số bất kì cho array[${i}]:`)
        while(true){
            if(!isNaN(value)){
                numbArray[i] = Number(value);
                break;
            } else{
                alert('kiểu dữ liệu không phải là số mời bạn nhập lại')
            }
        }
    }

    let count = 0;
    for (const value of numbArray) {
        if(value < 0 && value % 1 == 0){
            count++;
        }
    }
    alert(`Có ${count} số nguyên âm trong mảng.`)
} else if(size = 0){
    alert("Mảng không có phần tử!!!");
} else{
    alert('Số lượng phần tử không hợp lệ!');
}
