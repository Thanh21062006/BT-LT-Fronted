let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập vào số lượng phần tử cho mảng:"));

if(size > 0){
    for(let i = 0; i < size; i++){
        let value = prompt(`array[${i}]:`);
        while(true){
            if(!isNaN(value)){
                numbArray[i] = Number(value);
                break;
            } else{
                alert("Dữ liệu không phải là số mời bạn nhập lại:");
            }
        }
    }

    if(size > 1){
        let size1 = numbArray.length;
        for(let i = 0; i < size1 - 1; i++){
            for(let j = 0;j < size1 - i - 1;j++){
                if(numbArray[j] < numbArray[j+1]){
                    let temp = numbArray[j];
                    numbArray[j] = numbArray[j+1];
                    numbArray[j+1] = temp;
                }
            }
        }
    } else{
        alert("Mảng không có phần tử nhỏ thứ 2.");
    }

    console.log(numbArray);
    alert(`Phần tử lớn thứ 2 trong mảng là ${numbArray[1]}`);

} else if(size == 0){
    alert('Mảng không có phần tử.');
} else{
    alert('Số lượng phần tử không được nhỏ hơn 0 !!!');
}