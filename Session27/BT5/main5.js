function array(arr, num) {
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    }

    let resultArray = new Array();
    let tempArr = new Array();

    for(let i = 0; i < arr.length;i++){
        tempArr.push(arr[i]);
    
        if(tempArr.length == num || i == arr.length - 1){
            resultArray.push(tempArr);
            tempArr = [];
        }
    }
    return resultArray
}

console.log(array([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(array([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(array("abc", 4));