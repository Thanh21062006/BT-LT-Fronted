let array = new Array();

for(let i = 0; i < 10; i++){
    while(true){
        let value = prompt(`Mời bạn nhập một số cho arr[${i}]:`);
        if(!isNaN(value)){
            array.push(Number(value));
            break;
        } else{
            alert("Dữ liệu nhập vào không phải số mời bạn nhập lại:");
        }
    }
}

function check(arr) {
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!";
    }
    if(arr.length == 0){
        return "Mảng trống!"
    }

    let result = arr.map(numb => Math.pow(numb, 2)).filter(numb => numb % 2 == 0);
    return result;
}

alert(check(array));