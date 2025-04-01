let arrNumb = [];

for(let i = 0; i < 10; i++){
    while(true){
        let value = prompt(`Mời bạn nhập một số cho arr[${i}]:`);
        if(!isNaN(value)){
            arrNumb.push(Number(value));
            break;
        } else{
            alert("Dữ liệu nhập vào không phải số mời bạn nhập lại:");
        }
    }
}

function check(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    }
    if(arr.length == 0){
        return "Mảng trống!"
    }
    let arr1 = arr.filter(numb => numb % 2 == 0)
    let totalEven = arr1.reduce((acc, curr) => acc + curr, 0);

    let arr2 = arr.filter(numb => numb % 2 != 0)
    let totalOdd = arr2.reduce((acc, curr) => acc + curr, 0);

    return `totalEven = ${totalEven}
totalOdd = ${totalOdd}`
}

alert(check(arrNumb));
// alert(check("abc"));
// alert(check([]));