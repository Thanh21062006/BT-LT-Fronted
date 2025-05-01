function check(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    }
    if(arr.length <= 1){
        return "Mảng không đủ điều kiện để kiểm tra!"
    }

    let temp = arr[0] - arr[1];
    for(let i = 1;i < arr.length - 1;i++){
        if(arr[i] - arr[i+1] != temp){
            return false
        }
    }
return true
}

alert(check([2, 4, 6, 8]));