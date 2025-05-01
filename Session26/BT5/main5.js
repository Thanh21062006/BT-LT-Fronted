let arrNumb = new Array();

for(let i = 0; i < 10; i++){
    while(true){
        let value = prompt(`Mời bạn nhập một số bất kì cho arr[${i}]:`);
        if(!isNaN(value)){
            arrNumb.push(Number(value));
            break;
        } else{
            alert("Dữ liệu nhập vào không phải số mời bạn nhập lại:")
        }
    }
}

function maxIndex(arr) {
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    }

    if(arr.length == 0){
        return "Mảng không có phần tử!";
    }

    let max = Math.max(...arr);
    let position = arr.indexOf(max);

    return `max = ${max}
position:${position}`
}

alert(maxIndex(arrNumb));

